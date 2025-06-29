import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import ProductGrid from "../components/ProductGrid";
import FeatureBanner from "../components/FeatureBanner";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  hero: Hero,
  carousel: Carousel,
  product_grid: ProductGrid,
  feature_banner: FeatureBanner,
};

storyblokInit({
  accessToken: "dXDoSzFr16QF4JqROtrrpAtt",
  use: [apiPlugin],
  components,
  apiOptions: {
    region: ''
  }
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
