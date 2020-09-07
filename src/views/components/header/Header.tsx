import * as React from "react";

export interface HeaderState {
  hoge: number;
}

class Header extends React.Component<any, HeaderState> {
  constructor(props: any) {
    super(props);
    this.state = { hoge: 2 };
  }
  render() {
    return (
      <div>
        <h1>Maaaaa {this.state.hoge}</h1>
      </div>
    );
  }
}

export default Header;
