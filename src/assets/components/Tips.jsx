const tipsData = [
  {
    index: 0,
    title: "Healthy Eating",
    content:
      "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.",
    url: "../src/assets/images/icon-eating.svg",
  },
  {
    index: 1,
    title: "Regular exercise",
    content:
      "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.",
    url: "../src/assets/images/icon-exercise.svg",
  },
  {
    index: 2,
    title: "Adequate sleep",
    content:
      "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.",
    url: "../src/assets/images/icon-sleep.svg",
  },
]

const Tips = () => {
  return (
    <section
      id='tips'
      className='flex flex-col lg:flex-row lg:justify-center p-8 gap-[40px] md:col-span-2'>
      {tipsData.map((tip) => {
        return (
          <div
            key={tip.index}
            className='flex flex-col gap-6 items-start lg:w-[25%]'>
            <img src={tip.url} alt={tip.title} className='w-16' />
            <p className='font-semibold text-[24px] text-black'>{tip.title}</p>
            <p className='text-slate text-left'>{tip.content}</p>
          </div>
        )
      })}
    </section>
  )
}

export default Tips
