import React from 'react'

const styleRootComponent = {
    'textAlign': 'center'
}

export default (props) => (
    <div style={styleRootComponent}>
        <h3>This is car {props.name}</h3>
        <p>Year {props.year}</p>
    </div>
)