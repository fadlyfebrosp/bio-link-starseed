import PropTypes from "prop-types";
import { FaFacebook, FaWhatsapp, FaTelegram } from "react-icons/fa";

const SHARE_URL = "https://bio-link-starseed.vercel.app/";

export function InfoModal({ open, onClose, darkTheme }) {
  return (
    <dialog className={`modal ${open ? "modal-open" : ""}`}>
      <div
        className={`
          modal-box max-w-sm
          transition-colors duration-300
          ${
            darkTheme
              ? "bg-neutral-900 text-slate-100"
              : "bg-white text-slate-900"
          }
        `}
      >
        <h3 className="text-xl font-bold text-center tracking-wide">Other</h3>
        <div
          className={`divider ${
            darkTheme ? "divider-warning/40" : "divider-warning"
          }`}
        />

        {/* ABOUT */}
        <div className="space-y-2">
          <p className="text-base font-semibold">About</p>
          <p
            className={`text-sm leading-relaxed ${
              darkTheme ? "text-slate-300" : "text-slate-600"
            }`}
          >
            This website was built using ReactJS, Tailwind CSS, and DaisyUI.
          </p>
        </div>

        <div
          className={`divider ${
            darkTheme ? "divider-warning/40" : "divider-warning"
          }`}
        />

        {/* SHARE */}
        <div className="space-y-3">
          <p className="text-base font-semibold">Share</p>

          <div className="flex gap-5 text-xl">
            {/* FACEBOOK */}
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${SHARE_URL}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share Facebook"
              className="transition hover:scale-110 text-blue-500"
            >
              <FaFacebook />
            </a>

            {/* WHATSAPP */}
            <a
              href={`https://wa.me/?text=${SHARE_URL}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share WhatsApp"
              className="transition hover:scale-110 text-green-500"
            >
              <FaWhatsapp />
            </a>

            {/* TELEGRAM */}
            <a
              href={`https://t.me/share/url?url=${SHARE_URL}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share Telegram"
              className="transition hover:scale-110 text-sky-500"
            >
              <FaTelegram />
            </a>
          </div>
        </div>

        {/* ACTION */}
        <div className="modal-action">
          <button
            onClick={onClose}
            className="btn btn-sm btn-outline btn-warning"
          >
            Close
          </button>
        </div>
      </div>

      {/* CLICK OUTSIDE */}
      <form method="dialog" className="modal-backdrop">
        <button onClick={onClose}>close</button>
      </form>
    </dialog>
  );
}

InfoModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  darkTheme: PropTypes.bool.isRequired,
};
