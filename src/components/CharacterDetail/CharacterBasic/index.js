import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Name from './Name';
import Description from './Description';
import Image from './Image';
//import AddFav from './AddFav';
import SeeMore from './SeeMore';
import { Container, Row, Col } from 'reactstrap';
import './index.css';

class CharacterBasic extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md='3'>
            <Image charImage='https://memestatic.fjcdn.com/pictures/Josuke+and+others+i+guess+fan+art+comp_5bc793_6279840.jpg' charName='nombre'/>
          </Col>
          <Col md='6'>
            <Row>
              <Col>
              <Name charName='nombre'/>
              </Col>
              <Col>
                <Description charDescription='Lorem ipsum dolor sit amet.'/>
              </Col>
              <Col>
                <SeeMore charUrl='google.com'/>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

// <AddFav /> en espacio bajo description
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

export default CharacterBasic;