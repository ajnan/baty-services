import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Curated high quality photos matching the reference layout
const images = {
  'hero-truck.jpg': 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
  'service-debris.jpg': 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=600&q=80',
  'service-construction.jpg': 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=600&q=80',
  'service-gravel.jpg': 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
  'service-residential.jpg': 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80',
  'about-truck.jpg': 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1000&q=80',
  'project-debris-before.jpg': 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=600&q=80',
  'project-debris-after.jpg': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
  'project-property-before.jpg': 'https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=600&q=80',
  'project-property-after.jpg': 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80',
  'project-gravel-before.jpg': 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80',
  'project-gravel-after.jpg': 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80',
  'texas-flag.jpg': 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1200&q=80'
};

function download(name, url) {
  return new Promise((resolve) => {
    const filePath = path.join(dir, name);
    const file = fs.createWriteStream(filePath);
    
    function fetchUrl(targetUrl) {
      https.get(targetUrl, (response) => {
        if (response.statusCode === 301 || response.statusCode === 302) {
          fetchUrl(response.headers.location);
          return;
        }
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log('Downloaded:', name);
          resolve(true);
        });
      }).on('error', (err) => {
        console.error('Error downloading:', name, err.message);
        resolve(false);
      });
    }
    fetchUrl(url);
  });
}

async function run() {
  console.log('Starting image downloads...');
  for (const [name, url] of Object.entries(images)) {
    await download(name, url);
  }
  console.log('All image downloads completed successfully!');
}

run();
