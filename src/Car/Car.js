import React from 'react'

const styleRootComponent = {
    'textAlign': 'center'
}

export default (props) => (
    <div style={styleRootComponent}>
        <h3>This is car {props.name}</h3>
        <button onClick={props.onChangeTitleHandler}>Click</button>
        <p>Year {props.year}</p>
        {props.children}
    </div>
)