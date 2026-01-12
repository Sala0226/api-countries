import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";


const CountryCard = ({ country }) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(country.cca3);

  const toggleFavorite = () => {
    favorite
      ? removeFavorite(country.cca3)
      : addFavorite(country);
  };

  return (
    <div className="card h-100"><Link
            to={`/country/${country.name.common}`}
            className="text-decoration-none text-dark"
          >
            
         
      <img
        src={country.flags.png}
        className="card-img-top"
        alt={country.name.common}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title lh-sm mb-4">{country.name.common}</h5>
        <p className="card-text"><span className="fw-bold fs-small">Population:</span> {country.population}</p>
        <p className="card-text"><span className="fw-bold fs-small">Region:</span> {country.region}</p>
        <p className="card-text"><span className="fw-bold fs-small">Capital:</span> {country.capital}</p>
        <div className="mt-auto d-flex justify-content-between">
          <Link
            to={`/country/${country.name.common}`}
            className="btn btn-sm btn-outline-primary"
          >
            Détails
          </Link>


        </div>
      </div> </Link>
    </div>
  );
};

export default CountryCard;
