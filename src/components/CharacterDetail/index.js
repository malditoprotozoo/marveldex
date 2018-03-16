import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ComicItemList from './ComicItemList';
import ComicItem from './ComicItem';
import CharacterBasic from './CharacterBasic';
import { Container, Row, Col } from 'reactstrap';
import './index.css';

const char_url = 'https://gateway.marvel.com:443/v1/public/characters';
// const api_key = 'f2df40d469e17113a48b2711ea0ea74f';
// const api_key = 'f3c93215e344b3ad7b6e96ba9ad9faff&hash=b8c91f97165b04fe87a6e262179476d9';
const api_key = 'df325806086a500e9738f837cba8a7e9&hash=a31a86d05863b60cdc43763bce37f6b5';

class CharacterDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true 
    }
  }
  componentWillMount() {
    let str = this.props.location.pathname;
    let preChar = str.replace('/character/', '');
    let offChar = preChar.replace('-', ' ');
    let finalChar = offChar.replace('/', '');
    fetch(`${char_url}?name=${finalChar}&apikey=${api_key}`)
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({
          data: response.data.results[0],
          loading: false
        })
      })
      .then(() => {
        console.log(this.state);
      })
      .catch(error => {
        console.log(error);
      })
  }
  render() {
    return (
      <Container>
        <Row className='char-info section'>
          <Col xs='12' md={{size:8, offset:2}}>
            {
            this.state.loading ? <div className='load-container'><img className="loader" src={require("./../../marvel_loader.gif")}/> <span>Loading...</span></div> :
            <CharacterBasic characterName={this.state.data.name} characterImage={this.state.data.thumbnail.path + '.' + this.state.data.thumbnail.extension} characterBio={this.state.data.description} />
            }
          </Col>
        </Row>
        <Row className='comic-item-list section'>
          <Col xs='12' md={{size:6, offset:3}}>
            <ComicItemList />
          </Col>
        </Row>
      </Container>
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


export default CharacterDetail;