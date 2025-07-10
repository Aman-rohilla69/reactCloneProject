import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              coding is an art, and we are the artists. We create beautiful and functional applications that enhance user experience and drive engagement.
              We believe in the power of React to build scalable and maintainable applications that stand the test of time.
            </p>
            <p className="mt-4 text-gray-600">
              Our team is dedicated to delivering high-quality code and exceptional user experiences. We take pride in our work and strive to exceed expectations with every project.
              moreover, we are committed to continuous learning and improvement, staying up-to-date with the latest trends and best practices in React development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
