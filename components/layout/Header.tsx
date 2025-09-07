const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex flex-col md:flex-row md:items-center justify-between">
      <div className="text-2xl font-bold text-gray-800">StayFinder</div>
      <div className="flex-1 mx-4">
        <input
          type="text"
          placeholder="Search for places..."
          className="w-full p-2 border rounded"
        />
      </div>
      <nav className="space-x-4 text-sm">
        <button className="text-gray-600">Rooms</button>
        <button className="text-gray-600">Mansion</button>
        <button className="text-gray-600">Countryside</button>
        <button className="text-blue-600 font-semibold">Sign In</button>
        <button className="bg-blue-600 text-white px-3 py-1 rounded">Sign Up</button>
      </nav>
    </header>
  );
};

export default Header;
