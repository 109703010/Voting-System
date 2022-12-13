function Title(props) {
    function selectIssue(id) {
        let titles = [...document.getElementsByClassName('title')];
        titles.map((title) => {
            title.className = title.className.replace(" active", "")
        });
        let title = document.getElementById(`title-${id}`);
        title.className += " active"
        
        let contents = [...document.getElementsByClassName('content')];
        contents.map((content) => {
            content.style.display = "none";
        });
        let content = document.getElementById(id)
        content.style.display = "block";
    }

    return (
        <div className="title" id={`title-${props.id}`} onClick={() => selectIssue(props.id)}>
            {props.name}
        </div>
    );
}

function Titles(props) {
    React.useEffect(() => {
        document.getElementsByClassName('title')[0].className += " active";
        document.getElementsByClassName('content')[0].style.display = "block";
    })

    return (
        <div className="titles">
            {
                props.issues.map((issue, index) => (
                    <Title id={issue.id} name={issue.name} selectIssue={props.selectIssue} key={index} />
                ))
            }
        </div>
    );
}