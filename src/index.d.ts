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
    interface SmartNode {
        type?: string;
        props?: any;
        key?: any;
        children?: Smart.SmartNode | Smart.SmartNode[] | string | string[] | number;
    }
    function createElement(tag: any, attrs: any, ...children: any[]): SmartNode;
}
export = Smart;
