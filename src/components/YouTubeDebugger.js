import React from 'react'

class YouTubeDebugger extends React.Component {

    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    changeBitRate = () => {
        this.setState({ 
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        }, () => console.log(this.state))
    }

    changeResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        }, () => console.log(this.state))
    }

    render() {
        return (
        <div>
            <button onClick={this.changeBitRate} className = 'bitrate'>Clickeh</button>
            <button onClick={this.changeResolution} className = 'resolution'>ReClickeh</button>
        </div>
        )
    }
}

export default YouTubeDebugger