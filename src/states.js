export function isLoggedIn() {
    return localStorage.getItem('logged') === 'true';
}

export function setLoggedIn(logged) {
    if (logged !== 'true' && logged !== 'false'){
        throw DOMException("logges has to be either 'true' or 'false'")
    }
    localStorage.setItem('logged', logged);
}

export function getAccessToken() {
    localStorage.getItem("access_token")
}

export function setAccessToken(accessToken) {
    localStorage.setItem("access_token", accessToken);
}

