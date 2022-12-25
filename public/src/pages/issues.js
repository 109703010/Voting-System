function Issue(props) {
  function goIssue() {
    window.location.href = `/voting.html?id=${props.id}`;
  }
  return (
    <div className="issue">
      <h2>{props.issueName}</h2>
      <p className="issue-description">
        {props.metaData}
      </p>
      <div className="go-voting btn btn-primary" onClick={() => goIssue()}>Go to vote</div>
    </div>
  );
}

function Issues() {
  let fake_issues = [
    { id: 1, name: '新北市 直轄市長', metaData: "新北市第4屆市長選舉及新北市議會第4屆議員選舉,經定於中華民國111年11月26日(星期六)上午8時起至下午4時止舉行投票。茲依公職人員選舉罷免法第47規定,將候選人所填之政見及個人資料刊登如下,候選人個人資料依據候選人所填列資料刊登,如有不實,由候選人自行負責。" },
    { id: 2, name: '新北市 市議員', metaData: "新北市議會第4屆議員選舉,經定於中華民國111年1月6日星期六)上午8時起至下午4時止舉行投票。茲依公職人員選舉罷免法第47條規定,將候選人所填之政見及個人資料刊登如,候選人個人資料依據候選人所填列資料刊登,如有不實,由候選人自行負責。" },
    { id: 3, name: '憲法修正案', metaData: "憲法修正公民複決第1案,經定於中華民國111年11月26日星期六上午8時起至午4時舉行投票。依憲法增修條文第1條公民投票法第18條定,將憲法修正公民決編、立法院交付決事項、政府機關針對憲法修正公民複決出意書、公民投票權行使範圍及方式、正意見支代表於全國性線電視频道表意見或進行之辦理期間與應遵行之事項等資料刊登下：" }
  ];

  return (
    <div className="issues">
      {
        fake_issues.map((issue, index) => (
          <Issue id={issue.id} issueName={issue.name} metaData={issue.metaData} key={index} />
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