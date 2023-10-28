import logo from "../../assets/Group.svg";

export default function Logo(props) {
  const { setOpenLoginModal, page } = props;

  return (
    <div className="flex justify-between w-80">
      <div className="flex items-center space-x-2 w-36">
        <img src={logo} alt="Logo" className="h-10" />
        <h1 className="text-white text-2xl font-bold">Dindin</h1>
      </div>
      {page ? (
        <button
          onClick={() => setOpenLoginModal((prev) => !prev)}
          className="mobile-button"
        >
          Sign In
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}
