import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../../atoms/card/card";
import "./carousel.scss";

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

interface CarouselProps {
  listResult: Character[];
}

const Carousel: React.FC<CarouselProps> = ({ listResult }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="m-carousel">
        <div className="m-carousel__title">
            {listResult && listResult.length > 0 ? (
                <h1>Popular characters on the page</h1>
            ) : (<h1>No popular character to show</h1>
            )}
        </div>
        <div className="m-carousel__content">
            <Slider {...settings}>
            {listResult.map((character) => (
              <div className="m-carousel__content__unique" key={character.id}>
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
                popular={true}
                />
              </div>
            ))}
            </Slider>
        </div>
    </div>
  );
};

export default Carousel;
