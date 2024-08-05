import React from "react";
import axios from "axios";

class Api_axios extends React.Component {
    state = {
        user: []
    }
    render() {
        return
        <div>

        </div>
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/todos/1").then
            ((response) => {
                this.setState({ user: response.data })
                console.log(this.state.user)
            }).catch((err) => {
                console.log("data not featch")
            })
    }
}
export default Api_axios