function Option(props) {
    const [option, setOption] = React.useState(props.option);
    return (
        <div className="option form-group">
            <label htmlFor={`option${props.issue}-${props.number}`}>{`Option ${props.number} `}</label>
            <label htmlFor={`image${props.issue}-${props.number}`}>
                <img src="/images/upload.png" alt="Upload image" />
            </label>
            <img className="option-delete" src="/images/option-delete.png" alt="Delete option" />
            <input
                className="form-control"
                id={`option${props.issue}-${props.number}`}
                value={option}
                onChange={e => setOption(e.target.value)}
            />
            <input id={`image${props.issue}-${props.number}`} type="file" style={{ display: "none" }} />
        </div>
    );
}

function Issue(props) {
    const [name, setName] = React.useState(props.name);
    const [description, setDescription] = React.useState(props.description);
    return (
        <div className="issue content" id={props.id}>
            <div className="issue-name form-group">
                <label htmlFor={`issue${props.id}`}>Issue Name </label>
                <input className="form-control" id={`issue${props.id}`} value={name} onChange={e => setName(e.target.value)} />
            </div>
            {
                props.options == undefined ?
                    <div className="description form-group">
                        <label htmlFor={`description${props.id}`}>Description </label>
                        <textarea
                            className="form-control"
                            rows="7"
                            id={`description${props.id}`}
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div> :
                    <div className="options">
                        {
                            props.options.map((option, index) => (
                                <Option
                                    option={option.option}
                                    issue={props.id}
                                    number={index + 1}
                                    key={index}
                                />
                            ))
                        }
                    </div>
            }
            <div className="issue-edit">
                <div className="modify btn btn-warning">
                    Modify
                </div>
                <div className="issue-delete btn btn-danger">
                    Delete
                </div>
            </div>
        </div>
    );
}

function Admin() {
	 const PASSWORD = 'admin';
	 let input = '';
	 do {
		 input = window.prompt("Enter Your Password :");
	 } while (input != PASSWORD);
    let fake_issues = [
        { id: 1, name: '新北市 直轄市長', options: [{ option: "侯友宜" }, { option: "林佳龍" }] },
        { id: 2, name: '新北市 市議員', options: [{ option: "陳啟能" }, { option: "王威元" }, { option: "陳俊霖" }, { option: "李余典" }, { option: "陳宛毓" }] },
        { id: 3, name: '憲法修正案', description: "第一條之一\n\n中華民國國民年滿十八歲者，有依法選舉、罷免、創制、複決及參加公民投票之權。本憲法及法律別有規定者外，年滿十八歲者，有依法被選舉之權。\n\n憲法第一百三十條之規定，停止適用。" }
    ];
    const [topic, setTopic] = React.useState('2022 9-in-1 voting');
    return (
        <div className="admin">
            <div className="info-modify">
                <div>
                    <div className="topic-name form-group">
                        <label htmlFor="topic">Topic</label>
                        <input className="form-control" id="topic" value={topic} onChange={e => setTopic(e.target.value)} />
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" id="with-option" type="checkbox" />
                        <label className="form-check-label" htmlFor="with-option">With options</label>
                    </div>
                    <div className="add-issue btn btn-primary">New issue</div>
                </div>
                <div className="dates">
                    <div className="date form-group">
                        <label htmlFor="start-date">Start date</label>
                        <input className="form-control" id="start-date" type="datetime-local" />
                    </div>
                    <div className="date form-group">
                        <label htmlFor="end-date">End date</label>
                        <input className="form-control" id="end-date" type="datetime-local" />
                    </div>
                </div>
            </div>
            <Titles issues={fake_issues} />
            <div className="issues">
                {
                    fake_issues.map((issue, index) => (
                        <Issue
                            id={issue.id}
                            name={issue.name}
                            description={issue.description}
                            options={issue.options}
                            key={index}
                        />
                    ))
                }
            </div>
        </div>
    );
}

function App() {
    return (
        <React.Fragment>
            <Header />
            <Admin />
        </React.Fragment>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));
