function Candidate(props) {
    function selected() {
        let all = [...document.getElementsByClassName('candidate')];
        all.map((candidate) => {
            candidate.style.border = "";
        });
        localStorage.setItem('choice', props.id);
        document.getElementById(props.id).style.border = '5px solid red';
    }
    return (
        <div className="candidate" id={props.id} onClick={() => selected()}>
            <img src={`/assets/${props.id}/headshot.jpg`} />
            <p>{props.name}</p>
        </div>
    );
}

function Voting() {
    let fake_issue = "Should we add a pineapple onto a pizza?";
    let id = new URLSearchParams(location.search).get('id');
    let type = 'person';
    let fake_candidates = [
        { id: 'test-1', name: '李承奏樂' },
        { id: 'test-2', name: '李承悲' },
        { id: 'test-3', name: 'Li x N' }
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
                            <div>Yes</div>
                            <div>No</div>
                            <div>Abstention</div>
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
                            <div className="confirm" onClick={() => verifyAndVote()}>
                                Confirm
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