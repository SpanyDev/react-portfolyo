import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Global.css";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center bg-gray-100 p-24 rounded-lg shadow-lg">
        <h1
          style={{ fontFamily: "Heebo, sans-serif", fontWeight: 500 }}
          className="text-6xl text-black"
        >
          404
        </h1>
        <p
          style={{ fontFamily: "Heebo, sans-serif", fontWeight: 400 }}
          className="text-xl mt-4 text-black text-center"
        >
          Aradığınız sayfa bulunamadı.
        </p>
        <br />
        <Link
          style={{ fontFamily: "Heebo, sans-serif", fontWeight: 500 }}
          to="/"
          className="mx-2 px-6 py-2 border-solid border-2 border-orange-500 rounded-lg text-orange-500 hover:bg-orange-50 hover:text-orange"
        >
          Anasayfaya Dön!
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
