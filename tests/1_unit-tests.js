const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {

// Translate Mangoes are my favorite fruit. to British English
test("Translate Mangoes are my favorite fruit. to British English", (done) => {
    assert.equal(translator.britAm("Mangoes are my favorite fruit.", "american-to-british"), 
    `Mangoes are my <span class="highlight">favourite</span> fruit.`);
    done();
})
// Translate I ate yogurt for breakfast. to British English
test("Translate I ate yogurt for breakfast. to British English", (done) => {
    assert.equal(translator.britAm("I ate yogurt for breakfast.", "american-to-british"), 
    `I ate <span class="highlight">yoghurt</span> for breakfast.`);
    done();
})
// Translate We had a party at my friend's condo. to British English
test("Translate We had a party at my friend's condo. to British English", (done) => {
    assert.equal(translator.britAm("We had a party at my friend's condo.", "american-to-british"), 
    `We had a party at my friend's <span class="highlight">flat</span>.`);
    done();
})
// Translate Can you toss this in the trashcan for me? to British English
test("Translate Can you toss this in the trashcan for me? to British English", (done) => {
    assert.equal(translator.britAm("Can you toss this in the trashcan for me?", "american-to-british"), 
    `Can you toss this in the <span class="highlight">bin</span> for me?`);
    done();
})
// Translate The parking lot was full. to British English
test("Translate The parking lot was full. to British English", (done) => {
    assert.equal(translator.britAm("The parking lot was full.", "american-to-british"), 
    `The <span class="highlight">car park</span> was full.`);
    done();
})
// Translate Like a high tech Rube Goldberg machine. to British English
test("Translate Like a high tech Rube Goldberg machine. to British English", (done) => {
    assert.equal(translator.britAm("Like a high tech Rube Goldberg machine.", "american-to-british"), 
    `Like a high tech <span class="highlight">Heath Robinson device</span>.`);
    done();
})
// Translate To play hooky means to skip class or work. to British English
test("Translate To play hooky means to skip class or work. to British English", (done) => {
    assert.equal(translator.britAm("To play hooky means to skip class or work.", "american-to-british"), 
    `To <span class="highlight">bunk off</span> means to skip class or work.`);
    done();
})
// Translate No Mr. Bond, I expect you to die. to British English
test("Translate No Mr. Bond, I expect you to die. to British English", (done) => {
    assert.equal(translator.britAm("No Mr. Bond, I expect you to die.", "american-to-british"), 
    `No <span class="highlight">Mr</span> Bond, I expect you to die.`);
    done();
})
// Translate Dr. Grosh will see you now. to British English
test("Translate Dr. Grosh will see you now. to British English", (done) => {
    assert.equal(translator.britAm("Dr. Grosh will see you now.", "american-to-british"), 
    `<span class="highlight">Dr</span> Grosh will see you now.`);
    done();
})
// Translate Lunch is at 12:15 today. to British English
test("Translate Lunch is at 12:15 today. to British English", (done) => {
    assert.equal(translator.britAm("Lunch is at 12:15 today.", "american-to-british"), 
    `Lunch is at <span class="highlight">12.15</span> today.`);
    done();
})
// Translate We watched the footie match for a while. to American English
test("Translate We watched the footie match for a while. to American English", (done) => {
    assert.equal(translator.britAm("We watched the footie match for a while.", "british-to-american"), 
    `We watched the <span class="highlight">soccer</span> match for a while.`);
    done();
})
// Translate Paracetamol takes up to an hour to work. to American English
test("Translate Paracetamol takes up to an hour to work. to American English", (done) => {
    assert.equal(translator.britAm("Paracetamol takes up to an hour to work.", "british-to-american"), 
    `<span class="highlight">Tylenol</span> takes up to an hour to work.`);
    done();
})
// Translate First, caramelise the onions. to American English
test("Translate First, caramelise the onions. to American English", (done) => {
    assert.equal(translator.britAm("First, caramelise the onions.", "british-to-american"), 
    `First, <span class="highlight">caramelize</span> the onions.`);
    done();
})
// Translate I spent the bank holiday at the funfair. to American English
test("Translate I spent the bank holiday at the funfair. to American English", (done) => {
    assert.equal(translator.britAm("I spent the bank holiday at the funfair.", "british-to-american"), 
    `I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.`);
    done();
})
// Translate I had a bicky then went to the chippy. to American English
test("Translate I had a bicky then went to the chippy. to American English", (done) => {
    assert.equal(translator.britAm("I had a bicky then went to the chippy.", "british-to-american"), 
    `I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.`);
    done();
})
// Translate I've just got bits and bobs in my bum bag. to American English
test("Translate First, caramelise the onions. to American English", (done) => {
    assert.equal(translator.britAm("First, caramelise the onions.", "british-to-american"), 
    `First, <span class="highlight">caramelize</span> the onions.`);
    done();
})
// Translate The car boot sale at Boxted Airfield was called off. to American English
test("Translate The car boot sale at Boxted Airfield was called off. to American English", (done) => {
    assert.equal(translator.britAm("The car boot sale at Boxted Airfield was called off.", "british-to-american"), 
    `The <span class="highlight">swap meet</span> Boxted Airfield was called off.`);
    done();
})
// Translate Have you met Mrs Kalyani? to American English
test("Translate Have you met Mrs Kalyani? to American English", (done) => {
    assert.equal(translator.britAm("Have you met Mrs Kalyani?", "british-to-american"), 
    `Have you met <span class="highlight">Mrs.</span> Kalyani?`);
    done();
})
// Translate Prof Joyner of King's College, London. to American English
test("Translate Prof Joyner of King's College, London. to American English", (done) => {
    assert.equal(translator.britAm("Prof Joyner of King's College, London.", "british-to-american"), 
    `<span class="highlight">Prof.</span> Joyner of King's College, London.`);
    done();
})
// Translate Tea time is usually around 4 or 4.30. to American English
test("Translate Tea time is usually around 4 or 4.30. to American English", (done) => {
    assert.equal(translator.britAm("Tea time is usually around 4 or 4.30.", "british-to-american"), 
    `Tea time is usually around 4 or <span class="highlight">4:30</span>.`);
    done();
})
// Highlight translation in Mangoes are my favorite fruit.
test("Highlight translatiion Mangoes are my favorite fruit.", (done) => {
    assert.equal(translator.britAm("Mangoes are my favorite fruit.", "american-to-british"), 
    `Mangoes are my <span class="highlight">favourite</span> fruit.`);
    done();
})
// Highlight translation in I ate yogurt for breakfast.
test("Highlight translation in I ate yogurt for breakfast.", (done) => {
    assert.equal(translator.britAm("I ate yogurt for breakfast.", "american-to-british"), 
    `I ate <span class="highlight">yoghurt</span> for breakfast.`);
    done();
})
// Highlight translation in We watched the footie match for a while.
test("Highlight translation in We watched the footie match for a while.", (done) => {
    assert.equal(translator.britAm("We watched the footie match for a while.", "british-to-american"), 
    `We watched the <span class="highlight">soccer</span> match for a while.`);
    done();
})
// Highlight translation in Paracetamol takes up to an hour to work.
test("Highlight translation in Paracetamol takes up to an hour to work.", (done) => {
    assert.equal(translator.britAm("Paracetamol takes up to an hour to work.", "british-to-american"), 
    `<span class="highlight">Tylenol</span> takes up to an hour to work.`);
    done();
})

});
