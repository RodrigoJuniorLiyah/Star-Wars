import React from "react";

import {
  List,
  CharactersCategoryContainer,
  CategoryImage,
  CategoryName,
  StrongText,
  CategoryStatus,
  BoxInfo,
  CategoryPlanetContainer,
  PlanetCategoryImage,
  StarshipsList,
  CategoryStarshipsContainer,
  CategoryOfStarshipsImage,
  StarshipsCategoryStatus,
  StarshipsCategoryName,
  CharactersCategoryStatus,
} from "./styles";

import {
  characterANewHope,
  planetANewHope,
  starshipsANewHope,
  vehiclesANewHope,
} from "./data";

interface ItemProps {
  item: typeof characterANewHope[0];
}

interface PlanetProps {
  planet: typeof planetANewHope[0];
}

interface StarshipsProps {
  starships: typeof starshipsANewHope[0];
}

interface VehiclesProps {
  vehicles: typeof vehiclesANewHope[0];
}

const CategoryList: React.FC = () => {
  const CategoryItem: React.FC<ItemProps> = ({ item }) => (
    <CharactersCategoryContainer>
      <CategoryImage source={item.source} />
      <BoxInfo>
        <CategoryName numberOfLines={2}>
          <StrongText>{item.name}</StrongText>
        </CategoryName>
        <CharactersCategoryStatus>
          <StrongText>Altura:</StrongText> {item.height}
          {"\n"}
          <StrongText>Massa</StrongText> {item.mass}
          {"\n"}
          <StrongText>nascimento</StrongText> {item.birth_year}
          {"\n"}
        </CharactersCategoryStatus>
      </BoxInfo>
    </CharactersCategoryContainer>
  );

  return (
    <List>
      {characterANewHope.map((item) => (
        <CategoryItem key={item.name} item={item} />
      ))}
    </List>
  );
};

const PlanetsCategoryList: React.FC = () => {
  const PlanetsCategoryItem: React.FC<PlanetProps> = ({ planet }) => (
    <CategoryPlanetContainer>
      <PlanetCategoryImage source={planet.source} />
      <BoxInfo>
        <CategoryName numberOfLines={1}>
          <StrongText>Nome:</StrongText> {planet.name}
        </CategoryName>
        <CategoryStatus>
          <StrongText>Rotação:</StrongText> {planet.rotation}
          {"\n"}
          <StrongText>orbita:</StrongText> {planet.orbitalPeriod}
          {"\n"}
          <StrongText>clima:</StrongText> {planet.climate}
          {"\n"}
          <StrongText>gravidade:</StrongText> {planet.gravity}
        </CategoryStatus>
      </BoxInfo>
    </CategoryPlanetContainer>
  );

  return (
    <List>
      {planetANewHope.map((planet) => (
        <PlanetsCategoryItem key={planet.name} planet={planet} />
      ))}
    </List>
  );
};

const StarshipsCategoryList: React.FC = () => {
  const StarshipsCategoryItem: React.FC<StarshipsProps> = ({ starships }) => (
    <CategoryStarshipsContainer>
      <CategoryOfStarshipsImage source={starships.source} />
      <BoxInfo>
        <StarshipsCategoryName numberOfLines={1}>
          <StrongText>Nome:</StrongText> {starships.name}
        </StarshipsCategoryName>
        <StarshipsCategoryStatus>
          <StrongText>Fabricante:</StrongText> {starships.manufacturer}
          {"\n"}
          <StrongText>Custo/crédito:</StrongText> {starships.costInCredits}
          {"\n"}
          <StrongText>Velocidade atm:</StrongText> {starships.atmospheringSpeed}
          {"\n"}
          <StrongText>capacidade de carga:</StrongText>{" "}
          {starships.cargoCapacity}
        </StarshipsCategoryStatus>
      </BoxInfo>
    </CategoryStarshipsContainer>
  );

  return (
    <StarshipsList>
      {starshipsANewHope.map((starships) => (
        <StarshipsCategoryItem key={starships.name} starships={starships} />
      ))}
    </StarshipsList>
  );
};

const VehiclesCategoryList: React.FC = () => {
  const VehiclesCategoryItem: React.FC<VehiclesProps> = ({ vehicles }) => (
    <CategoryStarshipsContainer>
      <CategoryOfStarshipsImage source={vehicles.source} />
      <BoxInfo>
        <StarshipsCategoryName numberOfLines={1}>
          <StrongText>Nome:</StrongText> {vehicles.name}
        </StarshipsCategoryName>
        <StarshipsCategoryStatus>
          <StrongText>Fabricante:</StrongText> {vehicles.manufacturer}
          {"\n"}
          <StrongText>Custo/crédito:</StrongText> {vehicles.costInCredits}
          {"\n"}
          <StrongText>Velocidade atm:</StrongText> {vehicles.atmospheringSpeed}
          {"\n"}
          <StrongText>Passageiros:</StrongText> {vehicles.passengers}
        </StarshipsCategoryStatus>
      </BoxInfo>
    </CategoryStarshipsContainer>
  );

  return (
    <StarshipsList>
      {vehiclesANewHope.map((vehicles) => (
        <VehiclesCategoryItem key={vehicles.name} vehicles={vehicles} />
      ))}
    </StarshipsList>
  );
};

export {
  CategoryList,
  PlanetsCategoryList,
  StarshipsCategoryList,
  VehiclesCategoryList,
};
