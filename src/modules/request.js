const API_URL = "https://private-785c05-learnit.apiary-mock.com";

export const get = (url) => {
    return request(url, {
        method: 'GET'
    });
};

export const request = (url, { contentType = 'application/json', ...customOptions }) => {
    const headers = {
    };

    if (contentType) {
        headers['Content-type'] = contentType;
    }

    const options = {
        ...customOptions,
        headers,
    };

    return fetch(`${API_URL}/${url}`, options)
        .then(response => {
            return response.json();
        })
        .catch(error => {
        });
};