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
      name: 'shows',
      title: 'Shows',
      type: "array",
      of: [
        { title: 'Type below and select a product category...',
         name: 'category',
         type: 'object',
         fields: [
           {
             name: "eventStartTime",
             title: "Event Start Time",
             type: "datetime",
           },
           {
            name: "eventName",
            title: "Event Name",
            type: "string",
            description: "(e.g. Ludlow Fringe Festival)"
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
      name: "reviews",
      title: "Reviews",
      type: "array",
      of: [
        { title: 'Type below and select a product category...',
         name: 'category',
         type: 'object',
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
