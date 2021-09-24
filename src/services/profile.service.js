const apiUrl = "http://localhost:3001";

export function loginApi(email, password) {
    return fetch(`${apiUrl}/users?email=${email}&password=${password}`)
        .then((response) => response.json())
        .catch((err) => err);
}

export function registerApi(name, email, password) {
    const registerData = {
        name,
        email,
        password
    };
    return fetch(`${apiUrl}/users`, {
        method: "POST",
        headers: {
            'Content-type': "application/json"
        },
        body: JSON.stringify(registerData)
    })
        .then(response => response.json())
        .catch(err => err);
}