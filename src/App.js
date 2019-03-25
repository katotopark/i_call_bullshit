import React, { Component } from 'react'
import './App.css'
import TitleComponent from './components/TitleComponent'
import CardComponent from './components/CardComponent'
import { containerStyle } from './styles.css'
import { Row, Col } from 'reactstrap'
import Faker from 'faker'

class App extends Component {
  state = {
    tweets: []
  }

  componentDidMount() {
    this.getTweets()
  }

  getTweets() {
    const tweets = Array.from({ length: 20 }, tweet =>
      Faker.lorem.sentences(3)
    )
    this.setState({ tweets })
  }

  render() {
    return (
      <div className="App" style={containerStyle}>
        <Row>
          <Col sm={12} md={{ size: 6, offset: 3 }}>
            <TitleComponent />
          </Col>
        </Row>
        <Row>
          {
            this.state.tweets.map((tweet,index) =>
            <Col xs={12} sm={6} md={4} lg={3} key={index}>
              <CardComponent tweet={tweet}/>
            </Col>
          )}
        </Row>
      </div>
    )
  }
}

export default App;
