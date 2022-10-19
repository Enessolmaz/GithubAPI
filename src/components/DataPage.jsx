import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import LinkIcon from "@mui/icons-material/Link";
import TwitterIcon from "@mui/icons-material/Twitter";
import BusinessIcon from "@mui/icons-material/Business";

function DataPage({ getData }) {

  // please dont click this is a dangerous url
  const dayiPP = "https://cdn.britannica.com/68/143568-050-5246474F/Donkey.jpg";

  return (
    <div
      className="dataContainer"
      style={{
        margin: "20px 0px",
        background: "#1f2a48",
        borderRadius: "5px",
      }}
    >



      <div className="dataContainerContent">
        <div className="flex-top">
          <div className="img-part">
            <img alt="none" srcSet={getData.login === "AhmetHakan2399" ? `${dayiPP}` : getData.avatar_url } />
          </div>
          <span className="user-id-joined">
            <div className="user-id">
              <h3>{!getData.login === null ? "??" : getData.login}</h3>
              <h4>{"@" + getData.name}</h4>
            </div>

            <h4 className="h4">Joined {getData.created_at}</h4>
          </span>
        </div>
        <div className="middle-repos">
          <div className="middle-align-info">
            <span className="repos">
              <span
                style={{
                  color: "#d4d1d1",
                }}
              >
                Repos
              </span>
              <h3>{getData.public_repos}</h3>
            </span>
            <span className="followers">
              <span
                style={{
                  color: "#d4d1d1",
                }}
              >
                Followers
              </span>
              <h3>{getData.followers}</h3>
            </span>
            <span className="following">
              <span
                style={{
                  color: "#d4d1d1",
                }}
              >
                Following
              </span>
              <h3>{getData.following}</h3>
            </span>
          </div>
        </div>
        <div className="bottom-content">
          <div className="first">
            <span>
              <PlaceIcon sx={{ color: "white", marginRight: "5px" }} />{" "}
              {!getData.location
                ? "@unknownlocation"
                : getData.location}
            </span>
            <span>
              <TwitterIcon sx={{ color: "white", marginRight: "5px" }} />{" "}
              {!getData.twitter_username
                ? "@unknowntwitter"
                : getData.twitter_username}
            </span>
          </div>
          <div className="second">
            <span>
              <LinkIcon sx={{ color: "white", marginRight: "5px" }} />{" "}
              {getData.html_url}
            </span>
            <span style={{ marginRight: "33px" }}>
              <BusinessIcon sx={{ color: "white", marginRight: "5px" }} />{" "}
              {"@" + getData.login}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataPage;
