import { createFileRoute } from '@tanstack/react-router'

import { RiSendPlaneFill } from "react-icons/ri";
import { LuPaperclip } from "react-icons/lu";
import { BsEmojiSmile } from "react-icons/bs";

import './index.styl';

export const Route = createFileRoute('/components/chat-input/')({
    component: RouteComponent,
})

function RouteComponent() {
    const size = 24;
    return (
        <div className="chat__input--container">
            <form action="" method="POST" className="input__container" id="input-container" name="input-container">
                <div className="msg__input--left--icons">
                    <label htmlFor="chat-msg-file" className="chat__msg--icon--label"
                    ><LuPaperclip size={size} /></label>
                    <input
                        type="file"
                        id="chat-msg-file"
                        name="chat-msg-file"
                        className="chat__msg"
                    />
                </div>

                <div className="msg__input--container" id="msg-input-container">
                    <div
                        data-name="chat-text-msg-input"
                        id="chat-text-msg-input"
                        className="chat__text--msg--input"
                        contentEditable="true"
                    ></div>
                    <div
                        className="chat__text--msg--input--placeholder"
                        id="msg-input-placeholder"
                    >
                        Type A Message...
                    </div>
                    <textarea className="msg__textarea" id="msg-textarea"></textarea>
                </div>

                <div className="msg__input--right--icons">
                    <button type="button" className="chat__msg--icon--label" id="emoji-menu-button"
                    ><BsEmojiSmile size={size} />
                    </button>
                    <label htmlFor="chat-msg-emoji" className="chat__msg--icon--label"
                    ><RiSendPlaneFill size={size} />
                    </label>
                    <input
                        type="audio"
                        id="chat-msg-audio"
                        name="chat-msg-audio"
                        className="chat__msg"
                    />
                </div>
                <aside className="emoji__menu" id="emoji-menu">
                </aside>
            </form>
        </div>
    )
}
