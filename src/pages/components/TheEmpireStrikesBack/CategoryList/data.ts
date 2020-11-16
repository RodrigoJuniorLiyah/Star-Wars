/* A New Hope */
import C3PO from "../../../../assets/images/characters/imagesCharacter/C-3PO.jpg";
import DarthVader from "../../../../assets/images/characters/imagesCharacter/DarthVader.jpg";
import Chewbacca from "../../../../assets/images/characters/imagesCharacter/Chewbacca.jpg";
import HanSolo from "../../../../assets/images/characters/imagesCharacter/HanSolo.jpg";
import LeiaOrgana from "../../../../assets/images/characters/imagesCharacter/LeiaOrgana.jpg";
import LukeANH from "../../../../assets/images/characters/imagesCharacter/LukeANH.jpg";
import ObiWanKenobi from "../../../../assets/images/characters/imagesCharacter/Obi-WanKenobi.jpg";
import R2D2 from "../../../../assets/images/characters/imagesCharacter/R2D2.jpg";
import Bossk from "../../../../assets/images/characters/imagesCharacterTheEmpireStrikesBack/Bossk.png";
import LandoCalrissian from "../../../../assets/images/characters/imagesCharacterTheEmpireStrikesBack/LandoCalrissian.jpg";
import Lobot from "../../../../assets/images/characters/imagesCharacterTheEmpireStrikesBack/Lobot.jpg";
import BobaFett from "../../../../assets/images/characters/imagesCharacterReturnOfTheJedi/BobaFett.png";

/* Planets */
import OrdMantell from "../../../../assets/images/planets/planetsTheEmpireStrikesBack/OrdMantell.png";
import Bespin from "../../../../assets/images/planets/planetsTheEmpireStrikesBack/Bespin.png";
import Dagobah from "../../../../assets/images/planets/planetsTheEmpireStrikesBack/Dagobah.jpg";
import Hoth from "../../../../assets/images/planets/planetsTheEmpireStrikesBack/Hoth.png";

/* Starships */
import MillenniumFalcon from "../../../../assets/images/starships/MillenniumFalcon.jpg";
import StarDestroyer from "../../../../assets/images/starships/StarDestroyer.jpg";
import Xwing from "../../../../assets/images/starships/X-wing.png";
import Ywing from "../../../../assets/images/starshipsTheEmpireStrikesBack/Ywing.jpg";
import Executor from "../../../../assets/images/starshipsReturnOfTheJedi/Executor.png";

/* vehicles */
import TIELNStarfighter from "../../../../assets/images/vehicles/vehiclesReturnOfTheJedi/TIELNStarfighter.jpg";
import Snowspeeder from "../../../../assets/images/vehicles/Snowspeeder.png";
import TIEBomber from "../../../../assets/images/vehicles/vehiclesReturnOfTheJedi/TIEBomber.png";

const aNewHope = {
  characters: [
    {
      name: "Lando Calrissian",
      source: LandoCalrissian,
      height: "177",
      mass: "79",
      birth_year: "31BBY",
    },
    {
      name: "Boba Fett",
      source: BobaFett,
      height: "183",
      mass: "78.2",
      birth_year: "31.5BBY",
    },
    {
      name: "Lobot",
      source: Lobot,
      height: "175",
      mass: "79",
      birth_year: "31BBY",
    },
    {
      name: "C3PO",
      source: C3PO,
      height: "172",
      mass: "77",
      birth_year: "19BBY",
    },
    {
      name: "Bossk",
      source: Bossk,
      height: "190",
      mass: "113",
      birth_year: "53BBY",
    },
    {
      name: "Darth Vader",
      source: DarthVader,
      height: "202",
      mass: "136",
      birth_year: "41.9BBY",
    },
    {
      name: "Chewbacca",
      source: Chewbacca,
      height: "228",
      mass: "112",
      birth_year: "19BBY",
    },
    {
      name: "Han Solo",
      source: HanSolo,
      height: "180",
      mass: "80",
      birth_year: "29BBY",
    },
    {
      name: "Leia Organa",
      source: LeiaOrgana,
      height: "150",
      mass: "49",
      birth_year: "19BBY",
    },
    {
      name: "Luke Skywalker",
      source: LukeANH,
      height: "172",
      mass: "77",
      birth_year: "19BBY",
    },
    {
      name: "Obi-Wan Kenobi",
      source: ObiWanKenobi,
      height: "182",
      mass: "77",
      birth_year: "57BBY",
    },
    {
      name: "R2D2",
      source: R2D2,
      height: "96",
      mass: "32",
      birth_year: "33BBY",
    },
  ],
  planets: [
    {
      name: "Ord Mantell",
      source: OrdMantell,
      rotation: "26",
      orbitalPeriod: "334 dias",
      climate: "temperado",
      gravity: "Gigante de gás",
    },
    {
      name: "Dagobah",
      source: Dagobah,
      rotation: "23",
      orbitalPeriod: "341",
      climate: "turvo",
      gravity: "N/A",
    },
    {
      name: "Hoth",
      source: Hoth,
      rotation: "23",
      orbitalPeriod: "549",
      climate: "congelado",
      gravity: "1.1 standard",
    },
    {
      name: "Bespin",
      source: Bespin,
      rotation: "12",
      orbitalPeriod: "5110 dias",
      climate: "temperado",
      gravity: "1 standard",
    },
  ],
  starships: [
    {
      name: "Y-wing",
      source: Ywing,
      manufacturer: "Koensayr ",
      costInCredits: "134999",
      atmospheringSpeed: "1000km",
      cargoCapacity: "110",
    },
    {
      name: "Executor",
      source: Executor,
      manufacturer: "Kuat Drive Yards",
      costInCredits: "1143350³",
      atmospheringSpeed: "n/a",
      cargoCapacity: "250º6",
    },
    {
      name: "MillenniumFalcon",
      source: MillenniumFalcon,
      manufacturer: "Corellian",
      costInCredits: "$100000",
      atmospheringSpeed: "1050",
      cargoCapacity: "100³",
    },
    {
      name: "Star Destroyer",
      source: StarDestroyer,
      manufacturer: "Kuat Drive Yards",
      costInCredits: "$15º7",
      atmospheringSpeed: "975",
      cargoCapacity: "36º6",
    },
    {
      name: "X-wing",
      source: Xwing,
      manufacturer: "Incom Corporation",
      costInCredits: "$149999",
      atmospheringSpeed: "1050",
      cargoCapacity: "110",
    },
  ],
  vehicles: [
    {
      name: "TIE/LN Starfighter",
      source: TIELNStarfighter,
      manufacturer: "Sienar Fleet",
      costInCredits: "desconhecido",
      atmospheringSpeed: "1200",
      passengers: "0"
    },
    {
      name: "Snowspeeder",
      source: Snowspeeder,
      manufacturer: "Incom corporation",
      costInCredits: "desconhecido",
      atmospheringSpeed: "650",
      passengers: "0"
    },
    {
      name: "TIE Bomber",
      source: TIEBomber,
      manufacturer: "Sienas Fleet",
      costInCredits: "desconhecido",
      atmospheringSpeed: "850",
      passengers: "0"
    },
  ],
};

const characterANewHope = aNewHope.characters;
const planetANewHope = aNewHope.planets;
const starshipsANewHope = aNewHope.starships;
const vehiclesANewHope = aNewHope.vehicles;

export { characterANewHope, planetANewHope, starshipsANewHope, vehiclesANewHope };
