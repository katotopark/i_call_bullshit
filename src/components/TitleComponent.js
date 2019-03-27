import React from 'react'
import { titleStyle, emojiStyle } from '../styles.css'

class TitleComponent extends React.Component {
  parseEmoji(emoji) {
    return <p style={emojiStyle}>{emoji}</p>
  }

  render() {
    return (
      <div style={titleStyle}>
        {this.parseEmoji('📞')}
        {this.parseEmoji('🐂')}
        {this.parseEmoji('💩')}
      </div>
    )
  }
}

export default TitleComponent
