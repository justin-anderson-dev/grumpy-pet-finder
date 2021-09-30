import { useState, useEffect } from "react";
import { withRouter, useParams } from "react-router-dom";
import { Client } from "@petfinder/petfinder-js";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";

function Details() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [pet, setPet] = useState({});

  async function getPetDetails() {
    const client = new Client({
      apiKey: process.env.API_KEY,
      secret: process.env.API_SECRET,
    });

    client.animal
      .show(id)
      .then((pet) => {
        console.log("pet from id-> ", pet.data.animal);
        setPet(pet.data.animal);
      })
      .then(() => {
        setLoading(false);
      });
  }

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  function handleAdopt() {
    window.location = pet.url;
  }

  useEffect(() => {
    getPetDetails();
  }, []);

  return loading ? (
    <div className="details">
      <h2>loading...</h2>
    </div>
  ) : (
    <div className="details">
      <Carousel photos={pet.photos} />
      <h1>{pet.name}</h1>
      <h2>{`${pet.age} grumpy cat in ${pet.contact.address.city}, ${pet.contact.address.state}`}</h2>
      <p>{pet.description}</p>
      <button onClick={handleToggleModal}>More about {pet.name}</button>

      {showModal ? (
        <Modal>
          <div>
            <h2>Get more info and adopt {pet.name}?</h2>
            <div className="buttons">
              <button onClick={handleAdopt}>Yes</button>
              <button onClick={handleToggleModal}>No</button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}

const DetailsWithRouter = withRouter(Details);

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <DetailsWithRouter {...props} />
    </ErrorBoundary>
  );
}
