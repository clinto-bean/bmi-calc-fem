const cardData = [
  {
    index: 0,
    title: "Gender",
    content:
      "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
    url: "../src/assets/images/icon-gender.svg",
  },
  {
    index: 1,
    title: "Age",
    content:
      "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.",
    url: "../src/assets/images/icon-age.svg",
  },
  {
    index: 2,
    title: "Muscle",
    content:
      "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
    url: "../src/assets/images/icon-muscle.svg",
  },
  {
    index: 3,
    title: "Pregnancy",
    content:
      "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.",
    url: "../src/assets/images/icon-pregnancy.svg",
  },
  {
    index: 4,
    title: "Race",
    content:
      "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.",
    url: "../src/assets/images/icon-race.svg",
  },
]

const Limitations = () => {
  return (
    <div className='p-4 flex flex-col gap-0 bg-white lg:grid lg:grid-cols-2 items-center md:col-span-2 relative'>
      <div className='wrapper p-4 mr-4 ml-4 lg:flex lg:flex-col lg:justify-start lg:gap-4'>
        <div className='section-header text-[32px] text-black'>
          Limitations of BMI
        </div>
        <p className='text-slate'>
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </div>
      <img
        src='./src/assets/images/pattern-curved-line-right.svg'
        className='hidden xl:block xl:absolute left-1/4 top-1/4'
      />
      <div className='wrapper flex gap-4 max-md:flex-col items-center justify-center p-4 flex-wrap lg:row-span-2'>
        {cardData.map((data) => {
          return (
            <div
              key={data.index}
              className='justify-evenly w-[360px] h-[240px] flex flex-col flex-grow-0 items-start gap-4 p-4 rounded-2xl bg-white shadow-[0px_16px_16px_#D8E2E7]'>
              <div className='wrapper flex gap-4'>
                <img src={data.url} alt={data.title} className='w-8' />
                <p className='text-black font-semibold text-2xl'>
                  {data.title}
                </p>
              </div>
              <p className='text-slate text-left'>{data.content}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Limitations
