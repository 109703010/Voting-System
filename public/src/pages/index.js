function Login() {
  function goIssuesPage() {
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
      <button className="btn btn-primary" type="button" onClick={() => goIssuesPage()}>Get started</button>
    </div>
  );
}

function App() {
  const img = localStorage.getItem('img') || '';
  return (
    <React.Fragment>
      <Header img={img}/>
      <Login />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));