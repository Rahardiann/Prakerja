import React, { useState } from "react";

import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

const Admin = () => {
  const [clickedButtons, setClickedButtons] = useState([]);

  const handleClick = (buttonNumber) => {
    // Menyalin array clickedButtons untuk menghindari mutasi langsung pada state
    let updatedClickedButtons = [...clickedButtons];

    // Toggle clicked state of the button
    if (updatedClickedButtons.includes(buttonNumber)) {
      updatedClickedButtons = updatedClickedButtons.filter(
        (btn) => btn !== buttonNumber
      );
    } else {
      updatedClickedButtons.push(buttonNumber);
    }

    // Mengatur state baru
    setClickedButtons(updatedClickedButtons);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="p-8 w-screen overflow-auto bg-custom-grey">
        <Navbar />
        <div>
          <div className="flex justify-between mt-8 mb-4">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-600 p-2 bg-custom-grey rounded-full w-80"
            />
          </div>

          <div className="overflow-x-auto rounded-lg shadow-lg">
            <div className="bg-white shadow-xl p-12 rounded-lg p-4">
              <select className="bg-custom-grey rounded-md px-8 py-2 mr-4">
                <option value="option1">Daerah</option>
                <option value="option2">Pilihan 2</option>
                <option value="option3">Pilihan 3</option>
                {/* Tambahkan opsi-opsi lainnya di sini sesuai kebutuhan */}
              </select>
              
            </div>
          </div>

          {/* Tabel dengan Data */}
          <div className="overflow-x-auto mt-8">
            <table className="table-auto border-collapse rounded-full  border-gray-500 w-full">
              <thead className="bg-custom-grey shadow-xl  text-gray-500 rounded-full">
                <tr>
                  <th className=" border-gray-500 px-4 py-2 ">ID Admin</th>
                  <th className=" border-gray-500 px-4 py-2">Nama Lengkap</th>
                  <th className=" border-gray-500 px-4 py-2">Daerah</th>
                  <th className=" border-gray-500 px-4 py-2">Aksi</th>
                </tr>
              </thead>
              <tbody className="bg-white shadow-xl text-black rounded-full">
                <tr>
                  <td className="border-gray-500 text-center w-32 px-4 py-2">
                    KMM002
                  </td>
                  <td className="border-gray-500 text-center px-4 py-2">
                    Jacob Moraless
                  </td>
                  <td className="border-gray-500 text-center px-4 py-2">Kota Malang</td>
                  <td className="border-gray-500 px-4 py-2   flex text-center items-center">
                    <div className="flex flex-1 justify-between">
                      <button
                        className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2  rounded-full transition-opacity duration-300 focus:outline-none focus:ring  ${
                          clickedButtons.includes(1) ? "opacity-50" : ""
                        }`}
                        onClick={() => handleClick(1)}
                      >
                        Gelombang
                      </button>
                      <button
                        className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2  rounded-full transition-opacity duration-300 focus:outline-none focus:ring  ${
                          clickedButtons.includes(2) ? "opacity-50" : ""
                        }`}
                        onClick={() => handleClick(2)}
                      >
                        Pelatihan2
                      </button>
                      <button
                        className={`bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-2 rounded-full transition-opacity duration-300 focus:outline-none focus:ring ${
                          clickedButtons.includes(3) ? "opacity-50" : ""
                        }`}
                        onClick={() => handleClick(3)}
                      >
                        Pelatihan3
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Lingkaran dengan angka */}
          <div className="flex text-left mt-4">
            <div className="flex items-center justify-center bg-green-500 rounded-full h-8 w-8 mr-4"></div>
            <span className="text-black font-bold text-2xl mr-4">222</span>
            <div className="flex items-center justify-center bg-yellow-500 rounded-full h-8 w-8 mr-4"></div>
            <span className="text-black font-bold text-2xl mr-4">222</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
