import { Search } from "lucide-react";

export function MobileSearch({ searchTerm, setSearchTerm, handleSearchSubmit }) {
  return (
    <div className="lg:hidden px-4 pb-4">
      <form onSubmit={handleSearchSubmit} className="relative">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          className="w-full pl-11 pr-4 py-2.5 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#B76E79]"
        />
      </form>
    </div>
  );
}