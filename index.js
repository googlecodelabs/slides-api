require('dotenv').config();
const slides = require('./slides');
const bigquery = require('./bigquery');

/**
 * Generates slides using the Google Slides, Drive, and BigQuery APIs.
 */
console.log('-- Start generating slides. --')
slides.getClientSecrets()
  .then((credentials) => Promise.all([
    slides.authorize(credentials), bigquery.getLicenseData()
  ]))
  .then(slides.createSlides)
  .then(slides.openSlidesInBrowser)
  .then(() => {
    console.log('-- Finished generating slides. --');
  });