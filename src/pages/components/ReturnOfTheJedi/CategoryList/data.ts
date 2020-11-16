/* A New Hope */

import C3PO from "../../../../assets/images/imagesCharacter/C-3PO.jpg";
import DarthVader from "../../../../assets/images/imagesCharacter/DarthVader.jpg";
import Chewbacca from "../../../../assets/images/imagesCharacter/Chewbacca.jpg";
import HanSolo from "../../../../assets/images/imagesCharacter/HanSolo.jpg";
import JabbaDesilijicTiure from "../../../../assets/images/imagesCharacter/JabbaDesilijicTiure.jpg";
import LeiaOrgana from "../../../../assets/images/imagesCharacter/LeiaOrgana.jpg";
import LukeANH from "../../../../assets/images/imagesCharacter/LukeANH.jpg";
import ObiWanKenobi from "../../../../assets/images/imagesCharacter/Obi-WanKenobi.jpg";
import R2D2 from "../../../../assets/images/imagesCharacter/R2D2.jpg";
import BobaFett from "../../../../assets/images/imagesCharacterReturnOfTheJedi/BobaFett.png";
import Palpatine from "../../../../assets/images/imagesCharacterReturnOfTheJedi/Palpatine.jpg";
import WedgeAntilles from "../../../../assets/images/imagesCharacterReturnOfTheJedi/WedgeAntilles.jpg";
import Yoda from "../../../../assets/images/imagesCharacterReturnOfTheJedi/Yoda.jpg";

/* Planets */
import Tatooine_TPM from "../../../../assets/images/planets/planetsANewHope/Tatooine_TPM.png";
import Coruscant from "../../../../assets/images/planets/planetsReturnOfTheJedi/Coruscant.png";
import Dagobah from "../../../../assets/images/planets/planetsReturnOfTheJedi/Dagobah.jpg";
import Endor from "../../../../assets/images/planets/planetsReturnOfTheJedi/Endor.png";
import Naboo from "../../../../assets/images/planets/planetsReturnOfTheJedi/Naboo.png";

/* Starships */
import CR90corvette from "../../../../assets/images/starships/CR90corvette.png";
import MillenniumFalcon from "../../../../assets/images/starships/MillenniumFalcon.jpg";
import Xwing from "../../../../assets/images/starships/X-wing.png";
import Bwing from "../../../../assets/images/starshipsReturnOfTheJedi/B-wing.jpg";
import Executor from "../../../../assets/images/starshipsReturnOfTheJedi/Executor.png";
import ImperialShuttle from "../../../../assets/images/starshipsReturnOfTheJedi/ImperialShuttle.jpg";
import Awing from "../../../../assets/images/starshipsReturnOfTheJedi/A-wing.png";

/* vehicles */
import TIELNStarfighter from "../../../../assets/images/vehicles/vehiclesReturnOfTheJedi/TIELNStarfighter.jpg";
import TIEBomber from "../../../../assets/images/vehicles/vehiclesReturnOfTheJedi/TIEBomber.png";
import TIEINInterceptor from "../../../../assets/images/vehicles/vehiclesReturnOfTheJedi/TIEINInterceptor.png";

const aNewHope = {
  characters: [
    {
      name: "Boba Fett",
      source: BobaFett,
      height: "183",
      mass: "78.2",
      birth_year: "31.5BBY",
    },
    {
      name: "Palpatine",
      source: Palpatine,
      height: "170",
      mass: "75",
      birth_year: "82BBY",
    },
    {
      name: "Yoda",
      source: Yoda,
      height: "66",
      mass: "17",
      birth_year: "896BBY",
    },
    {
      name: "Wedge Antilles",
      source: WedgeAntilles,
      height: "170",
      mass: "77",
      birth_year: "21BBY",
    },
    {
      name: "C3PO",
      source: C3PO,
      height: "172",
      mass: "77",
      birth_year: "19BBY",
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
      name: "Jabba Desilijic Tiure",
      source: JabbaDesilijicTiure,
      height: "175",
      mass: "1,358",
      birth_year: "600BBY",
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
      name: "Tatooine TPM",
      source: Tatooine_TPM,
      rotation: "23:00h",
      orbitalPeriod: "304 dias",
      climate: "arido",
      gravity: "1 standard",
    },
    {
      name: "Naboo",
      source: Naboo,
      rotation: "26",
      orbitalPeriod: "312",
      climate: "temperado",
      gravity: "1 standard",
    },
    {
      name: "Endor",
      source: Endor,
      rotation: "18",
      orbitalPeriod: "402",
      climate: "temperado",
      gravity: "0.85 standard",
    },
    {
      name: "Coruscant",
      source: Coruscant,
      rotation: "24",
      orbitalPeriod: "368",
      climate: "temperado",
      gravity: "1 standard",
    },
    {
      name: "Dagobah",
      source: Dagobah,
      rotation: "23",
      orbitalPeriod: "341",
      climate: "murky",
      gravity: "N/A",
    },
  ],
  starships: [
    {
      name: "Executor",
      source: Executor,
      manufacturer: "Sienar Fleet",
      costInCredits: "$240³",
      atmospheringSpeed: "850",
      cargoCapacity: "80³",
    },
    {
      name: "Imperial Shuttle",
      source: ImperialShuttle,
      manufacturer: "Alliance",
      costInCredits: "$1750²",
      atmospheringSpeed: "1300",
      cargoCapacity: "40",
    },
    {
      name: "Awing",
      source: Awing,
      manufacturer: "Kuat Drive",
      costInCredits: "$1143350²",
      atmospheringSpeed: "n/a",
      cargoCapacity: "250º6",
    },
    {
      name: "CR90 corvette",
      source: CR90corvette,
      manufacturer: "Corellian",
      costInCredits: "$3500000",
      atmospheringSpeed: "950",
      cargoCapacity: "300º4",
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
      name: "B-wing",
      source: Bwing,
      manufacturer: "Slayn & Korpil",
      costInCredits: "220³",
      atmospheringSpeed: "950",
      cargoCapacity: "45",
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
      name: "TIELN Starfighter",
      source: TIELNStarfighter,
      manufacturer: "Sienar Fleet",
      costInCredits: "desconhecido",
      atmospheringSpeed: "1200",
      passengers: "0",
    },
    {
      name: "TIE Bomber",
      source: TIEBomber,
      manufacturer: "Sienar Fleet",
      costInCredits: "desconhecido",
      atmospheringSpeed: "850",
      passengers: "0",
    },
    {
      name: "TIEIN Interceptor",
      source: TIEINInterceptor,
      manufacturer: "Sienar Fleet",
      costInCredits: "desconhecido",
      atmospheringSpeed: "1250",
      passengers: "0",
    },
  ],
};

const characterANewHope = aNewHope.characters;
const planetANewHope = aNewHope.planets;
const starshipsANewHope = aNewHope.starships;
const vehiclesANewHope = aNewHope.vehicles;

export {
  characterANewHope,
  planetANewHope,
  starshipsANewHope,
  vehiclesANewHope,
};
