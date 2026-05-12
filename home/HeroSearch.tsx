// components/home/HeroSearch.tsx
export default function HeroSearch() {
  return (
    <form className="flex items-center rounded-xl bg-white p-2 shadow-xl">
      <input
        type="text"
        placeholder="Search faith-based events by city, ministry, or category..."
        className="flex-1 px-5 py-4 text-base outline-none"
      />
      <button className="rounded-lg bg-[#0E1B34] px-8 py-4 font-bold text-white">
        Search Events
      </button>
    </form>
  );
}