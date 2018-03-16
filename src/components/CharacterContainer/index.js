import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Character from './Character/index';
import { Container, Row, Col } from 'reactstrap';
import './index.css';

const characters_arr = ['Iron Man', 'Captain America', 'Spider-Man', 'Thor'];
const char_url = 'https://gateway.marvel.com:443/v1/public/characters';
const api_key = 'f2df40d469e17113a48b2711ea0ea74f';

class CharacterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true
    };
    console.log(this.state);
  }
  componentWillMount() {
    let results = [];
    characters_arr.map(char => {
      fetch(`${char_url}?name=${char}&apikey=${api_key}`)
        .then(response => {
          return response.json();
        })
        .then(response => {
          results.push(response.data.results[0]);
        })
        .then(() => {
          console.log(this.state);
        })
        .then(() => {
          results.length >= characters_arr.length ? this.setState({ data: results, loading: false }) : this.setState({data: results, loading: true});
        })
        .catch(error => {
          console.log('error >' + error);
        })
      })
  }
  render() {
    return (
      <Row className='character-container'>
        {
        this.state.loading ? <p>insert loader here</p> :
        this.state.data.map((char, index) =>
            <Character key={char.name} characterName={char.name} characterImage={char.thumbnail.path + '.' + char.thumbnail.extension}/>
        )
        }
      </Row>
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

export default CharacterContainer;