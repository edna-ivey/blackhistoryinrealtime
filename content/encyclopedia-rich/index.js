const { ENTRIES: BATCH_1 } = require('./batch-1');

let BATCH_2 = [];
try {
  ({ ENTRIES: BATCH_2 } = require('./batch-2'));
} catch (error) {
  if (error.code !== 'MODULE_NOT_FOUND') throw error;
}

module.exports = {
  ENTRIES: [
    ...BATCH_1,
    ...BATCH_2,
  ],
};
