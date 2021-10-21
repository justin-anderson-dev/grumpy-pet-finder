import Pet from "./Pet";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function Results({ pets }) {
  return (
    <div className="results">
      {!pets.length ? (
        <SkeletonTheme color="#6504b5" highlightColor="#c1c3c4">
          {[...new Array(4)].map((_, index) => (
            <Skeleton key={index} count={1} height={120} />
          ))}
        </SkeletonTheme>
      ) : (
        pets.map((pet) => (
          <Pet
            age={pet.age}
            size={pet.size}
            breed={pet.breeds?.primary}
            key={pet.id}
            name={pet.name}
            heroPic={pet.primary_photo_cropped?.full}
            location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
}
