export default {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "featureImages",
      title: "Images",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "featureImage",
              title: "Feature Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "altTag",
              title: "Alt Tag",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "heroImage",
      title: "Workshops Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "aboutMe",
      title: "About Me",
      type: "blockContent",
    },
    {
      name: "education",
      title: "Education",
      type: "blockContent",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
