import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import Pricing from "../components/layouts/Pricing";
import CardMentorGrande from "../components/mentor/CardMentorGrande";

import developers from "../mocks/tutores.json";

function Busca() {
  return (
    <>
      <Header />
      <section className="flex flex-col md:flex-row">
        <div className="flex flex-col gap-12 p-8 pt-12 w-full md:w-1/4 border-r-2">
          <input
            type="text"
            className="font-light border p-2 rounded-lg w-full"
            placeholder="Busque por habilidades, cargos..."
          />

          <div className="flex flex-col gap-4 hidden md:flex">
            <div className="flex flex-col gap-1">
              <label className="font-bold text-lg">Habilidades</label>
              <input
                type="text"
                className="font-light border p-2 rounded-lg w-full"
                placeholder="Busque..."
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <input type="checkbox" checked />
                <label className="font-light">UX/UI Design</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label className="font-light">Front-end</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" checked />
                <label className="font-light">Back-end</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" checked />
                <label className="font-light">DevOps</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label className="font-light">Agile</label>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 hidden md:flex">
            <div className="flex flex-col gap-1">
              <label className="font-bold text-lg">Cargos</label>
              <input
                type="text"
                className="font-light border p-2 rounded-lg w-full"
                placeholder="Busque..."
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label className="font-light">CEO</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label className="font-light">CTO</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label className="font-light">Gestor</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" checked />
                <label className="font-light">Consultor</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" checked />
                <label className="font-light">Professor</label>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 hidden md:flex">
            <div className="flex flex-col gap-1">
              <label className="font-bold text-lg">Empresas</label>
              <input
                type="text"
                className="font-light border p-2 rounded-lg w-full"
                placeholder="Busque..."
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label className="font-light">Google</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label className="font-light">Amazon</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label className="font-light">Mercado Livre</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label className="font-light">Instagram</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label className="font-light">Delta Piscinas</label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 p-6 md:p-16 md:pt-12 w-full md:w-3/4">
          {developers.map((dev) => (
            <CardMentorGrande mentor={dev} />
          ))}
        </div>
      </section>
      <Pricing />
      <Footer />
    </>
  );
}

export default Busca;
