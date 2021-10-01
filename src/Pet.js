import Modal from "./Modal";
import Details from "./Details";
import { useState } from "react";

export default function Pet({ age, name, heroPic, location, id }) {
  const [showModal, setShowModal] = useState(false);

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  if (!heroPic) {
    let heroPic = "http://pets-images.dev-apis.com/pets/none.jpg";
  }

  return (
    <div id={`pet-${id}`} className="pet" onClick={handleToggleModal}>
      <div className="image-container">
        <img src={heroPic} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${age} grumpy cat in ${location}`}</h2>
      </div>

      {showModal ? (
        <Modal>
          <div>
            <Details id={id} handleToggleModal={handleToggleModal} />
          </div>
        </Modal>
      ) : null}
    </div>
  );
}
