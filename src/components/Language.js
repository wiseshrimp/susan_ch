import React from 'react'

import '../css/Language.css'

export default class Language extends React.Component {
    changeLanguage = ev => {
        this.props.changeLanguage(ev.target.value)
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
                            onChange={this.changeLanguage}
                            defaultValue="en" size="2">
                            <option value="en">Use English for the main language</option>
                            <option value="ch">使用英语作为主要语言</option>
                        </select>
                    </div>
                    <div onClick={this.playOpening} className="language-next"></div>
                </div>
            </div>
        )
    }
}
