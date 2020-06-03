import React from 'react';
import NVD3Chart from 'react-nvd3';

const datum = [
    {key: "M4A1", y: 29, color: "#ff8a65"},
    {key: "AX-50", y: 50, color: "#f4c22b"},
    {key: "HDR", y: 32, color: "#04a9f5"},
    {key: "GRAU", y: 196, color: "#3ebfea"},
    {key: "RENETTI", y: 20, color: "#4F5467"},
    {key: "ODEN", y: 98, color: "#1de9b6"},
];

class PieBasicChart extends React.Component {

    render() {
        return <NVD3Chart id="chart" height={300} type="pieChart" datum={datum} x="key" y="y"  />
    }
}

export default PieBasicChart;