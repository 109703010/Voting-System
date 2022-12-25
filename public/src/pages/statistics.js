function Statistic(props) {
    React.useEffect(() => {
        api.getResult(props.id).then(json => {
            const layout = {
                height: 350,
                width: 500,
                margin: { l: 40, r: 20, b: 30, t: 30 },
                paper_bgcolor: '#e0e0e0',
                font: {
                    family: 'Poppins',
                    size: 16,
                }
            };
            const result = [{
                values: json.map(item => item.number),
                labels: json.map(item => item.name),
                type: 'pie'
            }];

            Plotly.newPlot(`${props.id}`, result, layout);
        });
    }, []);

    return (
        <div className="statistic content" id={props.id}></div>
    );
}

function Statistics() {
    const [issues, setIssues] = React.useState([]);
    const issueGroupID = new URLSearchParams(location.search).get('issueGroupID');
    const regions = localStorage.getItem('regions') || "all";
    React.useEffect(() => {
        api.getIssues(issueGroupID, regions).then(json =>
            setIssues(json)
        );
    }, []);

    return (
        <div className="statistics">
            <Titles issues={issues} />
            {
                issues.map((issue, index) => (
                    <Statistic id={issue.id} key={index} />
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
            <Statistics />
        </React.Fragment>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));