/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import HowItHelps from './components/HowItHelps';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Specialties from './components/Specialties';
import Differentials from './components/Differentials';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Guarantee from './components/Guarantee';
import Urgency from './components/Urgency';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="font-sans text-text-muted bg-white min-h-screen selection:bg-primary/30 selection:text-primary-dark">
      <Hero />
      <PainPoints />
      <HowItHelps />
      <About />
      <Testimonials />
      <Specialties />
      <Differentials />
      <HowItWorks />
      <FAQ />
      <Pricing />
      <Guarantee />
      <Urgency />
      <FinalCTA />
      <Footer />
      
      <WhatsAppButton />
    </div>
  );
}
