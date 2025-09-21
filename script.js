// CountAPI custom namespace + keys
const urls = {
  site1: "https://api.countapi.xyz/hit/mycounter/anuwh-md-mini",
  site2: "https://api.countapi.xyz/hit/mycounter/anuwa-md-mini-964f9cb6f031",
  site3: "https://api.countapi.xyz/hit/mycounter/anuwh-mini-c136580ad3fd"
};

async function updateCounts() {
  for (let id in urls) {
    try {
      let res = await fetch(urls[id]);
      let data = await res.json();
      document.getElementById(id).innerText = data.value + " views";
    } catch (e) {
      document.getElementById(id).innerText = "Error loading count";
      console.error("Error fetching count for", id, e);
    }
  }
}

updateCounts();
