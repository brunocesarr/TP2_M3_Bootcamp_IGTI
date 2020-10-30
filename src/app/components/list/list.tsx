import React, { useState, useEffect } from 'react';
import { Tweet } from '../../interfaces';
import ItemList from './item-list/item-list';

type ListProps = {
  tweets: Tweet[],
}

const List = ({
  tweets
}: ListProps) => {
  const [tweetsList, setTweetsList] = useState<Tweet[]>(tweets)

  useEffect(() => {
    console.log(tweetsList);
  }, [tweets])

  const onRemove = (id: number) => {
    const novaLista = tweetsList
      .filter((tweet: Tweet) => tweet.id !== id)

    setTweetsList(novaLista);
  }

  return (
    <div>
      {tweetsList.map((tweet) => (
        <ItemList
          tweet={tweet}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default List;