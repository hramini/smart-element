declare global {
    namespace JSX {
        interface IntrinsicElements {
            div: Smart.SmartNode;
            p: Smart.SmartNode;
            b: Smart.SmartNode;
        }
    }
}
declare namespace Smart {
    interface SmartNode extends Element {
        type?: string;
        props?: any;
        key?: any;
    }
    function createElement(tag: any, attrs: any, children: any): SmartNode;
}
export = Smart;
