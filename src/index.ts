declare global {
  namespace JSX {
    export interface IntrinsicElements {
      [elementName: string]: Smart.Node;
    }
  }
}
namespace Smart {
  export interface Node {
    type?: string;
    props?: any;
    key?: any;
    children?: Smart.Node | Smart.Node[] | string | string[] | number;
  }
  export function createElement(tag, attrs, children): Smart.Node {
    if (typeof tag !== "string") {
      return new tag().render();
    } else {
      const element: Element = document.createElement(tag);

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
      // return element;
      return {} as Smart.Node;
    }
  }
}

export = Smart;
