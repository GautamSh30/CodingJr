const CourseInfoSidebar = () => {
  return (
    <div className="w-1/4 p-6">
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Full course</h2>
        <p className="text-3xl font-bold text-purple-600 mb-2">
          $15.99 <span className="line-through text-gray-500">$39.99</span>
        </p>
        <p className="text-green-600 font-semibold mb-4">60% off</p>
        <ul className="space-y-2 mb-4">
          <li>56 hours on-demand video</li>
          <li>6 Articles</li>
          <li>8 Downloadable resources</li>
          <li>Mobile version</li>
        </ul>
        <button className="bg-purple-600 text-white w-full py-2 rounded mb-2">
          Add to cart
        </button>
        <button className="bg-gray-200 text-gray-700 w-full py-2 rounded">
          Buy now
        </button>
        <p className="text-gray-500 text-sm mt-2">
          30-Day money-back guarantee
        </p>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Rating</h2>
        <div className="flex items-center mb-4">
          <i className="fas fa-star text-yellow-500 mr-2"></i>
          <span className="text-xl font-bold">4.8</span>
          <span className="text-gray-500 ml-2">(2,492 Students)</span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Publisher</h2>
        <div className="flex items-center mb-4">
          <img
            src="/blender.png"
            alt="Publisher's avatar"
            className="rounded-full w-10 h-10 mr-2"
          />
          <div>
            <p className="font-semibold">Ryan Curtis</p>
            <p className="text-gray-500">3D Artist</p>
          </div>
        </div>
        <p className="text-gray-700 mb-4">
          Hey! My name is Ryan, I'm a freelance 3D Artist with around 8 years of
          experience.
        </p>
        <ul className="space-y-2">
          <li>8 Instructor rating</li>
          <li>889 Reviews</li>
          <li>4,887 Students</li>
          <li>6 Courses</li>
        </ul>
      </div>
    </div>
  );
};

export default CourseInfoSidebar;
