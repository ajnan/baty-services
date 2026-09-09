import { spawn } from 'child_process';
import https from 'https';

const p = spawn('git', ['credential', 'fill'], { stdio: ['pipe', 'pipe', 'inherit'] });
p.stdin.write('protocol=https\nhost=github.com\nusername=ajnan\n\n');

let out = '';
p.stdout.on('data', d => out += d);
p.on('close', () => {
  const passLine = out.split('\n').find(l => l.startsWith('password='));
  const token = passLine ? passLine.slice(9).trim() : null;
  if (!token) {
    console.error('No token found');
    return;
  }
  
  const req = https.request({
    hostname: 'api.github.com',
    path: '/repos/ajnan/baty-services/pages',
    method: 'GET',
    headers: {
      'User-Agent': 'Node.js',
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/vnd.github.v3+json'
    }
  }, res => {
    let data = '';
    res.on('data', c => data += c);
    res.on('end', () => {
      const parsed = JSON.parse(data);
      console.log('GitHub Pages URL:', parsed.html_url);
      console.log('Status:', parsed.status);
    });
  });
  req.end();
});
