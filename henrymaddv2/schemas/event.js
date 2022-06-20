export default {
  name: "event",
  title: "Event",
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
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },

    {
      name: "shows",
      title: "Shows",
      type: "array",
      of: [
        {
          title: "Type below and select a product category...",
          name: "category",
          type: "object",
          fields: [
            {
              name: "eventName",
              title: "Event Name",
              type: "string",
              description: "(e.g. Ludlow Fringe Festival)",
            },
            {
              name: 'eventLogo',
              title: 'Event Logo',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: "daily",
              title: "Daily Show?",
              type: "boolean",
            },
            {
              name: "eventStartTime",
              title: "Event Start Time",
              type: "datetime",
              hidden: ({ parent }) => parent?.daily,
            },
            {
              name: "eventStartDate",
              title: "Event Start Date",
              type: "date",
              hidden: ({ parent }) => !parent?.daily,
            },
            {
              name: "eventEndTime",
              title: "Event End Time",
              type: "datetime",
              hidden: ({ parent }) => !parent?.daily,
            },
            {
              name: "eventTime",
              title: "Event Time",
              type: "string",
              hidden: ({ parent }) => !parent?.daily,
            },
            {
              name: "venue",
              title: "Venue",
              type: "string",
            },
            {
              name: "eventLink",
              title: "Event Link",
              type: "string",
            },
            {
              name: "buyTicketsLink",
              title: "Buy Tickets Link",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "crowdFunder",
      title: "Crowd Funder",
      type: "blockContent",
    },
    {
      name: "reviews",
      title: "Reviews",
      type: "array",
      of: [
        {
          title: "Type below and select a product category...",
          name: "category",
          type: "object",
          fields: [
            { name: "from", title: "From", type: "string" },
            { name: "reviewLink", title: "Review Link", type: "string" },
            { name: "stars", title: "Stars", type: "number" },
            { name: "quote", title: "Quote", type: "string" },
          ],
        },
      ],
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
