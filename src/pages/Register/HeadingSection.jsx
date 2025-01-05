import React from 'react'

const  HeadingSection = () => {
  return (
    <section className=" bg-cover bg-center h-72 bg-no-repeat"
        style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url('/images/register-bg.jpg')" }}
    >
        <div className="w-full max-w-screen-3xl md:h-auto px-5 md:px-20 py-28 ">
            <div className="flex items-center opacity-85 justify-center gap-5 text-white">
              <div>
              <img src="/images/logo.png" alt="logo" className="w-24  mx-auto" />
              </div>
              <div>
              <img src="/images/text-logo.png" alt="logo" className="w-72 mx-auto" />
              </div>
            </div>
        </div>

    </section>
)
}

export default HeadingSection