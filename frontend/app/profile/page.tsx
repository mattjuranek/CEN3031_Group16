"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MagnifyingGlassIcon, ClipboardIcon, ArrowRightOnRectangleIcon, CalendarIcon } from '@heroicons/react/24/solid';

const Profile = () => {
  const [user, setUser] = useState<{ username: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      router.push("/login");
      return;
    }

    const fetchUserProfile = async () => {
      try {
        const response = await fetch("http://localhost:4000/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
          }
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user profile");
        }

        const data = await response.json();
        console.log("Fetched user data:", data);
        setUser({ username: data.username });
      } 
      catch (err) {
        console.error(err);
        router.push("/login");
      }
    };

    fetchUserProfile();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    router.push("/login");
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-blue-500">
      <div className="absolute top-5 left-5 flex flex-col space-y-2">
        <Link href="/catalog" legacyBehavior>
          <a className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 flex items-center">
            <MagnifyingGlassIcon className="h-6 w-6" />
            <span className="ml-2">Search</span>
          </a>
        </Link>
        <Link href="/calendar" legacyBehavior>
          <a className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 flex items-center">
            <CalendarIcon className="h-6 w-6" />
            <span className="ml-2">Calendar</span>
          </a>
        </Link>
      </div>
      <h1 className="mb-5 text-2xl font-bold text-white">Profile</h1>
      <div className="flex flex-col items-center justify-center p-5 rounded bg-white shadow-lg">
        <p className="mb-3 text-gray-800">User: <span className="font-semibold">{user.username}</span></p>
        <Link href="/checked-out-items" legacyBehavior>
          <a className="mb-3 p-2 bg-blue-500 text-white rounded hover:bg-blue-700 flex items-center">
            <ClipboardIcon className="h-6 w-6" />
            <span className="ml-2">Checked Out Items</span>
          </a>
        </Link>
        <button
          onClick={handleLogout}
          className="p-2 bg-red-500 text-white rounded hover:bg-red-700 transition flex items-center"
        >
          <ArrowRightOnRectangleIcon className="h-6 w-6 mr-2" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
