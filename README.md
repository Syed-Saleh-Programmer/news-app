# KhabarGaam - News Aggregator App

KhabarGaam is a modern, fullstack news aggregator built with Next.js 13+ (App Router), React, and Tailwind CSS. It fetches the latest headlines from thousands of sources and presents them in a clean, responsive UI. Search for news by topic, browse categories, and enjoy fast, up-to-date content thanks to server-side revalidation.

---

## 🚀 Features

- **Latest Headlines:** Get top news from around the world.
- **Category Navigation:** Browse by Business, Politics, Tech, and more.
- **Search Functionality:** Find news on any topic instantly.
- **Responsive Design:** Looks great on all devices.
- **Incremental Static Regeneration:** News updates every 5 minutes automatically.
- **SEO Optimized:** Fast, accessible, and discoverable.
- **Modern UI:** Built with Tailwind CSS and React components.

---

## 🛠️ Tech Stack

- [Next.js 13+ (App Router)](https://nextjs.org/docs/app)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [NewsAPI.org](https://newsapi.org/) (for news data)
- [Lucide React](https://lucide.dev/) (icons)

---

## 📦 Project Structure

```
src/
  app/
    layout.jsx         # Root layout with metadata and favicon
    page.jsx           # Home page (top headlines)
    news/
      [topic]/
        page.jsx       # Dynamic topic page
  components/
    Header.jsx         # Navigation and search
    Footer.jsx         # Footer
    HorizontalCard.jsx # News article card
    SearchBox.jsx      # Search input
  data/
    categories.js      # News categories
    newsApi.js         # News fetching utilities with revalidation
public/
  favicon.ico          # Favicon
.env                   # API key (private)
```

---

## ⚡ Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Syed-Saleh-Programmer/news-app.git
   cd news-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up your NewsAPI key:**
   - Create a `.env` file in the root directory:
     ```
     NEWS_API_KEY=your_newsapi_key_here
     ```
   - **Do NOT use `NEXT_PUBLIC_` prefix** to keep your API key private.

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

---

## 🔒 Environment Variables

- `NEWS_API_KEY`  
  Your [NewsAPI.org](https://newsapi.org/) key.  
  **Keep this private** (do not use `NEXT_PUBLIC_`).

---

## 🧩 How It Works

- **Server Components** fetch news data using utility functions in `src/data/newsApi.js`.
- **Revalidation** is set to 5 minutes (`revalidate: 300`), so news stays fresh without slowing down the site.
- **Client Components** handle navigation, search, and UI interactivity.
- **Favicon** is set via `public/favicon.ico` and referenced in `src/app/layout.jsx`.

---

## 📝 Customization

- **Add/Remove Categories:** Edit `src/data/categories.js`.
- **Change Styling:** Modify Tailwind classes in component files.
- **Update Favicon:** Replace `public/favicon.ico` with your own.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

[MIT](LICENSE)

---

## 🙏 Acknowledgements

- [NewsAPI.org](https://newsapi.org/) for free news data
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

---

**Made with ❤ by [Syed Saleh](https://github.com/Syed-Saleh-Programmer)**
