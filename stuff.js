// This is a list of songs.
const songs = [
    "Crying Lighting",
    "Abrella",
    "Knee Socks",
    "505",
    "R u Mine",
    "Do I Wanna Know?",
    "One For The Road",
    "I Wanna Be Yours",
    "Fireside",
    
];

// Dictionary Example
// const songsDict = {
//     "The Car": "<iframe width="784" height="441" src="https://www.youtube.com/embed/hWoG5XAOPvY" title="Arctic Monkeys - The Car (Official Audio)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>",
// }

// video = "www.youtube.com/watch?" + songTitle + ".com"
// <iframe width="784" height="441" src="https://www.youtube.com/embed/hWoG5XAOPvY" title="Arctic Monkeys - The Car (Official Audio)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

// Defines the button and display in HMTL
const button = document.getElementById("songButton");
const display = document.getElementById("songTitle");

// Generates random song from songs list
button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * songs.length);
    const randomSong = songs[randomIndex];
    display.textContent = randomSong;
})