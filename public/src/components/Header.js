function Header(props) {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/index.html">
        <img className="logo" src="/images/logo.png" alt="" />
      </a>
      <a className="statistic-link" href="/statistics.html">
        <img src="/images/pie chart.png" alt="statistic" />
      </a>
      <div className="userInfo">
        <img src={props.img} />
      </div>
    </nav>
  );
}
