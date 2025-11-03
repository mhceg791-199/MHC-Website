
function Loader() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-white">
      <img
        src="/logo512.png"
        alt="Loading Logo"
        className="w-24 h-24 animate-spin rounded-full"
      />
    </div>
  );
}

export default Loader;