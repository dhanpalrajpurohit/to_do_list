import React from 'react'

import SocialLink from './SocialLink'
const SOCIAL_ICONS = [
    {"icon":"fa-twitter", "color":"#55acee"},
    {"icon":"fa-facebook-f", "color":"#3b5998"},
    {"icon":"fa-github", "color":"#333333"},
    {"icon":"fa-instagram", "color":"#ac2bac"}
]
function SocialLinks(props) {
    return (
        <div class="card mb-4 mb-lg-0">
            <div class="card-body p-0">
                <ul class="list-group list-group-flush rounded-3">
                    {               console.log(props.links)}
                    {
                        SOCIAL_ICONS.map((social_icon, index)=>{
                            return <SocialLink icon={social_icon.icon} id={index} link={props.links[index]} color={social_icon.color}/>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default SocialLinks
