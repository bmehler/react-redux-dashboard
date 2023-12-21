import React from 'react';
import { useSelector } from 'react-redux'
import { faEuroSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Stars } from '../Utilities/Icons/Stars';

const Bestseller = (props) => {

    const consultants = useSelector((state) => state.consultants);
    const id = props.consultant
    const id_string = "" + id
    const currentSalesman = consultants.filter((el) => el.id === id_string);

    let items = [];

    for (let i = 0; i < currentSalesman.length; i++) {
        let obj = currentSalesman[i];
        items = obj.sales
    }

    //console.log('target', items)

    let obj = 0;
    let sum = 0;
    let best = 0;
    let product = '';

    for (let i = 0; i < items.length; i++) {
        sum = items[i].price * items[i].quantity
        if (sum > obj) {
            best = sum
            obj = best
            product = items[i].product
        }
    }

    return (
        <div className="card">
            <div className="card-body">
                <span className="fs-1 fw-bold">{best} <FontAwesomeIcon icon={faEuroSign} /></span><span className="float-end fs-1"><Stars stars={best}/></span>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <span className="fs-3">{product}</span>
                </li>
            </ul>
        </div>
    )

}

export default Bestseller