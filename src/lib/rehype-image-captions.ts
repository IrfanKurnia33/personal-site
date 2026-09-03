type HastNode = {
  type: string;
  tagName?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
};

export default function rehypeImageCaptions() {
  return (tree: HastNode) => {
    transformChildren(tree);
  };
}

function transformChildren(parent: HastNode) {
  if (!parent.children) return;

  parent.children = parent.children.map((node) => {
    if (node.type === "element" && node.tagName === "p" && node.children?.length === 1) {
      const image = node.children[0];
      const alt = image.properties?.alt;

      if (image.type === "element" && image.tagName === "img" && typeof alt === "string" && alt) {
        return {
          type: "element",
          tagName: "figure",
          properties: {},
          children: [
            image,
            {
              type: "element",
              tagName: "figcaption",
              properties: {},
              children: [{ type: "text", value: alt }],
            },
          ],
        };
      }
    }

    transformChildren(node);
    return node;
  });
}