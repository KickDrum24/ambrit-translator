const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
  test("Translation with text and locale fields: POST request to /api/translate", function (done) {
    chai
      .request(server)
      .post("/api/translate")
      .send(
        {
          text: "There was a punch-up at the pub.",
          locale: "british-to-american"
        }
      )
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.translation, `There was a <span class="highlight">fistfight</span> at the <span class="highlight">bar</span>.`)

        done();
      });
  });

  test("Translation with text and invalid locale fields: POST request to /api/translate", function (done) {
    chai
      .request(server)
      .post("/api/translate")
      .send(
        {
          text: "There was a punch-up at the pub.",
          locale: "british-to-farsi"
        }
      )
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, 'Invalid value for locale field')

        done();
      });
  });
  
  test("Translation with missing text field: POST request to /api/translate", function (done) {
    chai
      .request(server)
      .post("/api/translate")
      .send(
        {
          locale: "british-to-american"
        }
      )
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, 'Required field(s) missing')

        done();
      });
  });

  test("Translation with missing locale field: POST request to /api/translate", function (done) {
    chai
      .request(server)
      .post("/api/translate")
      .send(
        {
          text: "What a sarky publican!"
        }
      )
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, 'Required field(s) missing')

        done();
      });
  });
  
  test("Translation with empty text: POST request to /api/translate", function (done) {
    chai
      .request(server)
      .post("/api/translate")
      .send(
        {
          text: "",
          locale: "american-to-british"
        }
      )
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, 'No text to translate')

        done();
      });
  });
  
  test("Translation with text that needs no translation: /api/translate", function (done) {
    chai
      .request(server)
      .post("/api/translate")
      .send(
        {
          text: "It was a cool dark night.",
          locale: "american-to-british"
        }
      )
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.translation, 'Everything looks good to me!')

        done();
      });
  });
});
