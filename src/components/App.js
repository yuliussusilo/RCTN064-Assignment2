import React from 'react';
import currencyapi from "../apis/currencyapi";

class App extends React.Component {
    state = ({curr:[]})
    async componentDidMount() {
        const response = await currencyapi.get()
        this.setState({curr: this.dataCurrency(response)})
    }

    dataCurrency(curr){
      const dataCurr = []
      dataCurr.push({'currency': "CAD", 'weBuy':this.weBuy(curr.data.rates.CAD)
      , 'exchangeRate':Number(curr.data.rates.CAD).toFixed(5), 'weSell':this.weSell(curr.data.rates.CAD)})
      dataCurr.push({'currency': "EUR", 'weBuy':this.weBuy(curr.data.rates.EUR)
      , 'exchangeRate':Number(curr.data.rates.EUR).toFixed(5), 'weSell':this.weSell(curr.data.rates.EUR)})
      dataCurr.push({'currency': "IDR", 'weBuy':this.weBuy(curr.data.rates.IDR)
      , 'exchangeRate':Number(curr.data.rates.IDR).toFixed(5), 'weSell':this.weSell(curr.data.rates.IDR)})
      dataCurr.push({'currency': "JPY", 'weBuy':this.weBuy(curr.data.rates.JPY)
      , 'exchangeRate':Number(curr.data.rates.JPY).toFixed(5), 'weSell':this.weSell(curr.data.rates.JPY)})
      dataCurr.push({'currency': "CHF", 'weBuy':this.weBuy(parseFloat(curr.data.rates.CHF))
      , 'exchangeRate':Number(curr.data.rates.CHF).toFixed(5), 'weSell':this.weSell(parseFloat(curr.data.rates.CHF))})
      dataCurr.push({'currency': "GBP", 'weBuy':this.weBuy(curr.data.rates.GBP)
      , 'exchangeRate':Number(curr.data.rates.GBP).toFixed(5), 'weSell':this.weSell(curr.data.rates.GBP)})

      return dataCurr
    }

    weBuy(num) {
      num = parseFloat(num)
      num = num + (num * 0.05)
      return Number(num).toFixed(5)
    }

    weSell(num) {
      num = parseFloat(num)
      num = num - (num * 0.05)
      return Number(num).toFixed(5)
    }

    render(){
        return (
            <div className='ui segment'>
              <table className='ui celled table'>
                <thead>
                  <tr>
                    <th>Currency</th>
                    <th>We Buy</th>
                    <th>Exchange Rate</th>
                    <th>We Sell</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.curr.map(data => (
                    <tr>
                    <td>{data.currency}</td>
                    <td>{data.weBuy}</td>
                    <td>{data.exchangeRate}</td>
                    <td>{data.weSell}</td>
                  </tr>
                  ))}
                </tbody>
              </table>

              <p>Rates are based from 1 USD.</p>
              <p>This application uses API from https://currencyfreaks.com</p>
            </div>
        )
    }
}

export default App;
