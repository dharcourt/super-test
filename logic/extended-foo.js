/**
 * @module logic/extended-foo
 */
var Foo = require("logic/foo").Foo,
    extend = function () { return "Extended" + this.super(); };
/**
 * @class ExtendedFoo
 * @extends Foo
 */
exports.ExtendedFoo = Foo.specialize(/** @lends ExtendedFoo# */ {
    constructor: {
        value: function ExtendedFoo() {
            this.super();
        }
    },

    toString: {
        value: extend
    },

    toRope: {
        value: extend
    }
});
