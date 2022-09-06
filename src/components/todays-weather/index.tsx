import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Props } from './todays-weather-interface';
import { getWeatherIconUrl } from '../../util';

class TodaysWeather extends React.PureComponent <Props> {
  render() {
    const { todaysWeather } = this.props;
    const { temp, main, icon } = todaysWeather;

    return (
      <Container className="todays-weather-container">
        <div className="day">Today</div>
        <Row className="weather-details">
          <Col xs={12} lg={{ span: 3 }} className="weather-image-container">
            <img alt="weather icon" src={getWeatherIconUrl(icon)} />
          </Col>
          <Col xs={12} lg={{ span: 3 }} className="description">
            <div className="temperature">
              {temp}°
            </div>
            <div className="main">{main}</div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TodaysWeather;
