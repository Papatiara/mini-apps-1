class FormTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }

  render() {
    
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
    componentDidMount() {
      console.log('to pronto')
    }
sendData(message) {
  console.log(message)
      fetch('http://localhost:3000/?', {
        body: JSON.stringify(message),
        method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
         },
          }).then(res => {
          }).catch(err => err);
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
    var obj = {}
    obj.firstName = this.state.name,
    obj.email = this.state.email,
    obj.password = this.state.password
    this.sendData(obj)
  }

render() {
  if (this.state.click === true) {
    return <FormTwo />
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
