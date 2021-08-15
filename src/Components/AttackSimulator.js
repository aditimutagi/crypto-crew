
import React, { Component } from 'react';
import LineChart from 'react-linechart';
import '../../node_modules/react-linechart/dist/styles.css';

//our attack simulator comes here; currently, we have a mockup of what we are going to build
//simulator will happen as a user clicks simulate
//No need to use currently imported Linechart library
class AttackSimulator extends Component  {
    render() {
        const data = [
            // Placeholder; this part will connected to our algorithm (both attack & defense)
            {
                name: "BTC",						
                color: "steelblue", 
                points: [{x: 1, y: 2}, {x: 2, y: 3}, {x: 3, y: 4}, {x: 4, y: 0}, {x: 5, y: -0.4}] 
            },
            {
                name: "DOGE",						
                color: "red", 
                points: [{x: 1, y: 3}, {x: 2, y: 4}, {x: 3, y: 2}, {x: 4, y: -1}, {x: 5, y: -1.5}] 
            },
            {
                name: "ETHER",						
                color: "yellow", 
                points: [{x: 1, y: 1}, {x: 2, y: 0}, {x: 3, y: 1}, {x: 4, y: 3}, {x: 5, y: 3.5}]
            },
            {
                name: "IOTA",						
                color: "green", 
                points: [{x: 1, y: -1}, {x: 2, y: 1}, {x: 3, y: -1.2}, {x: 4, y: -0.8}, {x: 5, y: 0.2}] 
            }
        ];
        return (
            <div>
                <div className="simulator">
                    <LineChart 
                        width={600}
                        height={400}
                        data={data}
                        hideXLabel="true"
                        hideYLabel="true"
                        hidePoints="true"  
                    />
                </div>				
            </div>
        );
    }
}

export default AttackSimulator