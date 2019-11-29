import React, { Component } from 'react'

export interface SendMessageProps {

}

export interface SendMessageState {

}

class SendMessage extends React.Component<SendMessageProps, SendMessageState> {
    state = {}
    render() {
        return (
            <>
                <h1>Send Message</h1>
                <label htmlFor="">To:</label>
                <input type="text" />
            </>
        );
    }
}

export default SendMessage;