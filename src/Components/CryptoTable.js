import React, { Component } from 'react'

class CryptoTable extends Component {
   constructor(props) {
      super(props)
      this.state = { //placeholder
         transactions: [
            { id: 1, coin: "BTC/DOGE",   seller: "x5252906", buyer: "x2014509"},
            { id: 2, coin: "ETHER/IOTA", seller: "x2586209", buyer: "x2586082"},
            { id: 3, coin: "IOTA/BTC",   seller: "x5252096", buyer: "x0081901"},
         ]
      }
   }
   renderTableData() {
    return this.state.transactions.map((transaction, index) => {
       const { id, coin, seller, buyer } = transaction
       return (
          <tr key={id}>
             <td>{coin}</td>
             <td>{seller}</td>
             <td>{buyer}</td>
          </tr>
       )
    })
 }
  renderTableHeader() {
    let header = Object.keys(this.state.transactions[1])
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