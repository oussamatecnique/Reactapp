import React from 'react';
import BasketElement from './BasketElement';
import './Basket.css';
class Basket extends React.Component
{
    state = {produits:[]};
    constructor(props)
    {
        super(props);
        this.state.produits = this.props.produits
    }
      render()
      {
          let prix =0;
        return (
       <div className="left">
          <div className="container">
                     <h2 className="Title">Basket</h2>
           
          {this.state.produits.map((produit,index) =>{
            return <BasketElement Desc={produit.Desc} index ={index+1}></BasketElement>    
          })}
            {this.state.produits.map((produit) =>{
            prix+= produit.Prix;
          })}
           {prix === 0 ? null: <span className="prix">prix total est {prix}DH</span>}
           </div>
           </div>
          

        );
       
        
        
      }
}
export default Basket