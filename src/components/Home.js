import React, { Component } from "react";
import ResultsTable from "./Table";
import GlobalCard from "./Card";
import Search from "./Search";


class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            totalCases: 0,
            totalRecovered: 0,
            totalDead: 0,
            countries: []
        }
    }

    componentDidMount(){
        fetch('https://api.covid19api.com/summary')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const { 
                TotalDeaths, TotalConfirmed, TotalRecovered 
            } = data.Global;

            this.setState({
                totalCases: TotalConfirmed,
                totalDead: TotalDeaths,
                totalRecovered: TotalRecovered,
                countries: [...data.Countries]
            })
        })
    }

    render(){
        const { totalCases, totalRecovered, totalDead, countries} = this.state
        return(
            <div>
                <GlobalCard cases={totalCases} recovered={totalRecovered} dead={totalDead}/>
                <Search />
                <ResultsTable  countryData={countries} />
            </div>
        )
    }
}

export default Home;