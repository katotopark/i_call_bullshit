import React from 'react'
import { Card, CardBody, CardText, Row, Col } from 'reactstrap'
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
    const dataStyle = {
      fontSize: '1rem',
      border: '0px',
      textAlign: 'left',
      wordWrap: 'break-word',
      hyphens: 'none'
    }
    const textStyle = {
      fontSize: '.85rem',
      fontWeight: '600',
      letterSpacing: '.9px',
      position: 'absolute',
      bottom: '1px',
      left: '10px',
      color: '#f4a9b3'
    }
    const bodyStyle = { padding: '5px' }
    const colStyle = { padding: '0px' }
    const emojiStyle = {
      color: 'transparent',
      textShadow: '0 0 0 #f4a9b3',
      fontSize: '1.2rem'
    }

    return (
      <Card style={cardStyle}>
        <CardBody style={bodyStyle}>
          <CardText>
            <Row>
              <Col xs={{ size: 3 }}>
                <span>
                  <p style={emojiStyle}><span role="img" aria-label="telefon">📞</span> :</p>
                </span>
              </Col>
              <Col xs={{ size: 8 }} style={colStyle}>
                <p style={dataStyle}>{this.props.tweet.text}</p>
              </Col>
            </Row>
          </CardText>
          <CardText>
            <h4 style={textStyle}>@<span>{this.props.tweet.user}</span></h4>
          </CardText>
        </CardBody>
      </Card>
    )
  }
}

export default CardComponent
