const { doubleDimensionalArrayfind } = require('../src/2');
var { expect } = require('chai');

describe('2 test => ', () => {
    it(`getRepeatNum(
        [
            [1, 3, 6, 9],
            [2, 4, 10, 15],
            [3, 6, 11, 18],
        ]
        , 12) => false
    `, () => {
        expect(
            doubleDimensionalArrayfind(
                [
                    [1, 3, 6, 9],
                    [2, 4, 10, 15],
                    [3, 6, 11, 18],
                ],
                12
            )
        ).to.not.be.ok;
    });

    it(`getRepeatNum(
        [
            [1, 3, 6, 9],
            [2, 4, 10, 15],
            [3, 6, 11, 18],
        ]
        , 11) => true
    `, () => {
        expect(
            doubleDimensionalArrayfind(
                [
                    [1, 3, 6, 9],
                    [2, 4, 10, 15],
                    [3, 6, 11, 18],
                ],
                11
            )
        ).to.be.ok;
    });

    it(`getRepeatNum(
        [[-5]]
        , -5) => true
    `, () => {
        expect(doubleDimensionalArrayfind([[-5]], -5)).to.be.ok;
    });
});
