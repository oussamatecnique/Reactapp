import React from 'react';
import Produit from './Produit';
class ListProduits extends React.Component
{
    state = {produits:[]};
    constructor(props)
    {
        super(props);
        this.state.produits = this.props.produits
    }
      Delete = (index) =>
      {
        const produits = this.state.produits.slice();
        produits.splice(index,1);
        this.setState({produits: produits});  
      }
      Add = (produit)=>
      {
        this.props.Add(produit);
      }
      
      render()
      {
        return (
          
          <div className="container">
            <h2 className="Title">List of products</h2>
          {this.state.produits.map((produit,index) =>{
            return <Produit  Delete={()=>this.Delete(index)} Add={() => this.Add(produit)} produit={produit}></Produit>
          })}
           </div>
        );
       
        
        
      }
}
export default ListProduits