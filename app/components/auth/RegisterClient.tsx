"use client";

import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import AuthContainer from "../containers/AuthContainer";
import Heading from "../general/Heading";
import Input from "../general/Input";
import Button from "../general/Button";
import Link from "next/link";
import toast from "react-hot-toast";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const RegisterClient = () => {
    const router = useRouter(); 
   
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    axios
      .post("/api/register", data)
      .then(() => { toast.success("User created!")
       signIn("credentials", {
        email: data.email,
        password: data.password,
       redirect: false,
      }).then((callback)=>{
        if(callback?.ok){
          router.push('/cart')
          router.reload();
          toast.success("Logged in!")
        }

      if(callback?.error){
        toast.error("Failed to login!")}   
       })
      });
  }

  };

  return (
    <AuthContainer>
      <div className="w-full md:w-[500px] p-3 shadow-lg rounded-md">
        <Heading text="Register" center />
        <Input
          placeholder="Name"
          type="text"
          id="name"
          register={register}
          errors={errors}
          required
        />
        <Input
          placeholder="E-mail"
          type="email"
          id="email"
          register={register}
          errors={errors}
          required
        />
        <Input
          placeholder="Password"
          type="password"
          id="password"
          register={register}
          errors={errors}
          required
        />
        <Button text="Sign up" onClick={handleSubmit(onSubmit)} />
        <div className="text-center my-2 text-sm font-bold">
          Already have an account?{" "}
          <Link href="/login" className="underline  text-red-500">
            Sign in!
          </Link>
        </div>
        <div className="text-center font-bold text-lg my-2">OR</div>
        <Button
          text="Register with Google"
          outline
          icon={FaGoogle}
          onClick={() => {}}
        />
      </div>
    </AuthContainer>
  );
};

export default RegisterClient;
