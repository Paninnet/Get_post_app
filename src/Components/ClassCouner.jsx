import React from 'react'

export class ClassCounet extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         count:0
      }
      this.addOne = this.addOne.bind(this)
      this.minusOne = this.minusOne.bind(this)
   }

   addOne() {
      this.setState({count: this.state.count + 1 })
   }

   minusOne() {
      this.setState({count: this.state.count - 1 })
   }

   render() {
      return (
         <div>
            <p>Counter: {this.state.count}</p>
            <button onClick={this.addOne}>ADD</button>
            <button onClick={this.minusOne}>MINUS</button>
         </div >
      )
   }
}
export default ClassCounet