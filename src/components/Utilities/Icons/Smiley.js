import React from 'react';
import { faSmileWink, faFaceSmile, faFaceFrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Smiley = (props) => {

    return (
        props.smiley >= 90 ? (
            <span className="smiley best">
                <FontAwesomeIcon icon={faSmileWink} />
            </span>
        ) : props.smiley < 90 && props.smiley >= 75 ? (
            <span className="smiley middle">
                <FontAwesomeIcon icon={faFaceSmile} />
            </span>
        ) : props.smiley < 75 && props.smiley >= 25 ? (
            <span className="smiley worse">
                <FontAwesomeIcon icon={faFaceFrown} />
            </span>
        ) : (
            <span></span>
        )
    )
}