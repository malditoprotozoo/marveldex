import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ComicItemList from './ComicItemList';
import ComicItem from './ComicItem';
import CharacterBasic from './CharacterBasic';
import { Container, Row, Col } from 'reactstrap';
import md5 from 'md5';
import './index.css';

const char_url = 'https://gateway.marvel.com:443/v1/public/characters';
const ts = Date.now();
const api_key = 'f2df40d469e17113a48b2711ea0ea74f';
const hash = md5(ts, '01b038d335e4cfefea55eeeb6d6e033c5077bf45', 'f2df40d469e17113a48b2711ea0ea74f');

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
    let offChar;
    preChar !== 'Spider-Man/' ? offChar = preChar.replace('-', ' ') : offChar = preChar;
    let finalChar = offChar.replace('/', '');
    fetch(`${char_url}?name=${finalChar}&apikey=${api_key}&hash=${hash}`)
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({
          data: response.data.results[0],
          loading: false
        })
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
              <CharacterBasic characterName={this.state.data.name} characterImage={this.state.data.thumbnail.path + '.' + this.state.data.thumbnail.extension} characterBio={this.state.data.description} comicUrl={this.state.data.resourceURI}/>
            }
          </Col>
        </Row>
        <Row className='comic-item-list section'>
          <Col xs='12' md={{size:6, offset:3}}>
            { 
              this.state.loading ? <p>Loading</p> :
              this.state.data.series.items.map((comic) => {
              <ComicItem key={comic.name} comicTitle={comic.name} />
            })
            }
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