
import About from "@/components/About";
import NotreApproche from "@/components/Approach";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Services/>
      <NotreApproche/>
     
      <About/>
      <Footer/>
    </div>
  );
}
