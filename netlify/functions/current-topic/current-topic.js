const fs = require('fs');
const path = require('path');

export default async (request, context) => {
  const { url } = await request.json();

  // Store the URL and timestamp in a markdown file
  const timestamp = Date.now();
  const markdown = `# Current topic\n\n[${url}](${url})\n\n_Last updated: ${timestamp}_\n\n`;
  fs.writeFileSync(path.join(__dirname, '..', 'current-topic.md'), markdown);

  // Return a response to the client
  return new Response('URL sent to server!', {
    headers: { 'Content-Type': 'text/plain' },
  });
};

// Path: netlify\edge-functions\currentlyfocusedon\currentlyfocusedon.js
