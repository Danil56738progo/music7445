document.addEventListener("DOMContentLoaded", function () {
  const audioPlayer = document.getElementById("audioPlayer");
  const audioSource = document.getElementById("audioSource");
  const trackList = document.getElementById("trackList");

  // Создаем список треков
  for (let i = 1; i <= 100; i++) {
    const option = document.createElement("option");
    option.value = `music/track${i}.mp3`;
    option.textContent = `Трек ${i}`;
    trackList.appendChild(option);
  }

  // Обработчик изменения выбора трека
  trackList.addEventListener("change", function () {
    audioSource.src = this.value;
    audioPlayer.load();
    audioPlayer.play();
  });
});
