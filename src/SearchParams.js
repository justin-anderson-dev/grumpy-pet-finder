import { useEffect, useState, useContext } from "react";
import Results from "./Results";
import { Client } from "@petfinder/petfinder-js";

const SearchParams = () => {
  require("dotenv").config();

  const [location, setLocation] = useState("");
  const [pets, setPets] = useState([]);

  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    const client = new Client({
      apiKey: process.env.API_KEY,
      secret: process.env.API_SECRET,
    });

    client.animal
      .search({
        type: "Cat",
        location: location || "90066",
        distance: "25",
        good_with_cats: false,
        good_with_dogs: false,
        good_with_children: false,
        page: 1,
        limit: 10,
      })
      .then((resp) => {
        console.log("api response ->", resp.data.animals);
        setPets(resp.data.animals);
      });
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="e.g. Los Angeles, CA or 90045"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        <button>Find grumpy cats</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
