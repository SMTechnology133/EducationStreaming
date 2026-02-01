// JavaScript Document
// Video data: title, subject, platform, playlist (ID), thumb (Video ID)
const videos = [
  // --- MALAWI CONTENT ---
  {
    title: "MSCE Biology Revision (MANEB)", 
    subject: "science", 
    platform: "malawi", 
    playlist: "PLu0W_9lII9ah7DDtYtflgwMwpT3xmjXY9", 
    thumb: "cUJdRpPhjqg"
  },
  {
    title: "Chichewa Literature & Grammar", 
    subject: "history", 
    platform: "malawi", 
    playlist: "PL0vU9PInV8X-R1hF_V7yV7pP7N0Z2J1_R", 
    thumb: "9m_A3V3GfW8"
  },
  {
    title: "MSCE Circle Geometry", 
    subject: "math", 
    platform: "malawi", 
    playlist: "PL_fH7B3qfUoW8uUInF8-qXU3r3xXhH2vJ", 
    thumb: "OZYGwwMfUHc"
  },

  // --- INTERNATIONAL CONTENT ---
  {
    title: "Algebra Basics", 
    subject: "math", 
    platform: "khan", 
    playlist: "PLSQl0a2vh4HBxR2-Q7bVOTNx1YqCr_qS0", 
    thumb: "H8MNv8_y3Is"
  },
  {
    title: "Biology - Ecology", 
    subject: "science", 
    platform: "crashcourse", 
    playlist: "PL8dPuuaLjXtOfse2ncvffeelTrqvVSx0Y", 
    thumb: "QnQe0xW_JY4"
  },
  {
    title: "SABC: Life Sciences Gr 12", 
    subject: "science", 
    platform: "sabc", 
    playlist: "PL9Kj8_x6XG_fA8GZ2S-O_u_W8nS-k7n9S", 
    thumb: "mc9N7gvp6bA"
  },
  {
    title: "World History", 
    subject: "history", 
    platform: "crashcourse", 
    playlist: "PL8dPuuaLjXtNgK6MZucdYldNkMybYIHKR", 
    thumb: "Yocja_N5nxw"
  },
  {
    title: "AfDB: African Economic Outlook", 
    subject: "history", 
    platform: "afdb", 
    playlist: "PLafDB_6f-Y-z-G8yS6C8pXpU7R3M2B3X", 
    thumb: "ZhT6JO7oKbo"
  },
  {
    title: "Calculus I", 
    subject: "math", 
    platform: "mit", 
    playlist: "PL590CCC2BC5AF3BC1", 
    thumb: "7K1sB05pE0A"
  }
];

// 1. Initial Card Loading
function loadVideos() {
  const container = document.getElementById("videoGrid");
  if (!container) return;
  container.innerHTML = ""; 
  
  videos.forEach((v, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.subject = v.subject;
    card.dataset.platform = v.platform;
    
    card.innerHTML = `
      <h3>${v.title}</h3>
      <div class="video-placeholder" data-playlist="${v.playlist}">
        <img src="https://img.youtube.com/vi/${v.thumb}/hqdefault.jpg" alt="${v.title}">
        <button class="play-btn">+JbY Play Lesson</button>
      </div>
      <div class="card-footer">
        <a href="https://www.youtube.com/playlist?list=${v.playlist}" target="_blank">Open in YouTube App</a>
      </div>
    `;
    container.appendChild(card);
  });
}

// 2. Playback Logic (Bypass Error 153)
document.addEventListener("click", function(e) {
  if (e.target.classList.contains("play-btn")) {
    const placeholder = e.target.parentElement;
    const playlistId = placeholder.dataset.playlist;
    
    // Privacy-enhanced URL +- autoplay
    const embedUrl = `https://www.youtube-nocookie.com/embed/videoseries?list=${playlistId}&autoplay=1&rel=0`;

    placeholder.innerHTML = `
      <iframe 
        src="${embedUrl}" 
        width="100%" 
        height="100%" 
        frameborder="0" 
        allow="autoplay; encrypted-media; picture-in-picture" 
        allowfullscreen
        style="position:absolute; top:0; left:0; border-radius: 4px;">
      </iframe>`;
  }
});

// 3. Search and Multi-Filter
function filterVideos() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const subFilter = document.getElementById("subject").value;
  const platFilter = document.getElementById("platform").value;
  
  document.querySelectorAll(".card").forEach(card => {
    const title = card.querySelector("h3").innerText.toLowerCase();
    const match = title.includes(query) && 
                  (subFilter === "all" || card.dataset.subject === subFilter) &&
                  (platFilter === "all" || card.dataset.platform === platFilter);
    card.style.display = match ? "block" : "none";
  });
}

document.addEventListener("DOMContentLoaded", loadVideos);