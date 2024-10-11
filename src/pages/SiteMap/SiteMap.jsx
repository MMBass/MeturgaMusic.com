
import { useState, useEffect } from 'react';

function SiteMap() {
  const [sitemapData, setSitemapData] = useState('');

  useEffect(() => {
    const urls = [
      'https://MeturgaMusic.com',
      'https://meturgamusic.com/spotify-extension',
      'https://meturgamusic.com/about'
    ];

    const xmlContent = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.map((url) => `
        <url>
          <loc>${url}</loc>
        </url>
      `).join('')}
    </urlset>
    `;

    setSitemapData(xmlContent);
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: sitemapData }} />
  );
}

export default SiteMap;