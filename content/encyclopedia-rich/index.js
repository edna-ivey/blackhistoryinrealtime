const { ENTRIES: BATCH_1 } = require('./batch-1');

let BATCH_2 = [];
let BATCH_3 = [];
let BATCH_4 = [];
let BATCH_5 = [];
let BATCH_6 = [];
let BATCH_7 = [];
try {
  ({ ENTRIES: BATCH_2 } = require('./batch-2'));
} catch (error) {
  if (error.code !== 'MODULE_NOT_FOUND') throw error;
}

try {
  ({ ENTRIES: BATCH_3 } = require('./batch-3'));
} catch (error) {
  if (error.code !== 'MODULE_NOT_FOUND') throw error;
}

try {
  ({ ENTRIES: BATCH_4 } = require('./batch-4'));
} catch (error) {
  if (error.code !== 'MODULE_NOT_FOUND') throw error;
}

try {
  ({ ENTRIES: BATCH_5 } = require('./batch-5'));
} catch (error) {
  if (error.code !== 'MODULE_NOT_FOUND') throw error;
}

try {
  ({ ENTRIES: BATCH_6 } = require('./batch-6'));
} catch (error) {
  if (error.code !== 'MODULE_NOT_FOUND') throw error;
}

try {
  ({ ENTRIES: BATCH_7 } = require('./batch-7'));
} catch (error) {
  if (error.code !== 'MODULE_NOT_FOUND') throw error;
}

module.exports = {
  ENTRIES: [
    ...BATCH_1,
    ...BATCH_2,
    ...BATCH_3,
    ...BATCH_4,
    ...BATCH_5,
    ...BATCH_6,
    ...BATCH_7,
  ],
};
