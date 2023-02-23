var songs1 = document.querySelector('audio')
const playWorking = document.getElementById("play");
const songName=document.querySelector(".SongName");
const curruntSinger = document.querySelector(".ArtistName");
const coverimg= document.querySelector(".backimg");
let progresstime=document.querySelector(".meter")
let dur=document.querySelector(".endtime");
let currenttime=document.querySelector(".starttime");
let bar=document.querySelector(".progeess")

let songs = [
    {
        audio: "Night Changes",
        singer: " ONE DIRECTION",
        Cover: "./cover/oneD.jpg",
        songPath: "./songs/Night-Changes.mp3",
      
    }
    ,
   
    ,
    {
        audio: "GOAT",
        singer: "Siddu",
        Cover: "./cover/Siddu.jpg",
        songPath: "./songs/Goat(PagalWorld.com.se).mp3",
        

    }
    ,
    {
        audio: "srivalli",
        singer: "Javed ali",
        Cover: "./cover/srivalli.jpg",
        songPath: "./songs/Srivalli(PagalWorld.com.se).mp3",
       

    }
    ,
    {
        audio: "Kesariya",
        singer: "Arijit Singh",
        Cover: "./cover/kesariya.jpeg",
        songPath: "./songs/Kesariya(PagalWorld.com.se).mp3",
       

    }
    ,
    {
        audio: "Ram Siya Ram",
        singer: "Sachet",
        Cover: "cover/Ramsiyaram.jpg",
        songPath: "./songs/Ram Siya Ram - Sachet Tandon 128 Kbps.mp3",
    }

]

let isplaying=false;
function playMusic(){
isplaying=true;
songs1.play();
playWorking.classList.remove("fa-play");
coverimg.classList.add("anime");
playWorking.classList.add("fa-pause");
}
function pausemusic(){
    isplaying=false;
songs1.pause();
playWorking.classList.remove("fa-pause");
coverimg.classList.remove("anime");
 playWorking.classList.add("fa-play")
}
playWorking.addEventListener("click",function(){
    isplaying?pausemusic():playMusic();

});

songsIndex=0;
 
    function allsongs(songs){
        songName.textContent=songs.audio;
        curruntSinger.textContent=songs.singer;
        coverimg.src=songs.Cover;
        songs1.src=songs.songPath;
        }
      const next = ()=>{
        songsIndex=(songsIndex+1) % songs.length; 
        allsongs(songs[songsIndex]);
        playMusic();
      };
      const prev = ()=>{
        songsIndex=(songsIndex- 1 + songs.length) % songs.length; 
        allsongs(songs[songsIndex]);
         playMusic();
      };
//  ********************* progress bar*************************
        songs1.addEventListener("timeupdate",function(event){
            const { currentTime,duration}=event.target;
        let progress_time= (currentTime/duration) * 100;
        progresstime.style.width = `${progress_time}%`;
        let min=Math.floor(duration / 60);
        let sec=Math.floor(duration % 60);
        let tot_Duration = `${min}:${sec}`;
             if(duration){
           dur.textContent=`${tot_Duration}`;
        }

        let currmin=Math.floor(currentTime / 60);
        let currsec=Math.floor(currentTime % 60);
       
        
        if(currsec<10)
        {
currsec=`0${currsec}`

        }
        let currtime= `${currmin}:${currsec}`;
            currenttime.textContent=`${currtime}`;
        });    

        bar.addEventListener("click", function(event){
            const {duration} = songs1;
            let move= (event.offsetX / event.target.clientWidth) *duration;
            songs1.currentTime= move;

        });

//  ********************* forward-Backward*************************

document.getElementById("Forward").addEventListener("click",next);

document.getElementById("Backward").addEventListener("click",prev);

