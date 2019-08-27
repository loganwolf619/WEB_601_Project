import React from 'react'

const designs = (props) => {
return (
    <div>
        <button onClick={props.doWhatever}>{props.title}</button>
    </div>
)
}

export default designs;

