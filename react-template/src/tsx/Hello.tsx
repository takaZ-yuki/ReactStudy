import * as React from "react";

export interface IProps {
    content: string;
}

export default class MyComponent extends React.Component < IProps, {} > {
    render() {
        return <div className="red">{this.props.content}</div>;
    }
}
