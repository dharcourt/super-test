/**
 * @module logic/extended-foo
 */
var Foo = require("logic/foo").Foo;
/**
 * @class ExtendedFoo
 * @extends Foo
 */
var extendedFoo = exports.ExtendedFoo = Foo.specialize(/** @lends ExtendedFoo# */ {
    constructor: {
        value: function ExtendedFoo() {
            this.super();
        }
    },

    toRope: {
        value: function () {
            return "Extended" + this.super();
        }
    },

    toString: {
        value: extendedFoo.prototype.toRope
    }
});
