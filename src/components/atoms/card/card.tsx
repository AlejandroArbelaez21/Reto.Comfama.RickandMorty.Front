import React from "react";
import "./card.scss";
import heartIcon from "../../../assets/icons/home/heart_icon.svg";
import heartIconFill from "../../../assets/icons/home/2heart_icon_fill.svg";
import Star from "../../../assets/icons/home/2star_icon.svg";

interface Origin {
  name: string;
}

interface CardProps {
  id: string;
  name: string;
  imagen: string;
  gender: string;
  url: string;
  species: string;
  status: string;
  origin?: Origin;
  type: string;
  episodes: Array<any>;
  favorite?: boolean;
  popular?: boolean;
  onToggleFavorite?: (id: any, condition: string) => Promise<void>;
}

const Card = ({
  id,
  name,
  imagen,
  gender,
  url,
  species,
  status,
  origin,
  type,
  episodes,
  favorite,
  popular,
  onToggleFavorite,
}: CardProps) => {
  return (
    <div className={id}>
      <div className="a-card">
        <div className="a-card__image">
          <img src={imagen} alt="" className="character-card-img" />
          {species === "Human" ? (
            <div className="a-card__image__overlay">
              <img
                className="recomended"
                src={Star as any}
                alt="Icon_recomended"
              />
              <div className="a-card__image__overlay__text">Recommended</div>
            </div>
          ) : (
            <div className="a-card__image__overlay">
              <img
                className="not-recomended"
                src={Star as any}
                alt="Icon_not_recomended"
              />
              <div className="a-card__image__overlay__text">NotRecommended</div>
            </div>
          )}
        </div>
        <div>
          <div className="a-card__content">
            <div className="a-card__content__name">{name}</div>
            <div className="a-card__content__gender">
              <strong>Gender:</strong> {gender}
            </div>
            <div className="a-card__content__status">
              <strong>Status:</strong> {status}
            </div>
            <div className="a-card__content__status">
              <strong>Specie:</strong> {species}
            </div>
            <div className="a-card__content__location">
              <strong>Origin:</strong> {origin && origin.name}
            </div>
            <div className="a-card__content__type">
              <strong>Type:</strong> {type ? type : "None"}
            </div>
            <div className="a-card__content__appearances">
              <strong>Appearances:</strong> {episodes && episodes.length}
            </div>
          </div>
        </div>
        {!popular && (
        <div className="a-card__button">
          {favorite ? (
            <img
              className="favorite"
              src={heartIconFill as any}
              alt="Icon_yes"
              onClick={() => onToggleFavorite && onToggleFavorite(id, "remove")}
            />
          ) : (
            <img
              className="not-favorite"
              src={heartIcon as any}
              alt="Icon_no"
              onClick={() => onToggleFavorite && onToggleFavorite(id, "add")}
            />
          )}
        </div>
        )}
      </div>
    </div>
  );
};

export default Card;
