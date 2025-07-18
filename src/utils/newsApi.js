const API_KEY = process.env.NEWS_API_KEY || "a4b6e5fd4a5a45038433d6a4e3646b2a";
const BASE_URL = "https://newsapi.org/v2/top-headlines";

export async function fetchTopHeadlines() {
  const response = await fetch(
    `${BASE_URL}?country=us&apiKey=${API_KEY}`,
    { next: { revalidate: 300 } } // Revalidate every 5 minutes
  );
  if (!response.ok) return null;
  return response.json();
}

export async function fetchNewsByTopic(topic) {
  const response = await fetch(
    `${BASE_URL}?q=${topic}&apiKey=${API_KEY}`,
    { next: { revalidate: 300 } } // Revalidate every 5 minutes
  );
  if (!response.ok) return null;
  return response.json();
}
