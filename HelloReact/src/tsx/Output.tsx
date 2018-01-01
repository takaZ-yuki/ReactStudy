import * as React from "react";

/* テキストを出力する「Outputコンポーネント」 */
export interface IOutputProps {
    hello: string;
    value: string;
}
const Output: React.StatelessComponent < IOutputProps > = (props) => {
    const value = (props.value !== "") ? <h1>{props.hello} {props.value}!</h1> : "";
    return (
        <div>{value}</div>
    );
};

export default Output;
