import React from "react";
import "./cardDetails.scss";
import { MdLocationPin } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { CircularProgress } from "@material-ui/core";

const CardDetails = ({ places, loading }) => {
  console.log(places);
  return (
    <div className="cardDetails">
      <div className="detailsHead">
        <p>
          LAGOS, <span>NG</span>
        </p>
      </div>
      {loading ? (
        <div className="loading">
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <div className="detailsSec">
          {places?.map((place) => {
            return (
              <div className="detailsCard">
                <div className="cardimg">
                  <img
                    src={
                      place.photo
                        ? place.photo.images.large.url
                        : "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
                    }
                    alt=""
                  />
                </div>

                <div className="cardName">{place.name}</div>

                <div className="PriceSec cardEle">
                  <div className="priceLabel">Price</div>
                  <div className="priceAmount">{place.price_level}</div>
                </div>

                <div className="Ranking  cardEle">
                  <div className="rankingLabel">Ranking</div>
                  <div className="rankingDetails">{place.ranking}</div>
                </div>
                {place?.awards?.map(() => (
                  <div className="awardSec cardEle">
                    <div className="awardImg">
                      <img src={award.images.small} alt={award.display_name} />
                    </div>
                    <div className="awardCert">{award.display_name}</div>
                  </div>
                ))}

                <div className="cuisineSec">
                  {place?.cuisine?.map(({ name }) => (
                    <div className="cuisine" key={name}>
                      {name}
                    </div>
                  ))}
                </div>

                <div className="address cardEle">
                  <div>
                    <MdLocationPin className="cardIcons locationIcon" />
                  </div>
                  <div className="addressDetails">
                    No.12, Agu Street, Ikorodu, Lagos
                  </div>
                </div>

                <div className="contact cardEle">
                  <div>
                    <BsTelephoneFill className="cardIcons" />
                  </div>
                  <div className="addressDetails">+2345689798</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CardDetails;
