import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Name from './Name';
import Description from './Description';
import Image from './Image';
import AddFav from './AddFav';
import SeeMore from './SeeMore';
import { Container, Row, Col } from 'reactstrap';
import './index.css';

class CharacterBasic extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Image />
          </Col>
          <Col>
            <Name />
            <Description />
            <AddFav />
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

export default CharacterBasic;