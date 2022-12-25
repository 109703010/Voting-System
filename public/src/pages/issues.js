function Issue(props) {
  function goIssue() {
    window.location.href = `/voting.html?id=${props.id}&type=${props.type}&issueGroupID=${props.issueGroupID}`;
  }
  return (
    <div className="issue">
      <h2>{props.issueName}</h2>
      <p className="issue-description">
        {props.metadata}
      </p>
      <div className="go-voting btn btn-primary" onClick={() => goIssue()}>Go to vote</div>
    </div>
  );
}

function Issues() {
  const [issues, setIssues] = React.useState([]);
  const issueGroupID = new URLSearchParams(location.search).get('issueGroupID');
  const regions = localStorage.getItem("regions") || "all";
  React.useEffect(() => {
    api.getIssues(issueGroupID, regions).then(json =>
      setIssues(json)
    );
  }, []);

  return (
    <div className="issues">
      {
        issues.map((issue, index) => (
          <Issue
            id={issue.id}
            issueGroupID={issueGroupID}
            issueName={issue.name}
            metadata={issue.metadata}
            type={issue.description == null ? "person" : "issue"}
            key={index}
          />
        ))
      }
    </div>
  );
}

function App() {
  const img = localStorage.getItem('img') || '';
  return (
    <React.Fragment>
      <Header img={img} />
      <Issues />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));