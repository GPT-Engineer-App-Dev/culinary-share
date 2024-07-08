const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Recipe Share</h2>
            <p className="text-sm">© 2023 Recipe Share. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400">Home</a>
            <a href="#" className="text-white hover:text-gray-400">Recipes</a>
            <a href="#" className="text-white hover:text-gray-400">Submit Recipe</a>
            <a href="#" className="text-white hover:text-gray-400">About Us</a>
            <a href="#" className="text-white hover:text-gray-400">Contact</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400">Facebook</a>
            <a href="#" className="text-white hover:text-gray-400">Twitter</a>
            <a href="#" className="text-white hover:text-gray-400">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;