import React from 'react'
import userMessage from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={userMessage.main}>

            <div className={userMessage.avatar}>
                <img src={props.avatar} alt="#"/>
            </div>


            <div className={userMessage.textMessage}>
                <div className={userMessage.arrow}></div>

                <div className={userMessage.nameColor}>
                    {props.name}
                </div>

                <div className={userMessage.colorMessage}>
                    {props.message}
                </div>

                <div className={userMessage.time}>
                    {props.time}
                </div>
            </div>


        </div>
    )
}

export default Message
