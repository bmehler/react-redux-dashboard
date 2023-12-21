import React from 'react';
import { useSelector } from 'react-redux'
import "chart.js/auto"
import { Doughnut } from 'react-chartjs-2';

export default function DoughnutGraph(props) {

    const consultants = useSelector((state) => state.consultants);
    const id = props.consultant
    const currentSalesman = consultants.filter((el) => el.id === id.toString());
    
    let items = [];

    for (let i = 0; i < currentSalesman.length; i++) {
        let obj = currentSalesman[i];
        items = obj.sales
    }

    //console.log('data1', items)

    const chartData = {
        labels: items.map((data) => data.product),
        datasets: [
            {
                labels: items.map((data) => data.product),
                data: items.map((data) => data.price * data.quantity),
                backgroundColor: [
                    '#e91e63',
                    '#4051b5',
                    '#2096f3',
                    '#42a047',
                    '#ffc109',
                    '#ff5721',
                ],
                borderWidth: 1,
            }
        ]
    }

    return (
        <div className="chart-doughnut-container">
            <h2 style={{ textAlign: "center" }}>Sales (Euro)</h2>
            <Doughnut
                className="donut"
                data={chartData}
                options={{
                    responsive: true,
                    plugins: {
                        title: {
                            display: true,
                            text: "Sales turnover in the first half of 2023",
                            color: '#fff',
                        },
                        legend: {
                            labels: {
                                color: '#fff'
                            }
                        }
                    }
                }}
            />
        </div>
    )
}