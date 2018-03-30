import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Character from './Character/index';
import { Container, Row, Col } from 'reactstrap';
import md5 from 'md5';
import './index.css';

const characters_arr = ['Iron Man', 'Captain America', 'Spider-Man', 'Thor', 'Deadpool', 'Black Widow', 'Hawkeye',
'Black Panther', 'Loki', 'Hulk', 'Doctor Strange', 'Wasp', 'Hank Pym', 'Scarlet Witch', 'QuickSilver', 'Jessica Jones',
'Gamora', 'Daredevil', 'Elektra', 'Rogue', 'Storm', 'Wolverine', 'X-23', 'Winter Soldier', 'Groot'];
const char_url = 'https://gateway.marvel.com:443/v1/public/characters';
const ts = Date.now();
const api_key = 'f2df40d469e17113a48b2711ea0ea74f';
const hash = md5(ts, '01b038d335e4cfefea55eeeb6d6e033c5077bf45', 'f2df40d469e17113a48b2711ea0ea74f');

class CharacterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true
    };
  }
  componentWillMount() {
    let results = [];
    characters_arr.map(char => {
      fetch(`${char_url}?name=${char}&apikey=${api_key}&hash=${hash}`)
        .then(response => {
          return response.json();
        })
        .then(response => {
          results.push(response.data.results[0]);
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
        this.state.loading ? <div className='load-container'><img className="loader" src={require("./../../marvel_loader.gif")}/> <span>Loading...</span></div> :
        this.state.data.map((char, index) =>
            char !== undefined ?
            <Character key={char.name} characterName={char.name} characterImage={char.thumbnail.path + '.' + char.thumbnail.extension}/> :
            <p key={'not-found'+ index}>Character Not Found</p>
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