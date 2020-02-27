import React from 'react';
class Produit extends React.Component
{
    state = {produit:null};
    constructor(props)
    {
        super(props);
        this.state.produit =this.props.produit;
        
    }
    render()
    {
        return(
         <div className="row" >
          <div className="col-2">{this.props.produit.Id}</div>
          <div className="col-2">{this.props.produit.Desc}</div>
          <div className="col-2">{this.props.produit.Prix}</div>
         <div className="col-3">
         <button className="btn btn-md btn-primary" onClick={this.props.Add}>Add to basket</button>
         <button className="btn btn-md btn-danger" onClick={this.props.Delete}>Delete</button>
         

          </div>
         </div>
        );
    }

}
export default Produit