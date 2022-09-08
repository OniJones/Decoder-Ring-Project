// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe ("substitution", () => {
    describe ("error handling", () => {
        it ("Should return false if there is no alphabet", () => {
            const input = "bobby";
            const alphabet = "";
            const actual = substitution(input, alphabet, false);
            expect(actual).to.be.false;
        })

        it ("Should return false if alphabet is not 26 characters", () => {
            const input = "Unova";
            const alphabet = "abcdef";
            const actual = substitution(input, alphabet, false);
            expect(actual).to.be.false;
        })

        it ("Should return false if alphabet has repeating letters", () => {
            const input = "Pokeball";
            const alphabet = "abcdeabcdeabcdeabcdeabcdea";
            const actual = substitution(input, alphabet, false);
            expect(actual).to.be.false;
        })
    })

    describe ("encoding", () => {
        it ("Should return all letters in lower case", () => {
            const input = "POKEMON";
            const alphabet = "qazwsxedcrfvtgbyhnujmikolp";
            const expected = "ybfstbg";
            const actual = substitution(input, alphabet, true);
            expect(actual).to.equal(expected);
        })
        it ("Should return a string of substituted letters", () => {
            const input = "Scrafty";
            const alphabet = "qazwsxedcrfvtgbyhnujmikolp";
            const expected = "uznqxjl";
            const actual = substitution(input, alphabet, true);
            expect(actual).to.equal(expected);
        })

        it ("Should work with any unique characters", () => {
            const input = "Guzzlord";
            const alphabet = "qazwsxedcrfvtb?yhnujmik!l$";
            const expected = "em$$v?nw";
            const actual = substitution(input, alphabet, true);
            expect(actual).to.equal(expected);
        })
    })

    describe ("decoding", () => {
        it ("Should decode a message with given alphabet substitute", () => {
            const input = "uznqxjl"
            const alphabet = "qazwsxedcrfvtgbyhnujmikolp";
            const expected = "scrafty";
            const actual = substitution(input, alphabet, false);
            expect(actual).to.equal(expected);
        })

        it ("Should use any special character in the alphabet substitute", () => {
            const input = "em$$v?nw";
            const alphabet = "qazwsxedcrfvtb?yhnujmik!l$";
            const expected = "guzzlord";
            const actual = substitution(input, alphabet, false);
            expect(actual).to.equal(expected);
        })

        it ("Should keep spaces and special characters in place", () => {
            const input = "em$$v?nw kcvv sqj qbl qbw sisnljdcbe.";
            const alphabet = "qazwsxedcrfvtb?yhnujmik!l$";
            const expected = "guzzlord will eat any and everything.";
            const actual = substitution(input, alphabet, false);
            expect(actual).to.equal(expected);
        })
    })
})
