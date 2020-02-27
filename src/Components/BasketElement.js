import React from 'react';
class BasketElement extends React.Component
{
    constructor(props)
    {
        super(props);
        
    }
    render()
    {
        return(
            <div className="row">
            <div className="col-2">
                {this.props.index}
            </div>     
            <div className="col-4">
                {this.props.Desc}
            </div>
            </div>
        );
    }
}
export default BasketElement;