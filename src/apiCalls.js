import axios from 'axios';

// 0787b3eeddf8a689fd1e9b92452efa04

export const allGames = () => {
    axios({
        url: "https://api-v3.igdb.com/multiplayer_modes",
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'user-key': '0787b3eeddf8a689fd1e9b92452efa04'
        },
        data: "fields campaigncoop,checksum,dropin,game,lancoop,offlinecoop,offlinecoopmax,offlinemax,onlinecoop,onlinecoopmax,onlinemax,platform,splitscreen,splitscreenonline;"
      })
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.error(err);
        });
}