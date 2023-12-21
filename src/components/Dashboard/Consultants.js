import React from 'react';
import { useSelector } from 'react-redux'
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Consultants = () => {

    const consultants = useSelector((state) => state.consultants).length;

    return (
        <div className="card">
            <div className="card-body">
                <span className="fw-bold info-size">{consultants}</span><span className="float-end fs-1"><FontAwesomeIcon icon={faCircleUser} /></span>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <span className="fs-3">Consultants</span>
                </li>
            </ul>
        </div>
    )

}

export default Consultants