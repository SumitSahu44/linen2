import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

// Page Components (Make sure to create these files in /pages folder)
import Home from './pages/Home';
import About from './pages/About';
import ProductPage from './pages/ProductPage';
import Management from './pages/Management';
import TradeEnquiry from './pages/TradeEnquiry';
import EQuotation from './pages/EQuotation';
import Auction from './pages/Auction';
import Career from './pages/Career';
import Circulars from './pages/Circulars';
import Reviews from './pages/Reviews';
import Appointment from './pages/Appointment';
import Tenders from './pages/Tenders';
import MediaEvents from './pages/MediaEvents';
import TextileMap from './pages/Associates';
import Blog from './pages/Blog'; // Assuming you have a Blog page
import Contact from './pages/ContactUs'; // Assuming you have a Contact page
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans antialiased bg-white text-slate-900">

        {/* Navbar: Isme humne Mega Menu setup kiya hai */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            {/* 1. Core Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/management" element={<Management />} />

            {/* 2. Products & Media */}
            <Route path="/products" element={<ProductPage />} />

            {/* 3. B2B Operations */}
            <Route path="/trade-enquiry" element={<TradeEnquiry />} />
            <Route path="/quotation" element={<EQuotation />} />
            <Route path="/e-auction" element={<Auction />} />
            <Route path="/tenders" element={<Tenders />} /> {/* Shared logic with Auction */}
            <Route path="/textile-map" element={<TextileMap />} />
            {/* 4. Corporate & Careers */}
            <Route path="/careers" element={<Career />} />
            <Route path="/circulars" element={<Circulars />} />
            <Route path="/blog" element={<Blog />} /> {/* Shared logic with Circulars */}
            <Route path="/contact" element={<Contact />} /> {/* Contact page route */}

            {/* 5. Customer & Utility */}
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/appointment" element={<Appointment />} />

            <Route path="/media" element={<MediaEvents />} />
          </Routes>
        </main>

        {/* Footer: Google Map aur Social Links ke saath */}
        <Footer />

        {/* Floating Actions: WhatsApp aur Live Chat */}
        <FloatingActions />

      </div>
    </Router>
  );
}

export default App;