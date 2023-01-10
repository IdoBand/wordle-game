import { SharedLogicFunctions } from "../components/SharedLogicFunctions";
import { describe } from "node:test";
import { expect} from 'chai';

function add(a: number, b: number) {
    return a+b
};

describe('testing 1  2  3', () => {
    it('add 1 + 2 to equal 3', () => {
        expect(add(1,2)).to.equal(3)
    });
    
});

