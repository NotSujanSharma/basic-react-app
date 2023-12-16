import './index.css';

function App() {
  return (
    <div className="flex h-screen flex-row">
      <div className="w-0 md:w-1/2 lg:w-1/2 lg:block"/>
      <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col items-center md:items-start lg:items-start">
        <div className="h-1/6"/>
        <div className="h-5/6flex flex-col">
          <h1 className='text-white text-7xl font-sans'>HI, I am</h1>
          <h1 className='text-white text-7xl mt-5 font-bold'>Sujan Sharma.</h1>
          <h3 className='text-white text-2xl mt-6'>Founder of Broken AI</h3>
          <button className='rounded-full bg-blue-400 text-white text-2xl w-64 mt-14 h-16 ease-in-out duration-500 hover:translate-y-[-10px] shadow-lg' onClick={()=>window.location.href="https://linkedin.com/in/notsujansharma"}>Know More</button>
        </div>
      </div>
    </div>
  );
}

export default App;
