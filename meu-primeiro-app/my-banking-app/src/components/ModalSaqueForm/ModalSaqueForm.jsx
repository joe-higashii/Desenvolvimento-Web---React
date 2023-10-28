import { useForm } from "react-hook-form";
import api from "../../api/api";
import { toast } from "react-toastify";

export default function ModalSaqueForm() {
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

      const response = await api.post("/transacoes/sacar", {
        accountNumber: conta.accountNumber,
        value: Number(data.valor.replace(",", "").replace(".", "")),
        type: data.categoria,
        discription: data.descricao,
        password: data.password,
      });

      setTimeout(() => {
        window.location.reload();
      }, 2000);
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
      //console
      console.log(error.response.data.message);

      // send toast to use
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
          <label htmlFor="valor" className="text-gray-600 text-sm">
            Valor (ex: 999,00 "novecentros e noventa e nove reais")
          </label>
          <input
            className={`input-field ${errors?.valor && "border-red-500"}`}
            id="valor"
            type="text"
            {...register("valor", {
              required: true,
            })}
          />
          {errors?.valor?.type === "required" && (
            <span className="text-red-500 text-sm">O campo Valor é obrigatório!</span>
          )}
        </div>
        <div className="flex flex-col gap-1.5 relative">
          <label htmlFor="categoria" className="text-gray-600 text-sm">
            Categoria
          </label>
          <select
            className={`input-field ${errors?.categoria && "border-red-500"}`}
            id="categoria"
            {...register("categoria", {
              required: true,
            })}
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Assinaturas e Serviços">Assinaturas e Serviços</option>
            <option value="Casa">Casa</option>
            <option value="Compras">Compras</option>
            <option value="Cuidados pessoais">Cuidados pessoais</option>
            <option value="Educação">Educação</option>
            <option value="Contas">Contas</option>
            <option value="Farmacia">Farmacia</option>
            <option value="Lazer">Lazer</option>
          </select>
          {errors?.categoria?.type === "required" && (
            <span className="text-red-500 text-sm">O campo Categoria é obrigatório!</span>
          )}
        </div>
        <div className="flex flex-col gap-1.5 relative">
          <label htmlFor="descricao" className="text-gray-600 text-sm">
            Descrição
          </label>
          <input
            className={`input-field ${errors?.descricao && "border-red-500"}`}
            id="descricao"
            type="text"
            {...register("descricao")}
          />
        </div>
        <div className="flex flex-col gap-1.5 relative">
          <label htmlFor="password" className="text-gray-600 text-sm">
            Password
          </label>
          <input
            className={`input-field ${errors?.password && "border-red-500"}`}
            id="password"
            type="password"
            {...register("password", {
              required: true,
            })}
          />
          {errors?.password?.type === "required" && (
            <span className="text-red-500 text-sm">O campo Password é obrigatório!</span>
          )}
        </div>
        <button
          onClick={handleSubmit(onSubmit)}
          className="w-50 mx-auto btn-primary"
        >
          Sacar
        </button>
      </div>
    </div>
  );
}
