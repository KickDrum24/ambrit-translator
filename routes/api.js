'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {

  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      // You can POST to /api/translate with a body containing text with the 
      // text to translate and locale with either american-to-british or 
      // british-to-american. 

      const { text, locale } = req.body

      // If text is empty, return { error: 'No text to translate' }
      if (text == "") {
        res.json({ error: 'No text to translate' });
        return;
      }

      // If one or more of the required fields is missing, return 
      // { error: 'Required field(s) missing' }.

      if (!req.body.text || !req.body.locale) {
        res.json({ error: 'Required field(s) missing' });
        return;
      }

      // If locale does not match one of the two specified locales, 
      // return { error: 'Invalid value for locale field' }.

      if (!((locale == "american-to-british") || (locale == "british-to-american"))) {
        res.json({ error: 'Invalid value for locale field' });
        return;
      }

      let translation = translator.britAm(text, locale)

      // If text requires no translation, return "Everything looks good to me!" 
      // for the translation value.
     
      if (text == translation){
        res.json({"text": text, "translation": "Everything looks good to me!" })
      }else{
      
      // The returned object should contain the submitted 
      // text and translation with the translated text.
      
      res.json({ "text": text, "translation": translation });
      };      
    });
};
