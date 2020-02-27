import React from 'react';
import './App.css';
import ListProduits from './Components/ListProduits';
import Basket from './Components/Basket';

class App extends React.Component {
  /*state= {error:false,
         text:"Remove"  }
  RemoveError = ()=>{
    var e =this.state.error;
    if(e===true)
    {
    this.setState({error:false,text:"Remove" })}
    else{
    this.setState({error:true,text:"Throw" });    }           
  }
  render(){
  return (
    <div className="App">
      Hello to my react app!
    { this.state.error ?<Success></Success> : <Error></Error>}
    <button onClick={this.RemoveError}>{this.state.text}Error</button>
    </div>
    
  );
  }*/
  state = {produits :[{
    Id:"1",
    Desc:"Jeans Blue",
    Prix : 200 },
    {
    Id:"2",
    Desc:"Watch X",
    Prix : 4000
    },
    {
      Id:"3",
      Desc:"Samsung s10",
      Prix : 10000
      },
      {
        Id:"4",
        Desc:" Iphone XI",
        Prix : 14000
        },
        {
          Id:"5",
          Desc:" Wallet XI",
          Prix : 50
          },
  ], basket : []
}
  Add = (produit) =>
    {
       let basket = this.state.basket;
       basket.push(produit);
        this.setState({basket:basket})
    }
  render()
  {
    return (
      <React.Fragment>
    <ListProduits Add = {this.Add} produits={this.state.produits}></ListProduits>
    <Basket produits={this.state.basket}></Basket>
    </React.Fragment>
    );
  }

}

export default App;
