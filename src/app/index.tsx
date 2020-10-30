import React, { useEffect, useState } from 'react';
import './styles.css';
import TextArea from './components/textarea/textarea';
import List from './components/list/list';
import { Tweet } from './interfaces';

export const App = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]);

  useEffect(() => {
    let tweet: Tweet = {
      id: 1,
      descricao: "Teste"
    }

    setTweets([tweet]);
  }, []);

  const handleTwittar = (post: string) => {
    console.log("Post:" + post);
    console.log(tweets);
  };

  return (
    <div className="container">
      <TextArea
        handleBtnTwittar={handleTwittar}
      />
      <List
        tweets={tweets}
      />
    </div>
  );
}