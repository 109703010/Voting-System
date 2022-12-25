function Login() {
  const [name, setName] = React.useState('');
  const [time, setTime] = React.useState('');
  const issueGroupID = new URLSearchParams(location.search).get('issueGroupID');
  React.useEffect(() => {
    api.getIssueGroup(issueGroupID).then(json => {
      setName(json[0].name);
      setTime(json[0].endTime);
    });
  }, []);
  function goIssuesPage() {
    const userID = localStorage.getItem('userID') || '';
    if (userID == '') {
      alert("Please Login");
      window.location.href = ''
    } else {
      api.userLogin(userID).then(userInfo => {
        localStorage.setItem("regions", userInfo[0].region);
        window.location.href = `./issues.html?issueGroupID=${issueGroupID}`;
      })
    }
  }

  return (
    <div className="login">
      <h1 className="voting_title">
        {name}
      </h1>
      <p className="time">
        Open until {time}
      </p>
      <button className="btn btn-primary" type="button" onClick={() => goIssuesPage()}>Get started</button>
    </div>
  );
}

function App() {
  const img = localStorage.getItem('img') || '';
  return (
    <React.Fragment>
      <Header img={img} />
      <Login />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));