import React from 'react';
import { useSelector } from 'react-redux'
import { Circle } from '../Utilities/Icons/Circle';

const Target = (props) => {

    const consultants = useSelector((state) => state.consultants);
    const id = props.consultant
    const id_string = "" + id
    const currentSalesman = consultants.filter((el) => el.id === id_string);

    let items = [];

    for (let i = 0; i < currentSalesman.length; i++) {
        let obj = currentSalesman[i];
        items = obj.sales
    }

    let obj = 0;
    let sales = 0;

    for (let i = 0; i < items.length; i++) {
        obj += items[i].target;
        sales += items[i].quantity
    }
    
    let target = parseInt((sales/obj) * 100)

    return (
        <div className="card">
            <div className="card-body">
                <span className="fw-bold info-size">{target}%</span><span className="float-end fs-1"><Circle circle={target} /></span>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <span className="fs-3">Target Sales</span>
                </li>
            </ul>
        </div>
    )

}

export default Target