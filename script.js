const audio = document.getElementById('audio');
const playButton = document.getElementById('playButton');
const buttonImage = document.getElementById('buttonImage');

playButton.addEventListener('click', () => {
    // Устанавливаем громкость на 99%
    audio.volume = 0.99; // Устанавливаем громкость на 99%
    
    // Проверяем, воспроизводится ли аудио
    if (audio.paused) {
        audio.play(); // Если пауза, воспроизводим аудио
        buttonImage.src = "pause-button.png"; // Меняем изображение на паузу
    } else {
        audio.pause(); // Если воспроизводится, ставим на паузу
        buttonImage.src = "play-button.png"; // Меняем изображение на воспроизведение
    }
});
