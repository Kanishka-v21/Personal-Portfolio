export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">

      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-full px-8 py-4 flex gap-10 shadow-2xl">

        <span className="font-bold text-violet-400">
          KP
        </span>

        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Research</a>
        <a href="#">Contact</a>

      </div>

    </nav>
  );
}