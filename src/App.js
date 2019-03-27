import React, { Component } from 'react'
import './App.css'
import TitleComponent from './components/TitleComponent'
import CardComponent from './components/CardComponent'
import { containerStyle } from './styles.css'
import { Row, Col } from 'reactstrap'

class App extends Component {
  state = {
    tweets: []
  }

  async componentDidMount() {
    await this.fetchTweets()
  }

  async fetchTweets() {
    const res = await fetch('/api/')
    const resJSON = await res.json()
    const tweets = resJSON.statuses.map(t => {
      const tweet = {
        user: t.user.screen_name,
        text: t.text
      }
      return tweet
    })
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
                <CardComponent tweet={tweet} index={index}/>
              </Col>
            )
          }
        </Row>
      </div>
    )
  }
}

export default App;
