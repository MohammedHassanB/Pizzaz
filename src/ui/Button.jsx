import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "duration-400 text-sm inline-block rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-1 disabled:cursor-not-allowed";
  const styles = {
    primary: base + " md:px-4 md:py-3 px-2 py-3",
    small: base + " px-3 py-2.5 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2 py-1 md:px-3 md:py-2 text-sm",
    secondary:
      "duration-400 text-sm inline-block rounded-full border-2 border-stone-200 font-semibold uppercase tracking-wide text-stone-800 transition-colors text-stone-400 focus:bg-stone-200 hover:bg-stone-300 hover:text-stone-800 focus:outline-none focus:ring focus:ring-yellow-200 focus:ring-offset-1 disabled:cursor-not-allowed md:px-5 md:py-4 px-2 py-2 ",
  };
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {" "}
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
