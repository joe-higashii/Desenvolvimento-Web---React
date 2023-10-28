import { useState } from "react";
import InputMask from "react-input-mask";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import api from "../../api/api.ts";

export default function FormCadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const navigate = useNavigate();

  const [apiMessage, setApiMessage] = useState("");

  const watchPassword = watch("password");

  async function onSubmit(data) {
    try {
      const response = await api.post("/contas", {
        name: data.nome,
        cpf: data.cpf.replaceAll(".", "").replaceAll("-", ""),
        bornDate: "2004-07-05",
        phoneNumber: data.telefone,
        email: data.email,
        password: data.password,
      });

      setApiMessage(response.data.message);
      navigate("/");
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
      setApiMessage(error.response.data.message);
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

  function handleCheckConfirmPassword(value) {
    return watchPassword === value;
  }

  return (
    <div className="flex flex-col items-center w-full mt-3">
      <div className="w-full max-w-md p-4 bg-white rounded shadow-md">
        <div className="mb-3">
          <label htmlFor="nome" className="text-sm text-gray-600">
            Nome
          </label>
          <input
            id="nome"
            type="text"
            className={`w-full h-10 px-3 mt-1 border rounded-md focus:outline-none ${
              errors.nome && "border-red-500"
            }`}
            {...register("nome", {
              required: true,
            })}
          />
          {errors.nome?.type === "required" && (
            <span className="text-red-500">O campo nome é obrigatório!</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="text-sm text-gray-600">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            className={`w-full h-10 px-3 mt-1 border rounded-md focus:outline-none ${
              errors.email && "border-red-500"
            }`}
            {...register("email", {
              required: true,
              minLength: 6,
            })}
          />
          {(errors.email?.type === "required" && (
            <span className="text-red-500">
              O campo email é obrigatório!
            </span>
          )) ||
            (errors.email?.type === "minLength" && (
              <span className="text-red-500">
                O campo email deve conter pelo menos 6 caracteres!
              </span>
            ))}
        </div>
        <div className="mb-3">
          <label htmlFor="telefone" className="text-sm text-gray-600">
            Telefone
          </label>
          <InputMask
            id="telefone"
            mask="(99) 9 9999 9999"
            type="text"
            className={`w-full h-10 px-3 mt-1 border rounded-md focus:outline-none ${
              errors.telefone && "border-red-500"
            }`}
            {...register("telefone", {
              required: true,
              minLength: 11,
            })}
          />
          {(errors.telefone?.type === "required" && (
            <span className="text-red-500">
              O campo telefone é obrigatório!
            </span>
          )) ||
            (errors.telefone?.type === "minLength" && (
              <span className="text-red-500">
                O campo telefone deve conter 11 dígitos!
              </span>
            ))}
        </div>
        <div className="mb-3">
          <label htmlFor="cpf" className="text-sm text-gray-600">
            CPF
          </label>
          <InputMask
            id="cpf"
            mask="999.999.999-99"
            type="text"
            className={`w-full h-10 px-3 mt-1 border rounded-md focus:outline-none ${
              errors.cpf && "border-red-500"
            }`}
            {...register("cpf", {
              required: true,
              minLength: 11,
            })}
          />
          {(errors.cpf?.type === "required" && (
            <span className="text-red-500">
              O campo CPF é obrigatório!
            </span>
          )) ||
            (errors.cpf?.type === "minLength" && (
              <span className="text-red-500">
                O campo CPF deve conter 11 dígitos!
              </span>
            ))}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="text-sm text-gray-600">
            Password
          </label>
          <input
            id="password"
            type="password"
            className={`w-full h-10 px-3 mt-1 border rounded-md focus:outline-none ${
              errors.password && "border-red-500"
            }`}
            {...register("password", {
              required: true,
              minLength: 8,
            })}
          />
          {(errors.password?.type === "required" && (
            <span className="text-red-500">
              O campo password é obrigatório!
            </span>
          )) ||
            (errors.password?.type === "minLength" && (
              <span className="text-red-500">
                O campo password deve conter pelo menos 8 caracteres!
              </span>
            ))}
        </div>
        <div className="mb-3">
          <label htmlFor="confirm-password" className="text-sm text-gray-600">
            Confirm Password
          </label>
          <input
            id="confirm-password"
            type="password"
            className={`w-full h-10 px-3 mt-1 border rounded-md focus:outline-none ${
              errors.confirmPassword && "border-red-500"
            }`}
            {...register("confirmPassword", {
              required: true,
              minLength: 8,
              validate: (value) => handleCheckConfirmPassword(value),
            })}
          />
          {errors.confirmPassword?.type === "validate" && (
            <span className="text-red-500">
              O campo 'Confirmar Senha' e 'Senha' devem ser iguais!
            </span>
          )}
        </div>
        <button
          onClick={() => handleSubmit(onSubmit)()}
          className="w-full h-10 px-4 mt-2 text-white bg-purple-700 rounded-md focus:outline-none hover:bg-purple-600"
        >
          Cadastrar
        </button>
      </div>
      <Link to="/" className="mt-3 text-purple-700">
        Já tem cadastro? Clique aqui!
      </Link>
    </div>
  );
}
