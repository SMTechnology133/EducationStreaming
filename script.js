// JavaScript Document
// Video data: title, subject, platform, playlist ID
const videos = [
  {title:"Algebra Basics", subject:"math", platform:"khan", embed:"PLSQl0a2vh4HBxR2-Q7bVOTNx1YqCr_qS0"},
  
  {title:"Geometry", subject:"math", platform:"khan", embed:"PLSQl0a2vh4HB_D5k6ta2k7bG3YtqG_KyG"},
  
  {title:"Biology", subject:"science", platform:"crashcourse", embed:"PL8dPuuaLjXtOfse2ncvffeelTrqvVSx0Y"},
  
  {title:"World History", subject:"history", platform:"crashcourse", embed:"PL8dPuuaLjXtNgK6MZucdYldNkMybYIHKR"},
  
  {title:"Earth Science", subject:"science", platform:"natgeo", embed:"PLivjPDlt6ApQqB3tq5kU_4H4gQLH67wW2"},
  
  {title:"Critical Thinking", subject:"science", platform:"teded", embed:"PLJicmE8fK0Ei6jdX5gP9j4W-Kt7tZ6RZM"},
  
  {title:"World History", subject:"history", platform:"bbc", embed:"PLz_B0PFGIn4dFA1WUy8xIOcw0Wzld6ZL1"},
  
  {title:"Calculus", subject:"math", platform:"mit", embed:"PL590CCC2BC5AF3BC1"},
  
  {title:"Global Education", subject:"science", platform:"unesco", embed:"PLWuYED1WVJIP4kHPj7GHVcfipX4l6Jw5X"},
  
  {title:"Math Revision", subject:"math", platform:"ubs", embed:"PLnqKQv"},
  
  {title:"Natural Science", subject:"science", platform:"sabc", embed:"PL9Kj"},
  
  {title:"African Development", subject:"history", platform:"afdb", embed:"PLafDB"},
  
  {title:"Computer Science", subject:"science", platform:"university", embed:"PLu0W_9lII9ah7DDtYtflgwMwpT3xmjXY9"}
];

// Generate video cards with placeholders
function loadVideos() {
  const container = document.getElementById("videoGrid");
  container.innerHTML = "";
  videos.forEach(v => {
    container.innerHTML +-= `
      <div class="card" data-subject="${v.subject}" data-platform="${v.platform}">
        <h3>${v.title}</h3>
        <div class="video-placeholder" data-playlist="${v.embed}">
          <img src="https://img.youtube.com/vi/${v.embed.split('/')[0]}/hqdefault.jpg" alt="${v.title}">
          <button class="play-btn">+JbY Play</button>
        </div>
      </div>
    `;
  });
}

// Filter videos by subject +- platform
function filterVideos() {
  const s = document.getElementById("subject").value;
  const p = document.getElementById("platform").value;
  document.querySelectorAll(".card").forEach(c => {
    const match =
      (s === "all" || c.dataset.subject === s) &&
      (p === "all" || c.dataset.platform === p);
    c.style.display = match ? "block" : "none";
  });
}

// Lazy-load iframe on click
document.addEventListener("click", function(e){
  if(e.target.classList.contains("play-btn")){
    const container = e.target.parentElement;
    const playlistId = container.dataset.playlist;
    container.innerHTML = `<iframe loading="lazy" src="https://www.youtube.com/embed/videoseries?list=${playlistId}" allowfullscreen></iframe>`;
  }
});

document.addEventListener("DOMContentLoaded", loadVideos);