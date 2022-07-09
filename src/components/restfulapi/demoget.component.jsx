import React from 'react';

import axios from 'axios';

export default class ComponentGET extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
    axios.get(`http://localhost:21676/api/Movies`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <ul>
                {this.state.persons.map(person => <li key={person.movieId}>{person.title}</li>)}
            </ul>
        )
    }
}