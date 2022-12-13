function Statistic(props) {
    React.useEffect(() => {
        let fake_data = [{
            values: [12345, 1234, 54321],
            labels: ['李承奏樂', '李承悲', 'Li x N'],
            type: 'pie'
        }];

        let layout = {
            height: 350,
            width: 500,
            margin: { l: 40, r: 20, b: 30, t: 30 },
            paper_bgcolor: '#e0e0e0',
            font: {
                family: 'Poppins',
                size: 16,
            }
        };

        Plotly.newPlot(`${props.id}`, fake_data, layout);
    }, []);

    return (
        <div className="statistic content" id={props.id}></div>
    );
}

function Statistics() {
    let fake_issues = [
        { name: 'Test1', id: 1 },
        { name: 'Test2', id: 2 },
        { name: 'Zawaludo', id: 3 }
    ]
    
    return (
        <div className="statistics">
            <Titles issues={fake_issues} />
            {
                fake_issues.map((issue, index) => (
                    <Statistic id={issue.id} key={index} />
                ))
            }
        </div>
    );
}

function App() {
    return (
        <React.Fragment>
            <Header />
            <Statistics />
        </React.Fragment>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));