![Main image](https://i.imgur.com/JQw5hwo.jpg?2)
<h1 align="center">@reactrondev/react-stories</h1>
<p align="center">A React component for Instagram like stories</p>

[![Backers on Open Collective](https://opencollective.com/@reactrondev/react-stories/backers/badge.svg)](#backers) [![Sponsors on Open Collective](https://opencollective.com/@reactrondev/react-stories/sponsors/badge.svg)](#sponsors) [![NPM](https://img.shields.io/npm/v/@reactrondev/react-stories.svg)](https://www.npmjs.com/package/@reactrondev/react-stories) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

#### Recent updates 🚀
⚡️ APIs added to trigger changes manually
⚡️ See More option added

![Demo screenshot](https://i.imgur.com/Twvjxp5.png)

## Install

```bash
npm install --save @reactrondev/react-stories
```

or

```bash
yarn add @reactrondev/react-stories
```

## Demo
The component responds to actions like tap on right side for next story, on left for previous and tap and hold for pause. Custom time duration for each story can be provided.
See it in action here: https://reactrondev.github.io/@reactrondev/react-stories/

## Usage

```jsx
import React, { Component } from 'react'

import Stories from '@reactrondev/@reactrondev/react-stories'

class App extends Component {
  render () {
    return (
      <Stories
        stories={stories}
        defaultInterval={1500}
        width={432}
        height={768}
      />
    )
  }
}

const stories = [{ url: 'https://picsum.photos/1080/1920', seeMore: <SeeMore />, header: { heading: 'Mohit Karekar', subheading: 'Posted 5h ago', profileImage: 'https://picsum.photos/1000/1000' } }, { url: 'https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN', header: { heading: 'Mohit Karekar', subheading: 'Posted 32m ago', profileImage: 'https://picsum.photos/1080/1920' } }, { url: 'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg', header: { heading: 'reactrondev/@reactrondev/react-stories', subheading: 'Posted 32m ago', profileImage: 'https://avatars0.githubusercontent.com/u/24852829?s=400&v=4' } }, { url: 'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4', type: 'video', duration: 1000 }, { url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', type: 'video', seeMore: <SeeMore /> }, { url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', type: 'video' }, 'https://images.unsplash.com/photo-1534856966153-c86d43d53fe0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80']
```

## Props

Property | Type | Default | Description
--- | --- | --- | ---
`stories` | [String/Object] | `required` | An array of image urls or array of story objects (options described below)
`defaultInterval` | Number | 1200 | Milliseconds duration for which a story persists
`loader` | Component | Ripple loader | A loader component as a fallback until image loads from url
`header` | Component | Default header as in demo | A header component which sits at the top of each story. It receives the `header` object from the `story` object. Data for header to be sent with each story object.
`width` | Number | 360 | Width of the component in pixels
`height` | Number | 640 | Height of the component in pixels
`storyStyles` | Object | none | Override the default story styles mentioned below.
`loop` | Boolean | false | The last story loop to the first one and restart the stories.


### Story object
Instead of simple string url, a comprehensive 'story object' can also be passed in the `stories` array.

Property | Description
--- | ---
`url` | The url of the resource, be it image or video.
`duration` | Optional. Duration for which a story should persist.
`header` | Optional. Adds a header on the top. Object with `heading`, `subheading` and `profileImage` properties.
`seeMore` | Optional. Adds a see more icon at the bottom of the story. On clicking, opens up this component.
`type` | Optional. To distinguish a video story. `type: 'video'` is necessary for a video story.
`styles` | Optional. Override the default story styles mentioned below.

### Default story styles
Following are the default story content styles. Override them by providing your own style object with each story or a global override by using the `storyStyles` prop.
```js
storyContent: {
    width: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
    margin: 'auto'
}
```

## API
Following functions can be accessed using the `ref` of default export, e.g. `this.stories.pause()`

##### `pause(overrideHideProgress: Boolean)`
Pause the currently playing story. Pass `true` to override the default hiding of progress bars.

##### `play()`
Play a paused story.

##### `previous()`
Jump to the previous story. Similar to when tapped on left side of the screen.

##### `next()`
Jump to the next story. Similar to when tapped on right side of the screen.

##### `toggleSeeMore(show: Boolean)`
Show or hide the `Show More` component. Pass `true` to show and otherwise.

## License

MIT © [reactrondev](https://github.com/reactrondev)
