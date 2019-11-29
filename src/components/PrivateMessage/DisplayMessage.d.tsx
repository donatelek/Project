import React, { Component } from 'react'
import { Widget } from 'react-chat-widget';
export interface DisplayMessageProps {

}

export interface DisplayMessageState {
    // handleNewUserMessage: (newMessage: string) => {};
}

class DisplayMessage extends React.Component<DisplayMessageProps, DisplayMessageState> {
    state = {}
    // handleNewUserMessage = (newMessage) => {
    //     console.log(`New message incoming! ${newMessage}`);
    //     // Now send the message throught the backend API
    // }
    render() {
        return (
            <>
                <Widget />
            </>
        );
    }
}

export default DisplayMessage;