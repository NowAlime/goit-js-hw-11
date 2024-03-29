
export function fetchImages(valueInput) {
    const searchParams = new URLSearchParams({
        key: "43047953-84179c8300fd9f33658a206cf",
        q: valueInput,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",

    });
    
    const url = `https://pixabay.com/api/?${searchParams}`;

    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    });
}