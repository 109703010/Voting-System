function Option(props) {
    const [option, setOption] = React.useState(props.option);
    return (
        <div className="option">
            <label htmlFor={`option${props.issue}-${props.number}`}>{`Option ${props.number} `}</label>
            <label htmlFor={`image${props.issue}-${props.number}`}>
                <img src="/images/upload.png" alt="Upload image" />
            </label>
            <input
                id={`option${props.issue}-${props.number}`}
                value={option}
                onChange={e => setOption(e.target.value)}
            />
            <input id={`image${props.issue}-${props.number}`} type="file" style={{ display: "none" }} />
            <img className="option-delete" src="/images/option-delete.png" alt="Delete option" />
        </div>
    );
}

function Issue(props) {
    const [name, setName] = React.useState(props.name);
    const [description, setDescription] = React.useState(props.description);
    return (
        <div className="issue content" id={props.id}>
            <div className="issue-name">
                <label htmlFor={`issue${props.id}`}>Issue Name </label>
                <input id={`issue${props.id}`} value={name} onChange={e => setName(e.target.value)} />
            </div>
            {
                props.options == undefined ?
                    <div className="description">
                        <label htmlFor={`description${props.id}`}>Description </label>
                        <input
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
                <div className="modify">
                    Modify
                </div>
                <div className="issue-delete">
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
        {
            id: 1,
            name: 'Test-1',
            options: [{ option: '1' }, { option: '2' }, { option: '3' }]
        },
        {
            id: 2,
            name: 'Test-2',
            description: 'Hi',
        },
        {
            id: 3,
            name: 'Blablabla',
            options: [{ option: '7' }, { option: '8' }, { option: '9' }]
        }
    ];
    const [topic, setTopic] = React.useState('');
    return (
        <div className="admin">
            <div className="info-modify">
                <div className="topic-name">
                    <label htmlFor="topic">Topic</label>
                    <input id="topic" value={topic} onChange={e => setTopic(e.target.value)} />
                </div>
                <div className="dates">
                    <div className="date">
                        <label htmlFor="start-date">Start date</label>
                        <input id="start-date" type="datetime-local" />
                    </div>
                    <div className="date">
                        <label htmlFor="end-date">End date</label>
                        <input id="end-date" type="datetime-local" />
                    </div>
                </div>
                <div className="add-issue">New issue</div>
                <input id="with-option" type="checkbox"/>
                <label htmlFor="with-option">With options</label>
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