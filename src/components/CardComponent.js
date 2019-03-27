import React from 'react'
import { Card, CardBody, CardText } from 'reactstrap'
import { cardStyle } from '../styles.css'

class CardComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cardText: ''
    }
    this.handleMouseOver = this.handleMouseOver.bind(this)
  }

  componentDidMount() {
    this.setState({ cardText: this.props.tweet.text })
  }

  handleMouseOver() {
    (this.state.cardText === this.props.tweet.text)
      ? this.setState({
          cardText: `CALLER: ${this.props.tweet.user}`
        })
      : this.setState({
          cardText: this.props.tweet.text
        })
  }

  render() {
    return (
      <Card style={cardStyle}
      onMouseEnter={this.handleMouseOver}
      onMouseLeave={this.handleMouseOver}>
        <CardBody>
          <CardText>
            {this.state.cardText}
          </CardText>
        </CardBody>
      </Card>
    )
  }
}

export default CardComponent
