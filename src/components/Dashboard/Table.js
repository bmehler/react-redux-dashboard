import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate';

function SalesTable(props) {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const consultants = useSelector((state) => state.consultants);
    const itemsPerPage = 3

    useEffect(() => {
        for (let i = 0; i < consultants.length; i++) {
            if (consultants[i].id == props.consultant) {
                setData(consultants[i].sales)
            }
        }
        setTotalPages(Math.ceil(data.length / itemsPerPage))
    },[data, consultants, props.consultant]);

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const subset = data.slice(startIndex, endIndex);

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    return (
        <div>
            <div className="row mt-5">
                <div className="col-lg-12">
                    <table className="collapse">
                        <thead>
                            <tr className="table-header">
                                <th scope="col">ID</th>
                                <th scope="col">Product</th>
                                <th scope="col">Month</th>
                                <th scope="col">Price (Euro)</th>
                                <th scope="col">Quantity (Tons)</th>
                                <th scope="col">Target (Tons)</th>
                                <th scope="col">Satisfaction</th>
                            </tr>
                        </thead>
                        <tbody>
                            {subset.map((item, i) => (
                                <tr key={i}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.product}</td>
                                    <td>{item.month}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.target}</td>
                                    <td>{item.satisfaction}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <ReactPaginate
                className="pagination float-end"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousLinkClassName="page-link"
                nextLinkClassName="page-link"
                activeLinkClassName="active"
                breakLabel="..."
                nextLabel="Next"
                previousLabel="Previous"
                onPageChange={handlePageChange}
                pageCount={totalPages}
            />
    </div>
    );
}

export default SalesTable;