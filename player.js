document.addEventListener("DOMContentLoaded", function () {
  const sets = document.querySelectorAll(".set-entry");
  const player = document.getElementById("mixcloud-player");
  const iframe = document.getElementById("mixcloud-iframe");
  const closeBtn = document.getElementById("player-close");

  sets.forEach(set => {
    set.querySelector(".play-button").addEventListener("click", function () {
      const url = this.getAttribute("data-url");
      iframe.src = url + "embed/";
      player.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", function () {
    player.style.display = "none";
    iframe.src = "";
  });
});