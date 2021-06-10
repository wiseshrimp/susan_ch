import React from 'react'

import '../css/Language.css'

export default class Language extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            language: 'en'
        }
    }
    changeLanguage = ev => {
        this.props.changeLanguage(ev.target.value)
        this.setState({
            language: ev.target.value
        })
    }

    playOpening = ev => {
        this.props.playOpening()
    }
    
    render() {
        return (
            <div className="Language">
                <div className="blur">
                    <div className="black-overlay"></div>
                    <div className="background"></div>
                </div>
                <div className="language-container">
                    <div className="welcome">Welcome</div>
                    <div className="language-select">
                        <select 
                            className="language-select-op"
                            onChange={this.changeLanguage}
                            defaultValue="en" size="2">
                            <option value="en">Use English for the main language (recommended)</option>
                            <option value="ch">使用中文作为主要语言</option>
                        </select>
                    </div>
                    <div className={`warning-chinese ${this.state.language === 'ch' ? 'visible' : 'hidden'}`}>没有中文字幕</div>
                    <div onClick={this.playOpening} className="language-next"></div>
                </div>
            </div>
        )
    }
}
