import React from 'react';
import { Tweet } from '../../../interfaces';

type ItemListProps = {
  tweet: Tweet,
  onRemove: any
}

const ItemList = ({
  tweet, onRemove
}: ItemListProps) => {
  return (
    <div className="card my-1" key={tweet.id}>
      <div className="card-body d-flex justify-content-between">
        {tweet.descricao}
        <span className="badge badge-danger" onClick={() => onRemove(tweet.id)}>
          <i className="fa fa-trash p-1" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  );
};

export default ItemList;