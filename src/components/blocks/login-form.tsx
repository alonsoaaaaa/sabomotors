"use client";
import { set, useForm } from "react-hook-form";
// import { signIn } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

// import { NextRequest } from "next/server";

function LoginForm() {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const router = useRouter();
  const [error, setError] = useState("");

  const onSubmit = handleSubmit(async (data) => {
    // cookies.set("isAdmin", "true");
    if (
      data.email === "seminuevossabomotors@gmail.com" &&
      data.password === "seminuevossabomotors"
    ) {
      // set(headers, "isAdmin", true);
      router.push("/dashboard");
      router.refresh();
    } else {
      setError("Credenciales incorrectas");
    }

    // const res = await signIn("credentials", {
    //   email: data.email,
    //   password: data.password,
    //   redirect: false,
    // });

    // console.log(res)
    // if (res.error) {
    //   setError(res.error)
    // } else {
    //   router.push('/dashboard')
    //   router.refresh()
    // }
  });

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form onSubmit={onSubmit} className="w-1/4">
        <h1 className="text-slate-400 font-bold text-4xl mb-4">Login</h1>

        <label htmlFor="email" className="text-slate-500 mb-2 block text-sm">
          Email:
        </label>
        <input
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="user@email.com"
        />

        <label htmlFor="password" className="text-slate-500 mb-2 block text-sm">
          Password:
        </label>
        <input
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="******"
        />

        {error && (
          <p className="bg-red-500 text-lg text-white p-3 rounded mb-2">
            {error}
          </p>
        )}

        <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2">
          Login
        </button>
      </form>
    </div>
  );
}
// export async function getServerSideProps(context: any) {
//   context.res.setHeader("isAdmin", "true");

//   return {
//     props: {},
//   };
// }
export default LoginForm;
