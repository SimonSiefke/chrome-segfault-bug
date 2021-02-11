// To reproduce the issue:
// 1. Open the page in Chrome
// 2. in chrome devtools select "break on any xhr"
// 3. Once it is paused, comment out the code in this file
// 4. Reload the page

setInterval(async () => {
  const response = await fetch('https://www.google.com', { mode: 'no-cors' })
}, 1000)
