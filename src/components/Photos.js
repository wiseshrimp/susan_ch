import React from 'react'
import Draggable from 'react-draggable'
import { POPUPS, CREDITS, CHINESE_HEADERS, CREDITS_CHINESE } from '../constants/constants'

import '../css/Popup.css'

export default class Photos extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            top: `${Math.random() * window.innerHeight / 2}px`,
            left: `${Math.random() * (window.innerWidth - window.innerWidth / 2) + window.innerWidth / 4}px`
        }
    }

    componentDidMount() {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            Array.from(document.getElementsByClassName('caption')).forEach(caption => {
                caption.classList.add('mobile')
            })
        }
    }

    close = ev => {
        this.props.closePopup(this.props.type)
    }

    renderPhotos = () => {
        if (this.props.type === POPUPS.PRIVATE) {
            return (
                <div className="private-container">
                    {this.props.images.map(this.renderPhoto)}
                </div>
            )
        }
        return (
            <div className={`fullscreen-photo ${this.props.type.toLowerCase()}`}></div>
        )
    }

    renderPhoto = img => (
        <img alt="You and Susan together" key={img} data-popup={POPUPS.FULLSCREEN} data-img={img} onClick={this.props.addPopup} src={img} className="private-img" />
    )


    renderPrivate = () => (
        <div className={`i-container p-container ${this.props.isPrivateHidden ? 'hidden-private' : ''}`}
            data-ref="privateFolderVideo" data-popup={POPUPS.PRIVATE} onClick={this.props.addPopup}>
                <div data-ref="privateFolderVideo" data-popup={POPUPS.PRIVATE} className="photos-icon folder"></div>
            <div className="icon-title">{this.props.language === 'en' ? 'Private' : '私人的'}</div>
        </div>
    )

    renderIcons = () => (
        <div className="photos-container">
            <div className="i-container"
                data-ref="emptyRoomVideo" data-popup={POPUPS.QUERETARO} onClick={this.props.addPopup}>
                <div data-ref="emptyRoomVideo" data-popup={POPUPS.QUERETARO} className="icon-container">
                    <div data-ref="emptyRoomVideo" data-popup={POPUPS.QUERETARO} className="photo-container">
                        <div data-ref="emptyRoomVideo" data-popup={POPUPS.QUERETARO} className="photos-icon queretaro"></div>
                    </div>
                </div>
                <div className="icon-title">queretaro</div>
            </div>

            <div className="i-container"
                data-ref="treeVideo" data-popup={POPUPS.TREE} onClick={this.props.addPopup}>
                <div data-ref="treeVideo" data-popup={POPUPS.TREE} className="icon-container">
                    <div data-ref="treeVideo" data-popup={POPUPS.TREE} className="photo-container">
                        <div data-ref="treeVideo" data-popup={POPUPS.TREE} className="photos-icon tree"></div>
                    </div>
                </div>
                <div className="icon-title">{this.props.language === 'en' ? 'tree' : '树'}</div>
            </div>
            {this.renderPrivate()}
        </div>
    )

    renderBody = () => {
        switch (this.props.type) {
            case POPUPS.PHOTOS:
                return this.renderIcons()
            case POPUPS.FULLSCREEN:
                return this.renderFullscreen()
            case POPUPS.CREDITS:
                return this.renderText()
            default:
                return this.renderPhotos()
        }
    }

    renderText = () => (
        <div className="credits-text">
            <div dangerouslySetInnerHTML={{__html: this.props.language === 'en' ? CREDITS : CREDITS_CHINESE}}></div>
        </div>
    )

    renderFullscreen = () => (
        <div className="fullscreen-c">
            <img alt="fullscreen of you and Susan together" src={this.props.image} className="fullscreen-img" />
        </div>
    )

    onDragStart = ev => {
        this.props.setDragging(true)

    }

    onDragStop = ev => {
        this.props.setDragging(false)
    }


    render() {
        return (
            <Draggable 
                handle=".top-bar"
                bounds="html"
                onStart={this.onDragStart}
                onStop={this.onDragStop}>
                <div 
                    style={{
                        top: this.state.top
                    }}
                    className="window popup" >
                    <div className="top-bar">
                    <div className="buttons">
                        <div onClick={this.close} className="close">
                            <div className="closebutton"><span><strong>x</strong></span></div>
                        </div>
                    </div>
                    <div className="title-header">{this.props.language === 'en' ? this.props.type : CHINESE_HEADERS[this.props.type]}</div>
                </div>
                {this.renderBody()}
                </div>
            </Draggable>
        )
    }
}
