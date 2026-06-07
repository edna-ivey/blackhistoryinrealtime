// scripts/lib/validator.js
// Comprehensive content validation engine

const { isValidDate } = require('./utils');
const fs = require('fs');
const path = require('path');

class ContentValidator {
  constructor() {
    this.errors = [];
    this.warnings = [];
    this.config = this.loadConfig();
  }
  
  loadConfig() {
    const configDir = path.join(__dirname, '../../content/config');
    
    // Load categories
    let categories = ['People', 'Events', 'Systems', 'Culture'];
    try {
      const categoriesFile = path.join(configDir, 'categories.json');
      if (fs.existsSync(categoriesFile)) {
        categories = JSON.parse(fs.readFileSync(categoriesFile, 'utf-8'));
      }
    } catch (err) {
      // Use defaults
    }
    
    // Load allowed tags
    let allowedTags = null;
    try {
      const tagsFile = path.join(configDir, 'tags.json');
      if (fs.existsSync(tagsFile)) {
        allowedTags = JSON.parse(fs.readFileSync(tagsFile, 'utf-8'));
      }
    } catch (err) {
      // allowedTags stays null — tag content check skipped
    }

    return {
      categories,
      minTags: 3,
      maxTags: 15,
      allowedTags,
    };
  }
  
  /**
   * Validate a single entry
   */
  validateEntry(entry, index = 0) {
    const entryErrors = [];
    const entryWarnings = [];
    
    // Required fields
    if (!entry.id) {
      entryErrors.push('Missing required field: id');
    } else if (!/^[a-z0-9-]+$/.test(entry.id)) {
      entryErrors.push(`Invalid ID format: "${entry.id}" (must be lowercase, numbers, hyphens only)`);
    }
    
    if (!entry.name) entryErrors.push('Missing required field: name');
    if (!entry.dates) entryErrors.push('Missing required field: dates');
    if (!entry.category) entryErrors.push('Missing required field: category');
    
    // Format validation
    if (entry.dates && !isValidDate(entry.dates)) {
      entryErrors.push(`Invalid date format: "${entry.dates}"`);
    }
    
    if (entry.category && !this.config.categories.includes(entry.category)) {
      entryErrors.push(
        `Invalid category: "${entry.category}" (expected one of: ${this.config.categories.join(', ')})`
      );
    }
    
    // Tags validation
    if (!entry.tags || entry.tags.length === 0) {
      entryWarnings.push('Missing tags (recommended for connections)');
    } else if (entry.tags.length < this.config.minTags) {
      entryWarnings.push(`Only ${entry.tags.length} tags (${this.config.minTags} recommended)`);
    } else if (entry.tags.length > this.config.maxTags) {
      entryErrors.push(`Too many tags: ${entry.tags.length} (max ${this.config.maxTags})`);
    }
    
    if (entry.tags && Array.isArray(entry.tags)) {
      entry.tags.forEach(tag => {
        if (typeof tag !== 'string' || !/^[a-z0-9-]+$/.test(tag)) {
          entryErrors.push(`Invalid tag format: "${tag}"`);
        } else if (this.config.allowedTags && !this.config.allowedTags.includes(tag)) {
          entryErrors.push(`Unknown tag: "${tag}" (not in content/config/tags.json)`);
        }
      });
    }
    
    // Description validation
    if (!entry.desc) {
      entryWarnings.push('Missing description (desc)');
    }
    
    // Required sections — all entries must have every one of these
    if (!entry.question) entryErrors.push('Missing required section: ## Question');

    if (!entry.options || entry.options.length === 0) {
      entryErrors.push('Missing required section: ## Options (must have exactly 4 options)');
    } else if (entry.options.length !== 4) {
      entryErrors.push(`Question must contain exactly 4 answer options (found ${entry.options.length})`);
    }

    if (entry.answer === undefined || entry.answer === null) {
      entryErrors.push('Missing required section: ## Answer');
    } else if (entry.answer < 0 || entry.answer > 3) {
      entryErrors.push(`Invalid answer index: ${entry.answer} (must be 0–3)`);
    }

    if (!entry.answerText) entryErrors.push('Missing required section: ## Answer Text');
    if (!entry.subject)    entryErrors.push('Missing required section: ## Subject');

    if (!entry.dailyStory) {
      entryErrors.push('Missing required section: ## Daily Story');
    } else {
      const dwc = entry.dailyStory.replace(/<[^>]+>/g, ' ').trim().split(/\s+/).filter(Boolean).length;
      if (dwc < 100) {
        entryErrors.push(`Daily Story must contain at least 100 words (found ${dwc})`);
      } else if (dwc > 300) {
        entryErrors.push(`Daily Story cannot exceed 300 words (found ${dwc})`);
      }
    }

    if (!entry.waitWhat) {
      entryErrors.push('Missing required section: ## Wait... What?!');
    } else {
      const wwc = entry.waitWhat.replace(/<[^>]+>/g, ' ').trim().split(/\s+/).filter(Boolean).length;
      if (wwc < 30) {
        entryErrors.push(`Wait... What?! must contain at least 30 words (found ${wwc})`);
      } else if (wwc > 200) {
        entryErrors.push(`Wait... What?! cannot exceed 200 words (found ${wwc})`);
      }
    }

    if (!entry.costImpact) {
      entryErrors.push('Missing required section: ## Cost / Impact');
    } else {
      const cwc = entry.costImpact.replace(/<[^>]+>/g, ' ').trim().split(/\s+/).filter(Boolean).length;
      if (cwc < 50) {
        entryErrors.push(`Cost / Impact must contain at least 50 words (found ${cwc})`);
      } else if (cwc > 250) {
        entryErrors.push(`Cost / Impact cannot exceed 250 words (found ${cwc})`);
      }
    }

    if (!entry.story) {
      entryErrors.push('Missing required section: ## Story');
    } else {
      const wordCount = entry.story.replace(/<[^>]+>/g, ' ').trim().split(/\s+/).filter(Boolean).length;
      if (wordCount < 350) {
        entryErrors.push(`Story must contain at least 350 words (found ${wordCount})`);
      } else if (wordCount > 1500) {
        entryErrors.push(`Story cannot exceed 1500 words (found ${wordCount})`);
      }
    }

    if (!entry.whyItMatters) entryErrors.push('Missing required section: ## Why It Matters');

    if (!entry.timeline || entry.timeline.length === 0) {
      entryErrors.push('Missing required section: ## Timeline (must have at least one item)');
    } else if (entry.timeline.length < 6) {
      entryErrors.push(`Timeline must contain at least 6 entries (found ${entry.timeline.length})`);
    } else if (entry.timeline.length > 10) {
      entryErrors.push(`Timeline cannot contain more than 10 entries (found ${entry.timeline.length})`);
    }

    if (!entry.quote || !entry.quote.text) {
      entryErrors.push('Missing required section: ## Pull Quote');
    }
    
    // Image validation
    if (entry.heroImage && !isValidImagePath(entry.heroImage)) {
      entryWarnings.push(`Possible invalid hero image path: ${entry.heroImage}`);
    }
    
    return {
      id: entry.id || `[Entry #${index}]`,
      errors: entryErrors,
      warnings: entryWarnings,
    };
  }
  
  /**
   * Validate collection for duplicates and conflicts
   */
  validateCollection(entries) {
    const seen = {
      ids: new Map(),
      quizDays: new Map(),
    };
    
    const collectionErrors = [];
    
    entries.forEach((entry, idx) => {
      // Duplicate ID check
      if (entry.id) {
        if (seen.ids.has(entry.id)) {
          collectionErrors.push(
            `❌ Duplicate ID: "${entry.id}" (entries ${seen.ids.get(entry.id)} and ${idx})`
          );
        } else {
          seen.ids.set(entry.id, idx);
        }
      }
      
      // Duplicate quiz day check
      if (entry.quizDay) {
        if (seen.quizDays.has(entry.quizDay)) {
          collectionErrors.push(
            `❌ Duplicate quiz day: "${entry.quizDay}" (entries ${seen.quizDays.get(entry.quizDay)} and ${idx})`
          );
        } else {
          seen.quizDays.set(entry.quizDay, idx);
        }
      }
    });
    
    return collectionErrors;
  }
  
  /**
   * Validate all entries
   */
  validateAll(entries) {
    this.errors = [];
    this.warnings = [];
    
    const results = {
      valid: 0,
      invalid: 0,
      warnings: 0,
      details: [],
    };
    
    // Validate each entry
    entries.forEach((entry, idx) => {
      const validation = this.validateEntry(entry, idx);
      
      if (validation.errors.length > 0) {
        results.invalid++;
        results.details.push({
          entry: validation.id,
          errors: validation.errors,
          warnings: validation.warnings,
        });
      } else if (validation.warnings.length > 0) {
        results.warnings++;
        results.details.push({
          entry: validation.id,
          errors: [],
          warnings: validation.warnings,
        });
      } else {
        results.valid++;
      }
    });
    
    // Validate collection-level rules
    const collectionErrors = this.validateCollection(entries);
    if (collectionErrors.length > 0) {
      results.details.push({
        entry: '[Collection-level]',
        errors: collectionErrors,
        warnings: [],
      });
      results.invalid++;
    }
    
    return results;
  }
  
  /**
   * Format validation results for display
   */
  formatResults(results) {
    let output = '\n';
    output += '═'.repeat(70) + '\n';
    output += 'VALIDATION RESULTS\n';
    output += '═'.repeat(70) + '\n';
    output += `✅ Valid:    ${results.valid}\n`;
    output += `⚠️  Warnings: ${results.warnings}\n`;
    output += `❌ Invalid:  ${results.invalid}\n`;
    output += '─'.repeat(70) + '\n';
    
    if (results.details.length > 0) {
      results.details.forEach(detail => {
        if (detail.errors.length > 0 || detail.warnings.length > 0) {
          output += `\n📄 ${detail.entry}\n`;
          
          detail.errors.forEach(err => {
            output += `  ❌ ${err}\n`;
          });
          
          detail.warnings.forEach(warn => {
            output += `  ⚠️  ${warn}\n`;
          });
        }
      });
    }
    
    output += '\n' + '═'.repeat(70) + '\n';
    return output;
  }
}

function isValidImagePath(imagePath) {
  return /^(\/|https?:\/\/)/.test(imagePath);
}

module.exports = {
  ContentValidator,
};
