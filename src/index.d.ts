declare global {
    namespace JSX {
        interface IntrinsicElements {
            div: Smart.Element;
            p: Smart.Element;
            b: Smart.Element;
        }
    }
    namespace Smart {
        interface Element {
            type?: string;
            props?: any;
            key?: any;
            children?: Smart.Element | Smart.Element[] | string | string[] | number;
        }
        function createElement(tag: any, attrs: any, children: any): Smart.Element;
    }
}
declare namespace Smart {
    interface Element {
        type?: string;
        props?: any;
        key?: any;
        children?: Smart.Element | Smart.Element[] | string | string[] | number;
    }
    function createElement(tag: any, attrs: any, children: any): Smart.Element;
}
export = Smart;
