import Logo from "../../components/Logo/Logo";

export default function CadastroPage() {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-opacity-50 to-opacity-50 via-lightgray bg-cover bg-center">
      <Logo />
      <div className="box bg-white rounded-lg shadow-lg p-8 mt-4 w-96 h-4/5 flex flex-col items-center">
        <h2 className="text-purple-600 text-2xl font-medium mb-6">Cadastre-se</h2>
        <FormCadastro />
      </div>
    </section>
  );
}
