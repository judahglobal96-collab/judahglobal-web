import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-24">
      <div className="mx-auto max-w-md rounded-2xl border border-gray-200 p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-[#0E1B34]">Sign Up</h1>

        <form className="mt-8 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#0E1B34]"
            />

            <input
              type="text"
              placeholder="Last Name"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#0E1B34]"
            />
          </div>

          <input
            type="text"
            placeholder="DOB (MM/YY)"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#0E1B34]"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="City"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#0E1B34]"
            />

            <input
              type="text"
              placeholder="State"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#0E1B34]"
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#0E1B34]"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#0E1B34]"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#0E1B34]"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-[#0E1B34] px-4 py-3 font-semibold text-white transition hover:bg-[#13254a]"
          >
            Create Account
          </button>
        </form>

        <p className="mt-4 text-center text-xs leading-5 text-gray-500">
          By creating an account, you agree to Judah Global&apos;s{" "}
          <Link
            href="/resources/terms"
            className="text-yellow-600 hover:underline"
          >
            Terms of Service
          </Link>
          ,{" "}
          <Link
            href="/resources/privacy"
            className="text-yellow-600 hover:underline"
          >
            Privacy Policy
          </Link>
          , and{" "}
          <Link
            href="/resources/community-standards"
            className="text-yellow-600 hover:underline"
          >
            Community Standards
          </Link>
          .
        </p>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-[#0E1B34] hover:underline"
          >
            Log In
          </Link>
        </p>
      </div>
    </main>
  );
}