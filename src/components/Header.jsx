import pokeballImg from "../assets/pokeball.svg";

export default function Header() {
  return (
    <div className="flex items-center justify-center gap-5 bg-[#DC0A2D] h-20">
      <img src={pokeballImg} alt="pokeball" className="h-10" />
      <h1 className="text-white text-2xl">POKÉDEX</h1>
    </div>
  );
}
