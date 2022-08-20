console.log("welcome to spotify");
//initialize the variables
let songIndex=0;
let audioelement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let SongItems=Array.from(document.getElementsByClassName('SongItem'));
let songs=[
    {songName: "Achyutam Keshavam", filePath: "songs/1.mp3", coverPath: "covers/cover1.jpg"},
    {songName: "Jo hai Albela", filePath: "songs/2.mp3", coverPath: "covers/cover2.jpg"},
    {songName: "Radhe Radhe bol mana", filePath: "songs/3.mp3", coverPath: "covers/cover3.jpg"},
    {songName: "Shri Krishna Govinda", filePath: "songs/4.mp3", coverPath: "covers/cover4.jpg"},
    {songName: "Shyama aan baso", filePath: "songs/5.mp3", coverPath: "covers/cover5.jpg"},
    {songName: "Wo kisna hai", filePath: "songs/6.mp3", coverPath: "covers/cover6.jpg"},
]
SongItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src= songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
//audioElement.play();
//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1; 
    }
    else{
        audioelement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})

//Listen To Events
audioelement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change', ()=>{
     audioelement.currentTime= myProgressBar.value*audioelement.duration/100;
})
const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
       
    })
}
Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element)=>{
  element.addEventListener('click', (e)=>{
     makeAllPlays();
     songIndex= parseInt(e.target.id);
     e.target.classList.remove('fa-circle-play');
     e.target.classList.add('fa-circle-pause');
     audioelement.src = `songs/${songIndex}.mp3`;
     masterSongName.innerText=songs[songIndex-1].songName;
     audioelement.currentTime=0;
     audioelement.play();
     gif.style.opacity=1; 
     masterPlay.classList.remove('fa-circle-play');
     masterPlay.classList.add('fa-circle-pause');

  })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=6){
        songIndex= 1;
    }
    else{
        songIndex+=1;
    }
    audioelement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex-1].songName;
     audioelement.currentTime=0;
     audioelement.play();   
     masterPlay.classList.remove('fa-circle-play');
     masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=1){
        songIndex= 6;
    }
    else{
        songIndex-=1;
    }
    audioelement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex-1].songName;
     audioelement.currentTime=0;
     audioelement.play();   
     masterPlay.classList.remove('fa-circle-play');
     masterPlay.classList.add('fa-circle-pause');
})