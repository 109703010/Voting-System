function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

function handleCredentialResponse(response) {
    const clientData = parseJwt(response.credential);
    console.log(clientData)
    localStorage.setItem('img', clientData.picture);
    localStorage.setItem('userID', clientData.sub);
    window.location.href="";
}

window.onload = function () {
    google.accounts.id.initialize({
        client_id: "935667480423-a3hhl1q865uvgtbjfm34efqqsu00at44.apps.googleusercontent.com",
        callback: handleCredentialResponse
    });
    google.accounts.id.prompt(); // also display the One Tap dialog
}