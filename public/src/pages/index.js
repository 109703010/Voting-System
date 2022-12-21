function Login() {
  function checkID() {
    window.location.href = './issues.html';
  }
  return (
    <div className="login">
      <h1 className="voting_title">
        2022 9-in-1 voting
      </h1>
      <p className="time">
        Open until Saturday, Nov. 26, 4:00 p.m.
      </p>
      <div className="login-input input-group mb-3">
        <input type="text" className="form-control" placeholder="Input your ID here" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
          <div className="input-group-append">
            <button className="btn btn-primary" type="button" onClick={() => checkID()}>Login</button>
          </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <React.Fragment>
      <Header />
      <Login />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));