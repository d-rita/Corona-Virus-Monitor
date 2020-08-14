import React, { Component } from "react";
import ResultsTable from "./Table";
import GlobalCard from "./Card";
import { formatNumber } from "../utils/formatNumber";

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            totalCases: 0,
            totalRecovered: 0,
            totalDead: 0,
            countries: [],
            cache: []
        }

        this.searchRows = this.searchRows.bind(this)
    }

    componentDidMount(){
        fetch('https://api.covid19api.com/summary')
        .then(res => res.json())
        .then(data => {
            const { 
                TotalDeaths, TotalConfirmed, TotalRecovered 
            } = data.Global;

            this.setState({
                totalCases: formatNumber(TotalConfirmed),
                totalDead: formatNumber(TotalDeaths),
                totalRecovered: formatNumber(TotalRecovered),
                countries: [...data.Countries],
                cache: [...data.Countries]
            })

        })
    }

    searchRows(e) {
        const { countries, cache } = this.state;
        if (e.target.value === ''){
            this.setState({
                countries: cache
            });
        } else {
            let searchValue = e.target.value.toLowerCase();
            let result = [];

            for (let i=0; i < countries.length; i++ ){
                let value = countries[i]['Country'].toLowerCase();
                if (value.indexOf(searchValue) > -1) {
                    result.push(countries[i]);
                }
                this.setState({
                    countries: [...result]
                })
            }
        }
    }


    render(){
        const { totalCases, totalRecovered, totalDead, countries} = this.state
        return(
            <div>
                <GlobalCard cases={totalCases} recovered={totalRecovered} dead={totalDead}/>       
                <ResultsTable  countryData={countries} search={this.searchRows}/>
            </div>
        )
    }
}

export default Home;
