/**
    <div className="c-user-messages">
        <div className="c-user-content">
            <div className="c-messages">
                Ok
            </div>
            <div className="c-messages">
                Thanks for messaging us. We try to be as responsive as possible. We'll get back to you soon.
            </div>
        </div>
    </div>
    <div className="c-bot-messages">
        <div className="c-bot-img">
            <i class="la la-user"></i>
        </div>
        <div className="c-bot-content">
            <div className="c-messages">
                Ok
            </div>
            <div className="c-messages">
                Thanks for messaging us. We try to be as responsive as possible. We'll get back to you soon.
            </div>
        </div>
    </div>
*/

import React from 'react';
import './index.scss';
import { Send, Close } from '@material-ui/icons';

const iconStyle = {
    "fontSize": "20px",
    "margin": "5px",
    "color": "#159399",
};

class ChatBot extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            text: '',
            show: false,
        };
    }

    componentDidMount() {
        this.chatBody.scrollTop = this.chatBody.scrollHeight;
    }

    componentDidUpdate() {
        this.chatBody.scrollTop = this.chatBody.scrollHeight;
    }

    toggleShow = () => {
        this.setState({ show: !this.state.show });
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleChat = event => {
        if (event.key === "Enter" && event.target.value !== "") {
          this.requestAnswer(event.target.value);
        }
    };

    handleClickChat = () => {
        this.requestAnswer(this.inputChat.value);
    };

    requestAnswer = (value) => {
        let { list } = this.state;
        list.push((
            <div className="c-user-messages">
                <div className="c-user-content">
                    <div className="c-messages">
                        {value}
                    </div>
                </div>
            </div>
        ));

        list.push((
            <div className="c-bot-messages">
                <div className="c-bot-img">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 32 32"><path fill="#004463" d="M16 7.5c-.3 0-.5-.2-.5-.5V4c0-.3.2-.5.5-.5s.5.2.5.5v3c0 .3-.2.5-.5.5z"/><path fill="#d5e5f2" d="M9.5 11v-1c0-1.7 1.3-3 3-3h7c1.7 0 3 1.3 3 3v1c0 1.7-1.3 3-3 3h-7c-1.7 0-3-1.3-3-3z"/><circle cx="19" cy="10.5" r="1.5" fill="#01a6ff"/><path fill="#607d95" d="M26 18c1.4 0 2.5 1.1 2.5 2.5S27.4 23 26 23h-2.5v-5H26z"/><circle cx="16" cy="3.5" r="1" fill="#ef4a4c"/><path fill="#b0c4da" d="M11.5 11v-1c0-1.7 1.3-3 3-3h-2c-1.7 0-3 1.3-3 3v1c0 1.7 1.3 3 3 3h2c-1.7 0-3-1.3-3-3z"/><circle cx="13" cy="10.5" r="1.5" fill="#01a6ff"/><path fill="#006ef4" d="M12.5 10.5c0-.7.4-1.2 1-1.4-.2-.1-.3-.1-.5-.1-.8 0-1.5.7-1.5 1.5S12.2 12 13 12c.2 0 .3 0 .5-.1-.6-.2-1-.7-1-1.4zM18.5 10.5c0-.7.4-1.2 1-1.4-.2-.1-.3-.1-.5-.1-.8 0-1.5.7-1.5 1.5S18.2 12 19 12c.2 0 .3 0 .5-.1-.6-.2-1-.7-1-1.4z"/><path fill="#607d95" d="M14.5 14h3v3h-3z" transform="rotate(90 16 15.5)"/><path fill="#4b6c85" d="M14.5 14h3v1.5h-3zM6.5 28v-5H6c-.6 0-1.1-.2-1.5-.5V28M25.5 28v-5h.5c.6 0 1.1-.2 1.5-.5V28"/><path fill="#607d95" d="M6 18c-1.4 0-2.5 1.1-2.5 2.5S4.6 23 6 23h2.5v-5H6z"/><path fill="#40657c" d="M4.5 22.5V24c.4.3.9.5 1.5.5h.5V23H6c-.6 0-1.1-.2-1.5-.5zM27.5 22.5V24c-.4.3-.9.5-1.5.5h-.5V23h.5c.6 0 1.1-.2 1.5-.5z"/><path fill="#4b6c85" d="M7 18v1.5c0 1.1-.9 2-2 2h-.5c-.3 0-.6-.1-.8-.2C4 22.3 4.9 23 6 23h2.5v-5H7zM25 18v1.5c0 1.1.9 2 2 2h.5c.3 0 .6-.1.8-.2-.3 1-1.2 1.7-2.3 1.7h-2.5v-5H25z"/><path fill="#90cff1" d="M8.5 27v-9c0-.6.4-1 1-1h13c.6 0 1 .4 1 1v9c0 .6-.4 1-1 1h-13c-.6 0-1-.4-1-1z"/><path fill="#70b7e6" d="M15.5 26c-2.2 0-4-1.8-4-4v-5h-2c-.6 0-1 .4-1 1v9c0 .6.4 1 1 1h13c.6 0 1-.4 1-1v-1h-8z"/><path fill="#4b6c85" d="M7.5 30.5c-.3 0-.5-.2-.5-.5 0-.8-.7-1.5-1.5-1.5S4 29.2 4 30c0 .3-.2.5-.5.5S3 30.3 3 30c0-1.4 1.1-2.5 2.5-2.5S8 28.6 8 30c0 .3-.2.5-.5.5zM28.5 30.5c-.3 0-.5-.2-.5-.5 0-.8-.7-1.5-1.5-1.5S25 29.2 25 30c0 .3-.2.5-.5.5s-.5-.2-.5-.5c0-1.4 1.1-2.5 2.5-2.5S29 28.6 29 30c0 .3-.2.5-.5.5z"/><path fill="#004463" d="M20 24.5c-.3 0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5s.5.2.5.5v4c0 .3-.2.5-.5.5z"/><path fill="#004463" d="M21 20.5h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c.3 0 .5.2.5.5s-.2.5-.5.5zM12 22.5h-1c-.3 0-.5-.2-.5-.5v-2c0-.3.2-.5.5-.5h1c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5zm-.5-1h.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-.5v1z"/><path fill="#004463" d="M12 24.5h-1c-.3 0-.5-.2-.5-.5v-2c0-.3.2-.5.5-.5h1c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5zm-.5-1h.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-.5v1zM16 24.5c-.8 0-1.5-.7-1.5-1.5v-2c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v2c0 .8-.7 1.5-1.5 1.5zm0-4c-.3 0-.5.2-.5.5v2c0 .3.2.5.5.5s.5-.2.5-.5v-2c0-.3-.2-.5-.5-.5z"/></svg>
                </div>
                <div className="c-bot-content">
                    <div className="c-messages">
                        Thanks for messaging us. We try to be as responsive as possible. We'll get back to you soon.
                    </div>
                </div>
            </div>
        ));

        this.setState({ list, text: '' });
    };

    render() {
        const { show, text, list } = this.state;
        const off = show ? 'off' : '';

        return (
            <div className="chatbot">
                <div className={"chat-c " + off}>
                    <div className={"frame " + off}>
                        <div className="c-header">
                            <div class="c-close">
                                <Close className="pull-left" style={iconStyle} onClick={this.toggleShow} />
                            </div>
                            <div class="c-header-name">
                                ChatBot Demo
                            </div>
                        </div>
                        <div className="c-body" ref={div => (this.chatBody = div)}>
                            {list}
                        </div>
                        <div className="c-footer">
                            <div class="c-input">
                                <input
                                    id="text"
                                    type="text"
                                    placeholder="Nhập tin nhắn..."
                                    value={text}
                                    ref={input => (this.inputChat = input)}
                                    onChange={this.handleChange}
                                    onKeyPress={this.handleChat}
                                />
                            </div>
                            <div class="c-send">
                                <Send className="pull-left" style={iconStyle} onClick={this.handleClickChat}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="icon" onClick={this.toggleShow}>
                    <svg width="60px" height="60px" viewBox="0 0 60 60"><svg x="0" y="0" width="60px" height="60px"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1"><stop stop-color="#00B2FF" offset="0%"></stop><stop stop-color="#006AFF" offset="100%"></stop></linearGradient></defs><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g><circle fill="#FFFFFF" cx="30" cy="30" r="30"></circle><svg x="10" y="10"><g><rect id="container" x="0" y="0" width="40" height="40"></rect><g id="logo"><path d="M20,0 C8.7334,0 0,8.2528 0,19.4 C0,25.2307 2.3896,30.2691 6.2811,33.7492 C6.6078,34.0414 6.805,34.4513 6.8184,34.8894 L6.9273,38.4474 C6.9621,39.5819 8.1343,40.3205 9.1727,39.8621 L13.1424,38.1098 C13.4789,37.9612 13.856,37.9335 14.2106,38.0311 C16.0348,38.5327 17.9763,38.8 20,38.8 C31.2666,38.8 40,30.5472 40,19.4 C40,8.2528 31.2666,0 20,0" id="bubble" fill="url(#linearGradient-1)"></path><path d="M7.99009,25.07344 L13.86509,15.75264 C14.79959,14.26984 16.80079,13.90064 18.20299,14.95224 L22.87569,18.45674 C23.30439,18.77834 23.89429,18.77664 24.32119,18.45264 L30.63189,13.66324 C31.47419,13.02404 32.57369,14.03204 32.00999,14.92654 L26.13499,24.24744 C25.20039,25.73014 23.19919,26.09944 21.79709,25.04774 L17.12429,21.54314 C16.69559,21.22164 16.10569,21.22334 15.67879,21.54734 L9.36809,26.33674 C8.52579,26.97594 7.42629,25.96794 7.99009,25.07344" id="bolt" fill="#FFFFFF"></path></g></g></svg></g></g></svg></svg>
                </div>
            </div>
        );
    }
}

export default ChatBot;