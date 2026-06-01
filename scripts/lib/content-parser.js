// scripts/lib/content-parser.js
// Parse Markdown + Frontmatter → JavaScript object

const fs = require('fs');
const matter = require('gray-matter');
const md = require('markdown-it')();
const { escapeHTML } = require('./utils');

/**
 * Parse a single markdown file into entry object
 */
function parseContentFile(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data: frontmatter, content } = matter(fileContent);
    
    // Parse content sections
    const sections = parseContentSections(content);
    
    return {
      // Frontmatter
      id: frontmatter.id,
      name: frontmatter.name,
      quizDay: frontmatter.quizDay || null,
      vol: frontmatter.vol || '',
      dates: frontmatter.dates,
      category: frontmatter.category,
      barClass: frontmatter.barClass || '',
      tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
      desc: frontmatter.desc || '',
      tagline: frontmatter.tagline || '',
      url: `${frontmatter.id}.html`,
      heroImage: frontmatter.heroImage || '',
      thumbnail: frontmatter.thumbnail || '',
      
      // Content sections (converted to HTML)
      question: sections.question ? md.render(sections.question).trim() : '',
      options: sections.options || [],
      answer: sections.answer !== undefined ? parseInt(sections.answer) : undefined,
      answerText: sections.answerText || '',
      subject: sections.subject || frontmatter.name,
      story: sections.story ? md.render(sections.story).trim() : '',
      whyItMatters: sections.whyItMatters ? md.render(sections.whyItMatters).trim() : '',
      cost: sections.cost ? md.render(sections.cost).trim() : '',
      quote: sections.quote,
      timeline: sections.timeline || [],

      // Metadata
      _sourceFile: filePath,
      _parsedAt: new Date().toISOString(),
    };
  } catch (err) {
    throw new Error(`Failed to parse ${filePath}: ${err.message}`);
  }
}

/**
 * Parse markdown content sections by heading
 */
function parseContentSections(content) {
  const sections = {};
  
  const lines = content.split('\n');
  let currentSection = null;
  let currentContent = [];
  
  lines.forEach(line => {
    const heading = line.match(/^##\s+(.+)$/);
    
    if (heading) {
      // Save previous section
      if (currentSection) {
        sections[currentSection] = currentContent.join('\n').trim();
      }
      currentSection = heading[1].toLowerCase().replace(/\s+/g, '_');
      currentContent = [];
    } else if (currentSection) {
      currentContent.push(line);
    }
  });
  
  // Save last section
  if (currentSection) {
    sections[currentSection] = currentContent.join('\n').trim();
  }
  
  // Parse special sections
  return {
    question: sections.question,
    options: parseOptions(sections.options),
    answer: parseAnswer(sections.answer),
    answerText: sections.answer_text || sections.answertext,
    subject: sections.subject,
    story: sections.story,
    whyItMatters: sections.why_it_matters || sections.whyitmatters,
    cost: sections.cost,
    quote: parseQuote(sections.pull_quote || sections.quote),
    timeline: parseTimeline(sections.timeline),
  };
}

/**
 * Parse quiz options from markdown list
 */
function parseOptions(optionsText) {
  if (!optionsText) return [];
  
  return optionsText
    .split('\n')
    .filter(line => line.trim().startsWith('-') || line.trim().startsWith('*'))
    .map(line => line.replace(/^[\s\-\*]+/, '').trim())
    .filter(Boolean);
}

/**
 * Extract answer index (0-3)
 */
function parseAnswer(answerText) {
  if (!answerText) return undefined;
  
  const match = answerText.match(/\d+/);
  return match ? parseInt(match[0]) : undefined;
}

/**
 * Parse pull quote format: "Quote text" — Source
 */
function parseQuote(quoteText) {
  if (!quoteText) return null;
  
  // Match "Quote text" — Source format
  const match = quoteText.match(/^"(.+?)"\s*(?:—|–|-)\s*(.+)$/m);
  
  if (match) {
    return {
      text: match[1].trim(),
      source: match[2].trim(),
    };
  }
  
  return null;
}

/**
 * Parse timeline section: lines matching "- YYYY: description"
 */
function parseTimeline(text) {
  if (!text) return [];
  const items = [];
  text.split('\n').forEach(line => {
    const match = line.trim().match(/^[-*]\s+(\d{4}):\s*(.+)$/);
    if (match) {
      items.push({ year: match[1], event: match[2].trim() });
    }
  });
  return items;
}

/**
 * Parse multiple content files
 */
function parseAllContent(files) {
  const entries = [];
  const errors = [];
  
  files.forEach(file => {
    try {
      entries.push(parseContentFile(file));
    } catch (err) {
      errors.push({
        file,
        error: err.message,
      });
    }
  });
  
  return { entries, errors };
}

module.exports = {
  parseContentFile,
  parseAllContent,
  parseOptions,
  parseAnswer,
  parseQuote,
  parseTimeline,
};
