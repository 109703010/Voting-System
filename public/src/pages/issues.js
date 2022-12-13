function Issue(props) {
  return (
    <div className="issue">
      <a href={`/voting.html?id=${props.id}`}>
        {props.issueName}
      </a>
    </div>
  );
}

function Issues() {
  let fake_issues = [
    { name: 'Test1', id: 1 }, 
    { name: 'Test2', id: 2 }, 
    { name: 'Zawaludo', id: 3 }
  ]
  return (
    <div className="issues">
      {
        fake_issues.map((issue, index) => (
          <Issue issueName={issue.name} id={issue.id} key={index} />
        ))
      }
    </div>
  );
}

function App() {
  return (
    <React.Fragment>
      <Header />
      <Issues />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));