export function Header() {
  return (
    <div className="relative h-44 rounded-b-3xl overflow-hidden">
      <img
        src="https://bio-link-chc5-git-main-fadlyfebros-projects.vercel.app/static/media/marbled.c8efcda3fddb25d3f3cf.jpg"
        alt="Marble background"
        className="w-full h-full object-cover"
      />

      {/* Soft overlay agar UI tetap clean */}
      <div className="absolute inset-0 bg-black/10" />
    </div>
  );
}
