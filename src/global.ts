declare global {
  namespace JSX {
    export interface IntrinsicElements {
      [elementName: string]: SmartElement.Node;
    }
  }
}

export {};
