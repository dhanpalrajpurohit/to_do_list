import React from 'react'

function ErrorBlock(props) {
    return (
        <div class="alert alert-danger" role="alert">
            {props.message}
        </div>
    )
}

export default ErrorBlock
