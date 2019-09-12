import React, { Component } from 'react'

import Stories from 'react-stories'
import SeeMore from './SeeMoreForm'

export default class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="left">
          <h2><code><a rel="noopener noreferrer" href="https://www.npmjs.com/package/react-stories" target="_blank">react-stories</a></code></h2>
          <p>Create Instagram like stories on the web using React</p>
          <br/>
          <code ><span style={{background: '#eee', padding: 5, paddingLeft: 10, paddingRight: 10, borderRadius: 5, width: 'auto'}}>npm i react-stories</span></code>
          <br/>
          <p>Made with ♥ by <a rel="noopener noreferrer" href="https://github.com/reactrondev/react-stories" target="_blank">@reactrondev</a></p>
          <br/>
          <div style={{background: '#eee', padding: 5, paddingLeft: 10, paddingRight: 10, borderRadius: 5, width: 'auto'}}><p>◀ Tap left for previous story</p>
          <p>▶︎ Tap right for next story</p>
          <p>◉ Press and hold to pause</p></div>
          <br/>
          <div className="updates">
            <p><mark><b>Version [V1.0.0]</b></mark></p>
            <p>1. The version was forked from https://www.npmjs.com/package/react-insta-stories</p>
          </div>
          <br/>
          <p>Know more about us here: <a rel="noopener noreferrer" href="https://reactron.dev" target="_blank">https://reactron.dev</a></p>
        </div>
        <div className="stories"><Stories ref={s => this.stories = s} stories={stories} defaultDuration={1200} /></div>
      </div>
    )
  }
}

const stories = [{ url: 'https://picsum.photos/1080/1920', seeMore: <SeeMore />, header: { heading: 'Mohit Karekar', subheading: 'Posted 5h ago', profileImage: 'https://picsum.photos/1000/1000' } }, { url: 'https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN', header: { heading: 'Mohit Karekar', subheading: 'Posted 32m ago', profileImage: 'https://picsum.photos/1080/1920' } }, { url: 'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg', header: { heading: 'reactrondev/react-stories', subheading: 'Posted 32m ago', profileImage: 'https://avatars0.githubusercontent.com/u/24852829?s=400&v=4' } }, { url: 'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4', type: 'video', duration: 1000 }, { url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', type: 'video', seeMore: <SeeMore /> }, { url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', type: 'video' }, 'https://images.unsplash.com/photo-1534856966153-c86d43d53fe0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80', 'https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', 'https://images.unsplash.com/photo-1499202189329-5d76e29aa2b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1482&q=80'].map((s, i) => {
  if(i !== 4 && i !== 5) {
    if(typeof s === 'string') {
      let o = {}
      o.url = s
      o.styles = {
        objectFit: 'cover',
        width: '100%', margin: 'none'
      }
      return o
    }
    s.styles = {
      objectFit: 'cover',
      width: '100%', margin: 'none'
    }
    return s
  } else return s
})
