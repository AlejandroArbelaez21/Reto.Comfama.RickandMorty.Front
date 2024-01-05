import React, { useEffect, useState } from "react";
import "./resultCards.scss";
import Card from "../../atoms/card/card";

interface Origin {
  name: string;
}

interface Character {
  id: string;
  name: string;
  image: string;
  gender: string;
  url: string;
  species: string;
  status: string;
  origin: Origin;
  type: string;
  episode: Array<any>;
}

interface ResultCardsProps {
  listResult: Character[];
  favorites: any[];
  onToggleFavorite: (id: any, condition: string) => Promise<void>;
}

const ResultCards: React.FC<ResultCardsProps> = ({ listResult, favorites, onToggleFavorite}) => {

  return (
    <div className="m-resultCards">
      {listResult.map((character: any) => (
        <div className="m-resultCards__uniqueCard" key={character.id}>
          <Card
            id={character.id}
            name={character.name}
            imagen={character.image}
            gender={character.gender}
            url={character.url}
            species={character.species}
            status={character.status}
            origin={character.origin}
            type={character.type}
            episodes={character.episode}
            favorite={favorites.includes(character.id)}
            onToggleFavorite={onToggleFavorite}
          />
        </div>
      ))}
    </div>
  );
};

export default ResultCards;
