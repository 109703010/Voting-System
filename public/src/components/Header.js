function Header(props) {
  const issueGroupID = new URLSearchParams(location.search).get('issueGroupID');
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href={`/index.html?issueGroupID=${issueGroupID}`}>
        <img className="logo" src="/images/logo.png" alt="" />
      </a>
      <a className="statistic-link" href={`/statistics.html?issueGroupID=${issueGroupID}`}>
        <img src="/images/pie chart.png" alt="statistic" />
      </a>
      <div className="userInfo">
        <img src={props.img} title="user-Photo" />
      </div>
    </nav>
  );
}
