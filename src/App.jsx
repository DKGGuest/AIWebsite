import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Benefits from './sections/Benefits';
import Roadmap from './sections/Roadmap';
import Pricing from './sections/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppChat from './components/WhatsAppChat';
import ExploreMorePage from './pages-dummy/ExploreMorePage';

// Dynamic metadata based on route
const getPageMetadata = (pathname) => {
  const metadata = {
    '/': {
      title: 'DKG Labs – AI-Driven Computer Vision & Generative AI Solutions',
      description: 'Explore DKG Labs for cutting-edge AI solutions in Computer Vision and Generative AI. Best services for your needs.',
      keywords: 'DKG Labs, AI, Computer Vision, Generative AI, React, Vercel, Web Development, Machine Learning',
    },
    '/explore-more': {
      title: 'Explore More – DKG Labs AI Innovations',
      description: 'Discover more about DKG Labs’ innovative AI solutions and services.',
      keywords: 'DKG Labs, AI innovations, Computer Vision, Generative AI, explore',
    },
  };

  return metadata[pathname] || metadata['/'];
};

const App = () => {
  const location = useLocation();
  const { title, description, keywords } = getPageMetadata(location.pathname);

  // Scroll to top on route change (for better user experience and SEO)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {/* SEO Meta Tags with Helmet (Client-side, limited for CSR SEO) */}
      <Helmet>
        {/* Basic SEO */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags (Social Media Preview) */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://www.dkglabs.com/og-image.jpg" /> {/* Update with actual image URL */}
        <meta property="og:url" content={`https://www.dkglabs.com${location.pathname}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DKG Labs" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://www.dkglabs.com/twitter-image.jpg" /> {/* Update with actual image URL */}
        <meta name="twitter:site" content="@DKGLabs" /> {/* Update with your Twitter handle */}

        {/* Structured Data (Schema.org) for Google Rich Results */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "DKG Labs",
            "url": "https://www.dkglabs.com",
            "logo": "https://www.dkglabs.com/logo.png",
            "description": "DKG Labs provides AI-driven solutions in Computer Vision and Generative AI.",
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "mdoffice@dkgrouplabs.com",
              "telephone": "+91-9810805605", // Optional: Add your phone number
              "contactType": "Customer Service"
            },
            "sameAs": [
              "https://www.facebook.com/DKGLabs",
              "https://www.twitter.com/DKGLabs",
              "https://www.linkedin.com/company/dkg-labs"
            ], // Add your social media profiles
          })}
        </script>

        {/* Additional Schema for Homepage (if on root path) */}
        {location.pathname === '/' && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://www.dkglabs.com",
              "name": "DKG Labs",
              "description": "AI-Driven Computer Vision & Generative AI Solutions",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.dkglabs.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })}
          </script>
        )}
      </Helmet>

      {/* Preload critical resources for performance (optional, manual in CRA) */}
      <link rel="preload" href="/fonts/your-font.woff2" as="font" type="font/woff2" crossorigin />
      <link rel="preload" href="/images/hero-image.jpg" as="image" />

      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Benefits />
                <Roadmap />
                <Pricing />
                <Contact />
              </>
            }
          />
          <Route path="/explore-more" element={<ExploreMorePage />} />
        </Routes>
        
        <Footer />
      </div>

      {/* WhatsApp Chat positioned with accessibility */}
      <div className="fixed bottom-4 right-4" style={{ zIndex: 6, left: 'initial' }} aria-label="WhatsApp Chat Support">
        <WhatsAppChat />
      </div>
    </>
  );
};

export default App;






