import "../styles/globals.css";
import Layout from "../components/layout";
import Header from "../components/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Header>
        <link rel="icon" type="image/x-icon" href="/logo-mobile.svg" />
        <script src="/fontawesome.js" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-M49NEHWJ10"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
           window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-M49NEHWJ10');

          `,
          }}
        />
        <title>Marçal Jr</title>
        <meta
          property="og:image"
          content="https://marssaljr.vercel.app/logo.svg"
        />
        <meta property="og:image:type" content="image/svg" />
      </Header>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
