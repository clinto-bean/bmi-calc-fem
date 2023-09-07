import Header from "./assets/components/Header.jsx"
import Calculator from "./assets/components/Calculator.jsx"
import Results from "./assets/components/Results.jsx"
import Tips from "./assets/components/Tips.jsx"
import Limitations from "./assets/components/Limitations.jsx"

function App() {
  return (
    <main className='flex flex-col md:grid md:grid-cols-2'>
      <Header />
      <Calculator />
      <figure className='flex items-center justify-center md:col-span-1'>
        <img
          src='./src/assets/images/image-man-eating.webp'
          alt='man eating'
          className='lg:max-w-[564px] lg:max-h-[533px] lg:mb-4'></img>
      </figure>
      <Results />
      <Tips />
      <Limitations />
    </main>
  )
}

export default App
