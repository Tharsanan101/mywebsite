import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET() {
  try {
    const htmlPath = join(process.cwd(), 'index.html');
    const htmlContent = await readFile(htmlPath, 'utf-8');
    
    return new Response(htmlContent, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    });
  } catch (error) {
    console.error('Error reading HTML:', error);
    return new Response('Error loading page', { status: 500 });
  }
}
