import {FileSystemFileSource} from "../SceneProvider.tsx";

const shortio = "https://api.short.io/links/tweetbot";
export async function shortenLink(link: string): Promise<void> {
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
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}