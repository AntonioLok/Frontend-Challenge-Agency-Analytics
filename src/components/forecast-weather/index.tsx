import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Props } from './forecast-weather-interface';
import { getWeatherIconUrl } from '../../util';

class ForecastWeather extends React.PureComponent <Props> {
  render() {
    const { forecastWeather, nextFourDays } = this.props;

    return (
      <Container className="forecast-weather-container">
        <Row>
          {nextFourDays.map((day: string, i: number) => {
            const { temp, icon } = forecastWeather[day];
            return (
              <Col className="weather-details" key={i} xs={6} md={6} lg={3}>
                <div className="day">{day}</div>
                <img alt="weather icon" src={getWeatherIconUrl(icon)} />
                <div className="temperature">{temp}°</div>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default ForecastWeather;
