import React from "react";

const Robots = () => {
  return (
    <pre>
      {`# robots.txt file for DKG Labs

User-agent: *
Allow: /#features
Allow: /#pricing
Allow: /#roadmap
Allow: /#contact

Disallow: /cgi-bin/

Sitemap: https://www.dkglabs.com/sitemap.xml`}
    </pre>
  );
};

export default Robots;


