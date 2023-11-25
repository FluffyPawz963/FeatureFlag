interface RenderTree {
    id: string;
    name: string;
    feature: string | boolean | number | undefined;
    children?: readonly RenderTree[];
  }