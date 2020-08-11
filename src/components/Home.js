import React, { Component } from "react";
import ResultsTable from "./Table";
import GlobalCard from "./Card";



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
    searchRows() {
        let searchInput = document.getElementById('searchBar');
        let searchValue = searchInput.value.toLowerCase();
        let table = document.getElementById('statsTable');
        let rows = table.getElementsByTagName('tr');

        for (let i = 0; i < rows.length; i++){
            let td = rows[i].getElementsByTagName('td')[0];
            if (td){
                console.log(td.innerText);
                let value = td.textContent || td.innerText;
                if (value.toLowerCase().indexOf(searchValue) > -1) {
                    rows[i].style.display = "";
                  } else {
                    rows[i].style.display = "none";
                  }
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