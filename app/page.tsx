'use client';

import { useEffect, useRef } from 'react';

export default function Home() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Load the HTML content into the iframe
    const loadContent = async () => {
      try {
        const response = await fetch('/api/html');
        const htmlContent = await response.text();
        
        if (iframeRef.current) {
          const iframeDoc = iframeRef.current.contentDocument;
          if (iframeDoc) {
            iframeDoc.open();
            iframeDoc.write(htmlContent);
            iframeDoc.close();
          }
        }
      } catch (error) {
        console.error('Error loading HTML:', error);
      }
    };

    loadContent();
  }, []);

  return (
    <iframe
      ref={iframeRef}
      style={{
        width: '100%',
        height: '100vh',
        border: 'none',
        display: 'block',
      }}
      title="Klever Books"
    />
  );
}
