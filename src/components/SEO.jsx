import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  canonical,
}) => {
  return (
    <Helmet>
      {/* Title */}
      <title>{title}</title>

      {/* Meta */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Avdesh Glass House" />
      <meta name="robots" content="index, follow" />

      {/* Canonical */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph (WhatsApp / Facebook) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Avdesh Glass House" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;
