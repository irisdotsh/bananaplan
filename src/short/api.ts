const shortio = "https://api.short.io/links/tweetbot";

export async function shortenLink(link: string): Promise<string> {
    const url = new URL(shortio);
    
    url.search = new URLSearchParams({
        domain: "bp.bananacodex.org",
        originalURL: link,
        apiKey: "sk_tUatK7YjUl0yqUpl"
    }).toString();

    const options: RequestInit = { method: 'GET' };

    try {
        const res = await fetch(url, options);
        const data = await res.json();

        if (data.shortURL) {
            return data.shortURL;
        } else {
            console.error('shortURL not found in API response');
        }
    } catch (err) {
        console.error(err);
    }
}