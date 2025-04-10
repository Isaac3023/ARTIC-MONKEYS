// This is a list of songs.
const songs = [
    "Crying Lighting",
    "Abrella",
    "Knee Socks",
];

// Defines the button and display in HMTL
const button = document.getElementById("songButton");
const display = document.getElementById("songTitle");

// Generates random song from songs list
button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * songs.length);
    const randomSong = songs[randomIndex];
    display.textContent = randomSong;
})