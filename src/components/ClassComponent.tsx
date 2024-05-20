import React, { Component } from 'react'
interface Props{}
interface State{
    count: number
    interval: any,
}

let interval: any;
export default class ClassComponent extends Component<Props,State> {
    constructor(props: Props){
        super(props)
        // khoi tao state
        this.state = {
            count: 0,
            interval: null
        }
    }
    // componentDidMount(): void {
    //     interval = setInterval(()=>{
    //         console.log("ham setInterval duoc goi!");
    //     }, 2000)
    // }
    // handleClick=()=>{
    //     clearInterval(interval);
    // }
  render() {
    return (
      <div>ClassComponent
        {/* <button onClick={this.handleClick}>dung interval</button> */}
      </div>
    )
  }
}
