"use client";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react"; //This signIn function triggers the authorize function in the NextAuth configuration object
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [error, setError] = useState("");

  const onSubmit = handleSubmit(async (data) => {
    //This onSubmit variable stores a useForm function from react-hook-form and used in the form onSubmit event
    console.log(data);

    const res = await signIn("credentials", {
      //This replaces the fetch call, sending the data to the API route in /api/auth/[...nextauth]/route.js
      //This would be { body: JSON.stringify(data) } in a fetch call
      email: data.email,
      password: data.password,
      redirect: false,
    });

    console.log("RESPUESTA SignIn", res);
    if (res?.error) {
      setError(res.error);
      console.log("RES.ERROR: ", res.error);
    } else {
      router.push("/dashboard"); //router.push is used to redirect the user to another page by specifying the path
      // router.refresh();
    }
  });

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form onSubmit={onSubmit} className="w-1/4">
        {error && (
          <p className="bg-red-500 text-lg text-white p-3 rounded mb-2">
            {error}
          </p>
        )}

        <h1 className="text-slate-600 font-bold text-4xl mb-4">Login</h1>

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

        <span className="text-red-500 text-xs">
          <span className="text-red-500 text-xs">
            {errors.email && typeof errors.email.message === "string"
              ? errors.email.message
              : ""}
          </span>
        </span>

        <label htmlFor="password" className="text-slate-500 mb-2 block text-sm">
          Password:
        </label>
        <input
          type="password"
          {...register("password", {
            //This register function is provided by react-hook-form, it is used to register the input fields
            required: {
              value: true,
              message: "Password is required", //This message will be displayed if the password field is empty
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="******"
        />

        <span className="text-red-500 text-xs">
          {errors.password && typeof errors.password.message === "string"
            ? errors.password.message
            : ""}
        </span>

        <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2">
          Login
        </button>
        <Link href={"/"} className="flex items-center">
          <ArrowLeftIcon size={40} className="text-blue-500 cursor-pointer" />
          <span className="font-semibold">Inicio</span>
        </Link>
      </form>
    </div>
  );
}
export default LoginPage;
