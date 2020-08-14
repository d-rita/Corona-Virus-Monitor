import React from 'react';

const GlobalCard = (props) => {
    const { cases, recovered, dead } = props;
    return (
        <div className="globalCard">
            <div className="globalHeader">
                <h2>Worldwide</h2>
            </div>
            <div className="globalStat">
                <h4>Cases</h4> 
                <span>{cases}</span>
            </div>
            <div className="globalStat">
                <h4>Deaths</h4>
                <span>{dead}</span>
            </div>
            <div className="globalStat">
                <h4>Recovered</h4>
                <span>{recovered}</span>
            </div>
        </div>
    )
}

export default GlobalCard;
