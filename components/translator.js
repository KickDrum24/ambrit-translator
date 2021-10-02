const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

    singles(item, component) {
        
        if (Object.keys(component).includes(item)) {
            // var newSingle = component[item];
            // console.log("log test passed")
            // newSingle = `<span class="highlight">${newSingle}</span>`;
            // return newSingle
            return `<span class="highlight">${component[item]}</span>`;
        } else if (/^(2[0-3]|[01]?[0-9])(:)([0-5]?[0-9])/.test(item)) {
            var newTime = item
            newTime = newTime.replace(":", ".");
            return `<span class="highlight">${newTime}</span>`
            
        } else if (/^(2[0-3]|[01]?[0-9])(.)([0-5]?[0-9])/.test(item)) {
            console.log("times is " + item)
            var newTime = item
            newTime = newTime.replace(".", ":");
            return `<span class="highlight">${newTime}</span>`
        }
        else {
            return item;
        }
    }
    britAm(text, locale) {
        //clean text of superfluous punctuation
        // text = text.replace(/[^a-zA-Z-':.?, ]+/g, "")
        // text = text.toLowerCase();
        // remove last character from end and save(in order to apply logic to last word in sentence)
        const end = text.charAt(text.length - 1);
        text = text.slice(0, -1);
        //split text into words array for easy analysis
        const words = text.split(" ")
        if (locale == "american-to-british") {
            //check for doubles, triples, titles, and spelling
            var i;
            for (i = 0; i < words.length; i++) {
                let double = words[i] + " " + words[i + 1];
                let triple = words[i] + " " + words[i + 1] + " " + words[i + 2];
                if (Object.keys(americanOnly).includes(double)) {
                    words.splice(i, 2, `<span class="highlight">${americanOnly[double]}</span>`)
                }
                if (Object.keys(americanOnly).includes(triple)) {
                    words.splice(i, 3, `<span class="highlight">${americanOnly[triple]}</span>`)
                }
                if (Object.keys(americanToBritishTitles).includes(words[i])) {
                    words.splice(i, 1, `<span class="highlight">${americanToBritishTitles[words[i]]}</span>`)
                }
                if (Object.keys(americanToBritishSpelling).includes(words[i])) {
                    words.splice(i, 1, `<span class="highlight">${americanToBritishSpelling[words[i]]}</span>`)
                }
            }
            //check for singles
            var atb = words.map(item => this.singles(item, americanOnly));
            //
            atb = atb.join(" ") + end;
            //(re)captialize first word and return
            atb = atb.charAt(0).toUpperCase() + atb.slice(1)
            return atb;
        }

        if (locale == "british-to-american") {

            //check for doubles, triples, titles, and spelling
            var i;
            for (i = 0; i < words.length; i++) {
                let double = words[i] + " " + words[i + 1];
                let triple = words[i] + " " + words[i + 1] + " " + words[i + 2];
                //doubles
                if (Object.keys(britishOnly).includes(double)) {
                    words.splice(i, 2, britishOnly[double])
                }
                //triples
                if (Object.keys(britishOnly).includes(triple)) {
                    words.splice(i, 3, britshOnly[triple])
                }
                //spelling
                if (Object.values(americanToBritishSpelling).includes(words[i])) {
                    let amWord = Object.keys(americanToBritishSpelling).find(key => americanToBritishSpelling[key] === words[i])
                    words.splice(i, 1, amWord)
                }
            }
        }
        //check for singles
        var bta = words.map(item => this.singles(item, britishOnly));
        //add end back in
        bta = bta.join(" ") + end
        //(re)captialize first word and return
        bta = bta.charAt(0).toUpperCase() + bta.slice(1)
        return bta;

    }
}

module.exports = Translator;