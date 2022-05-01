import client from "../client";
import { PortableText } from "@portabletext/react";

const ArticlePage = ({ article, router }) => {
  console.log(article);
  return (
    <>
      <h1>{article.title}</h1>
      <PortableText value={article.body} />
    </>
  );
};
export default ArticlePage;

export const getStaticProps = async ({
  params: { slug = { current: "" } },
}) => {
  const [article] = await Promise.all([getArticleContent(slug)]);
  return { props: { article }, revalidate: 60 };
};

export const getStaticPaths = async () => {
  const [slugs] = await Promise.all([getArticlesSlugs()]);
  const paths = slugs.map((c) => {
    return { params: { slug: c.slug.current } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getArticleContent = (slug) => {
  const article = client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      slug,
      mainImage,
      body
  }`,
    {
      slug,
    }
  );
  return article;
};

export async function getArticlesSlugs() {
  const articles = await client.fetch('*[_type == "post"]{slug}');
  return articles;
}
