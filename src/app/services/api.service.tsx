import axios from 'axios';
import { Tweet } from '../interfaces';

const URL = "http://localhost:3001/tweets"

async function getAllTweets(){
  const { data } = await axios.get(URL);

  const tweets = data.map((tweet: any) => {
    return {
      id: tweet.id, descricao: tweet.value
    }
  })

  return tweets;
}

async function inserirTweet(tweet: Tweet) {
  return await axios.post(URL, {id: tweet.id, value: tweet.descricao});  
}

async function removerTweet(id: string) {
  return await axios.delete(`${URL}/${id}`);  
}

export { getAllTweets, inserirTweet, removerTweet }