import Modal from "./Modal";
import Details from "./Details";
import { useState } from "react";

export default function Pet({
  age,
  name,
  size,
  breed,
  heroPic,
  location,
  id,
  classes,
}) {
  const [showModal, setShowModal] = useState(false);

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  if (!heroPic) {
    let heroPic = "http://pets-images.dev-apis.com/pets/none.jpg";
  }

  return (
    <div id={`pet-${id}`} className={classes + " pet"}>
      <div className="image-container" onClick={handleToggleModal}>
        <img src={heroPic} alt={name} />
      </div>
      <div className="info" onClick={handleToggleModal}>
        <h1>{name}</h1>
        <dl>
          <div className="info-pair">
            <dt>AGE</dt>
            <dd>{age}</dd>
          </div>
          <div className="info-pair">
            <dt>SIZE</dt>
            <dd>{size}</dd>
          </div>
          <div className="info-pair">
            <dt>BREED</dt>
            <dd>{breed}</dd>
          </div>
          <div className="info-pair">
            <dt>LOCATION</dt>
            <dd>{location}</dd>
          </div>
        </dl>
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
