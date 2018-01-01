import * as React from "react";

/* 入力フォームを出力する「Inputコンポーネント」 */
export interface IInputProps {
  value: string;
  handleChange(e: any): void;
}

const Input: React.StatelessComponent < IInputProps > = (props) => {
  return (
    <input type="text" placeholder="Input Name" value={props.value} onChange={props.handleChange}/>);
};

export default Input;
