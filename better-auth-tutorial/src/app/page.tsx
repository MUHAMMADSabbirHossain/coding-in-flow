"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex gap-4">
          <button
            onClick={() => router.push("/sign-up")}
            className="bg-white text-black font-medium px-6 py-2 rounded-md hover:bg-gray-200"
          >
            Sign Up
          </button>
          <button
            onClick={() => router.push("/sign-in")}
            className="border border-white text-white font-medium px-6 py-2 rounded-md hover:bg-neutral-800"
          >
            Sign In
          </button>
        </div>
      </main>
    </div>
  );
}
