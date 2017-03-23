import React from 'react';

export default function Form(props) {
    return  (
        <div>
            <input 
            onChange={props.handler}
            value={props.person.firstName}
            type="text" 
            name="firstName" 
            placeholder='First Name' />
            <br />
            <input 
            onChange={props.handler}
            value={props.person.lastName}
            type="text" 
            name="lastName" 
            placeholder='Last Name' />
            <br />
            <input
            onChange={props.handler}
            value={props.person.age} 
            type="text" 
            name="age" 
            placeholder='age' />
            <br />
            <button onClick={props.save}>Save</button>
        </div>
    )
}