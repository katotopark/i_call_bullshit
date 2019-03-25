import React from 'react'
import Twemoji from 'react-twemoji'
import { titleStyle, hashStyle, emojiStyle } from '../styles.css'

class TitleComponent extends React.Component {
  parseEmoji(emoji) {
    return (
      <Twemoji options={{ className: 'twemoji' }} style={emojiStyle}>
        <span>{emoji}</span>
      </Twemoji>
    )
  }

  render() {
    return (
      <div style={titleStyle}>
        <h5 style={hashStyle}>#</h5>
        {this.parseEmoji('📞')}
        {this.parseEmoji('🐂')}
        {this.parseEmoji('💩')}
      </div>
    )
  }
}

export default TitleComponent
