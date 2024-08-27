import { useParams, Navigate } from "react-router-dom";
import Collapse from "../components/collapse.jsx";

import Carrousel from "../components/carrousel";
import "../scss/housing.scss";
import redStar from "../assets/img/redstar.png";
import greyStar from "../assets/img/greystar.png";

import Loader from "../components/loader";
import Fetch  from "../utils/fetch";

function Housing() {
  const { id } = useParams();

  const { fetchedData, isLoading } = Fetch(
    window.location.origin + "/logements.json"
  );

  //recherche de l'objet method .find()
  let accomodation;
  if (fetchedData && fetchedData.length > 0) {
    accomodation = fetchedData.find((elt) => elt.id === id);
  }

  //Affichage du composant loader (et de son Timer) si isLoading est TRUE
  if (isLoading) {
    return (
      <div className="accomodation-loader-wrapper">
        <Loader />
      </div>
    );
  }

  //Si objet introuvable : retour 404
  if (!accomodation) {
    return <Navigate to="/notFound" />;
  }

 //Si tout est OK :
  else {
    const rating = parseInt(accomodation.rating);
    const [forename, name] = accomodation.host.name.split(" ");

    return (
      <>
        <Carrousel {...accomodation} />

        {/* //spread attributes / props spreadin// */}
        {/* //titres + tag // */}

        <section className="accomodation-detail-wrapper">
          <div className="accomodation-info">
            <h2>{accomodation.title}</h2>
            <p>{accomodation.location}</p>
            <div className="accomodation-info__tags-box">
              {accomodation.tags.map((tag, idx) => (
                <div key={`${tag}-${idx}`} className="accomodation-info__tag">
                  <p>{tag}</p>
                </div>
              ))}
            </div>
          </div>

          {/* //étoiles de notation // */}

          <div className="accomodation-profil">
            <div className="accomodation-profil__stars">
              {[...Array(5)].map((_, idx) => {
                const ratingArrayValue = idx + 1;

                return ratingArrayValue <= rating ? (
                  <img src={redStar} key={"star" + idx} alt="étoile rouge" />
                ) : (
                  <img src={greyStar} key={"star" + idx} alt="étoile grise" />
                );
              })}
            </div>

            {/* //nom + mignature// */}

            <div className="accomodation-profil__host">
              <div className="accomodation-profil__name">
                <p>{forename}</p>
                <p>{name}</p>
              </div>
              <div className="accomodation-profil__picture">
                <img
                  src={accomodation.host.picture}
                  alt={accomodation.host.name}
                />
              </div>
            </div>
          </div>
        </section>

        {/* // Composant collapse x 2// */}

        <section className="accomodation-collapse-wrapper">
          <Collapse
            title="Description"
            text={accomodation.description}
            collapseState={true}
          />
          <Collapse
            title="Equipements"
            text={accomodation.equipments}
            collapseState={true}
          />
        </section>
      </>
    );
  }
}

export default Housing;
