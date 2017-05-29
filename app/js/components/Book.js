import React from "react";
import Author from "./Author";

export default class Book extends React.Component {

    render() {
        const {id, title, isNew, author} = this.props;
        return (
            <tr>
                <td>{id}</td>
                <td>{title} {isNew === true && <span style={{"color":"red"}}>New Arrival !</span>}</td>
                <Author author={author}/>
            </tr>
        );
    }
}
