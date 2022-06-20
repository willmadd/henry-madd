import client from "../client";
import { PortableText } from "@portabletext/react";
import PortfolioPage from "../components/PotfolioPage";
const ArticlePage = ({ article, router, ...rest }) => {
  return (
    <>
      <PortfolioPage {...article} />
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
    `*[_type == "portfolio" && slug.current == $slug][0]{
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
  const articles = await client.fetch('*[_type == "portfolio"]{slug}');
  return articles;
}
