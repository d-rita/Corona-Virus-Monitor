import React, { Component } from "react";

class ResultsTable extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){
        fetch('https://api.covid19api.com/summary')
        .then(res => res.json())
        .then(data => console.log(data))
    }

    render(){
        return(
            <div></div>
        )
    }
}

export default ResultsTable;
