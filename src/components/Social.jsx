import { FaInstagram, FaGithub } from "react-icons/fa";

export function Social() {
  return (
    <div className="flex justify-center gap-8 mt-6 text-2xl">
      <a
        href="https://www.instagram.com/starseed_team?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-primary active:scale-90"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>

      <a
        href="https://github.com/fadlyfebrosp/masjid-baiturrahman"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-primary active:scale-90"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
    </div>
  );
}
