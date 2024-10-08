'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SignUp = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null);
  const [file, setFile] = useState(null);
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("whatsappnumber", number);
    formData.append("address", address);

    try {
      const res = await fetch("http://localhost:8080/signup", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const data = await res.text();
        console.log(res.message);
        router.push("/"); // Correct way to redirect using useRouter
      } else {
        const errorData = await res.json();
        setError(errorData.error);
        console.error("Failed to submit form:", errorData);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setError("Error submitting the form");
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-300">
      <form
        encType="multipart/form-data"
        onSubmit={handleSignUp}
        className="bg-white p-6 rounded shadow-xl w-90% md:w-[500px] h-[70vh] md:h-[90vh] flex flex-col justify-center space-y-4"
      >
        <div className="space-y-4">
          <div className="bg-orange-400 p-3 mb-12 flex flex-column justify-center">
            <h2 className="text-black font-semibold">Prega Care</h2>
          </div>
          <input
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder="Enter your username"
            className="border border-black bg-white p-0.5 mb-2 text-black w-full rounded-sm"
          />
          <br />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email id"
            className="border border-black bg-white p-0.5 text-black mb-2 w-full rounded-sm"
          />
          <br />
          <input
            type="password"
            placeholder="Enter the password"
            className="border border-black  bg-white text-black p-0.5 mb-2 w-full rounded-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Enter the number"
            className="border border-black bg-white text-black p-0.5 mb-2 w-full rounded-sm"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <br />
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            placeholder="Enter the address"
            className="border border-black bg-white text-black p-0.5 mb-2 w-full rounded-sm"
          />
        <input
          onChange={handleFileChange}
          type="file"
          placeholder="Upload a file"
          className="border border-black bg-white text-black p-0.5 mb-4 w-full rounded-sm"
        />
        <Link href="/" >
        <button
          type="submit"
          className="border border-black mt-4 p-2 w-full  bg-black text-white hover:bg-orange-500 transition-colors"
      
        >
          Sign Up
        </button>
        </Link>
        </div>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default SignUp;
