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

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        if (data.shortURL) {
            return data.shortURL;
        } else {
            throw new Error('shortURL not found in API response');
        }
    } catch (err) {
        // Optionally, you could log the error here
        throw err; // Re-throw for upstream handling
    }
}