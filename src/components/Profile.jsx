import { HiBadgeCheck } from "react-icons/hi";

export function Profile() {
  return (
    <div className="flex flex-col items-center -mt-14 px-4">
      <div className="avatar">
        <div className="w-28 rounded-full ring ring-base-100 ring-offset-base-100 ring-offset-2">
          <img src="/img/pp.jpg" alt="profile" />
        </div>
      </div>

      <h1 className="text-xl font-bold mt-4 flex items-center gap-1">
        Starseeed
        <span className="bg-primary text-white rounded-full p-0.5">
          <HiBadgeCheck className="w-4 h-4" />
        </span>
      </h1>

      <p className="text-sm text-center text-gray-500 mt-1">
        Based in 📍 Jakarta Utara, Indonesia <br />
        <p className="text-sm text-center text-gray-500 mt-1">
          Kelompok Trek Pengembangan Aplikasi Berbasis Multiplatform <br />
          Angkatan 23 UY
        </p>
      </p>
    </div>
  );
}
