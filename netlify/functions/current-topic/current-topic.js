const fs = require('fs');

export default async (request, context) => {
  const { url } = await request.json();

  // Store the URL and timestamp in a CSV file
  const timestamp = Date.now();
  const data = `${url},${timestamp}\n`;
  fs.appendFileSync('admin/data.csv', data);

  // Trim the file to the last 100 lines
  const lines = fs.readFileSync('admin/data.csv', 'utf-8').split('\n');
  if (lines.length > 100) {
    const newLines = lines.slice(-100).join('\n');
    fs.writeFileSync('admin/data.csv', newLines);
  }

  // Return a response to the client
  return new Response('URL sent to server!', {
    headers: { 'Content-Type': 'text/plain' },
  });
};
