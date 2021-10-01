import { Link } from "react-router-dom";
import Modal from "./Modal";

export default function Pet({ age, name, heroPic, location, id }) {
  if (!heroPic) {
    let heroPic = "http://pets-images.dev-apis.com/pets/none.jpg";
  }

  return (
    <div id={`pet-${id}`} className="pet">
      <div className="image-container">
        <img src={heroPic} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${age} grumpy cat in ${location}`}</h2>
      </div>
    </div>
  );
}
