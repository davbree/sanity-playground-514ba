export default {
  title: "Feature Item",
  name: "feature_item",
  type: "object",
  preview: { select: { title: "title" } },
  fields: [
    {
      type: "string",
      title: "Title",
      name: "title",
    },
    {
      type: "markdown",
      title: "Content",
      name: "content",
      description: "Feature description",
    },
    {
      type: "image",
      title: "Image",
      name: "image",
      description: "Feature image",
    },
    {
      type: "array",
      title: "Action Buttons",
      name: "actions",
      of: [{ type: "action" }],
    },
    {
      type: "action",
      title: "Main Action",
      name: "main_action",
    },
    {
      type: "reference",
      title: "Related Page",
      name: "related_page",
      to: [{ type: "page" }],
    },
    {
      name: "rich_content",
      title: "Rich Content",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          fields: [
            {
              type: "text",
              name: "alt",
              title: "Alternative text",
              description: `Some of your visitors cannot see images, 
                be they blind, color-blind, low-sighted; 
                alternative text is of great help for those 
                people that can rely on it to have a good idea of 
                what\'s on your page.`,
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },
  ],
};
