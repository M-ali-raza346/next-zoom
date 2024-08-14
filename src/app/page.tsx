import React from 'react'

const page = () => {
  return (
    <div><figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/img.jpeg" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “Hi! I am Muhammad Ali Raza.Three years ago, I achieved the remarkable feat of becoming a Hafiz-ul-Quran, memorizing the entire Holy Quran. Now, I am building on that accomplishment by pursuing my matriculation studies. I am excited to apply the discipline and dedication that helped me in my Hifz journey to my academic endeavors.”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          MUHAMMAD ALI RAZA
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          FROM RAHIM YAR KHAN
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page