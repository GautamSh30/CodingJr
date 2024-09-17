const CourseDetails = () => {
  return (
    <div className="flex-1 p-6">
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <img
          src="/blender.png"
          alt="Colorful 3D chair with paint dripping"
          className="rounded-lg mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">Blender 3D Fundamentals</h1>
        <p className="text-gray-600 mb-4">
          Learn The Basics of 3D in Blender with a Project Based Approach
        </p>
        <div className="flex items-center mb-4">
          <img
            src="/blender.png"
            alt="Publisher's avatar"
            className="rounded-full w-10 h-10 mr-2"
          />
          <div>
            <p className="font-semibold">Ryan Curtis</p>
            <p className="text-gray-500">Publisher</p>
          </div>
        </div>
        <p className="text-gray-700 mb-4">
          Welcome to the exciting world of Blender 3D! In this comprehensive
          course, we will dive into the fundamentals of Blender, equipping you
          with the essential knowledge and skills to create stunning 3D
          projects. Whether you are a beginner eager to explore the realm of 3D
          modeling or an experienced artist looking to expand your capabilities,
          this course will guide you every step of the way.
        </p>
        <div className="flex space-x-4 mb-4">
          <div className="flex items-center">
            <i className="fas fa-book-open text-gray-500 mr-2"></i>
            <span>128 Lessons</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-clock text-gray-500 mr-2"></i>
            <span>56h 28m</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-signal text-gray-500 mr-2"></i>
            <span>Beginner</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-eye text-gray-500 mr-2"></i>
            <span>12,620 Views</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-purple-600 text-white px-4 py-2 rounded">
            Add to cart
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
            Buy now
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Frequently asked questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">How long does it take to learn?</h3>
            <p className="text-gray-700">
              The course is designed to be completed in 56 hours and 28 minutes.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Do I need any prior experience?</h3>
            <p className="text-gray-700">
              No, this course is suitable for beginners.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourseDetails;
