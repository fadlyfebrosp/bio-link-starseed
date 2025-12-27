const links = [
  {
    label: "Masjid Baiturrahman",
    url: "https://masjidbaiturrahman.my.id/",
  },
];

export function Links() {
  return (
    <div className="px-4 mt-8 space-y-4">
      {links.map((item, i) => (
        <a
          key={i}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            block w-full text-center py-4
            border-2 border-warning
            rounded-2xl
            font-medium
            text-warning
            transition
            hover:bg-warning hover:text-white
            active:scale-95
          "
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}
