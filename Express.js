const express = require('express');
const path = require('path');
const app = express();

// Define the build directory
const buildPath = path.join(__dirname, 'build');

// Serve static files from the React build folder
app.use(express.static(buildPath));

// Serve sitemap.xml, robots.txt, and other static SEO files
const seoFiles = ['/sitemap.xml', '/robots.txt'];
app.get(seoFiles, (req, res) => {
  const filePath = path.join(buildPath, req.path);
  
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error(`Error serving file: ${filePath}`, err);
      res.status(404).send('File not found');
    }
  });
});

// Ensure /healthcareDetails/ and other React routes are handled
const reactRoutes = [
  '/healthcareDetails/',
  '/financeDetails/',
  '/manufacturingAndAutomotiveDetails/',
  '/educationDetails/',
  '/entertainmentAndMediaDetails/',
];

app.get(reactRoutes, (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'), (err) => {
    if (err) {
      console.error('Error serving index.html:', err);
      res.status(500).send('Internal Server Error');
    }
  });
});

// Handle React routing (serve index.html for all other unmatched routes)
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'), (err) => {
    if (err) {
      console.error('Error serving index.html:', err);
      res.status(500).send('Internal Server Error');
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
