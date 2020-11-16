/* A New Hope */
import BeruWhitesunlars from "../../../../assets/images/imagesCharacter/BeruWhitesunlars.png";
import BiggsDarklighter from "../../../../assets/images/imagesCharacter/BiggsDarklighter.jpg";
import C3PO from "../../../../assets/images/imagesCharacter/C-3PO.jpg";
import DarthVader from "../../../../assets/images/imagesCharacter/DarthVader.jpg";
import Chewbacca from "../../../../assets/images/imagesCharacter/Chewbacca.jpg";
import HanSolo from "../../../../assets/images/imagesCharacter/HanSolo.jpg";
import JabbaDesilijicTiure from "../../../../assets/images/imagesCharacter/JabbaDesilijicTiure.jpg";
import LeiaOrgana from "../../../../assets/images/imagesCharacter/LeiaOrgana.jpg";
import LukeANH from "../../../../assets/images/imagesCharacter/LukeANH.jpg";
import ObiWanKenobi from "../../../../assets/images/imagesCharacter/Obi-WanKenobi.jpg";
import OwenLars from "../../../../assets/images/imagesCharacter/OwenLars.jpg";
import R2D2 from "../../../../assets/images/imagesCharacter/R2D2.jpg";

/* Planets */
import Alderaan2 from "../../../../assets/images/planets/planetsANewHope/Alderaan_2.jpg";
import Tatooine_TPM from "../../../../assets/images/planets/planetsANewHope/Tatooine_TPM.png";
import Yavin4SWCT from "../../../../assets/images/planets/planetsANewHope/Yavin-4-SWCT.png";

/* Starships */
import CR90corvette from "../../../../assets/images/starships/CR90corvette.png";
import DeathStar from "../../../../assets/images/starships/DeathStar.png";
import MillenniumFalcon from "../../../../assets/images/starships/MillenniumFalcon.jpg";
import SentinelClasslandingCraft from "../../../../assets/images/starships/SentinelClasslandingCraft.png";
import StarDestroyer from "../../../../assets/images/starships/StarDestroyer.jpg";
import TIEAdvancedX1 from "../../../../assets/images/starships/TIEAdvancedX1.jpg";
import Xwing from "../../../../assets/images/starships/X-wing.png";

/* vehicles */
import Sandcrawler from "../../../../assets/images/vehicles/Sandcrawler.png";
import T16skyhopper from "../../../../assets/images/vehicles/T16skyhopper.png";
import X34landspeeder from "../../../../assets/images/vehicles/X34landspeeder.jpg";

const aNewHope = {
  characters: [
    {
      name: "Beru White sun lars",
      source: BeruWhitesunlars,
      height: "165",
      mass: "75",
      birth_year: "47BBY",
    },
    {
      name: "Biggs Darklighter",
      source: BiggsDarklighter,
      height: "183",
      mass: "84",
      birth_year: "24BBY",
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
      name: "Owen Lars",
      source: OwenLars,
      height: "178",
      mass: "120",
      birth_year: "52BBY",
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
      name: "Alderaan",
      source: Alderaan2,
      rotation: "24:00h",
      orbitalPeriod: "364 dias",
      climate: "temperado",
      gravity: "1 standard",
    },
    {
      name: "Tatooine TPM",
      source: Tatooine_TPM,
      rotation: "23:00h",
      orbitalPeriod: "304 dias",
      climate: "arido",
      gravity: "1 standard",
    },
    {
      name: "Yavin4",
      source: Yavin4SWCT,
      rotation: "24:00h",
      orbitalPeriod: "4818 dias",
      climate: "temperate, tropical",
      gravity: "1 standard",
    },
  ],
  starships: [
    {
      name: "CR90 corvette",
      source: CR90corvette,
      manufacturer: "Corellian",
      costInCredits: "$3500000",
      atmospheringSpeed: "950",
      cargoCapacity: "300º4",
    },
    {
      name: "Death Star",
      source: DeathStar,
      manufacturer: "Imperial",
      costInCredits: "$10¹¹",
      atmospheringSpeed: "n/a",
      cargoCapacity: "1000º¹¹",
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
      name: "Sentinel-Class landing Craft",
      source: SentinelClasslandingCraft,
      manufacturer: "Sienar Fleet",
      costInCredits: "$240000",
      atmospheringSpeed: "1000",
      cargoCapacity: "180³",
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
      name: "TIE Advanced X1",
      source: TIEAdvancedX1,
      manufacturer: "Sienar",
      costInCredits: "desconhecido",
      atmospheringSpeed: "1200",
      cargoCapacity: "150",
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
      name: "Sand crawler",
      source: Sandcrawler,
      manufacturer: "Corellia",
      costInCredits: "$150³",
      atmospheringSpeed: "30",
      passengers: "30"
    },
    {
      name: "T16 sky hopper",
      source: T16skyhopper,
      manufacturer: "Incom Corporation",
      costInCredits: "145²",
      atmospheringSpeed: "1200",
      passengers: "1"
    },
    {
      name: "X34 landspeeder",
      source: X34landspeeder,
      manufacturer: "SoroSuub",
      costInCredits: "10550",
      atmospheringSpeed: "250",
      passengers: "1"
    },
  ],
};

const characterANewHope = aNewHope.characters;
const planetANewHope = aNewHope.planets;
const starshipsANewHope = aNewHope.starships;
const vehiclesANewHope = aNewHope.vehicles;

export { characterANewHope, planetANewHope, starshipsANewHope, vehiclesANewHope };
