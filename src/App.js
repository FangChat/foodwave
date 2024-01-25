import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <div className='flex flex-col h-screen gap-[5vw] bg-black'>
      <div className='filter flex bg-[#333333] text-white blur-[2px] hover:blur-[0px]'>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>

      <div className='flex bg-[#333333] text-white blur-[2px] hover:blur-[0px]'>
        <p>Bye</p>
      </div>
    </div>
  );
}

export default App;
