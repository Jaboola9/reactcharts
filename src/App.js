import React, { Component } from 'react';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import DoughnutChart from './components/DoughnutChart';
import Chart from 'chart.js';
// import logo from './logo.svg';
// import Chart from './components/Chart';
import './App.css';

Chart.defaults.global.defaultFontFamily = "Roboto, sans-serif";

// Data generation
function getRandomArray(numItems) {
  // Create random array of objects
  let names = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let data = [];
  for(var i = 0; i < numItems; i++) {
    data.push({
      label: names[i],
      value: Math.round(20 + 80 * Math.random())
    });
  }
  return data;
}

function getRandomDateArray(numItems) {
  // Create random array of objects (with date)
  let data = [];
  let baseTime = new Date('2018-05-01T00:00:00').getTime();
  let dayMs = 24 * 60 * 60 * 1000;
  for(var i = 0; i < numItems; i++) {
    data.push({
      time: new Date(baseTime + i * dayMs),
      value: Math.round(20 + 80 * Math.random())
    });
  }
  return data;
}

function getData() {
  let data = [];

  data.push({
    title: 'Visits',
    data: getRandomDateArray(150)
  });

  data.push({
    title: 'Categories',
    data: getRandomArray(20)
  });

  data.push({
    title: 'Categories',
    data: getRandomArray(10)
  });

  data.push({
    title: 'Data 4',
    data: getRandomArray(6)
  });

  return data;
}


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: getData()
    };
  }

  componentDidMount() {
    window.setInterval(() => {
      this.setState({
        data: getData()
      })
    }, 5000)
  }

  render() {
    return (
      <div className="App">
        <div className="grid">
          <div>
            <div>
              <LineChart
                data={this.state.data[0].data}
                title={this.state.data[0].title}
                color="#052A5C"
              />
            </div>
          </div>
          <div>
            <div>
              <BarChart
              data={this.state.data[1].data}
              title={this.state.data[1].title}
              color="#4F8EE1"
              />
            </div>
            <div>
              <BarChart
              data={this.state.data[2].data}
              title={this.state.data[2].title}
              color="#0B65DB"
              />
            </div>
            <div>
              <DoughnutChart
              data={this.state.data[3].data}
              title={this.state.data[3].title}
              colors={['#203A5C', '#094EA8', '#052A5C', '#4F8EE1', '#0B65DB', '#DB930B']}
              />
            </div>
          </div>
        </div>
        <div>
          {/* <h1>ABOUT</h1> */}
          <a href="#" title="dashboard updates every 5 seconds" class="tooltip"><span title="More"></span>*</a>
        </div>
      </div>
    );
  }
}

export default App;
