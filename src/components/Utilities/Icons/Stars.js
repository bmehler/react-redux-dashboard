import React from 'react';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Stars = (props) => {

    return (
        props.stars >= 5000 ? (
            <span className="star best">
                <FontAwesomeIcon icon={faStar} />
            </span>
        ) : props.stars < 5000 && props.stars >= 3000 ? (
            <span className="star middle">
                <FontAwesomeIcon icon={faStar} />
            </span>
        ) : props.stars < 3000 && props.stars >= 1000 ? (
            <span className="star worse">
                <FontAwesomeIcon icon={faStar} />
            </span>
        ) : (
            <span></span>
        )
    )
}