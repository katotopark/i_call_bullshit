import React from 'react'
import { Card, CardBody, CardText } from 'reactstrap'
import { cardStyle } from '../styles.css'

class CardComponent extends React.Component {
  render() {
    return (
      <Card style={cardStyle}>
        <CardBody>
          <CardText>
            {this.props.tweet}
          </CardText>
        </CardBody>
      </Card>
    )
  }
}

export default CardComponent
