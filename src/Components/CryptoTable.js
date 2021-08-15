import React, { Component } from 'react';
import './CryptoTable.css';

//Cryptocurrency transaction display
class CryptoTable extends Component {
   constructor(props) {
      super(props)
      this.state = {
         transactions: [
            { coin: "BTC/DOGE",   seller: "x525290690200252", buyer: "x20145091591156080181"},
            { coin: "ETHER/IOTA", seller: "x258620962096051", buyer: "x2586082625902093051"},
            { coin: "IOTA/BTC",   seller: "x525290690200252", buyer: "x008190159050149"}

            /* placeholder; we will connect this part with our database (total amount of currency),
            *  display what's happening in the DB as our algorithm makes transactions (attack)
            *  and our black box (defense) stabilizes the currency rate
            */
         ]
      }
   }

   //renderTableData should be connected with GraphQL to query items from the DB
   renderTableData() {
    return this.state.transactions.map((transaction, index) => {
       const { coin, seller, buyer } = transaction
       return (
          <tr key={coin}> 
             <td>{coin}</td>
             <td>{seller}</td>
             <td>{buyer}</td>
          </tr>
       )
    })
 }
 //keep this
  renderTableHeader() {
    let header = Object.keys(this.state.transactions[0])
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

   render() {
      return (
         <div>
            <table id='transactions'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
}

export default CryptoTable