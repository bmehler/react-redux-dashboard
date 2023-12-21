import React, { useEffect } from 'react';
import { useSelector } from "react-redux";

const Sidebar = (props) => {

    useEffect(() => {
        var previous = document.getElementsByClassName("sales");
        previous[0].classList.add("active")
        var elem = document.querySelector('.salesman');
        elem.innerHTML = 'Dave Patrick';
    },[]);

    const handleButtonClick = (event, consultant, firstname, surname) => {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        event.target.parentNode.parentNode.parentNode.parentNode.classList.add("active")
        var elem = document.querySelector('.salesman');
        elem.innerHTML = firstname + ' ' + surname;
        props.handleRead(consultant)
    };

    const consultants = useSelector((state) => state.consultants);

    return (
        <div>
            <div className="row mt-3 mb-3">
                <div className="col-lg-12">
                    <h3>Sales | <span className="salesman"></span></h3>
                </div>
            </div>
            {consultants.map(({ id, firstname, surname, role }, i) => (
                <div className="mt-1" key={i}>
                    <div className="row sales">
                        <div className="sidebar-row">
                            <div className="sidebar-left">
                                <img className="sidebar-icon mx-2" src="https://avatars.githubusercontent.com/u/6885487?v=4" />
                            </div>
                            <div className="sidebar-right mt-1">
                                <button onClick={(event) => { handleButtonClick(event, id, firstname, surname) }}type="button" className="sidebar-button">
                                    <div>
                                        <span className="sales-name fw-bold">{firstname} {surname}</span><br></br>
                                        <span className="sales-name">{role}</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Sidebar

/*
     <div className="row sales">
                        <div className="col-lg-2">
                            <img width="50px" className="sales-consultant mt-3 mx-2" src="https://avatars.githubusercontent.com/u/6885487?v=4" />
                        </div>
                        <div className="col-lg-10">
                            <dl className="row">
                                <button type="button" onClick={(event) => { handleButtonClick(event, id, firstname, surname) }} className="sales-button">
                                    <dt className="mx-3 mt-3 text-white text-start">{firstname} {surname}</dt>
                                    <dd className="mx-3 text-white text-start">{role}</dd>
                                </button>
                            </dl>
                        </div>
                    </div>
*/