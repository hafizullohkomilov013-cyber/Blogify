import React from 'react'

function Main() {
  return (
    <main className="container">
      <section className=" pt-20 pb-20">
        <div className="text-center">
          <h2 className="text-[#0F1729] text-4xl font-bold">
            Why Choose Blogify?
          </h2>
          <p className="text-[#6B7280] mt-4">
            Built with modern technologies and best practices to provide the
            best blogging experience.
          </p>
        </div>
        <div className="box-card justify-center mt-16 flex gap-8">
          <div className="w-full max-w-[384px] p-9 border-2 border-[#c4c4c5] rounded-2xl">
            <img src="../../public/img/Overlay.png" alt="" />
            <h2 className="mt-4 mb-2">Fast</h2>
            <p className="text-[#6B7280]">
              Lightning-fast performance with modern web technologies for the
              best reading experience.
            </p>
          </div>
          <div className="w-full max-w-[384px] p-9 border-2 border-[#c4c4c5] rounded-2xl">
            <img src="from '../../public/img/Overlay2.png" alt="" />
            <h2 className="mt-4 mb-2">Secure</h2>
            <p className="text-[#6B7280]">
              Your data is protected with industry- standard security practices
              and encryption.
            </p>
          </div>
          <div className="w-full max-w-[384px] p-9 border-2 border-[#c4c4c5] rounded-2xl">
            <img src="../../public/img/Overlay3.png" alt="" />
            <h2 className="mt-4 mb-2">Easy to Manage</h2>
            <p className="text-[#6B7280]">
              Intuitive admin dashboard makes content management effortless and
              enjoyable.
            </p>
          </div>
        </div>
      </section>
      <section className="container ">
        <div className="post gap-3 flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold">Latest Posts</h2>
            <p>Check out our most recent articles</p>
          </div>
          <button>
            View All <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div className="flex gap-5 justify-center dev-card mb-25">
          <div className="w-full max-w-90 border-2 border-[#c4c4c5] rounded-2xl">
            <img
              className="dev-img"
              src="../../public/img/development1.png"
              alt=""
            />
            <div className="p-6">
              <h2 className="text-[#6B7280]">
                <i className="fa-regular fa-calendar"></i> Nov 18, 2025
              </h2>
              <h2 className="text-[#0F1729] text-[20px] font-bold mb-2">
                Mastering Productivity
              </h2>
              <p className="text-[#6B7280] text-[14px] mb-3.5">
                EProven strategies and tools to boost your productivity and
                achieve your goals faster.
              </p>
              <button className="text-[#4346EF]">
                <a href="#">
                  Read more <i className="fa-solid fa-arrow-right"></i>
                </a>
              </button>
            </div>
          </div>
          <div className="w-full max-w-90 border-2 border-[#c4c4c5] rounded-2xl">
            <img
              className="dev-img"
              src="../../public/img/development2.png"
              alt=""
            />
            <div className="p-6">
              <h2 className="text-[#6B7280]">
                <i className="fa-regular fa-calendar"></i> Nov 15, 2025
              </h2>
              <h2 className="text-[#0F1729] text-[20px] font-bold mb-2">
                Design Principles That Matter
              </h2>
              <p className="text-[#6B7280] text-[14px] mb-3.5">
                Essential design principles every creator should know to build
                stunning user experiences.
              </p>
              <button className="text-[#4346EF]">
                <a href="#">
                  Read more <i className="fa-solid fa-arrow-right"></i>
                </a>
              </button>
            </div>
          </div>
          <div className="w-full max-w-90 border-2 border-[#c4c4c5] rounded-2xl">
            <img
              className="dev-img"
              src="../../public/img/development3.png"
              alt=""
            />
            <div className="p-6">
              <h2 className="text-[#6B7280]">
                <i className="fa-regular fa-calendar"></i> Nov 20, 2025
              </h2>
              <h2 className="text-[#0F1729] text-[20px] font-bold mb-2">
                The Future of Web Development
              </h2>
              <p className="text-[#6B7280] text-[14px] mb-3.5">
                Exploring the latest trends and technologies shaping the future
                of web development in 2024.
              </p>
              <button className="text-[#4346EF]">
                <a href="#">
                  Read more <i className="fa-solid fa-arrow-right"></i>
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main
