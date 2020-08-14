import React from "react";
import Search from "./Search";
import { formatNumber } from "../utils/formatNumber";

class ResultsTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            order: "default",
            key: ''
        };

        this.rankTableColumn = this.rankTableColumn.bind(this)
    }

    rankTableColumn(key){
        const { order } = this.state;

        let newOrder;

        // toggle ranking order
        if(order === "default") { newOrder = "desc"}
        if(order === "desc") { newOrder = "asc"}
        if(order === "asc") { newOrder = "desc"}

        this.setState({
            order: newOrder,
            key
        });
    };


    render(){
        const { countryData, search } = this.props;

        const { order, key } = this.state;

        const sortedCountryData = countryData.sort((a, b) => {
            if (a[key] < b[key]) {
              return order === 'asc' ? -1 : 1;
            }
            if (a[key] > b[key]) {
              return order === 'asc' ? 1 : -1;
            }
            return 0;
        });

        const tableRows = sortedCountryData.map((country) => {   
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
                            <th onClick={()=>this.rankTableColumn('Country')}>Country</th>
                            <th onClick={()=>this.rankTableColumn('TotalConfirmed')}>Cases</th>
                            <th onClick={()=>this.rankTableColumn('TotalDeaths')}>Deaths</th>
                            <th onClick={()=>this.rankTableColumn('TotalRecovered')}>Recovered</th>
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
}

export default ResultsTable;
