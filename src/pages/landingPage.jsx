import ContactUs from '../components/contactUs';
import ExplorePrograms from '../components/explorePrograms';
import Faqs from '../components/faqs';
import Footer from '../components/footer';
import HeroSection from '../components/heroSection';
import Jumbotron from '../components/jumbotron';

const LandingPage = () => {
  return (
    <div>
      <Jumbotron />
      <HeroSection />
      <ExplorePrograms id="programs" />
      <Faqs id="faqs" />
      <ContactUs id="contact" />
      <Footer />
    </div>
  );
};

export default LandingPage;
