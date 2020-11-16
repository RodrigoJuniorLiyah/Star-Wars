/* A New Hope */
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
import QuiGonJinn from "../../../../assets/images/imagesCharacter/QuiGonJinn.jpg";
import Yoda from "../../../../assets/images/imagesCharacterReturnOfTheJedi/Yoda.jpg";
import NuteGunray from "../../../../assets/images/imagesCharacterThePhantomMenace/NuteGunray.jpg";
import FinisValorum from "../../../../assets/images/imagesCharacterThePhantomMenace/FinisValorum.jpg";
import PadméAmidala from "../../../../assets/images/imagesCharacterThePhantomMenace/PadméAmidala.jpg";
import JarJarBinks from "../../../../assets/images/imagesCharacterThePhantomMenace/JarJarBinks.jpg";
import Watto from "../../../../assets/images/imagesCharacterThePhantomMenace/Watto.png";
import DarthMaul from "../../../../assets/images/imagesCharacterThePhantomMenace/DarthMaul.jpg";
import MaceWindu from "../../../../assets/images/imagesCharacterThePhantomMenace/MaceWindu.jpg";

/* Planets */
import Tatooine_TPM from "../../../../assets/images/planets/planetsANewHope/Tatooine_TPM.png";
import Naboo from "../../../../assets/images/planets/planetsReturnOfTheJedi/Naboo.png";
import Coruscant from "../../../../assets/images/planets/planetsReturnOfTheJedi/Coruscant.png";

/* Starships */
import RepublicCruiser from "../../../../assets/images/starshipsThePhantomMenace/RepublicCruiser.jpg";
import DroidControlShip from "../../../../assets/images/starshipsThePhantomMenace/DroidControlShip.jpg";
import Scimitar from "../../../../assets/images/starshipsThePhantomMenace/Scimitar.jpg";

/* vehicles */
import Sandcrawler from "../../../../assets/images/vehicles/Sandcrawler.png";
import VultureDroid from "../../../../assets/images/vehicles/vehiclesThePhantomMenace/VultureDroid.jpg";

const aNewHope = {
  characters: [
    {
      name: "Qui-Gon Jinn",
      source: QuiGonJinn,
      height: "193",
      mass: "89",
      birth_year: "92BBY",
    },
    {
      name: "Yoda",
      source: Yoda,
      height: "66",
      mass: "17",
      birth_year: "896BBY",
    },
    {
      name: "Nute Gunray",
      source: NuteGunray,
      height: "191",
      mass: "90",
      birth_year: "desconhecido",
    },
    {
      name: "Padmé Amidala",
      source: PadméAmidala,
      height: "185",
      mass: "45",
      birth_year: "46BBy",
    },
    {
      name: "Jar Jar Binks",
      source: JarJarBinks,
      height: "137",
      mass: "desconhecido",
      birth_year: "desconhecido",
    },
    {
      name: "Watto",
      source: Watto,
      height: "196",
      mass: "66",
      birth_year: "52BBY",
    },
    {
      name: "Finis Valorum",
      source: FinisValorum,
      height: "170",
      mass: "desconhecido",
      birth_year: "91BBY",
    },
    {
      name: "Darth Maul",
      source: DarthMaul,
      height: "175",
      mass: "80",
      birth_year: "54BBY",
    },
    {
      name: "Mace Windu",
      source: MaceWindu,
      height: "188",
      mass: "84",
      birth_year: "72BBY",
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
      name: "Naboo",
      source: Naboo,
      rotation: "26",
      orbitalPeriod: "312",
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
      name: "Coruscant",
      source: Coruscant,
      rotation: "24",
      orbitalPeriod: "368",
      climate: "temperado",
      gravity: "1 standard",
    },
  ],
  starships: [
    {
      name: "Droid Control Ship",
      source: DroidControlShip,
      manufacturer: "Hoersch-Kessel",
      costInCredits: "desconhecido",
      atmospheringSpeed: "n/a",
      cargoCapacity: "400º7",
    },
    {
      name: "Scimitar",
      source: Scimitar,
      manufacturer: "Republic Sienar",
      costInCredits: "$550º5",
      atmospheringSpeed: "n/a",
      cargoCapacity: "250º4",
    },
    {
      name: "Republic Cruiser",
      source: RepublicCruiser,
      manufacturer: "Corellian",
      costInCredits: "desconhecido",
      atmospheringSpeed: "900",
      cargoCapacity: "n/a",
    },
  ],
  vehicles: [
    {
      name: "Sand crawler",
      source: Sandcrawler,
      manufacturer: "Corellia",
      costInCredits: "$150³",
      atmospheringSpeed: "30",
      passengers: "30",
    },
    {
      name: "Vulture Droid",
      source: VultureDroid,
      manufacturer: "Vulture-class",
      costInCredits: "desconhecido",
      atmospheringSpeed: "1200",
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
