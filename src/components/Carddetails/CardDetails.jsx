import React from "react";
import "./cardDetails.scss";
import { MdLocationPin } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { CircularProgress } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

const CardDetails = ({ places, loading, cityInfo }) => {
  console.log(places);
  return (
    <div className="cardDetails">
      <div className="detailsHead">
        <p>
          {cityInfo.name} <span>{cityInfo.country}</span>
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
                <div className="cardEle">
                  <Rating value={Number(place.rating)} readOnly />
                  <div className="priceAmount">
                    out of {place.num_reviews} reviews{" "}
                  </div>
                </div>

                {place?.price &&
                  (place.category ? (
                    <div className="PriceSec cardEle">
                      <div className="priceLabel">Price</div>
                      <div className="priceAmount">{place.price_level}</div>
                    </div>
                  ) : (
                    <div className="PriceSec cardEle">
                      <div className="priceLabel">Price</div>
                      <div className="priceAmount">{place.price}</div>
                    </div>
                  ))}

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
                {place?.address && (
                  <div className="address cardEle">
                    <div>
                      <MdLocationPin className="cardIcons locationIcon" />
                    </div>
                    <div className="addressDetails">{place.address}</div>
                  </div>
                )}
                {place?.phone && (
                  <div className="contact cardEle">
                    <div>
                      <BsTelephoneFill className="cardIcons" />
                    </div>
                    <div className="addressDetails">{place.phone}</div>
                  </div>
                )}
                {place?.email && (
                  <div className="contact cardEle">
                    <div>
                      <MdEmail className="cardIcons" />
                    </div>
                    <div className="addressDetails">{place.email}</div>
                  </div>
                )}

                <div className="CTA cardEle">
                  <button onClick={() => window.open(place.web_url, "_blank")}>
                    Trip Advisor
                  </button>
                  <button onClick={() => window.open(place.website, "_blank")}>
                    Website
                  </button>
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
