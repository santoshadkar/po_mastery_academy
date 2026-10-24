// Aggregator for all 6 Professional Certification Tracks (30 Mock Exams Total)
const pspo1 = require('./pspo1');
const pspo2 = require('./pspo2');
const pspo3 = require('./pspo3');
const cspo = require('./cspo');
const safePopm = require('./safePopm');
const icpApo = require('./icpApo');

const certifications = [
  pspo1,
  pspo2,
  pspo3,
  cspo,
  safePopm,
  icpApo
];

module.exports = certifications;
