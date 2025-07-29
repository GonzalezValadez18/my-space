import { useRef } from "react";

function TableRank({ rows, columns }) {
  const handleMouseMove = (e, rowRef) => {
    const rect = rowRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - 125;
    const y = e.clientY - rect.top - 125;

    rowRef.current.style.setProperty("--x", `${x}px`);
    rowRef.current.style.setProperty("--y", `${y}px`);

    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;
    const edgeThreshold = 20;

    let glow = "";

    if (relY < edgeThreshold) {
      glow = "0 -2px 15px rgba(0,255,255,0.7)";
    } else if (rect.height - relY < edgeThreshold) {
      glow = "0 2px 15px rgba(0,255,255,0.7)";
    } else if (relX < edgeThreshold) {
      glow = "-2px 0 15px rgba(0,255,255,0.7)";
    } else if (rect.width - relX < edgeThreshold) {
      glow = "2px 0 15px rgba(0,255,255,0.7)";
    } else {
      glow = "none";
    }

    rowRef.current.style.setProperty("--glow", glow);
  };

  return (
    <div className="flex flex-col items-center w-full py-10">
      <div className="flex flex-col w-full max-w-5xl px-2 sm:px-4">
        {/* Vista tipo tarjetas en móviles */}
        <div className="block sm:hidden w-full space-y-4">
          {rows.map((row, idx) => {
            const rowRef = useRef(null);
            return (
              <div
                key={idx}
                ref={rowRef}
                onMouseMove={(e) => handleMouseMove(e, rowRef)}
                className="neon-row transition-all duration-300 bg-gray-800/60 rounded-lg p-4 flex flex-col items-center shadow-md"
              >
                <img className="h-16 w-16 mb-2" src={row.logo} alt={row.alt} />
                <div className="w-full flex flex-col gap-1 text-center">
                  <div>
                    <span className=" text-cyan-400">
                      Dominio:{" "}
                    </span>
                    {row.tipo}
                  </div>
                  <div>
                    <span className=" text-cyan-400">Habilidades: </span>
                    {row.area}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Vista tabla en pantallas medianas y grandes */}
        <div className="hidden sm:block">
          <div className="py-2 align-middle inline-block min-w-full">
            <div className="shadow-lg sm:rounded-lg overflow-hidden">
              <table className="min-w-full w-full text-sm text-gray-300">
                <thead className="bg-gray-800/60 text-xs sm:text-sm uppercase font-medium text-white-200">
                  <tr>
                    {columns.map((col, idx) => (
                      <th
                        key={idx}
                        style={
                          idx === 0
                            ? {
                                width: "100px",
                                padding: 0,
                                border: "none",
                                height: "0px",
                                lineHeight: "0",
                                fontSize: "0",
                              }
                            : {}
                        }
                        className="px-2 sm:px-6 py-4 text-center whitespace-nowrap align-middle"
                      >
                        {col === "" ? (
                          <span className="sr-only">Logo</span>
                        ) : (
                          col
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-gray-800/40">
                  {rows.map((row, idx) => {
                    const rowRef = useRef(null);
                    return (
                      <tr
                        key={idx}
                        ref={rowRef}
                        onMouseMove={(e) => handleMouseMove(e, rowRef)}
                        className="neon-row transition-all duration-300"
                      >
                        <td
                          className="px-2 sm:px-6 py-4 text-center align-middle  rounded-l-xl"
                          style={{ width: "100px" }}
                        >
                          <img
                            className="h-14 w-14 object-contain m-auto"
                            src={row.logo}
                            alt={row.alt}
                          />
                        </td>

                        <td className="px-2 sm:px-6 py-4 text-center align-middle font-semibold text-white">
                          {row.tipo}
                        </td>

                        <td className="px-2 sm:px-6 py-4 text-center align-middle text-white">
                          {row.area}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableRank;
