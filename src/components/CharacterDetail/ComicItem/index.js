import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import PublishOn from './PublishOn';
import Pages from './Pages';
import Synopsis from './Synopsis';
import Cover from './Cover';
import SeeMore from './SeeMore';
import { Container, Row, Col } from 'reactstrap';
import './index.css';

class ComicItem extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="9">
            <Row>
              <Col md="12">
                <Title comicTitle = 'título de prueba'/>
                <PublishOn comicDate = '00/00/00'/>
                <Pages comicPages = '160'/>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <Synopsis comicSynopsis = 'Lorem ipsum dolor sit amet.'/>
                <SeeMore />
              </Col>
            </Row>
          </Col>
          <Col md="3">
            <Cover comicTitle = 'título de prueba' comicImage = '#' />
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

export default ComicItem;