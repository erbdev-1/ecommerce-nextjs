"use client";

import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import AuthContainer from "../containers/AuthContainer";
import Heading from "../general/Heading";
import Input from "../general/Input";
import Button from "../general/Button";
import Link from "next/link";

const LoginClient = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>();
  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);
  console.log(watch("example"));
  return (
    <AuthContainer>
      <div className="w-full md:w-[500px] p-3 shadow-lg rounded-md">
        <Heading text="Login" center />

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
        <Button text="Sign in" onClick={handleSubmit(onSubmit)} />
        <div className="text-center my-2 text-sm font-bold">
          New customer?{" "}
          <Link href="/register" className="underline  text-red-500">
            Click here!
          </Link>
        </div>
        <div className="text-center font-bold text-lg my-2">OR</div>
        <Button
          text="Sign in with Google"
          outline
          icon={FaGoogle}
          onClick={() => {}}
        />
      </div>
    </AuthContainer>
  );
};

export default LoginClient;
