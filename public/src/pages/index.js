function Login() {
  function checkID() {
    window.location.href = './issues.html';
  }
  return (
    <div className="login">
      <h1 className="voting_title">
        2022 9-in-1 voting
      </h1>
      <input className="login_input" placeholder="Input your ID here" />
      <button className="login_button" onClick={() => checkID()}>Login</button>
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