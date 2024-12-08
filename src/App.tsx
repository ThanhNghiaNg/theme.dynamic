import { useEffect } from "react";

function App() {
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    const themeParam = searchParams.get("theme") || systemTheme;

    const isThemeValid = ["dark", "light"].includes(themeParam);

    document.body.setAttribute(
      "data-theme",
      isThemeValid ? themeParam : systemTheme
    );
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-dynamic-background">
        <div className="text-dynamic-text">Dynamic Text</div>
      </div>

      <a href="?theme=dark" className="rounded-md border px-2 py-1 w-fit">
        Show Dark Theme
      </a>

      <a href="?theme=light" className="rounded-md border px-2 py-1 w-fit">
        Show Light Theme
      </a>

      <a href="/" className="rounded-md border px-2 py-1 w-fit">
        Show System theme
      </a>
    </div>
  );
}

export default App;
