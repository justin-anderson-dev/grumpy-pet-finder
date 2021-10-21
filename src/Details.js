import { useState, useEffect } from "react";
import { Client } from "@petfinder/petfinder-js";
import Carousel from "./Carousel";

export default function Details({ id, handleToggleModal }) {
  const [loading, setLoading] = useState(true);
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
      <div className="details-copy">
        <h1>{pet.name}</h1>
        <h2>{`${pet.age} grumpy cat in ${pet.contact.address.city}, ${pet.contact.address.state}`}</h2>
        <p>{pet.description}</p>
        <div className="cta-block">
          <h2>Want to know more about {pet.name}?</h2>
          <div className="buttons">
            <button className="primary" onClick={handleAdopt}>
              MEET {pet.name.toUpperCase()}
            </button>
            <button onClick={handleToggleModal}>CLOSE</button>
          </div>
        </div>
      </div>
    </div>
  );
}
