import React, { useState } from "react";
import FloatingLabelInput from "../../components/FloatingLabelInput";
import { Lock, Mail } from "lucide-react";
import Button from "../../components/Button";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    if(!email || !password) {
      toast.error("Email and Password are required!");
      return;
    }

    try {
      setIsLoading(true);

      const res = await fetch("http://localhost:5001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password}),
      });

      const data = await res.json();
      
      if(!res.ok){
        toast.error(data.message || "Login Failed!");
        return;
      }
      localStorage.setItem("token", data.token);

      toast.success("Logged In Successfully!");

    }
    catch{
      toast.error("Something went wrong, please try again later");
    }
    finally{
      setIsLoading(false);
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };
  return (
    <div className="relative flex justify-center items-center w-full min-h-screen">
      <div className="space-y-8 border backdrop-blur-xl bg-white/10 border-white/5 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out text-black overflow-hidden ">
        <div className="text-center">
          <h1 className="font-bold text-2xl">Log In</h1>
        </div>
        <div className="flex items-center space-x-2.5">
          <Mail className="text-gray-500 " />
          <FloatingLabelInput
            type={"text"}
            label={"Email"}
            value={email}
            onChange={setEmail}
            className={"w-sm"}
            required
          />
        </div>
        <div className="flex items-center space-x-2.5">
          <Lock className="text-gray-500 " />
          <FloatingLabelInput
            type={"password"}
            label={"Password"}
            value={password}
            onChange={setPassword}
            className={"w-sm"}
            required
          />
        </div>
        <div className="flex items-center justify-center space-x-2.5">
          <Button
            label={"Login"}
            onClick={handleLogin}
            disabled={isLoading}
            className={"w-45"}
            backgroundAndText={"bg-blue-700 hover:bg-blue-500 text-white"}
          />
          <Button
            label={"Register"}
            onClick={handleRegister}
            disabled={isLoading}
            className={"w-45"}
            backgroundAndText={
              "bg-white hover:bg-gray-400 text-black border-none"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
