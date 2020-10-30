import React from 'react';

import { Tweet } from '../../interfaces';
import ItemList from './item-list/item-list';
import * as apiTweets from '../../services/api.service';

type ListProps = {
  tweets: Tweet[],
  onChangeDados: any
}

const List = ({
  tweets, onChangeDados
}: ListProps) => {

  const onRemove = (id: string) => {
    const novaLista = tweets
      .filter((tweet: Tweet) => tweet.id !== id)

    apiTweets.removerTweet(id);
    
    onChangeDados(novaLista);
  }

  return (
    <div>
      {tweets?.length > 0 
        ? tweets.map((tweet) => (
          <ItemList
            key={tweet.id}
            tweet={tweet}
            onRemove={onRemove}
          />
        ))
        : (
          <div className="card-body d-flex justify-content-center">
            Nenhum Tweet!
          </div>
        )
      }
    </div>
  );
};

export default List;