import PropTypes from "prop-types";
import { HiBadgeCheck } from "react-icons/hi";

export function Profile({ darkTheme }) {
  return (
    <div className="flex flex-col items-center -mt-14 px-4">
      <div className="avatar">
        <div className="w-28 rounded-full ring-2 ring-amber-400 ring-offset-4 ring-offset-transparent">
          <img src="/img/pp.jpg" alt="profile" />
        </div>
      </div>

      <h1 className="text-xl font-bold mt-4 flex items-center gap-1">
        Starseeed
        <span
          className="
            inline-flex items-center justify-center
            w-5 h-5
            rounded-full
            bg-amber-400
            text-black
            shadow-sm
          "
          title="Verified"
        >
          <HiBadgeCheck className="w-3.5 h-3.5" />
        </span>
      </h1>

      <p
        className={`text-sm text-center mt-1 ${
          darkTheme ? "text-slate-400" : "text-slate-500"
        }`}
      >
        Kelompok Trek Pengembangan Aplikasi Berbasis Multiplatform <br />
        Angkatan 23 UY
      </p>
    </div>
  );
}

Profile.propTypes = {
  darkTheme: PropTypes.bool.isRequired,
};
