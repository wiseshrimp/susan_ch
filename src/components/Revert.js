import React from 'react'
import Draggable from 'react-draggable'

import '../css/Update.css'

export default class Revert extends React.Component {
    constructor(props) {
        super(props)

        this.window = React.createRef()
    }

    onDragStart = ev => {
        this.props.setDragging(true)

    }

    onDragStop = ev => {
        this.props.setDragging(false)
    }

    render() {
        return (
            <Draggable
                onStart={this.onDragStart}
                onStop={this.onDragStop}
                handle=".top-bar"
                style={{
                    top: '30vh',
                    left: 'calc(50vw - 125px)'
                }}
                bounds="html">
                <div
                ref={this.window}
                    className="window popup update-container" >
                    <div className="top-bar">
                        <div className="buttons">
                            <div onClick={this.closeUpdate} className="close">
                                <div className="closebutton"><span><strong>x</strong></span></div>
                            </div>
                        </div>
                        <div className="title-header">{this.props.language === 'ch' ? '软件更新' : 'Software Update'}</div>
                    </div>
                    <div className="update-body">
                        <div className="update-text">{this.props.language === 'en' ? 'Revert back to old operating system? Or refresh the page to restart the experience.' : '恢复到旧操作系统？ 或者刷新页面重新开始体验'}</div>
                        <div className="update-button" onClick={this.props.revert}>{this.props.language === 'en' ? 'Revert' : '恢复'}</div>
                    </div>
                </div>
            </Draggable>
        )
    }
}
