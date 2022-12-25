function Candidate(props) {
    function selected() {
        let all = [...document.getElementsByClassName('candidate')];
        all.map((candidate) => {
            candidate.style.borderColor = "transparent";
        });
        localStorage.setItem('choice', props.name);
        document.getElementById(props.id).style.borderColor = "grey";
    }
    return (
        <div className="candidate" id={props.id} onClick={() => selected()}>
            <div className="circle-image">
                <img src={`/assets/options/${props.name}.jpg`} />
            </div>
            <p>{props.name}</p>
        </div>
    );
}

function Voting() {
    const id = new URLSearchParams(location.search).get('id');
    const type = new URLSearchParams(location.search).get('type');
    const issueGroupID = new URLSearchParams(location.search).get('issueGroupID');
    const [issue, setIssue] = React.useState('');
    const [options, setOptions] = React.useState([]);

    React.useEffect(() => {
        api.getDescription(id).then(res =>
            setIssue(res)
        );
        api.getOptions(id).then(res => {
            res.pop();
            setOptions(res)
        });
    }, []);

    function verifyAndVote() {
        const userID = localStorage.getItem("userID");
        const choice = localStorage.getItem("choice");
        api.vote(userID, id, choice).then(json => {
            if (json.err) {
                alert(json.err)
            } else {
                alert(json.status)
            }
            window.location.href = `/issues.html?issueGroupID=${issueGroupID}`;
        });
    }

    function specialOption(name) {
        localStorage.setItem("choice", name);
        verifyAndVote();
    }

    return (
        <div className="voting">
            {
                type == 'issue' ?
                    <div className="vote-for-issue">
                        <p className="issue-description">
                            {issue}
                        </p>
                        <div className="opinion">
                            <div className="btn btn-success" onClick={() => specialOption("Yes")}>Yes</div>
                            <div className="btn btn-warning" onClick={() => specialOption("No")}>No</div>
                            <div className="btn btn-danger" onClick={() => specialOption("Abstention")}>Abstention</div>
                        </div>
                    </div> :
                    type == 'person' ?
                        <div className="vote-for-person">
                            <div className="candidates">
                                {
                                    options.map((candidate, index) => (
                                        <Candidate id={index} name={candidate.name} key={index} />
                                    ))
                                }
                            </div>
                            <div className="confirm">
                                <div className="btn btn-primary" onClick={() => verifyAndVote()}>
                                    Confirm
                                </div>
                                <div className="btn btn-danger" onClick={() => specialOption("Abstention")}>
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
    const img = localStorage.getItem('img') || '';
    return (
        <React.Fragment>
            <Header img={img} />
            <Voting />
        </React.Fragment>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));