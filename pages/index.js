import BuyCrypto from "../components/homePage/BuyCrypto";
import Pricing from "../components/homePage/Pricing";
import Hero from "../components/homePage/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title='LaslesVPN Landing Page' />
      <Layout>
        <Hero />
        <BuyCrypto />
        <Pricing />
      </Layout>
    </>
  );
}
