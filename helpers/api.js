import client from "../client";

const api = {
  getPageContent: async (page) => {
    return client.fetch(
      `*[_type == "page" && slug.current == "${page}" ][0]{title, aboutMe, slug, education, heroImage, body, featureImages}`
    );
  },
  getPosts: async () => {
    return client.fetch(
      `*[_type == "post"]{title, slug, mainImage, categories,body, publishedAt, excerpt}`
    );
  },
  getPortfolio: async () => {
    return client.fetch(
      `*[_type == "portfolio"]{title, slug, link, mainImage, date, body}`
    );
  },

  getEventBySlug:  (slug) => {
    
    return   client.fetch(
        `*[_type == "event" && slug.current == "${slug}"][0]{title, slug, mainImage, "categories":categories[]->title, shows, body, crowdFunder, reviews, snowsmith}`
      );
  }
};
export default api;
