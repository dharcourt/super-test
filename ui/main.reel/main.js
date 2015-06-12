/**
 * @module ui/main.reel
 */
var Component = require("montage/ui/component").Component,
    ExtendedExtendedFoo = require("logic/extended-extended-foo").ExtendedExtendedFoo;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },

    result: {
        get: function () {
            return new ExtendedExtendedFoo().toString();
        }
    }
});
