import React from 'react';
import { useSelector } from 'react-redux'
import { Smiley } from '../Utilities/Icons/Smiley';

const Satisfaction = (props) => {

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

    for (let i = 0; i < items.length; i++) {
        obj += parseInt((items[i].satisfaction)) * 1.66667
    }

    let percent = parseInt(obj)

    return (
        <div className="card">
            <div className="card-body"> 
                <span className="fs-1 fw-bold">{percent}%</span><span className="float-end fs-1"><Smiley smiley={obj}/></span>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <span className="fs-3">Satisfaction</span>
                </li>
            </ul>
        </div>
    )

}

export default Satisfaction