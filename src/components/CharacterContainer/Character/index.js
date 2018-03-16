import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Name from './Name';
import Image from './Image';
import { Container, Row, Col } from 'reactstrap';
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
      <Col xs='12' sm= '6' md='4' lg='2' className='character-item-container'>
        <div className='character-item'>
          <Col md='12' className='image'>
            <Image characterImage = {this.state.image} characterName = {this.state.name} />
          </Col>
          <Col md='12' className='name'>
            <Name characterName = {this.state.name}/>
          </Col>
        </div>
      </Col>
    )
  }
}


Container.propTypes = {
  fluid: PropTypes.bool
}

Row.propTypes = {
  noGutters: PropTypes.bool
}

const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
const columnProps = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.bool,
  PropTypes.shape({
    size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
    order: stringOrNumberProp,
    offset: stringOrNumberProp
  })
]);

Col.propTypes = {
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  //widths: PropTypes.array,
}

export default Character;