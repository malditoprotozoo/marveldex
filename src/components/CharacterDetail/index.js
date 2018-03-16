import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ComicItemList from './ComicItemList';
import ComicItem from './ComicItem';
import CharacterBasic from './CharacterBasic';
import { Container, Row, Col } from 'reactstrap';
import './index.css';

class CharacterDetail extends Component {
  render() {
    return (
      <Container>
        <Row className='char-info section'>
          <Col xs='12' md={{size:8, offset:2}}>
            <CharacterBasic />
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