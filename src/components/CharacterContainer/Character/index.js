import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Name from './Name';
import Image from './Image';
import { Container, Row, Col } from 'reactstrap';
import './index.css';

const gettingAlt = (event) => {
  console.log(event.target.alt);
}

const Character = function({characterName, characterImage}) {
  return (
    <Col xs='12' sm= '6' md='4' lg='2' className='character-item-container' onClick={gettingAlt}>
      <div className='character-item'>
        <Col md='12' className='image'>
          <Image characterImage = {characterImage} characterName = {characterName} />
        </Col>
        <Col md='12' className='name'>
          <Name characterName = {characterName}/>
        </Col>
      </div>
    </Col>
  )
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