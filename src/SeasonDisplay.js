import './SeasonDisplay.css'
import React, { Component } from 'react';

class SeasonDisplay extends Component {
    getSeason(month, lat) {
        if (month > 2 && month < 9) {
            return lat > 0 ? "summer" : "winter";
        }
        else {
            return lat < 0 ? "summer" : "winter";
        }
    }

    seasonConfig = {
        summer: {
            text: "Lets hit the beach",
            iconName: "sun"
        },
        winter: {
            text: "Burr, it is chilly",
            iconName: "snowflake"
        }
    }

    render() {
        console.log(this.props.lat)
        const season = this.getSeason((new Date).getMonth(), this.props.lat)
        const { text, iconName } = this.seasonConfig[season]

        return (
            <div className={`season-display ${season}`}>
                <i className={`${iconName} icon massive icon-left`}></i>
                <h1>{text}</h1>
                <i className={`${iconName} icon massive icon-right`}></i>
            </div>
        );
    }
}

export default SeasonDisplay;