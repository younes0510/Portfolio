const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-semibold text-gray-800">About Me</h1>
      <p className="mt-4 text-gray-600">
        I am a passionate developer with experience in building modern websites.
      </p>
      <ul className="mt-6 space-y-2">
        <li className="flex items-center">
          <span className="inline-block w-4 h-4 bg-red-500 rounded-full mr-2"></span>
          Skilled in JavaScript, React, and Next.js
        </li>
        <li className="flex items-center">
          <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span>
          Experience with Tailwind CSS for styling
        </li>
        <li className="flex items-center">
          <span className="inline-block w-4 h-4 bg-black rounded-full mr-2"></span>
          Proficient in building responsive designs
        </li>
      </ul>
    </div>
  );
};

export default About;
