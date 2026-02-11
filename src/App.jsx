import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutYash from './components/AboutYash';
import TimelineSection from './components/TimelineSection';
import OriginStory from './components/OriginStory';
import AboutGoatLife from './components/AboutGoatLife';
import MetricsDashboard from './components/MetricsDashboard';
import CampaignShowcase from './components/CampaignShowcase';
import CompanyLinks from './components/CompanyLinks';
import { TestimonialsSection } from './components/TestimonialsSection';
import Footer from './components/Footer';
import './index.css';

const testimonials = [
  {
    author: { name: "Rohit Sharma", handle: "@rohit_runs", avatar: "RS" },
    rating: 5,
    text: "Subah GOAT Oats khane ke baad energy full rehti hai. Gym performance improve hua hai."
  },
  {
    author: { name: "Priya Mehta", handle: "@priya_fit", avatar: "PM" },
    rating: 4,
    text: "Healthy bhi hai aur tasty bhi. Breakfast boring nahi lagta ab."
  },
  {
    author: { name: "Aman Verma", handle: "@aman_grind", avatar: "AV" },
    rating: 5,
    text: "Consistency maintain karna easy ho gaya. Nutrition sorted."
  },
  {
    author: { name: "Neha Kapoor", handle: "@neha_active", avatar: "NK" },
    rating: 4,
    text: "Pehle doubt tha, par ab routine ka part ban gaya."
  },
  {
    author: { name: "Karan Patel", handle: "@karan_lifts", avatar: "KP" },
    rating: 5,
    text: "Protein intake manage karna simple ho gaya. Results dikhe."
  }
];

function App() {
  return (
    <div className="smooth-scroll">
      <Navbar />

      <main>
        <section id="hero"><Hero /></section>
        <section id="why">
          <AboutYash />
          <TimelineSection />
          <OriginStory />
        </section>

        <section id="build"><AboutGoatLife /></section>
        <section id="scale"><MetricsDashboard /></section>
        <section id="reach"><CampaignShowcase /></section>
        <section id="connect"><CompanyLinks /></section>

        <section id="testimonials">
          <TestimonialsSection
            title="What high performers say about GOAT Oats"
            description="Real feedback from people pushing limits daily."
            testimonials={testimonials}
          />
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default App;
