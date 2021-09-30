import Pet from "./Pet";

export default function Results({ pets }) {
  return (
    <div className="results">
      {!pets.length ? (
        <h2>No grumpy cats yet ... </h2>
      ) : (
        pets.map((pet) => (
          <Pet
            age={pet.age}
            key={pet.id}
            name={pet.name}
            heroPic={pet.primary_photo_cropped?.full}
            location={`${pet.contact.address.city}, ${pet.contact.address.state} ${pet.contact.address.postcode}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
}
