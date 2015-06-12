/**
 * @module logic/extended-bar
 */
var Bar = require("logic/bar").Bar,
    ExtendedFoo = require("logic/extended-foo").ExtendedFoo;
/**
 * @class ExtendedBar
 * @extends Bar
 */
exports.ExtendedBar = Bar.specialize(/** @lends ExtendedBar# */ {
    constructor: {
        value: function ExtendedBar() {
            this.super();
        }
    },

    toString: {
        value: ExtendedFoo.prototype.toString
    },

    toRope: {
        value: ExtendedFoo.prototype.toRope
    }
});
