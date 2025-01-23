const songs = [
    {name:'Forever', artist:'Gyaki', genre:'AfroBeats', length:'3:19', id:'1' , playing:false, views:'31M'}, 
    {name:'Agora hills', artist:'Doja Cat', genre:'UrbanHits', length:'4:25', id:'2', playing:false, views:'31M'},
    {name:'Suicidal', artist:'YNM Melly', genre:'HipHop', length:'3:44', id:'3', playing:false, views:'31M'},
    {name:'Yatapita Review', artist:'Diamond Platnumz', genre:'Bongo', length:'5:27', id:'4', playing:false, views:'31M'},
    {name:'Wine To The Top', artist:'Vybz Kartel ft Wiz Kid', genre:'DanceHall', length:'3:00', id:'5', playing:false, views:'31M'},
    {name:'Work From Home', artist:'Fifth Harmony', genre:'UrbanHits', length:'3:39', id:'6', playing:false, views:'31M'},
    {name:'Dont Call Me Up', artist:'Mabel', genre:'Pop', length:'2:58', id:'7', playing:false, views:'31M'},
    {name:'Gimmidat', artist:'Rayvanny ft Mayorkun', genre:'Bongo', length:'3:36', id:'8', playing:false, views:'31M'},
    {name:'We Dont Care', artist:'Rj The Dj ft Meddy ft Rayvanny', genre:'Bongo', length:'2:51', id:'9', playing:false, views:'31M'},
    {name:'Let You Love Me', artist:'Rita Ora', genre:'RockPop', length:'3:10', id:'10', playing:false, views:'31M'},
    {name:'Doja', artist:'Central Cee', genre:'HipHop', length:'1:45', id:'11', playing:false, views:'31M'},
    {name:'Umeme', artist:'Willy Paul', genre:'Bongo', length:'3:52', id:'12', playing:false, views:'31M'},
    {name:'Alcohol', artist:'JoeBoy', genre:'AfroBeats', length:'2:38', id:'13', playing:false, views:'31M'},
    {name:'Woman', artist:'Otile Brown X Harmonize', genre:'Bongo', length:'3:29', id:'14', playing:false, views:'31M'},
    {name:'Better', artist:'Khalid', genre:'R&B', length:'3:50', id:'15', playing:false, views:'31M'},
    {name:'Like It', artist:'Darassa ft Sho Madjonzi', genre:'Bongo', length:'3:23', id:'16', playing:false, views:'31M'},
    {name:'Understand', artist:'Omalay', genre:'AfroBeats', length:'3:07', id:'17', playing:false, views:'31M'},
    {name:'Body & Soul', artist:'JoeBoy', genre:'AfroBeats', length:'3:14', id:'18', playing:false, views:'31M'},
    {name:'Vibration', artist:'FireBoy DML', genre:'AfroBeats', length:'3:20', id:'19', playing:false, views:'31M'},
    {name:'Be Honest', artist:'Burna Boy ft Jorja Smith', genre:'AfroBeats', length:'4:20', id:'20', playing:false, views:'31M'},
    {name:'Castle on the Hill', artist:'Edsheeran', genre:'Pop', length:'4:48', id:'21', playing:false, views:'31M'},
    {name:'Beautiful Mistakes', artist:'Maroon 5 ft. Megan Thee Stallion', genre:'Rockpop', length:'3:48', id:'22', playing:false, views:'31M'},
    {name:'Photograph', artist:'Edsheeran', genre:'Rockpop', length:'4:17', id:'23', playing:false, views:'31M'},
    {name:'What I Put You Through', artist:'Conor Maynard', genre:'RockPop', length:'3:22', id:'24', playing:false, views:'31M'},
    {name:'Joy in Chaos', artist:'Holy Drill', genre:'Drill', length:'2:40', id:'25', playing:false, views:'31M'},
    {name:'Believer', artist:'Imagine Dragons', genre:'RockPop', length:'3:24', id:'26', playing:false, views:'31M'},
    {name:'Waka Waka (This Time For Africa)', artist:'Shakira', genre:'RockPop', length:'3:30', id:'27', playing:false, views:'31M'},
    {name:'Royalty', artist:'Egzod _ Maestro Chives ft. Neoni', genre:'RockPop', length:'3:40', id:'28', playing:false, views:'31M'},
    
    {name:'Forever', artist:'Gyaki', genre:'AfroBeats', length:'3:19', id:'29' , playing:false, views:'31M'}, 
    {name:'Agora hills', artist:'Doja Cat', genre:'UrbanHits', length:'4:25', id:'30', playing:false, views:'31M'},
    {name:'Suicidal', artist:'YNM Melly', genre:'HipHop', length:'3:44', id:'31', playing:false, views:'31M'},
    {name:'Yatapita Review', artist:'Diamond Platnumz', genre:'Bongo', length:'5:27', id:'32', playing:false, views:'31M'},
    {name:'Wine To The Top', artist:'Vybz Kartel ft Wiz Kid', genre:'DanceHall', length:'3:00', id:'33', playing:false, views:'31M'},
    {name:'Work From Home', artist:'Fifth Harmony', genre:'UrbanHits', length:'3:39', id:'34', playing:false, views:'31M'},
    {name:'Dont Call Me Up', artist:'Mabel', genre:'Pop', length:'2:58', id:'35', playing:false, views:'31M'},
    {name:'Gimmidat', artist:'Rayvanny ft Mayorkun', genre:'Bongo', length:'3:36', id:'36', playing:false, views:'31M'},
    {name:'We Dont Care', artist:'Rj The Dj ft Meddy ft Rayvanny', genre:'Bongo', length:'2:51', id:'37', playing:false, views:'31M'},
    {name:'Let You Love Me', artist:'Rita Ora', genre:'RockPop', length:'3:10', id:'38', playing:false, views:'31M'},
    {name:'Doja', artist:'Central Cee', genre:'HipHop', length:'1:45', id:'39', playing:false, views:'31M'},
    {name:'Umeme', artist:'Willy Paul', genre:'Bongo', length:'3:52', id:'40', playing:false, views:'31M'},
    {name:'Alcohol', artist:'JoeBoy', genre:'AfroBeats', length:'2:38', id:'41', playing:false, views:'31M'},
    {name:'Woman', artist:'Otile Brown X Harmonize', genre:'Bongo', length:'3:29', id:'42', playing:false, views:'31M'},
    {name:'Better', artist:'Khalid', genre:'R&B', length:'3:50', id:'43', playing:false, views:'31M'},
    {name:'Like It', artist:'Darassa ft Sho Madjonzi', genre:'Bongo', length:'3:23', id:'44', playing:false, views:'31M'},
    {name:'Understand', artist:'Omalay', genre:'AfroBeats', length:'3:07', id:'45', playing:false, views:'31M'},
    {name:'Body & Soul', artist:'JoeBoy', genre:'AfroBeats', length:'3:14', id:'46', playing:false, views:'31M'},
    {name:'Vibration', artist:'FireBoy DML', genre:'AfroBeats', length:'3:20', id:'47', playing:false, views:'31M'},
    {name:'Be Honest', artist:'Burna Boy ft Jorja Smith', genre:'AfroBeats', length:'4:20', id:'48', playing:false, views:'31M'},
    {name:'Castle on the Hill', artist:'Edsheeran', genre:'Pop', length:'4:48', id:'49', playing:false, views:'31M'},
    {name:'Beautiful Mistakes', artist:'Maroon 5 ft. Megan Thee Stallion', genre:'Rockpop', length:'3:48', id:'50', playing:false, views:'31M'},
    {name:'Photograph', artist:'Edsheeran', genre:'Rockpop', length:'4:17', id:'51', playing:false, views:'31M'},
    {name:'What I Put You Through', artist:'Conor Maynard', genre:'RockPop', length:'3:22', id:'52', playing:false, views:'31M'},
    {name:'Joy in Chaos', artist:'Holy Drill', genre:'Drill', length:'2:40', id:'53', playing:false, views:'31M'},
    {name:'Believer', artist:'Imagine Dragons', genre:'RockPop', length:'3:24', id:'54', playing:false, views:'31M'},
    {name:'Waka Waka (This Time For Africa)', artist:'Shakira', genre:'RockPop', length:'3:30', id:'55', playing:false, views:'31M'},
    {name:'Royalty', artist:'Egzod _ Maestro Chives ft. Neoni', genre:'RockPop', length:'3:40', id:'56', playing:false, views:'31M'},

    {name:'Forever', artist:'Gyaki', genre:'AfroBeats', length:'3:19', id:'57' , playing:false, views:'31M'}, 
    {name:'Agora hills', artist:'Doja Cat', genre:'UrbanHits', length:'4:25', id:'58', playing:false, views:'31M'},
    {name:'Suicidal', artist:'YNM Melly', genre:'HipHop', length:'3:44', id:'59', playing:false, views:'31M'},
    {name:'Yatapita Review', artist:'Diamond Platnumz', genre:'Bongo', length:'5:27', id:'60', playing:false, views:'31M'},
    {name:'Wine To The Top', artist:'Vybz Kartel ft Wiz Kid', genre:'DanceHall', length:'3:00', id:'61', playing:false, views:'31M'},
    {name:'Work From Home', artist:'Fifth Harmony', genre:'UrbanHits', length:'3:39', id:'62', playing:false, views:'31M'},
    {name:'Dont Call Me Up', artist:'Mabel', genre:'Pop', length:'2:58', id:'63', playing:false, views:'31M'},
    {name:'Gimmidat', artist:'Rayvanny ft Mayorkun', genre:'Bongo', length:'3:36', id:'64', playing:false, views:'31M'},
    {name:'We Dont Care', artist:'Rj The Dj ft Meddy ft Rayvanny', genre:'Bongo', length:'2:51', id:'65', playing:false, views:'31M'},
    {name:'Let You Love Me', artist:'Rita Ora', genre:'RockPop', length:'3:10', id:'66', playing:false, views:'31M'},
    {name:'Doja', artist:'Central Cee', genre:'HipHop', length:'1:45', id:'67', playing:false, views:'31M'},
    {name:'Umeme', artist:'Willy Paul', genre:'Bongo', length:'3:52', id:'68', playing:false, views:'31M'},
    {name:'Alcohol', artist:'JoeBoy', genre:'AfroBeats', length:'2:38', id:'69', playing:false, views:'31M'},
    {name:'Woman', artist:'Otile Brown X Harmonize', genre:'Bongo', length:'3:29', id:'70', playing:false, views:'31M'},
    {name:'Better', artist:'Khalid', genre:'R&B', length:'3:50', id:'71', playing:false, views:'31M'},
    {name:'Like It', artist:'Darassa ft Sho Madjonzi', genre:'Bongo', length:'3:23', id:'72', playing:false, views:'31M'},
    {name:'Understand', artist:'Omalay', genre:'AfroBeats', length:'3:07', id:'73', playing:false, views:'31M'},
    {name:'Body & Soul', artist:'JoeBoy', genre:'AfroBeats', length:'3:14', id:'74', playing:false, views:'31M'},
    {name:'Vibration', artist:'FireBoy DML', genre:'AfroBeats', length:'3:20', id:'75', playing:false, views:'31M'},
    {name:'Be Honest', artist:'Burna Boy ft Jorja Smith', genre:'AfroBeats', length:'4:20', id:'76', playing:false, views:'31M'},
    {name:'Castle on the Hill', artist:'Edsheeran', genre:'Pop', length:'4:48', id:'77', playing:false, views:'31M'},
    {name:'Beautiful Mistakes', artist:'Maroon 5 ft. Megan Thee Stallion', genre:'Rockpop', length:'3:48', id:'78', playing:false, views:'31M'},
    {name:'Photograph', artist:'Edsheeran', genre:'Rockpop', length:'4:17', id:'79', playing:false, views:'31M'},
    {name:'What I Put You Through', artist:'Conor Maynard', genre:'RockPop', length:'3:22', id:'80', playing:false, views:'31M'},
    {name:'Joy in Chaos', artist:'Holy Drill', genre:'Drill', length:'2:40', id:'81', playing:false, views:'31M'},
    {name:'Believer', artist:'Imagine Dragons', genre:'RockPop', length:'3:24', id:'82', playing:false, views:'31M'},
    {name:'Waka Waka (This Time For Africa)', artist:'Shakira', genre:'RockPop', length:'3:30', id:'83', playing:false, views:'31M'},
    {name:'Royalty', artist:'Egzod _ Maestro Chives ft. Neoni', genre:'RockPop', length:'3:40', id:'84', playing:false, views:'31M'},

    {name:'Forever', artist:'Gyaki', genre:'AfroBeats', length:'3:19', id:'85' , playing:false, views:'31M'}, 
    {name:'Agora hills', artist:'Doja Cat', genre:'UrbanHits', length:'4:25', id:'86', playing:false, views:'31M'},
    {name:'Suicidal', artist:'YNM Melly', genre:'HipHop', length:'3:44', id:'87', playing:false, views:'31M'},
    {name:'Yatapita Review', artist:'Diamond Platnumz', genre:'Bongo', length:'5:27', id:'88', playing:false, views:'31M'},
    {name:'Wine To The Top', artist:'Vybz Kartel ft Wiz Kid', genre:'DanceHall', length:'3:00', id:'89', playing:false, views:'31M'},
    {name:'Work From Home', artist:'Fifth Harmony', genre:'UrbanHits', length:'3:39', id:'90', playing:false, views:'31M'},
    {name:'Dont Call Me Up', artist:'Mabel', genre:'Pop', length:'2:58', id:'91', playing:false, views:'31M'},
    {name:'Gimmidat', artist:'Rayvanny ft Mayorkun', genre:'Bongo', length:'3:36', id:'92', playing:false, views:'31M'},
    {name:'We Dont Care', artist:'Rj The Dj ft Meddy ft Rayvanny', genre:'Bongo', length:'2:51', id:'93', playing:false, views:'31M'},
    {name:'Let You Love Me', artist:'Rita Ora', genre:'RockPop', length:'3:10', id:'94', playing:false, views:'31M'},
    {name:'Doja', artist:'Central Cee', genre:'HipHop', length:'1:45', id:'95', playing:false, views:'31M'},
    {name:'Umeme', artist:'Willy Paul', genre:'Bongo', length:'3:52', id:'96', playing:false, views:'31M'},
    {name:'Alcohol', artist:'JoeBoy', genre:'AfroBeats', length:'2:38', id:'97', playing:false, views:'31M'},
    {name:'Woman', artist:'Otile Brown X Harmonize', genre:'Bongo', length:'3:29', id:'98', playing:false, views:'31M'},
    {name:'Better', artist:'Khalid', genre:'R&B', length:'3:50', id:'99', playing:false, views:'31M'},
    {name:'Like It', artist:'Darassa ft Sho Madjonzi', genre:'Bongo', length:'3:23', id:'100', playing:false, views:'31M'}
];

function displaySongs(){
    songs.forEach((song, index) =>{
        const newSongElement = document.createElement('div');
        newSongElement.classList.add('page-entity');
        const songDetails = `
                <div class="left-section" id='${song.id}'>
                    <p class="serial-no">${song.id}</p>
                </div>
                
               <audio id="mySong1">
                <source src="Songs/Gyakie - Forever (Official Music Video)(MP3_128K).mp3" >
               </audio>         
    
               <div class="middle-section">
                   <div class="first-section">
                        <p><span class="song-title">${song.name}</span></p>
                        <p><span class="song-writer">${song.artist}</span></p>
                   </div>
                   
                   <div class="last-section">
                        <p class="type-of-song"> #${song.genre} </p>

                        <div class="middle-buttons">
                            <div class="like-button">
                                <i class="fa-solid fa-heart" id="like" class="like-icon"></i>
                                <span class="number-of-likes">14.6k</span>
                                <div class="tooltip">like</div>
                            </div>

                            <div class="comment-button">
                            <i class="fa-solid fa-message" id="comment" class="comment-icon"></i>
                             <span class="number-of-comments">1,275</span>
                            <div class="tooltip">comment</div>
                            </div>
                        </div>

                    </div>
               </div>
    
               <div class="general-right-section">
                    <div class="download-button">
                        <i class="fa-solid fa-download" class="download-icon"></i>
                        <div class="tooltip">download</div>
                    </div>

                    <div class="add-button">
                        <i class="fa-solid fa-plus" class="add-icon" ></i>
                        <div class="tooltip">add playlist</div>
                    </div>
               
                    <div class="more-button">
                        <i class="fa-solid fa-ellipsis-vertical" class="more-icon" onclick="sidebar()"></i>
                        <div class="tooltip">more</div>
                     </div>
    
               </div>`;
            newSongElement.innerHTML = songDetails;
            const getElement = document.querySelector('body');
            getElement.appendChild(newSongElement);     
    });

 
}

displaySongs();

function toggleMusicPlay(songId){
   const playingIcon = `
   <i class="fa-solid fa-pause" class="play-icon" id="icon1"></i> 
   `;
   const pauseIcon = `
   <i class="fa-solid fa-play" class="play-icon" id="icon1"></i> 
   `;

   const songIdElement = document.getElementById(`songPlaying${songId}`);
   if(songIdElement){
    songIdElement.innerHTML = playingIcon;
    
   }   
}

function changeSongPlayingStatus(songId) {
    const songItem = songs.find(song => song.id = songId);
    if(songItem){
        songItem.playing = true;
    }    
}
// songPlaying