import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-24">
      <div className="mx-auto max-w-md rounded-2xl border border-gray-200 p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-[#0E1B34]">Log In</h1>

        <form className="mt-8 space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-[#0E1B34] px-4 py-3 font-semibold text-white"
          >
            Log In
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-gray-500">
          By continuing, you agree to Judah Global&apos;s{" "}
          <Link href="/resources/terms" className="text-yellow-600 hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/resources/privacy" className="text-yellow-600 hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </main>
  );
}