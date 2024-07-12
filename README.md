
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Music Player</title>
    <link rel="stylesheet" href="my.css" />
  </head>
  <body>
     class="container">
      <h1>Музыкальный плеер</h1>
      <div class="player">
        <audio id="audioPlayer" controls>
          <source id="audioSource" src="music/track1.mp3" type="audio/mp3" />
          Ваш браузер не поддерживает аудиоэлемент.
        </audio>
        <select id="trackList">
          <!-- Опции будут добавлены через JavaScript -->
        </select>
      
    </div>
    <script src="my.js"></script>
  </body>
</html>
