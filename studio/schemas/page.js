

export default {
  title: "Page",
  name: "page",
  type: "document",
  preview: { select: { title: "title" } },
  fields: [
    {
      type: "string",
      title: "Title",
      name: "title",
      description: "The title of the page",
      validation: (Rule) => Rule.required(),
    },
    {
      type: "slug",
      title: "Slug",
      name: "slug",
      description: "The URL path of this page relative to the site domain",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
      },
    },
    {
      type: "text",
      title: "Subtitle",
      name: "subtitle",
      description: "The text shown below the page title",
    },
    {
      type: "image",
      title: "Image",
      name: "image",
      description: "The image shown below the page title",
    },
    {
      type: "markdown",
      title: "Content",
      name: "content",
      description: "Page content",
    },
    {
      type: "datetime",
      title: "Modified Date",
      name: "modified_date",
      description: "The modified date",
    },
    {
      type: "date",
      title: "Publish Date",
      name: "publish_date",
      description: "The publish date",
    },
    {
      title: "Categories",
      name: "categories",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "blog post", value: "page1" },
          { title: "testimonial", value: "page2" },
          { title: "misc", value: "page3" },
        ],
      },
    },
    {
      title: "Related pages",
      name: "related_pages",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "page" }, { type: "landing" }],
        },
      ],
    },
    {
      type: "cloudinary.asset",
      name: "social_image",
      title: "Social Image",
      description: "The social image",
    },
    {
      type: "array",
      title: "Tags",
      name: "tags",
      of: [
        {
          type: "string",
        },
      ],
    },
  ],
};
