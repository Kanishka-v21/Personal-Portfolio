
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#071018] px-6 py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-xs text-gray-500 md:flex-row">

        <p>
          © {new Date().getFullYear()} Kanishka
        </p>

        <p>
          Designed & built with curiosity.
        </p>

      </div>
    </footer>
  );
}
