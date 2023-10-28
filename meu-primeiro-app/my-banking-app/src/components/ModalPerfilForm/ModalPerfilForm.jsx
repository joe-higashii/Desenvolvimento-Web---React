import { useForm } from "react-hook-form";
import api from "../../api/api";
import { toast } from "react-toastify";

export default function ModalPerfilForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    try {
      const contas = await api.get("/contas?bank_password=Cubos123Bank");

      const conta = contas.data.rows.find((account) => {
        return (
          account.user.email === localStorage.getItem("userLogin") ||
          account.user.cpf === localStorage.getItem("userLogin")
        );
      });

      const response = await api.put(`/contas/${conta.accountNumber}/usuario`, {
        name: data.nome,
        cpf: data.cpf,
        bornDate: "2004-10-04",
        email: data.email,
        password: data.password,
        newPassword: data.newPassword,
      });

      setTimeout(() => {
        window.location.reload();
      }, 3000);

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
      console.log(error);

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
    <div className="w-90">
      <div className="flex flex-col gap-6 mt-6">
        <div className="flex flex-col gap-1.5 relative">
          <label htmlFor="nome" className="text-gray-600 text-sm">
            Nome ou Novo Nome
          </label>
          <input
            className={`input-field ${errors.nome && "border-red-500"}`}
            id="nome"
            type="text"
            {...register("nome", {
              required: true,
            })}
          />
          {errors.nome?.type === "required" && (
            <span className="text-red-500 text-sm">O campo Nome é obrigatório!</span>
          )}
        </div>
        <div className="flex flex-col gap-1.5 relative">
          <label htmlFor="email" className="text-gray-600 text-sm">
            E-mail ou Novo E-mail
          </label>
          <input
            className={`input-field ${errors.email && "border-red-500"}`}
            id="email"
            type="email"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email?.type === "required" && (
            <span className="text-red-500 text-sm">O campo Email é obrigatório!</span>
          )}
        </div>
        <div className="flex flex-col gap-1.5 relative">
          <label htmlFor="cpf" className="text-gray-600 text-sm">
            Cpf Atual (imutável)
          </label>
          <input
            className={`input-field ${errors.cpf && "border-red-500"}`}
            id="cpf"
            type="text"
            {...register("cpf", {
              required: true,
            })}
          />
          {errors.cpf?.type === "required" && (
            <span className="text-red-500 text-sm">O campo CPF é obrigatório!</span>
          )}
        </div>
        <div className="flex flex-col gap-1.5 relative">
          <label htmlFor="password" className="text-gray-600 text-sm">
            Old Password
          </label>
          <input
            className={`input-field ${errors.password && "border-red-500"}`}
            id="password"
            type="password"
            {...register("password", {
              required: true,
            })}
          />
          {errors.password?.type === "required" && (
            <span className="text-red-500 text-sm">O campo Password é obrigatório!</span>
          )}
        </div>
        <div className="flex flex-col gap-1.5 relative">
          <label htmlFor="newPassword" className="text-gray-600 text-sm">
            New Password
          </label>
          <input
            className={`input-field ${errors.newPassword && "border-red-500"}`}
            id="newPassword"
            type="password"
            {...register("newPassword", {
              required: true,
            })}
          />
          {errors.newPassword?.type === "required" && (
            <span className="text-red-500 text-sm">O campo New Password é obrigatório!</span>
          )}
        </div>
        <button
          onClick={handleSubmit(onSubmit)}
          className="w-50 mx-auto btn-primary"
        >
          Editar
        </button>
      </div>
    </div>
  );
}
