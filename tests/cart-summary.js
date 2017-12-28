var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var CartSummary = require('./../src/cart-summary');

beforeEach(function() {
    console.log('before every test in every file');
});

// describe('CartSummary', function () {
//     it('getSubtotal() should return 0 of no items passed in ', function () {
//         var cartSummary = new CartSummary([]);
//         expect(cartSummary.getSubtotal()).to.equal(0);
//     })
// });

describe('CartSummary', function () {
    it('getSubtotal() should return the sum of the price * quantity for all items', function () {
            cartSummary = new CartSummary([
            // {
            //     id: 1,
            //     quantity: 4,
            //     price: 50
            // },
            // {
            //     id: 2,
            //     quantity: 2,
            //     price: 30
            // },
            // {
            //     id: 3,
            //     quantity: 1,
            //     price: 40
            // }
            ]);
            console.log(cartSummary.getSubtotal());
            expect(cartSummary.getSubtotal()).to.equal(300);
        }
    );
});
