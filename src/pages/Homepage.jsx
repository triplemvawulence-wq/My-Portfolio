
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import About from "../components/About";
import Experience from "../components/Experience"
import WWWMe from "../components/WWWMe";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Experience />
      <WWWMe />
      <CallToAction />
      <Footer />
    </>
  );
}