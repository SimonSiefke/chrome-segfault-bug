// To reproduce the issue:
// 1. Open the page in Chrome
// 2. in chrome devtools select "break on any xhr"
// 3. Once it is paused, reload the page
// 4. Chrome tab crashes with Segfault error

setInterval(async () => {
  const response = await fetch('https://www.google.com', { mode: 'no-cors' })
}, 1000)
