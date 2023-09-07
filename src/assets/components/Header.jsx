// import React from "react"
import logo from "../images/logo.svg"

const Header = () => {
  return (
    <section
      id='header'
      className='flex flex-col items-center gap-6 p-8 lg:max-w-[50vw] lg:justify-between lg:items-start lg:col-span-1 col-span-2'>
      <img src={logo} alt='logo' className='w-10 h-10' />
      <div className='wrapper lg:text-left flex flex-col gap-8 lg:h-1/2'>
        <h1 id='headline' className='text-[#253347] font-semibold text-5xl'>
          Body Mass Index Calculator
        </h1>
        <p id='subtitle' className='text-md text-[#5E6E85]'>
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health and well-being.
        </p>
      </div>
    </section>
  )
}

export default Header
