import React from 'react';
import './App.css';
import BlockUser from "./BlockUser/BlockUser";

class App extends React.Component {

    state = {
        users: [
            { name: 'Gregory', surname: 'Point', age: Math.round(Math.random() * 100)},
            { name: 'Tomas', surname: 'Tobi', age: Math.round(Math.random() * 100)},
            { name: 'Victoria', surname: 'Holli', age: Math.round(Math.random() * 100)},
            { name: 'Seiko', surname: 'Zero', age: Math.round(Math.random() * 100)},
            { name: 'Mia', surname: 'Loop', age: Math.round(Math.random() * 100)}
        ]
    }

    render() {
        let users = this.state.users

        return (
            <div className="app">
                <BlockUser name={users[0].name} surname={users[0].surname} age={users[0].age} />
                <BlockUser name={users[1].name} surname={users[1].surname} age={users[1].age} />
                <BlockUser name={users[2].name} surname={users[2].surname} age={users[2].age} />
                <BlockUser name={users[3].name} surname={users[3].surname} age={users[3].age} />
                <BlockUser name={users[4].name} surname={users[4].surname} age={users[4].age} />
            </div>
        )
    }
}

export default App;
