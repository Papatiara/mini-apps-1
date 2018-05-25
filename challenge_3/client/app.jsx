class FormThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
      Billing: '',
      CardNum: '',
      CVV: '',
      Date: '',
    }
  }

getBilling(e) {
  this.setState({ 
    Billing: e.target.value
  })
}

getCardNum(e) {
  this.setState({
    CardNum: e.target.value
  })
}

getCVV(e) {
  this.setState({
    CVV: e.target.value
  })
}

getDate(e) {
  this.setState({
    Date: e.target.value
  })
}

sendData(message) {
      fetch('http://localhost:3000', {
        body: JSON.stringify(message),
        method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
         },
          }).then(res => {
          }).catch(err => err);
  } 

get() {
    fetch('http://localhost:3000/', {
      method: 'GET',
    }).then(res => {
      console.log('foi')
    }).catch(err => err);
}

  next3(e) {
   e.preventDefault();
   this.setState({
     click: true
   })
   var obj = {
     FirstName: this.props.data1.name,
     Email: this.props.data1.email,
     Password: this.props.data1.password,
     Address: this.props.address,
     State: this.props.state,
     City: this.props.city,
     ZipCode: this.props.ZipCode,
     CreditCard: this.state.CardNum,
     ExpiryDate: this.state.Date,
     CVV: this.state.CVV,
     BillingZipcode: this.state.Billing,
   }
   this.sendData(obj);
  }

  purchase(e) {
    e.preventDefault();
    console.log('hi')
   this.setState({
     click:true
   })
   this.get()
  }
  render() {
    if (this.state.click === true) {
      return (
        <div>
          <h1> Confirm your informatiom </h1>
          <h5> Name </h5>
          <h4>{this.props.data1.name} </h4>
          <h5> Email </h5>
          <h4>{this.props.data1.email} </h4>
          <h5> Address </h5>
          <h4>{this.props.address} </h4>
          <h5> State </h5>
          <h4>{this.props.state} </h4>
          <h5> City </h5>
          <h4>{this.props.city} </h4>
          <h5> Zip Code </h5>
          <h4>{this.props.ZipCode} </h4>
          <h5> Credit Card </h5>
          <h4>{this.state.CardNum} </h4>
          <h5> Expiry Date </h5>
          <h4>{this.state.Date} </h4>
          <h5> CVV </h5>
          <h4>{this.state.CVV} </h4>
          <h5> Billing Zip Code </h5>
          <h4>{this.state.Billing} </h4>
          <button onClick={this.purchase.bind(this)}> Purchase </button>
        </div>
      )
    }
    return (
      <div>
        <form>
        <label> Credit Card </label>
        <input value={this.state.value} onChange={this.getCardNum.bind(this)} type="name" />
        <label> Expiry Date </label>
        <input value={this.state.value} onChange={this.getDate.bind(this)}/>
        <label> Billing Zip Code </label>
        <input value={this.state.value} onChange={this.getBilling.bind(this)}/>
        <label> CVV </label>
        <input value={this.state.value} onChange={this.getCVV.bind(this)} />
        <button onClick={this.next3.bind(this)}>next</button>
      </form>
    </div>
    )
  }
}

class FormTwo extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
        click: false,
        address: '',
        city: '',
        state: '',
        ZipCode: ''

    }
  }
    getAddress(e) {
      this.setState({
        address: e.target.value})
    }
    
    getCity(e) {
      this.setState({
        city: e.target.value})
    }

    getState(e) {
      this.setState({
        state: e.target.value})
    }

    getZipCode(e) {
      this.setState({
        ZipCode: e.target.value
      })
    }

    next2(e) {
      e.preventDefault()
      this.setState({
        click: true
      })
    }

  render() {
    if (this.state.click === true) {
      return (
      < FormThree
      address={this.state.address}
      state={this.state.state}
      city={this.state.city}
      zipcode={this.state.ZipCode}
      data1={this.props}
      />
      )
    }
    return (
    <div>
    <form>
      <label> Address </label>
      <input value={this.state.value} onChange={this.getAddress.bind(this)} type="name" />
      <label> City </label>
      <input value={this.state.value} onChange={this.getState.bind(this)}/>
      <label> State </label>
      <input value={this.state.value} onChange={this.getCity.bind(this)}/>
      <label> Zip Code </label>
      <input value={this.state.value} onChange={this.getZipCode.bind(this)} />
      <button onClick={this.next2.bind(this)}>next</button>
    </form>
  </div> 
    )
  }
}


class FormOne extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          name: '',
          email: '',
          password: '',
          click: false
        }
    }

  getName(e) {
   this.setState({name: e.target.value});
  }

  getEmail(e) {
    this.setState({email: e.target.value});
  }

  getPass(e) {
    this.setState({password: e.target.value});
   }

  next(e) {
    e.preventDefault()
    this.setState({click: true});
  }

render() {
  if (this.state.click === true) {
    return ( <FormTwo 
    name={this.state.name} 
    email={this.state.email}
    pass={this.state.password}/>
    )
  }
  return (
    <div>
      <form>
        <label> Name </label>
        <input value={this.state.value} onChange={this.getName.bind(this)} type="name" />
        <label> Email </label>
        <input value={this.state.value} onChange={this.getEmail.bind(this)}/>
        <label> Password </label>
        <input value={this.state.value} onChange={this.getPass.bind(this)} />
        <button onClick={this.next.bind(this)}>next</button>
      </form>
    </div> 
  )
 }
}

class App extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        check: false,
      }
  };
    checkout() {
      this.setState({
        check: true,
      })     
    }

render() {
  if (this.state.check === true)  {
    return  <FormOne />
  }
  return (
    <div>  
      <button onClick={() => this.checkout()}>checkout</button>
    </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('here'));

window.App = App
