declare global {
  namespace JSX {
    export interface IntrinsicElements {
      div: Smart.SmartNode;
      p: Smart.SmartNode;
      b: Smart.SmartNode;
    }
  }
}

namespace Smart {
  export interface SmartNode extends Element {
    type?: string;
    props?: any;
    key?: any;
    children: HTMLCollection;
  }
  export function createElement(tag, attrs, children): SmartNode {
    if (typeof tag !== "string") {
      return new tag().render();
    } else {
      const element: SmartNode = document.createElement(tag);

      for (let name in attrs) {
        if (name && attrs.hasOwnProperty(name)) {
          let value = attrs[name];
          if (value === true) {
            element.setAttribute(name, name);
          } else if (value !== false && value != null) {
            element.setAttribute(name, value.toString());
          }
        }
      }
      for (let i = 2; i < arguments.length; i++) {
        let child = arguments[i];
        element.appendChild(
          child.nodeType == null
            ? document.createTextNode(child.toString())
            : child
        );
      }
      element.type = element.tagName;
      element.props = element.attributes;
      element.key = element.attributes.getNamedItem("Key") || null;
      return element;
    }
  }
}

export = Smart;
