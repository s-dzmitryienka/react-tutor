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

  clickHandler = () => {
    console.log('Clicked')
    const oldTitle = this.state.pageTitle
    const newTitle = oldTitle + ' - Changed'
    this.setState({
      pageTitle: newTitle
    })

  }

  render () {
    console.log('Render APP')
    return (
      <div>
        <h1>{this.state.pageTitle}</h1>
        <button onClick={this.clickHandler}>Change title</button>
        <Car name={this.state.cars[0].name} year={this.state.cars[0].year}/>
        <Car name={this.state.cars[1].name} year={this.state.cars[1].year}/>
        <Car name={this.state.cars[2].name} year={this.state.cars[2].year}>
          <p style={{color: 'red'}}>Color</p>
        </Car>
    </div>
    )
  }
}

export default App;
