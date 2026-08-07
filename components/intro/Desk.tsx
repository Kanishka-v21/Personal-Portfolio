export default function Desk() {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2">

      {/* Desk Shadow */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[900px] h-10 bg-black/40 blur-2xl rounded-full" />

      {/* Desk Surface */}
      <div className="relative w-[900px] h-10 rounded-t-xl bg-gradient-to-r from-[#2b1d15] via-[#4b3621] to-[#2b1d15] shadow-2xl" />

      {/* Left Leg */}
      <div className="absolute left-10 top-10 w-5 h-52 bg-[#2b2b2b] rounded-b-md" />

      {/* Right Leg */}
      <div className="absolute right-10 top-10 w-5 h-52 bg-[#2b2b2b] rounded-b-md" />

    </div>
  );
}