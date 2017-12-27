import * as React from 'react';

export interface Props {
    content: string;
}

export default class MyComponent extends React.Component<Props, {}> {
    render() {
        return <div className="red">{this.props.content}</div>
    }
}