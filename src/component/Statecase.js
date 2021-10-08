import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Statecase = () => {
    const [data, setData] = useState([])
    const getCovidData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
    }

    useEffect(() => {
        getCovidData();
    }, [])
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="main-heading">
                    <h1 className="main-heading">INDIA COVID-19 DASHBOARD</h1>
                </div>
                <div className="table-resposive">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Updated</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                data.map((curElement, index) => {
                                    return (

                                        <tr key={index}>
                                            <td>{curElement.state}</td>
                                            <td>{curElement.confirmed}</td>
                                            <td>{curElement.recovered}</td>
                                            <td>{curElement.deaths}</td>
                                            <td>{curElement.active}</td>
                                            <td>{curElement.lastupdatedtime}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </>
    )
}

export default Statecase
