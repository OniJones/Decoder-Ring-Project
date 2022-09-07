// Write your tests here!
const expect = require("chai");
const caesar = require("../src/caesar");

describe ("caesar", () => {
    it("Should maintain spaces and non alphabetic characters", () => {
        const input = "Scrafty, the dark Pokemon";
        const shift = 3;
        const encode = true;

        const expected = "vfudjwb, wkh gdun srnhprq";
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    })

    it("Should return false if shift is not a number", () => {
        const input = "Umbreon";
        const shift = "Pokeball";

        const expected = false;
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    })
});