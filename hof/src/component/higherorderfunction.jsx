import React from "react";
class HigherorderFunction extends React.Component {
    constructor() {
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
                { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age: 58, years: 25 },
                { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 }

            ]
        }
    }

    renderItems = () => {
        const data = this.state.userData;
        const map_rows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return map_rows;
    };


    renderbyUserType = () => {
        const data = this.state.userData;
        const filtered_type = data.filter((item) => {
            return item.user_type === "Designer"
        })
        const map_rows = filtered_type.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return map_rows;
    }

    renderDatawithLetterJ = () => {
        const data = this.state.userData;
        const filtered_letter = data.filter((item) => {
            return item.name[0] === "J"
        })
        const map_rows = filtered_letter.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return map_rows;
    }
    renderDataByAge = () => {
        const data = this.state.userData;
        const filter_age = data.filter((item) => {
            return item.age > 28 && item.age <= 50
        })
        const map_rows = filter_age.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return map_rows;
    }

    findTotalExperience = () => {
      const data = this.state.userData;
      const designers = data.filter((item) => item.user_type === "Designer");
      const years_experience = designers.map((item) => item.years);
      const total_experience = years_experience.reduce(
        (acc, curr) => acc + curr,
        0
      );
      return total_experience;
    };

    render() {
        return (
            <div className="parent">
                <div >
                    <h1>Display all items</h1>
                    <div className="display-box">
                        <ul>{this.renderItems()} </ul>
                    </div>
                </div>
                <div>
                    <h1>Display all items</h1>
                    <div className="display-box">
                        <ul>{this.renderbyUserType()} </ul>
                    </div>
                </div>
                <div>
                    <h1>Display all items</h1>
                    <div className="display-box">
                        <ul>{this.renderDatawithLetterJ()} </ul>
                    </div>
                </div>
                <div>
                    <h1>Display all items</h1>
                    <div className="display-box">
                        <ul>{this.renderDataByAge()} </ul>
                    </div>
                </div>
                <div>
                  <h1>Display All items</h1>
                  <p>{this.findTotalExperience()} years</p>
                </div>
            </div>

        )
    }
}

export default HigherorderFunction;