import React from "react";
import FloatingLabelInput from "../ui/FloatingLabelInput";
import Button from "../ui/Button";

const RegisterForm = ({
  lastName,
  setLastName,
  firstName,
  setFirstName,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  onSubmit,
  onCancel,
  isLoading,
}) => {
  return (
    <div className="space-y-8 border backdrop-blur-xl bg-white/10 border-white/5 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out text-black overflow-hidden ">
      <div className="text-center">
        <h1 className="font-bold text-2xl">Sign Up</h1>
      </div>
      <div className="flex items-center space-x-2.5">
        <FloatingLabelInput
          type={"text"}
          label={"Last Name"}
          value={lastName}
          onChange={setLastName}
          className={"w-xs"}
        />
        <FloatingLabelInput
          type={"text"}
          label={"First Name"}
          value={firstName}
          onChange={setFirstName}
          className={"w-xs"}
        />
      </div>
      <div className="flex items-center space-x-2.5">
        <FloatingLabelInput
          type={"text"}
          label={"Email"}
          value={email}
          onChange={setEmail}
          className={"w-xs"}
        />
      </div>
      <div className="flex items-center space-x-2.5">
        <FloatingLabelInput
          type={"password"}
          label={"Set Password"}
          value={password}
          onChange={setPassword}
          className={"w-xs"}
        />
        <FloatingLabelInput
          type={"password"}
          label={"Confirm Password"}
          value={confirmPassword}
          onChange={setConfirmPassword}
          className={"w-xs"}
        />
      </div>
      <div className="flex items-center space-x-2.5">
        <Button
          label={"Confirm"}
          onClick={onSubmit}
          disabled={isLoading}
          className={"w-xs"}
          backgroundAndText={"bg-blue-700 hover:bg-blue-500 text-white"}
        />
        <Button
          label={"Cancel"}
          onClick={onCancel}
          disabled={isLoading}
          className={"w-xs"}
          backgroundAndText={
            "bg-white hover:bg-gray-400 text-black border-none"
          }
        />
      </div>
    </div>
  );
};

export default RegisterForm;
