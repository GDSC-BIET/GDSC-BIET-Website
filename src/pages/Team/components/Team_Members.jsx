import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Team_Members = (props) => {
  return (
    <>
      <div className="core_team_container">
        <div className="members_container">
          <img src={props.img} alt="" />
          <div className="member_details">
            <h3>{props.name}</h3>
            <p>{props.profession}</p>
          </div>
          <div className="d-flex justify-content-center">
            {props.FbLink && (
              <div>
                <a className="social_media" href={props.FbLink} target="_black">
                  <FaFacebookF className="icon" />
                </a>
              </div>
            )}

            {props.TwitterLink && (
              <div>
                <a
                  className="social_media"
                  href={props.TwitterLink}
                  target="_black"
                >
                  <FaTwitter className="icon" />
                </a>
              </div>
            )}

            {props.InstaLink && (
              <div>
                <a
                  className="social_media"
                  href={props.InstaLink}
                  target="_black"
                >
                  <FaInstagram className="icon" />
                </a>
              </div>
            )}
            {props.GithubLink && (
              <div>
                <a
                  className="social_media"
                  href={props.GithubLink}
                  target="_black"
                >
                  <FaGithub className="icon" />
                </a>
              </div>
            )}

            {props.LinkedinLink && (
              <div>
                <a
                  className="social_media"
                  href={props.LinkedinLink}
                  target="_black"
                >
                  <FaLinkedin className="icon" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team_Members;
