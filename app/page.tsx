'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    // Fetch the static HTML
    fetch('/index.html')
      .then(res => res.text())
      .then(html => {
        // Extract just the body content
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const mainContent = doc.getElementById('main');
        if (mainContent) {
          setContent(mainContent.innerHTML);
        }
      })
      .catch(err => console.error('Error loading page:', err));
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: content }} />
  );
}
