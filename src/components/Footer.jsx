export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto py-6 text-center text-xs opacity-70">
      <p>Copyright © {year}</p>
      <p>Created by Fadly Febro</p>
    </footer>
  );
}
