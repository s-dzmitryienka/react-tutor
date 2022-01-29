import React, {Component} from 'react';
import './App.css';
import Car from './Car/Car';

class App extends Component{
  state = {
    cars: [
      {name: 'Mazda', year: 2014},
      {name: 'Volvo', year: 2016},
      {name: 'BMW', year: 2012},
    ],
    pageTitle: 'ReactComponents'
  }

  clickHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })

  }
  
  changeInput = (event) => {
    this.setState({
      pageTitle: event.target.value
    })
  }
  render () {
    console.log('Render APP')
    return (
      <div>
        <h1>{this.state.pageTitle}</h1>
        <input type="text" onChange={this.changeInput}/>
        { this.state.cars.map((car, index) => {
          return (
            <Car
              key={index}
              name={car.name}
              year={car.year}
              onChangeTitleHandler={this.clickHandler.bind(this, car.name)}
            />
          )
        })}
    </div>
    )
  }
}

export default App;
