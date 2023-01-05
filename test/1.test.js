const assert = require('assert');
const { getRepeatNum, getRepeatNum1, getRepeatNum2 } = require('../src/1');

describe('1 test => ', () => {
    it('getRepeatNum([1,2,5,3,1]) => 1', () => {
        assert.equal(getRepeatNum([1, 2, 5, 3, 1]), 1);
    });

    it('getRepeatNum1([1,2,5,3,1]) => 1', () => {
        assert.equal(getRepeatNum1([2, 2, 3, 3, 1]), 2);
    });

    it('getRepeatNum2([2, 2, 3, 3, 1]) => 1', () => {
        assert.equal(getRepeatNum2([2, 4, 3, 3, 1]), 3);
    });
});
