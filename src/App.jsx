// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import TopClipsSection from './components/TopClipsSection';
// import Testimonials from './components/Testimonials';
// import CallToAction from './components/CallToAction';
// import Footer from './components/Footer';
// import Services from './pages/Services';
// import ContactPage from './pages/Contact';
// import Information from './pages/Information';
// import Dashboard from './components/Dashboard';
// import Statistics from "./components/Statistics";
// import Section from "./components/Section";
// import System from "./components/System";
// import SuccessStories from './components/SuccessStories';
// import Card from "./components/Card";
// import TestimonialSection from "./components/TestimonialSection";
// import Hero2 from './components/Hero2'; // Adjust path if needed
// import Asksec from './components/Asksec';
// import Page4 from "./components/Page4";
// import Page5 from "./components/Page5";
// import AdPage from './components/AdPage';
// import ContactUs from './components/ContactUs';
// import FramerPage from './components/FramerPage';
// import Product from './pages/Product';
// import Company from './pages/Company';
// import Knowledge from './pages/Knowledge';
// import Careers from './pages/Careers';
// import WhyChooseUs from "./components/WhyChooseUs";
// function App() {
//   return (
//     <Router>
//       <div className="bg-black min-h-screen">
//         <Header />
//         <Routes>
//           <Route 
//             path="/" 
//             element={
//               <>
//                 <Hero />
//                 <AdPage />
//                 <Dashboard />
//                 <TopClipsSection />
//                 <System />
//                 <Section />
//                 <FramerPage />
//                 <Hero2 />
//                 <Asksec />
//                 <Page4 />
//                 <Page5/>
//                 <TestimonialSection />
//                 <SuccessStories />
//                 <Card />
//                 <Statistics />
//                 <WhyChooseUs/>
//                 <Testimonials />
//                 <ContactUs />
//                 <CallToAction />
//               </>
//             } 
//           />
//           <Route path="/services" element={<Services />} />
//           <Route path="/contact" element={<ContactPage />} />
//           <Route path="/product" element={<Product />} />
//         <Route path="/company" element={<Company />} />
//         <Route path="/contaact" element={<Contact/>} />
//         <Route path="/careers" element={<Careers />} />
//         <Route path="/Knowledge " element={<Knowledge />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;












import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import TopClipsSection from './components/TopClipsSection';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Services from './pages/Services';
import ContactPage from './pages/Contact';
import Dashboard from './components/Dashboard';
// import Statistics from './components/Statistics';
import Section from './components/Section';
import System from './components/System';
import SuccessStories from './components/SuccessStories';
import Card from './components/Card';
import TestimonialSection from './components/TestimonialSection';
import Hero2 from './components/Hero2';
import Asksec from './components/Asksec';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import AdPage from './components/AdPage';
import ContactUs from './components/ContactUs';
import FramerPage from './components/FramerPage';
import Product from './pages/Product';
import Company from './pages/Company';
import Knowledge from './pages/Knowledge';
import Careers from './pages/Careers';
import WhyChooseUs from './components/WhyChooseUs';

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen">
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <AdPage />
                <Dashboard />
                <TopClipsSection />
                <System />
                <Section />
                <FramerPage />
                <Hero2 />
                <Asksec />
                <Page4 />
                <Page5/>
                <TestimonialSection />
                <SuccessStories />
                <Card />
                {/* <Statistics /> */}
                <WhyChooseUs/>
                <Testimonials />
                <ContactUs />
                <CallToAction />
              </>
            } 
          />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/company" element={<Company />} />
          <Route path="/careers" element={<Careers />} />
         
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
