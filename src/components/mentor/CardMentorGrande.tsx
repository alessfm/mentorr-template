import SkillBadge from "../badges/SkillBadge";
import Star from "../Star";

function CardMentorGrande(props: { mentor: any }) {
  return (
    <div className="flex flex-col md:flex-row p-6 border rounded-lg hover:shadow">
      <div className="flex-none mb-10 relative">
        <img className="w-48" src={props.mentor.photo} alt="Foto do mentor" />
      </div>
      <div className="flex flex-col gap-6 pl-6">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-2xl md:text-3xl">
            {props.mentor.name}
          </h1>
          <h3 className="text-lg text-gray-600">{props.mentor.role}</h3>
          <div className="flex gap-1 items-center">
            <div className="flex-none w-24 relative">
              <Star rating={props.mentor.rating} is_small={false} />
            </div>
            <p className="text-sm">
              <strong>{props.mentor.rating}</strong>{" "}
              <span className="font-light">(1231 avaliações)</span>
            </p>
          </div>
        </div>

        <p className="text-gray-800">{props.mentor.descricao}</p>

        <SkillBadge skills={props.mentor.skills} is_small={true} />

        <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          <h2 className="font-black text-xl md:text-2xl">
            R$ {props.mentor.valor}/mês
          </h2>
          <button className="bg-blue-600 text-white font-semibold rounded-lg px-6 py-2 h-12 hover:bg-blue-800">
            Ver perfil completo
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardMentorGrande;
