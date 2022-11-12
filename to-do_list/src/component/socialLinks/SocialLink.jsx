import React from 'react'

function SocialLink(props) {
    return (
        <div>
            {console.log(props)}
        <li class="list-group-item d-flex justify-content-between align-items-center p-3">
            <i className={`fab ${props.icon} fa-lg`} style={{color:props.color}}></i>
            <p className="mb-0">{props.portfolio_link}</p>
        </li>
        </div>
    )
}

export default SocialLink
