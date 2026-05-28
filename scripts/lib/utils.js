// scripts/lib/utils.js
// Shared utility functions for content automation

const fs = require('fs');
const path = require('path');

/**
 * Safely read JSON file with error handling
 */
function readJSON(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  } catch (err) {
    throw new Error(`Failed to read JSON: ${filePath}\n${err.message}`);
  }
}

/**
 * Safely write JSON with formatting
 */
function writeJSON(filePath, data, pretty = true) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(
    filePath,
    pretty ? JSON.stringify(data, null, 2) : JSON.stringify(data),
    'utf-8'
  );
}

/**
 * Convert string to URL-safe slug
 */
function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Validate date format: "YYYY — YYYY", "YYYY", "Present", etc.
 */
function isValidDate(dateStr) {
  if (!dateStr || typeof dateStr !== 'string') return false;
  
  const patterns = [
    /^\d{4}\s*—\s*\d{4}$/, // "1875 — 1950"
    /^\d{4}\s*—\s*Present$/, // "1975 — Present"
    /^c\.\s*\d{4}\s*—\s*c\.\s*\d{4}$/, // "c. 1280 — c. 1337"
    /^c\.\s*\d{4}$/, // "c. 1280"
    /^\d{4}$/, // "1950"
    /^Present$/, // "Present"
    /^Ongoing$/, // "Ongoing"
    /^(January|February|March|April|May|June|July|August|September|October|November|December)\s*\d{0,2},?\s*\d{4}$/, // "April 4, 1968"
    /^May 31\s*—\s*June 1,\s*\d{4}$/, // "May 31 — June 1, 1921"
  ];
  
  return patterns.some(p => p.test(dateStr));
}

/**
 * Escape HTML special characters
 */
function escapeHTML(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Generate safe filename from entry
 */
function getFilename(entry) {
  if (!entry.id) throw new Error('Entry missing ID');
  return `${entry.id}.html`;
}

/**
 * Get directory for output pages
 */
function getOutputDir() {
  return path.join(__dirname, '../../test-output');
}

/**
 * Get content source directory
 */
function getContentDir() {
  return path.join(__dirname, '../../content/encyclopedia');
}

/**
 * Get template path
 */
function getTemplatePath() {
  return path.join(__dirname, '../../content/templates/encyclopedia-entry.html');
}

/**
 * Flatten all markdown files from nested structure
 */
function getAllContentFiles(baseDir = getContentDir()) {
  const files = [];
  
  function walk(dir) {
    try {
      fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          walk(fullPath);
        } else if (file.endsWith('.md')) {
          files.push(fullPath);
        }
      });
    } catch (err) {
      // Directory may not exist yet - that's OK for Phase 1
    }
  }
  
  walk(baseDir);
  return files;
}

/**
 * Generate OpenGraph meta tags object
 */
function generateOpenGraphTags(entry) {
  return {
    'og:title': entry.name,
    'og:description': entry.desc || entry.story?.substring(0, 160) || 'Encyclopedia entry',
    'og:type': 'article',
    'og:image': entry.heroImage || '/logo.png',
    'twitter:card': 'summary_large_image',
    'twitter:title': entry.name,
    'twitter:description': entry.desc || '',
  };
}

/**
 * Generate JSON-LD structured data
 */
function generateJSONLD(entry, siteUrl = 'https://blackhistoryinrealtime.com') {
  const dateRange = entry.dates?.split('—').map(d => d.trim()) || [];
  
  return {
    '@context': 'https://schema.org',
    '@type': entry.category === 'People' ? 'Person' : 'Thing',
    name: entry.name,
    description: entry.desc,
    datePublished: new Date().toISOString(),
    ...(dateRange.length > 0 && {
      birthDate: dateRange[0],
      ...(dateRange[1] && dateRange[1] !== 'Present' && { deathDate: dateRange[1] }),
    }),
    image: entry.heroImage || '/logo.png',
    url: `${siteUrl}/encyclopedia/${entry.id}.html`,
  };
}

module.exports = {
  readJSON,
  writeJSON,
  slugify,
  isValidDate,
  escapeHTML,
  getFilename,
  getOutputDir,
  getContentDir,
  getTemplatePath,
  getAllContentFiles,
  generateOpenGraphTags,
  generateJSONLD,
};
