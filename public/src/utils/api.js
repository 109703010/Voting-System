const api = {
    route: "/api/1.0",
    userLogin(id) {
        return fetch(`${this.route}/login/user?id=${id}`).then(
            res => res.json()
        );
    },
    getIssueGroup(id) {
        return fetch(`${this.route}/issues?issueGroupID=${id}`).then(
            res => res.json()
        );
    },
    getIssues(id, regions) {
        return fetch(`${this.route}/issues/validIssues?issueGroupID=${id}&regions=${regions}`).then(
            res => res.json()
        );
    },
    vote(userID, issueID, optionName) {
        return fetch(`${this.route}/vote?userID=${userID}&issueID=${issueID}&name=${optionName}`).then(
            res => res.json()
        );
    },
    getOptions(id) {
        return fetch(`${this.route}/vote/options?issueID=${id}`).then(
            res => res.json()
        );
    },
    getDescription(id) {
        return fetch(`${this.route}/vote/description?id=${id}`).then(
            res => res.text()
        );
    },
    getResult(id){
        return fetch(`${this.route}/statistic?issueID=${id}`).then(
            res => res.json()
        );
    }
};