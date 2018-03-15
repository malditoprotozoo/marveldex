import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Name from './Name';
import Image from './Image';
import './index.css';

const charactersArr = ['Iron Man', 'Captain America', 'Spider-Man'];

class Character extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      image: ''
    }
  }
  loadData = () => {
    fetch('https://gateway.marvel.com:443/v1/public/characters?name=iron%20man&apikey=f2df40d469e17113a48b2711ea0ea74f')
    .then(response => {
      return response.json();
    })
    .then(response => {
      this.setState({
        name: response.data.results[0].name,
        image: response.data.results[0].thumbnail.path + '.' + response.data.results[0].thumbnail.extension
      })
    })
  }
  componentDidMount() {
    this.loadData()
  }
  render() {
    return (
      <div>
        <Image characterImage = {this.state.image} characterName = {this.state.name} />
        <Name characterName = {this.state.name}/>
      </div>
    )
  }
}

export default Character;