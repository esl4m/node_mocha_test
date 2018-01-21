function GetSum(items) {
    this._items = items;
}

GetSum.prototype.getTotal = function() {
    var sum = this._items.reduce(add, 0);
    function add(a, b) {
        return a + b;
    }
    // console.log(sum);
    return sum;
}

GetSum.prototype.getSubtract = function() {
    var subtotal = this._items.reduce(subtr, 0);
    function subtr(x, y) {
        return (y - x);
    }
    return Math.abs(subtotal);
}

module.exports = GetSum;
