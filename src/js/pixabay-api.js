const input = document.querySelector("input");
const query = input.value.trim();
const encodedQuery = encodeURIComponent(query);

export function feImages(query) {
    const searchParams = new URLSearchParams({
        key: "43075807-09317d918fe027bf1568df9fe",
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",

    });
    
    const url = `https://pixabay.com/api/?${searchParams}`;

    return fetch(url).then(res => {
    
        return res.json();
    });
}