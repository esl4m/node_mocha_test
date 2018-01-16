function GetSum(items) {
    this._items = items;
}

GetSum.prototype.getTotal = function() {
    var sum = this._items.reduce(add, 0);
    function add(a, b) {
        return a + b;
    }
    return sum;
}

module.exports = GetSum;
