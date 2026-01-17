// Script to download images from Unsplash and save them locally
const https = require('https');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(process.cwd(), 'public', 'assets');

// Create assets directory if it doesn't exist
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

const images = [
  {
    url: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1920',
    filename: 'hero-bg.jpg',
    description: 'Hero background - modern agriculture'
  },
  {
    url: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200',
    filename: 'about-bg.jpg',
    description: 'About section - smart agriculture technology'
  }
];

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(assetsDir, filename);
    const file = fs.createWriteStream(filePath);

    https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // Handle redirect
        return downloadImage(response.headers.location, filename)
          .then(resolve)
          .catch(reject);
      }

      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${filename}: ${response.statusCode}`));
        return;
      }

      response.pipe(file);

      file.on('finish', () => {
        file.close();
        console.log(`✓ Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {});
      reject(err);
    });
  });
}

async function downloadAllImages() {
  console.log('Downloading images...\n');
  
  for (const image of images) {
    try {
      await downloadImage(image.url, image.filename);
    } catch (error) {
      console.error(`✗ Error downloading ${image.filename}:`, error.message);
    }
  }
  
  console.log('\nDone! Images downloaded to public/assets/');
}

downloadAllImages();
