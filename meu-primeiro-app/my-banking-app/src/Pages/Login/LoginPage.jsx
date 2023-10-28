import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";
import FormLogin from "../../components/FormLogin/FormLogin";

export default function LoginPage() {
  const [openLoginModal, setOpenLoginModal] = useState(true);

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-opacity-50 to-opacity-50 via-lightgray bg-cover bg-center p-6 md:p-16">
      <Logo setOpenLoginModal={setOpenLoginModal} page={true} />
      <div className="flex flex-col md:flex-row items-center justify-around w-full md:w-3/4 lg:w-2/3 xl:w-1/2 bg-white rounded-lg shadow-lg p-8 md:p-12 mt-6 md:mt-0">
        <div className="md:w-2/5 text-center md:text-left">
          <h1 className="text-3xl font-semibold text-purple-600 mb-4">
            Controle suas <span className="text-blue-600">finanças</span>, sem planilhas chatas.
          </h1>
          <p className="text-gray-600 mb-6">
            Organizar suas finanças nunca foi tão fácil. Com o DINDIN, você tem tudo em um único lugar e a um clique de distância.
          </p>
          <Link to="/cadastro">
            <Button text="Cadastre-se" width="60%" />
          </Link>
        </div>
        {openLoginModal && (
          <div className="md:w-2/5 text-center">
            <h2 className="text-2xl font-medium text-purple-600 mb-6">Login</h2>
            <FormLogin />
          </div>
        )}
      </div>
    </section>
  );
}
