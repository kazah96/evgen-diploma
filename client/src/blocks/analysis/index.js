import React, { Component } from 'react'
import Plot from 'react-plotly.js';
import regression from 'regression';


class Analysis extends Component {
  render() {
    const data = [[124, 2, 4, 5], [1,2, 5,6], [1,2,4,2], [78,4,23,2]];

    const result = regression.polynomial(data, { order: 4 });

    const x = [];
    const y = [];

    result.points.forEach(point => {
      y.push(point[0]);
      x.push(point[1]);
    })


    debugger;
    return (
      <div>
        <Plot
          data={[
            {
              x: x,
              y: y,
              type: 'scatter',
              mode: 'lines+points',
              marker: { color: 'blue' },
            },
          ]}
          layout={{ width: 1200, height: 1000, title: 'A Fancy Plot' }}
        />
      </div>
    )
  }
}

export default Analysis;