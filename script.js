// CountAPI endpoints for each website
const urls = {
  site1: "https://api.countapi.xyz/hit/anuwh-md-mini.vercel.app/visits",
  site2: "https://api.countapi.xyz/hit/anuwa-md-mini-964f9cb6f031.herokuapp.com/visits",
  site3: "https://api.countapi.xyz/hit/anuwh-mini-c136580ad3fd.herokuapp.com/visits"
};

async function updateCounts() {
  for (let id in urls) {
    try {
      let res = await fetch(urls[id]);
      let data = await res.json();
      document.getElementById(id).innerText = data.value + " views";
    } catch (e) {
      document.getElementById(id).innerText = "Error loading count";
    }
  }
}

// Run function when page loads
updateCounts();
