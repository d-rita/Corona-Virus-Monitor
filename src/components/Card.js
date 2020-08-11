import React from 'react';

const GlobalCard = (props) => {
    const { cases, recovered, dead } = props;
    return (
        <div className="globalCard">
            <div>
                <h3>Worldwide Stats</h3>
            </div>
            <div>
                <p>Cases</p> {cases}
            </div>
            <div>
                <p>Deaths</p> {dead}
            </div>
            <div>
                <p>Recovered</p> {recovered}
            </div>
        </div>
    )
}

export default GlobalCard;
