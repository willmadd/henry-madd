import client from "../../client";

const api = {
  getPageContent: async (page) => {
    return client.fetch(
      `*[_type == "page" && slug.current == "${page}" ][0]{title, aboutMe, slug, education, heroImage, body}`
    );
  },
  getPosts: async () => {
    return client.fetch(
      `*[_type == "post"]{title, slug, mainImage, categories,body, publishedAt}`
    );
  },
  getPortfolio: async () => {
    return client.fetch(
      `*[_type == "portfolio"]{title, slug, link, mainImage, date, body}`
    );
  },

  getEventBySlug: async (slug) => {
      console.log(`*[_type == "event" && slug.current == "${slug}"]{title, slug, mainImage, categories, shows, body, reviews}`);
    return  await client.fetch(
        `*[_type == "event" && slug.current == "${slug}"][0]{title, slug, mainImage, "categories":categories[]->title, shows, body, reviews}`
      );
  }
};
export default api;
