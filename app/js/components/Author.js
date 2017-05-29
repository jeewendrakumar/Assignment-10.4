import React from "react";

export default class Author extends React.Component {

    render() {
        const {author} = this.props;
        const {firstName, lastName} = author;
        return (<td><span style={{"color": "grey"}}>{firstName}</span><strong>{lastName}</strong></td>);
    }
}
