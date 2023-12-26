// ccf
/* eslint-disable react/prop-types */
import Proptypes from "prop-types";
export const PrimerComponente = ({ titulo = "", sub = "" }) => {
  console.log(titulo);
  console.log(sub);
  return (
    <>
      <h3 className="text-red-800">{titulo}</h3>
      <h2 className="text-gray-200">{sub}</h2>
    </>
  );
};

PrimerComponente.Proptypes = {
  titulo: Proptypes.string.isRequired,
  sub: Proptypes.string.isRequired,
};
