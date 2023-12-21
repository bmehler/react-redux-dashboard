import React from 'react';
import { useSelector } from 'react-redux'
import "chart.js/auto"
import { Bar } from 'react-chartjs-2';

export default function BarChart(props) {

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
                data: items.map((data) => data.quantity),
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
        <div className="chart-bar-container" style={{ textAlign: "center" }}>
            <div className="barchart-responsive">
                <h2>Sales (Tons)</h2>
                <Bar
                    data={chartData}
                    options={{
                        responsive: true,
                        maintainAspectRatio: true,
                        aspectRatio: 2,
                        scales: {
                            x: {
                                ticks: {
                                    color: '#fff'
                                },
                                grid: {
                                    color: 'rgba(255,0,0,0.1)',
                                }
                            },
                            y: {
                                ticks: {
                                    color: '#fff'
                                },
                                grid: {
                                    color: 'rgba(0,255,0,0.1)',
                                }
                            }
                        },
                        plugins: {
                            legend: {
                                display: false,
                            },
                            title: {
                                display: true,
                                text: "Tons sold in the first half of 2023",
                                color: '#fff'
                            }
                        }
                    }}
                />
            </div>
        </div>
    )
}