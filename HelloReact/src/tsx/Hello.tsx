import * as React from "react";

import Button from "./Button";
import Input from "./Input";
import Output from "./Output";

/* アプリ本体となる「Helloコンポーネント」 */
export interface IHelloProps {
  hello: string;
}

export interface IHelloState {
  inputValue: string;
  outputValue: string;
}

export default class Hello extends React.Component < IHelloProps, IHelloState > {
  constructor(props: IHelloProps) {
    super(props);
    this.state = {
        inputValue: "",
        outputValue: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    return (
      <div>
        <Input value={this.state.inputValue} handleChange={this.handleChange} />
        <Button handleClick = {this.handleClick} />
        <Output hello="Hello" value={this.state.outputValue} />
      </div>
    );
  }

  public handleChange(e: any): void {
    this.setState({
        inputValue: e.target.value,
    });
  }

  public handleClick(): void {
    this.setState({
        inputValue: "",
        outputValue: this.state.inputValue,
    });
  }
}
