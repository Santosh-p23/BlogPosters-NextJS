import Head from 'next/head';

type Props = {
    title:string
}

const CustomHead = ({ title }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Santosh Pangeni is a software developer building applications and websites."
      />
      <meta
        name="keywords"
        content="santosh pangeni"
      />
      <meta property="og:title" content="Santosh Pangeni's Portfolio" />
      <meta
        property="og:description"
        content="A CS enthusiast, a software developer, and a lifelong learner."
      />
      {/* <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" /> */}
      {/* <meta property="og:url" content="http://santospangeni.com.np" /> */}
      {/* <meta name="twitter:card" content="summary_large_image" /> */}
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Santosh Pangeni',
};
