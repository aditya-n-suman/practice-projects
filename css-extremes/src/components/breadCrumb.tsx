export const BreadCrumb1 = () => {
  return (
    <div className="flex bg-white h-8 rounded-xl">
      <button className="relative bg-blue-900 flex h-full text-white items-center justify-center text-sm rounded-s-xl flex-1">
        New
        <div className="absolute right-0">
          <div className="blue-upper-triangle h-4 w-4 "></div>
          <div className="blue-upper-triangle h-4 w-4 rotate-90 "></div>
        </div>
      </button>
      <button className="relative flex-1 flex bg-blue-900 text-white items-center justify-center text-sm">
        <div className="absolute left-0">
          <div className="blue-upper-triangle h-4 w-4 rotate-180"></div>
          <div className="blue-upper-triangle h-4 w-4 -rotate-90 "></div>
        </div>
        Assigned
        <div className="absolute right-0">
          <div className="blue-upper-triangle h-4 w-4 "></div>
          <div className="blue-upper-triangle h-4 w-4 rotate-90 "></div>
        </div>
      </button>

      <button className="relative flex-1 flex bg-gray-300 text-white items-center justify-center text-sm rounded-e-xl">
        <div className="absolute left-0">
          <div className="gray-upper-triangle to-gray-300 h-4 w-4 rotate-180"></div>
          <div className="gray-upper-triangle h-4 w-4 -rotate-90 "></div>
        </div>
        {/* Assigned */}
      </button>

    </div>
  );
};
