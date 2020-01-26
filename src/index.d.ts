declare global {
    namespace JSX {
        interface IntrinsicElements {
            [elementName: string]: Smart.Node;
        }
    }
}
declare namespace Smart {
    interface Node {
        type?: string;
        props?: any;
        key?: any;
        children?: Smart.Node | Smart.Node[] | string | string[] | number;
    }
    function createElement(tag: any, attrs: any, children: any): Smart.Node;
}
export = Smart;
