import PropTypes from "prop-types";

const links = [
  { label: "Masjid Baiturrahman", url: "https://masjidbaiturrahman.or.id/" },
];

export function Links({ darkTheme }) {
  return (
    <section className="mt-10 space-y-6">
      {links.map((item, index) => (
        <a
          key={item.url}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            block w-full text-center py-4 px-6
            rounded-2xl font-semibold no-underline
            transition-all duration-300
            hover:scale-105 active:scale-95
            border-2 border-amber-400

            ${
              darkTheme
                ? `
                  bg-neutral-900 text-slate-100
                  shadow-[0_0_0_2px_rgba(251,191,36,0.9),0_0_28px_rgba(251,191,36,0.5)]
                  hover:bg-neutral-800
                `
                : `
                  bg-white text-slate-900
                  shadow-md shadow-amber-200
                  hover:bg-amber-50
                `
            }
          `}
        >
          {item.label}
        </a>
      ))}
    </section>
  );
}

Links.propTypes = {
  darkTheme: PropTypes.bool.isRequired,
};
