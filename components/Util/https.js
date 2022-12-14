import axios from 'axios';

export function storePhrases(phrasesData){
  axios.post(
    'https://login-9ff62-default-rtdb.firebaseio.com/phrases.json',
    phrasesData
  );
}