import React from "react";
import BlogfyImg from "../../public/img/SVG.svg";

function Footer() {
  return (
    <footer className="border-2 border-[#c7c7c74d] pt-12 pb-8 mb-8">
      <section className="container footer-box flex justify-between gap-5">
        <div className="w-full max-w-95">
          <div className="cursor-pointer flex items-center gap-2 ">
            <img src={BlogfyImg} alt="" />
            <h2 className="text-[#4346EF]">Blogify</h2>
          </div>
          <p className="text-[#6B7280] mt-4">
            Create, read, and inspire. Discover amazing stories written by
            talented creators from around the world.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-[24px] font-bold">Quick Links</h2>
          <div className="text-[#6B7280] flex flex-col gap-2.5">
            <a href="#">Home</a>
            <a href="#">Posts</a>
            <a href="#">Login</a>
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-[24px] font-bold">Connect</h2>
          <div className="flex gap-3 text-2xl">
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-linkedin-in"></i>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
