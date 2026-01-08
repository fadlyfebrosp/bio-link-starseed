import PropTypes from "prop-types";
import { FaInstagram, FaGithub } from "react-icons/fa";

const socials = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/starseed_team?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    icon: FaInstagram,
  },
  {
    name: "GitHub",
    url: "https://github.com/fadlyfebrosp/masjid-baiturrahman",
    icon: FaGithub,
  },
];

export function Social({ darkTheme }) {
  return (
    <div className="flex justify-center gap-8 mt-6 text-2xl">
      {socials.map(({ name, url, icon: Icon }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className={`
            transition-all duration-300
            hover:scale-110 active:scale-90
            ${
              darkTheme
                ? "text-slate-400 hover:text-amber-400"
                : "text-slate-600 hover:text-amber-500"
            }
          `}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}

Social.propTypes = {
  darkTheme: PropTypes.bool.isRequired,
};
