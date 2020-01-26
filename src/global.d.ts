declare global {
    namespace JSX {
        interface IntrinsicElements {
            [elementName: string]: SmartElement.Node;
        }
    }
}
export {};
