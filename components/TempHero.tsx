export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top, #1e1b4b, transparent_60%)]"/>
            <div className="relative z-10 text-center px-6">
                <p className="text-violet-400 tracking-[0.3em] uppercase mb-4">
                    Welcome
                </p>
                <h1 className="text-6xl md:text-8xl font-black">
          Kanishka
        </h1>

        <p className="mt-6 text-xl text-gray-400 max-w-xl mx-auto leading-relaxed">
          Building experiences where creativity, code, and curiosity meet.
        </p>

        <button className="mt-10 rounded-full bg-violet-600 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:bg-violet-500">
          Begin Journey →
        </button>
            </div>
        </section>
    )
}