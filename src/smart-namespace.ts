namespace SmartElement {
  export interface Node {
    type?: string;
    props?: any;
    key?: any;
    children?:
      | SmartElement.Node
      | SmartElement.Node[]
      | string
      | string[]
      | number;
  }
}
