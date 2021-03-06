"use strict";
var tslib_1 = require("tslib");
var Smart;
(function (Smart) {
    function createElement(tag, attrs) {
        var children = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            children[_i - 2] = arguments[_i];
        }
        if (typeof tag !== "string") {
            return new tag().render();
        }
        else {
            console.log("tag", tag);
            console.log("attrs", attrs);
            console.log("children", children);
            return {
                type: tag,
                props: tslib_1.__assign(tslib_1.__assign({}, attrs), { children: children })
            };
            // const element: Element = document.createElement(tag);
            // for (let name in attrs) {
            //   if (name && attrs.hasOwnProperty(name)) {
            //     let value = attrs[name];
            //     if (value === true) {
            //       element.setAttribute(name, name);
            //     } else if (value !== false && value != null) {
            //       element.setAttribute(name, value.toString());
            //     }
            //   }
            // }
            // for (let i = 2; i < arguments.length; i++) {
            //   let child = arguments[i];
            //   element.appendChild(
            //     child.nodeType == null
            //       ? document.createTextNode(child.toString())
            //       : child
            //   );
            // }
            // element.type = element.tagName;
            // element.props = element.attributes;
            // element.key = element.attributes.getNamedItem("Key") || null;
            // return element;
        }
    }
    Smart.createElement = createElement;
})(Smart || (Smart = {}));
module.exports = Smart;
//# sourceMappingURL=index.js.map