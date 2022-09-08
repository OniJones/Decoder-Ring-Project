// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe ("caesar", () => {
    describe("error handling", () => {

        it("Should return false if shift is 0", () => {
            const input = "Umbreon";
            const shift = 0;
            const actual = caesar(input, shift);
            expect(actual).to.be.false;
        })

        it("Should return false if shift is less than -25", () => {
            const input = "Scrafty";
            const shift = -26;
            const actual = caesar(input, shift);
            expect(actual).to.be.false;
        })

        it("Should return false if shift is greater than 25", () => {
            const input = "Hydreigon";
            const shift = 26;
            const actual = caesar(input, shift);
            expect(actual).to.be.false;
        })

        it("Should return false if shift is not a number", () => {
            const shift = "Pokeball";
            const actual = caesar(shift);
            expect(actual).to.be.false;
        })
    })

    describe("encoding a message", () => {

        it("Should convert capital letters to lower case", () => {
            const input = "Umbreon";
            const shift = 2;
            const expected = "wodtgqp";
            const actual =  caesar(input, shift);
            expect(actual).to.equal(expected);
        })

        it("Should return spaces and non-alphabetic characters as is", () => {
            const input = "Scrafty, the Hoodlum Pokemon!";
            const shift = 2;
            const expected = "uetchva, vjg jqqfnwo rqmgoqp!";
            const actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        })

        it("Should encode letters", () => {
            const input = "Hydreigon";
            const shift = 2;
            const expected = "jaftgkiqp";
            const actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        })

        it("Should allow for shifting both left and right", () => {
            const input = "Grimmsnarl";
            const shift = -2;
            const expected = "epgkkqlypj";
            const actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        })
    })
})
    