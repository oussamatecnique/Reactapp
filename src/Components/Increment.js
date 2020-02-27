import React,{Component} from 'react';
class Increment extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {count:0};
    }
    Increment = () =>
    {
        this.setState({count:this.state.count+1});
    }
    render()
    {
        return (
        <div>
           { this.state.count !== 30 ?  <h2>{this.state.count}</h2> : null  }
             <button onClick={this.Increment}> Increment</button>
       </div>
        );
    }
}
export default Increment;