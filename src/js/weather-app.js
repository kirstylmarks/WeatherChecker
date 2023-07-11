import React from 'react';

class WeatherChecker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: "Type in your location", currentWeather : '', isDay : null, tempC : '', tempF : '', classes : 'weather day'}
  }

  userLocation = (e) => {
    const userLocation = this.state.value;
    if(userLocation == '' || userLocation == 'Type in your location') {
      alert('Please type in your location');
    } else {
      const locationUrl = `https://api.weatherapi.com/v1/current.json?key=464365ab363b4ed397b161742212912&q=${userLocation}`;
      fetch(locationUrl)
    .then((response) => response.json())
    .then((data) => {
      let currentWeather = data.current.condition.text;
      const dayTime = data.current.is_day == 1 ? 'day' : 'night';
      this.setState({ currentWeather: data.current.condition.text, isDay: data.current.is_day, tempC : data.current.temp_c, tempF: data.current.temp_f, classes : 'weather ' + dayTime});
      //console.log(this.state);
    })
    .catch((err) => console.log(err));
    }
  }

  onChange(e){
    /*Grab the users initial location*/
    if(e.target.value) {
      this.setState({value: e.target.value})
    } else {
      this.setState({[e.target.name]: 'London'});
    }
  }

  render() {
    return(
      <div>
      <div className={this.state.classes}>
        <p>{this.state.tempC} &deg;C / {this.state.tempF} &deg;F</p>
        <p></p>
      </div>
        <input onChange={(value) => this.onChange(value)} id="location" value={this.state.value} name="location"/>
        <button onClick={this.userLocation}>Whats your weather like?</button>
        <p>**Instructions** : Type in your town, or location (currently only tested with full name, not postcode or coordinates) and click the button... this uses WeatherApi (free to a degree) to retrieve your local weather in C and F...</p>
        <p>This currently also appends a day / night class to the overall div, that will eventually have some styling etc etc based on weather it is currently night or day... again I am looking to expand this into other scenarios, such as windy, raining etc etc... (Total Infancy)</p>
      </div>
    );
  }
}


const people = [
  { surname: "Marks", forname: "Kirsty", age: "37 Years", id:1},
  { surname: "Marks", forname: "Natalie", age: "43 Years", id:2},
  { surname: "Marks", forname: "Sonny Sinclair", age: "21 Months", id:3}
];

function MarksHousehold () {
  const listOfPeople = people.map(person =>
    <li key={person.id}>
      <p>Hello my name is {person.forname} and I am {person.age} old.</p>
    </li>
  );

  return(
    <ul>{listOfPeople}</ul>
  );
}


function TicTacToe() {

  return (
    <div className="game">
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
    </div>
  );
};

export { WeatherChecker, MarksHousehold, TicTacToe };
