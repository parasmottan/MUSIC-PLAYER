const songsAndData = [{
  SongName: "The Last Ride",
  Artist : "Sidhu Moose Wala Ft. Wazir Patar"
  
}];


let progress = document.getElementById("prgrs");
let song = document.getElementById("song");
let CntrlIcon = document.getElementById("ctrlicon");

let imgrotate = document.getElementsByClassName("jsimg")


song.onloadedmetadata = function () {
  
  prgrs.max = song.duration;
  prgrs.value = song.currentTime;


}



function playpause() {
  
  if (CntrlIcon.classList.contains("fa-pause")) {
  
    song.pause();
    CntrlIcon.classList.remove("fa-pause");
    CntrlIcon.classList.add("fa-play");


  } else {
    
    song.play();
    CntrlIcon.classList.add("fa-pause");
    CntrlIcon.classList.remove("fa-play");
}



}



if (song.play()) {
  
  setInterval(() => {
    prgrs.value = song.currentTime;


}, 500)


}


prgrs.onchange = function () {
  
  song.play();
  song.currentTime = prgrs.value;
  CntrlIcon.classList.add("fa-pause");
  CntrlIcon.classList.remove("fa-play");
}



const cd = document.querySelector('.songimg');
const toggleButton = document.getElementById('ImgDiv');
let isRotating = false;

toggleButton.addEventListener('click', () => {
    if (isRotating) {
        cd.style.animationDuration = '0s'; // Stop the rotation

    } else {
        cd.style.animationDuration = '60s'; // Start the rotation with 2s duration
       
    }
    isRotating = !isRotating;
});

