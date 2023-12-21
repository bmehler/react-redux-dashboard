import React from 'react';
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Circle = (props) => {

    return (
        props.circle >= 80 ? (
            <span className="circle best">
                <FontAwesomeIcon icon={faCircleDot} />
            </span>
        ) : props.circle < 80 && props.circle >= 65 ? (
            <span className="circle middle">
                <FontAwesomeIcon icon={faCircleDot} />
            </span>
        ) : props.circle < 65 && props.circle >= 35 ? (
            <span className="circle worse">
                <FontAwesomeIcon icon={faCircleDot} />
            </span>
        ) : (
            <span></span>
        )
    )
}