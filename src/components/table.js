import React from "react";
import Search from "./Search";
import { formatNumber } from "../utils/formatNumber";

const ResultsTable = (props) => {
    const { countryData, search } = props;

    const tableRows = countryData.map((country) => {   
        return (
            <tr key={country.CountryCode}>
                <td>{country.Country}</td>
                <td>{formatNumber(country.TotalConfirmed)}</td>
                <td>{formatNumber(country.TotalDeaths)}</td>
                <td>{formatNumber(country.TotalRecovered)}</td>
            </tr>
        );
    });

    return(
        <div className="container">
        <Search search={search}/>
        <div className="countryStatsSection">
            <table id="statsTable">
                <caption>Individual Country Statistics</caption>
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Cases</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                    </tr>
                </thead>
                <tbody>
                {tableRows} 
                </tbody>
            </table>
        </div>
    </div>
    )
}

export default ResultsTable;
