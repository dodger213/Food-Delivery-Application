import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
}

export default function SEO({ title, description }: SeoProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="reynold"/>
      <meta name="keywords" content="React,Tailwind,Node,Express,Shadcn" />
    </Helmet>
  );
}
