import React from "react";

const ResultsTable = (props) => {
    const { countryData } = props;

    const tableRows = countryData.map((country) => {
        return (
            <tr>
                <td>{country.Country}</td>
                <td>{country.TotalConfirmed}</td>
                <td>{country.TotalDeaths}</td>
                <td>{country.TotalRecovered}</td>
            </tr>
        );
    })
    return(
        <div className="countryStatsSection">
            <table className="statsTable">
                <caption>Individual Country Statistics</caption>
                <thead>
                    <tr>
                        <th sortable>Country</th>
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
    )
}

export default ResultsTable;
