import './styles.css';

import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import List from './components/list/list';
import TextArea from './components/textarea/textarea';
import { Tweet } from './interfaces';
import * as apiTweets from './services/api.service';

export const App = () => {
  const [allTweets, setAllTweets] = useState<Tweet[]>([]);

  useEffect(() => {
    const buscarTweets = async () => {
      const tweets = await apiTweets.getAllTweets();
      setAllTweets(tweets);
    }
    buscarTweets();
  }, []);

  useEffect(() => {
    document.querySelector("textarea")?.focus();
  }, [allTweets]);
  
  const handleTwittar = (post: string) => {
    const novoTweet : Tweet = {
      id: uuidv4(),
      descricao: post
    }

    apiTweets.inserirTweet(novoTweet);

    const novaLista = JSON.parse(JSON.stringify(allTweets));
    novaLista.push(novoTweet);

    setAllTweets(novaLista);
  };

  return (
    <div className="container">
      <TextArea
        handleBtnTwittar={handleTwittar}
      />
      <List
        tweets={allTweets}
        onChangeDados={setAllTweets}
      />
    </div>
  );
}