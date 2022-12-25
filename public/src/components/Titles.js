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
        <a className="title nav-link" id={`title-${props.id}`} onClick={() => selectIssue(props.id)} href="#">
            {props.name}
        </a>
    );
}

function Titles(props) {
    React.useEffect(() => {
        if (props.issues.length != 0) {
            document.getElementsByClassName('title')[0].className += " active";
            document.getElementsByClassName('content')[0].style.display = "block";
        }
    })

    return (
        <div className="titles">
            <ul className="nav nav-tabs">
                {
                    props.issues.map((issue, index) => (
                        <li className="nav-item" key={index}>
                            <Title id={issue.id} name={issue.name} />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}