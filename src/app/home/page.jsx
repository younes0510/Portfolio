import Link from 'next/link';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <img
        src="https://gomycodelearn.blob.core.windows.net/profiles/02051d59-fc76-480b-a416-6fefbc80936f-133695963874053826.jpeg"
        alt="Profile"
        className="w-[300px] h-[250px] rounded-full mr-2 mb-4"
      />
      <h1 className="text-4xl font-bold text-gray-800">Welcome to My Portfolio</h1>
      <p className="text-lg text-gray-600 mt-4">
        Explore my skills, projects, and contact information.
      </p>
      <div className="space-x-4 text-red-900 font-bold mt-4">
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Home;
