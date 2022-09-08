// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
    describe("errors", () => {
        it ("Should return false if there are an odd number of the numbers", () => {
            const input = "5343525123433";
            const actual = polybius(input, (code = false));
            expect(actual).to.be.false;
        })
    })

    describe("encoding", () => {
        it ("Should encode message to a string of numbers", () => {
            const input = "Scrafty";
            const expected = "34312411124445";
            const actual = polybius(input);
            expect(actual).to.equal(expected);
        })

        it ("Should ignore capital letters", () => {
            const input = "Zarude";
            const expected = "551124544151";
            const actual = polybius(input);
            expect(actual).to.equal(expected);
        })

        it ("Should translate 'i' and 'j' to 42", () => {
            const input = "Tyranitar";
            const expected = "444524113342441124";
            const actual = polybius(input);
            expect(actual).to.equal(expected);
        })

        it ("Should leave spaces and special characters as is", () => {
            const input = "Zwei is my #1 dragon baby!";
            const expected = "55255142 4234 2345 #1 412411224333 21112145!";
            const actual = polybius(input);
            expect(actual).to.equal(expected);
        })
    })

    describe("decoding", () => {
        it ("Should decode numbers into a message string", () => {
            const input = "34312411124445"
            const expected = "scrafty"
            const actual = polybius(input, false);
            expect(actual).to.equal(expected);
        })

        it ("Should translate 42 to 'i' and 'j'", () => {
            const input = "21423432112453";
            const expected = "b(i/j)sharp";
            const actual = polybius(input, false);
            expect(actual).to.equal(expected);
        })

        it ("Should leave spaces and special characters as is", () => {
            const input = "54243432421254 4234 31434313";
            const expected = "ursh(i/j)fu (i/j)s cool"
            const actual = polybius(input, false);
            expect(actual).to.equal(expected);
        })
    })
})