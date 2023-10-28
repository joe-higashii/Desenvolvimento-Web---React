import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../api/api.jsx";

export default function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  async function onSubmit(data) {
    try {
      const response = await api.post("/login", {
        login: data.emailcpf,
        password: data.password,
      });

      localStorage.setItem("userLogin", data.emailcpf);
      localStorage.setItem("userPassword", data.password);

      navigate("./main");

      return toast.success(response.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.error(error);

      return toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <div className="form flex flex-col gap-6">
        <div className="relative">
          <label htmlFor="email" className="text-sm text-gray-600">
            E-mail ou Cpf
          </label>
          <input
            id="email"
            type="email"
            className={`w-full h-10 px-3 mt-1 border rounded-md focus:outline-none ${
              errors?.emailcpf && "border-red-500"
            }`}
            {...register("emailcpf", {
              required: true,
            })}
          />
          {errors?.emailcpf?.type === "required" && (
            <span className="absolute left-0 bottom-[-1.4rem] text-red-500">
              O campo email ou cpf é obrigatório!
            </span>
          )}
        </div>
        <div className="relative">
          <label htmlFor="password" className="text-sm text-gray-600">
            Password
          </label>
          <input
            id="password"
            type="password"
            className={`w-full h-10 px-3 mt-1 border rounded-md focus:outline-none ${
              errors?.password && "border-red-500"
            }`}
            {...register("password", {
              required: true,
            })}
          />
          {errors?.password?.type === "required" && (
            <span className="absolute left-0 bottom-[-1.4rem] text-red-500">
              O campo password é obrigatório!
            </span>
          )}
        </div>
        <button
          onClick={handleSubmit(onSubmit)}
          className="w-full h-12 bg-purple-700 text-white rounded-md focus:outline-none hover:bg-purple-600"
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
