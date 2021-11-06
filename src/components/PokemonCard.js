import React, {useState} from "react";
import { Card } from "semantic-ui-react";

const PokemonCard = ({name, hp, sprites}) => {

  const [flip, setFlip] = useState(false);

  const handleClick = () => {
    setFlip((flip) => !flip);
  }

  return (
    <Card>
      <div onClick={handleClick} style={{cursor : "pointer", backgroundColor : "beige"}}>
        <div className="image">
          <img 
          src={flip ? sprites.back : sprites.front}
          alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
