function Candidate(props) {
    function selected() {
        let all = [...document.getElementsByClassName('candidate')];
        all.map((candidate) => {
            candidate.style.borderColor = "transparent";
        });
        localStorage.setItem('choice', props.id);
        document.getElementById(props.id).style.borderColor = "grey";
    }
    return (
        <div className="candidate" id={props.id} onClick={() => selected()}>
            <div className="circle-image">
                <img src={`/assets/${props.id}/headshot.jpg`} />
            </div>
            <p>{props.name}</p>
        </div>
    );
}

function Voting() {
    let fake_issue = "第一條之一\n\n中華民國國民年滿十八歲者，有依法選舉、罷免、創制、複決及參加公民投票之權。本憲法及法律別有規定者外，年滿十八歲者，有依法被選舉之權。\n\n憲法第一百三十條之規定，停止適用。";
    let id = new URLSearchParams(location.search).get('id');
    let type = id == 1 || id == 2 ? 'person' : id == 3 ? 'issue' : "error";
    let fake_candidates = id == 1 ? [
        { id: 'testMayor-1', name: '林佳龍' },
        { id: 'testMayor-2', name: '侯友宜' }
    ] : [
        {id: 'testCongressman-1', name: '陳啟能'},
        {id: 'testCongressman-2', name: '王威元'},
        {id: 'testCongressman-3', name: '陳俊霖'},
        {id: 'testCongressman-4', name: '李余典'},
        {id: 'testCongressman-5', name: '陳宛毓'}
    ];

    function verifyAndVote() {
        window.location.href = '/verify.html'
    }
    
    return (
        <div className="voting">
            {
                type == 'issue' ?
                    <div className="vote-for-issue">
                        <p className="issue-description">
                            {fake_issue}
                        </p>
                        <div className="opinion">
                            <div className="btn btn-success" onClick={() => verifyAndVote()}>Yes</div>
                            <div className="btn btn-warning" onClick={() => verifyAndVote()}>No</div>
                            <div className="btn btn-danger" onClick={() => verifyAndVote()}>Abstention</div>
                        </div>
                    </div> :
                    type == 'person' ?
                        <div className="vote-for-person">
                            <div className="candidates">
                                {
                                    fake_candidates.map((candidate, index) => (
                                        <Candidate id={candidate.id} name={candidate.name} key={index} />
                                    ))
                                }
                            </div>
                            <div className="confirm">
                                <div className="btn btn-primary" onClick={() => verifyAndVote()}>
                                    Confirm
                                </div>
                                <div className="btn btn-danger" onClick={() => verifyAndVote()}>
                                    Abstention
                                </div>
                            </div>
                        </div> :
                        <p className="err">
                            Wrong Request
                        </p>

            }
        </div>
    );
}

function App() {
    return (
        <React.Fragment>
            <Header />
            <Voting />
        </React.Fragment>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));