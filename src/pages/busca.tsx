import { useState } from "react";

import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import Pricing from "../components/layouts/Pricing";
import CardMentorGrande from "../components/mentor/CardMentorGrande";

import tutores from "../mocks/tutores.json";
import cargos_json from "../mocks/cargos.json";
import empresas_json from "../mocks/empresas.json";
import habilidades_json from "../mocks/habilidades.json";

function Formulario() {
  let [cargos, setCargos] = useState(cargos_json);
  let [empresas, setEmpresas] = useState(empresas_json);
  let [habilidades, setHabilidades] = useState(habilidades_json);

  return (
    <>
      <div className="flex flex-col gap-4 hidden md:flex">
        <div className="flex flex-col gap-1">
          <label className="font-bold text-lg">Habilidades</label>
          <input
            type="text"
            className="font-light border p-2 rounded-lg w-full"
            placeholder="Busque..."
            onChange={($event) => {
              const texto = $event.target.value;
              const filtro = habilidades_json.filter((h) =>
                h.nome.toLowerCase().includes(texto)
              );
              setHabilidades(filtro);
            }}
          />
        </div>

        <div className="flex flex-col gap-2">
          {habilidades.map((h, index) => {
            return (
              <div className="flex items-center gap-2" key={index}>
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 border rounded border-slate-300"
                />
                <label className="font-light">{h.nome}</label>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-4 hidden md:flex">
        <div className="flex flex-col gap-1">
          <label className="font-bold text-lg">Cargos</label>
          <input
            type="text"
            className="font-light border p-2 rounded-lg w-full"
            placeholder="Busque..."
            onChange={($event) => {
              const texto = $event.target.value;
              const filtro = cargos_json.filter((c) =>
                c.nome.toLowerCase().includes(texto)
              );
              setCargos(filtro);
            }}
          />
        </div>

        <div className="flex flex-col gap-2">
          {cargos.map((c, index) => {
            return (
              <div className="flex items-center gap-2" key={index}>
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 border rounded border-slate-300"
                />
                <label className="font-light">{c.nome}</label>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-4 hidden md:flex">
        <div className="flex flex-col gap-1">
          <label className="font-bold text-lg">Empresas</label>
          <input
            type="text"
            className="font-light border p-2 rounded-lg w-full"
            placeholder="Busque..."
            onChange={($event) => {
              const texto = $event.target.value;
              const filtro = empresas_json.filter((e) =>
                e.nome.toLowerCase().includes(texto)
              );
              setEmpresas(filtro);
            }}
          />
        </div>

        <div className="flex flex-col gap-2">
          {empresas.map((e, index) => {
            return (
              <div className="flex items-center gap-2" key={index}>
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 border rounded border-slate-300"
                />
                <label className="font-light">{e.nome}</label>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default function Busca() {
  return (
    <>
      <Header />

      <section className="flex flex-col md:flex-row">
        <div className="flex flex-col gap-12 p-8 pt-12 w-full md:w-1/4 border-r-2">
          <Formulario />
        </div>

        <div className="flex flex-col gap-8 p-6 md:p-16 md:pt-12 w-full md:w-3/4">
          {tutores.map((_) => (
            <CardMentorGrande mentor={_} />
          ))}
        </div>
      </section>

      <Pricing />
      <Footer />
    </>
  );
}
