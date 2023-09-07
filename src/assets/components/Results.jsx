/* eslint-disable react/no-unescaped-entities */

const Results = () => {
  return (
    <section
      id='results'
      className='flex max-md:flex-col items-center gap-8 p-8 md:col-span-1 relative'>
      <img
        src='../src/assets/images/pattern-curved-line-left.svg'
        alt=''
        className='hidden xl:absolute xl:block xl:right-[20%] xl:top-8'
      />
      <div className='flex flex-col gap-8'>
        <p className='text-[32px] text-black font-semibold text-left'>
          What your BMI result means
        </p>
        <p className='text-slate text-[16px] text-left'>
          A BMI range of 18.5 to 24.9 is considered a &apos;healthy
          weight.&apos; Maintaining a healthy weight may lower your chances of
          experiencing health issues later on, such as obesity and type 2
          diabetes. Aim for a nutritious diet with reduced fat and sugar
          content, incorporating ample fruits and vegetables. Additionally,
          strive for regular physical activity, ideally about 30 minutes daily
          for five days a week.
        </p>
      </div>
    </section>
  )
}

export default Results
