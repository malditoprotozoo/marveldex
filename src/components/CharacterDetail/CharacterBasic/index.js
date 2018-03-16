import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Name from './Name';
import Description from './Description';
import Image from './Image';
//import AddFav from './AddFav';
import SeeMore from './SeeMore';
import { Container, Row, Col } from 'reactstrap';
import FaPlus from 'react-icons/lib/fa/plus';
import './index.css';

const CharacterBasic = function({characterName, characterImage, characterBio}) {
  return (
    <Container>
      <Row>
        <Col lg='3' className='text-align'>
          <div className='char-image'>
            <Image charImage={characterImage} charName={characterName}/>
          </div>
        </Col>
        <Col lg='9'>
          <Row>
            <Col lg='12' className='name-title'>
              <Name charName={characterName}/>
            </Col>
            <Col lg='12'>
              <Description charDescription={characterBio} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
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