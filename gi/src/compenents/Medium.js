import React, { Component } from 'react';

class BasicInfo extends Component {
    constructor(props) {
        super();
        this.state = {
            person: {        
                name: props.name,
                number: props.number,
                birthday: props.birthday,
                occupation: props.occupation,
            }
        }
    }
    
    render() {
        return (
            <div className="person">
                <h1>{this.state.person.name}</h1>
                <ul>
                    <li> Number: {this.state.person.number}</li>
                    <li> Birthday: {this.state.person.birthday}</li>
                    <li> Occupation: {this.state.person.occupation}</li>
                </ul>
            </div>
        )
    }
}

export default BasicInfo;