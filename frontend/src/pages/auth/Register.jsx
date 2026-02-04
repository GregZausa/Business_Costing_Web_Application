import React, { useState } from "react";
import FloatingLabelInput from "../../components/FloatingLabelInput";
import { Lock, Mail } from "lucide-react";
import toast from "react-hot-toast";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!email || !password || !lastName || !firstName || !confirmPassword) {
      toast.error("Please fill up all required fields!");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Password do not match!");
      return;
    }

    try {
      setIsLoading(true);

      const res = await fetch("http://localhost:5001/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, lastName, firstName }),
      });
      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Registration Failed");
        return;
      }
      localStorage.setItem("token", data.token);
      toast.success("User Account Registered Successfully!");
      navigate("/login");
    } catch {
      toast.error("Something went wrong, please try again later.");
    } finally {
      setIsLoading(false);
    }
  };
  const handleCancel = () => {
    navigate("/login");
  };
  return (
    <div className="relative flex justify-center items-center w-full min-h-screen">
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
            onClick={handleSubmit}
            disabled={isLoading}
            className={"w-xs"}
            backgroundAndText={"bg-blue-700 hover:bg-blue-500 text-white"}
          />
          <Button
            label={"Cancel"}
            onClick={handleCancel}
            disabled={isLoading}
            className={"w-xs"}
            backgroundAndText={
              "bg-white hover:bg-gray-400 text-black border-none"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
