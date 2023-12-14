const URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_0EYzGLvZ6kHRifz2EZRMyvw0t4lKSeAfC3eSJXrtKDyqTKIh8JZqxcQGYm7JiVul';

export function fetchBreeds() {
    const urlWithApiKey = `${URL}/breeds?api_key=${API_KEY}`;

    return fetch(urlWithApiKey).then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    });
}

export function fetchCatByBreed(breedId) {
    const urlWithApiKeyAndBreed = `${URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`;

    return fetch(urlWithApiKeyAndBreed).then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    });
}