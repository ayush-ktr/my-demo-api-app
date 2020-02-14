import React, { Component } from 'react'
import './style.css'
export default class ChatWindow extends Component {
    render() {
        return (
            <div style={{ overflowY: 'auto', overflowX: 'hidden' }}>
                {/* <div class="header">Sentinel</div> */}
                <div class="chats">

                    <span class="u1 chat">Hey sam, whats up?</span>
                    <span class="u2 chat">nothing here how 'bout u?</span>
                    <span class="u1 chat">I'm just heading up to your neck of the woods for some work related stuff.</span>
                    <span class="u1 chat">driveing through mcdonalds right now</span>
                    <span class="u2 chat">cool! where exactly will you be?</span>
                    <span class="u1 chat">up in the ridgway, mt. horab area</span>
                    <span class="u2 chat">cool! where exactly will you be?</span>
                    <span class="u1 chat">up in the ridgway, mt. horab area</span>
                    <span class="u2 chat">cool! where exactly will you be?</span>
                    <span class="u1 chat">up in the ridgway, mt. horab area</span>
                    <span class="u2 chat">cool! where exactly will you be?</span>
                    <span class="u1 chat">up in the ridgway, mt. horab area</span>
                    <span class="u2 chat">cool! where exactly will you be?</span>
                    <span class="u1 chat">up in the ridgway, mt. horab area</span>

                    {/* User Listening */}
                    <span class="u2 chat">
                        <span class="is-typing">
                            <span class="jump1"></span>
                            <span class="jump2"></span>
                            <span class="jump3"></span>
                            <span class="jump4"></span>
                            <span class="jump5"></span>
                        </span>
                    </span>

                    {/* ChatBot Processing */}
                    <span class="u1 chat">
                        <span class="is-typing">
                            <span class="jump1"></span>
                            <span class="jump2"></span>
                            <span class="jump3"></span>
                            <span class="jump4"></span>
                            <span class="jump5"></span>
                        </span>
                    </span>

                </div>
            </div>
        )
    }
}
