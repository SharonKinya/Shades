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
    {name:'Like It', artist:'Darassa ft Sho Madjonzi', genre:'Bongo', length:'3:23', id:'16', playing:false, views:'31M'}
];

function displaySongs(){
    songs.forEach((song, index) =>{
        const newSongElement = document.createElement('div');
        newSongElement.classList.add('page-entity');
        const songDetails = ;
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