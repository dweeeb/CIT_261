fetch("https://eloquentjavascript.net/author", {headers: { "Accept": "text/plain" }}).then(response => {
  console.log(response.status);
  console.log(response.text);
  console.log(response.headers.get("Content-Type"));
  // → text/plain
});

fetch("https://eloquentjavascript.net/author", {headers: { "Accept": "text/HTML" }}).then(response => {
  console.log(response.status);
  console.log(response.text);
  console.log(response.headers.get("Content-Type"));
  // → text/plain
});

fetch("https://eloquentjavascript.net/author", {headers: { "Accept": "application/json" }}).then(response => {
  console.log(response.status);
  console.log(response.text);
  console.log(response.headers.get("Content-Type"));
  // → text/plain
});

fetch("https://eloquentjavascript.net/author", {headers: { "Accept": "rainbows+unicorns" }}).then(response => {
  console.log(response.status);
  console.log(response.text);
  console.log(response.headers.get("Content-Type"));
  // → text/plain
});