import Pet from "./Pet";
import Modal from "./Modal";
import Details from "./Details";
import { useState } from "react";

export default function Results({ pets }) {
  const [showModal, setShowModal] = useState(false);

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  return (
    <div className="results">
      {!pets.length ? (
        <h2>No grumpy cats yet ... </h2>
      ) : (
        pets.map((pet) => (
          <button onClick={handleToggleModal} key={pet.id}>
            <Pet
              age={pet.age}
              key={pet.id}
              name={pet.name}
              heroPic={pet.primary_photo_cropped?.full}
              location={`${pet.contact.address.city}, ${pet.contact.address.state} ${pet.contact.address.postcode}`}
              id={pet.id}
              handleToggleModal={handleToggleModal}
            />
          </button>
        ))
      )}

      {showModal ? (
        <Modal>
          <div>
            <Details id="52995848" handleToggleModal={handleToggleModal} />
          </div>
        </Modal>
      ) : null}
    </div>
  );
}
