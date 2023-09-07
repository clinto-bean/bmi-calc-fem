/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react"

const Calculator = () => {
  // Declare units and unit types

  const metricUnits = [
    { name: "Centimeters", abbr: "cm" },
    { name: "Kilograms", abbr: "kg" },
  ]

  const imperialUnits = [
    { name: "Feet", abbr: "ft", value: 12 },
    { name: "Inches", abbr: "in", value: 1 },
    { name: "Pounds", abbr: "lb", value: 1 },
    { name: "Stone", abbr: "st", value: 14 },
  ]

  const unitTypes = [
    {
      name: "Metric",
      metric: true,
    },
    {
      name: "Imperial",
      metric: false,
    },
  ]

  // Declare states

  const [isMetric, setIsMetric] = useState(true)

  const [BMIResult, setBMIResult] = useState(0)

  const [heightMetric, setHeightMetric] = useState(0)
  const [weightMetric, setWeightMetric] = useState(0)

  const [heightImperial, setHeightImperial] = useState({ feet: 0, inches: 0 })
  const [weightImperial, setWeightImperial] = useState({ stone: 0, pounds: 0 })

  // Functions

  const handleUnitTypeChange = (index) => {
    setIsMetric(unitTypes[index].metric)

    // Clear input fields when changing unit type
    setHeightMetric(0)
    setWeightMetric(0)
    setHeightImperial({ feet: 0, inches: 0 })
    setWeightImperial({ stone: 0, pounds: 0 })

    setBMIResult(0) // Clear the BMI result when changing unit type
  }

  const handleInputChange = (event, unit) => {
    const value = Number(event.target.value)
    if (!isNaN(value)) {
      if (isMetric) {
        if (unit.abbr === "cm") {
          // Handle height input in metric
          setHeightMetric(value)
        } else if (unit.abbr === "kg") {
          // Handle weight input in metric
          setWeightMetric(value)
        }
      } else {
        if (unit.abbr === "ft" || unit.abbr === "in") {
          // Handle height input in imperial
          setHeightImperial((prevHeight) => ({
            ...prevHeight,
            [unit.abbr === "ft" ? "feet" : "inches"]: value,
          }))
        } else if (unit.abbr === "lb" || unit.abbr === "st") {
          // Handle weight input in imperial
          setWeightImperial((prevWeight) => ({
            ...prevWeight,
            [unit.abbr === "st" ? "stone" : "pounds"]: value,
          }))
        }
      }

      setTimeout(() => {
        calculateBMI()
      }, 50)
    }
  }

  const calculateBMI = () => {
    if (isMetric) {
      // Metric formula
      let x = weightMetric
      let y = heightMetric * 0.01
      let bmi = x * (y * y)
      setBMIResult(parseFloat(bmi.toFixed(1)))
    } else {
      // Imperial formula
      let totalInches =
        heightImperial.feet * imperialUnits[0].value + heightImperial.inches
      let totalPounds =
        weightImperial.stone * imperialUnits[3].value + weightImperial.pounds
      let bmi = (totalPounds / (totalInches * totalInches)) * 703
      setBMIResult(parseFloat(bmi.toFixed(1)))
    }
  }

  // Components

  return (
    <section
      id='calculator'
      className='md:col-span-2 md:flex md:justify-center lg:col-span-1'>
      <div
        id='wrapper'
        className='flex flex-col gap-6 m-8 p-6 rounded-2xl bg-white shadow-xl shadow-[#D8E2E7]'>
        <div className='text-2xl text-[#253347] font-semibold text-left'>
          Enter your details below
        </div>

        <div id='inputs'>
          <div className='flex flex-col gap-6'>
            <div
              id='buttons'
              className='grid grid-cols-2 gap-6 font-semibold w-full h-8 relative'>
              {unitTypes.map((unit, index) => (
                <div
                  key={index}
                  className={`flex gap-4 items-center h-8 w-1/2 ${
                    isMetric === unit.metric ? "focus" : ""
                  }`}
                  onClick={() => handleUnitTypeChange(index)}>
                  <button
                    type='button'
                    className={`w-8 h-8 aspect-square active:scale-50 focus:scale-50 rounded-full outline-[#D8E2E7] outline outline-1 active:bg-[#587DFF] active:outline-[#587DFF] focus:bg-[#345DFF] focus:outline-[#345DFF] focus:ring-[16px] focus:ring-sky-200 active:ring-sky-200 active:ring-[16px] hover:outline-[#345FF6] ${
                      isMetric === unit.metric ? "active:bg-[#587DFF]" : ""
                    }`}></button>
                  <p className='label font-normal'>{unit.name}</p>
                </div>
              ))}
            </div>
            <div id='inputs' className='flex flex-col'>
              {isMetric ? (
                <div className='grid grid-rows-2 gap-2'>
                  {metricUnits.map((unit) => (
                    <div
                      key={unit.abbr}
                      className='flex flex-col items-start gap-2'>
                      <label
                        htmlFor={unit.abbr}
                        className='text-sm text-[#5e6e85]'>
                        {unit.name}
                      </label>
                      <div className='relative flex justify-between border border-[#D8E2E7] rounded-xl p-4 w-full max-w-full focus-within:border-[#345DFF]'>
                        <input
                          type='text'
                          name={unit.abbr}
                          placeholder='1234'
                          className='active:outline-none cursor-pointer focus:outline-none text-2xl font-semibold placeholder:text-[#5e6e85] text-[#253347] w-3/4'
                          onInput={(e) => handleInputChange(e, unit)}
                        />
                        <p
                          id={unit.abbr}
                          className='right-4 absolute text-blue text-2xl font-semibold'>
                          {unit.abbr}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className='grid grid-cols-2 grid-rows-2 gap-y-2 max-md:flex max-md:flex-col'>
                  {imperialUnits.map((unit) => (
                    <div
                      key={unit.abbr}
                      className='flex flex-col items-start gap-2'>
                      <label
                        htmlFor={unit.abbr}
                        className='text-sm text-[#5e6e85]'>
                        {unit.name}
                      </label>
                      <div className='relative flex justify-between border border-[#D8E2E7] rounded-xl p-4 w-full max-w-full focus-within:border-[#345DFF]'>
                        <input
                          type='text'
                          name={unit.abbr}
                          placeholder='1234'
                          className='active:outline-none cursor-pointer focus:outline-none text-2xl font-semibold placeholder:text-[#5e6e85] text-[#253347] w-3/4'
                          onInput={(e) => handleInputChange(e, unit)}
                        />
                        <p
                          id={unit.abbr}
                          className='right-4 absolute text-blue text-2xl font-semibold'>
                          {unit.abbr}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          id='result'
          className='max-md:w-full max-md:flex max-md:flex-col max-md:items-center max-md:justify-start md:grid md:grid-cols-2 flex flex-col gap-4 bg-gradient-to-r max-md:rounded-xl md:rounded-br-[15%_50%] md:rounded-tr-[15%_50%] from-[#345FF6] to-[#587DFF] text-white items-start text-start p-8 w-fit'>
          <div className='wrapper gap-4 flex flex-col'>
            <p className='font-seimbold w-fit'>Your BMI is...</p>
            <p className='text-5xl w-fit'>{BMIResult}</p>
          </div>
          <p className='w-fit sm:max-w-[25ch]'>
            Your BMI suggests you&apos;re a healthy weight. Your ideal weight is
            between <span className='font-semibold'>63.3kgs - 85.2kgs</span>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Calculator
