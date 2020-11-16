import styled from 'styled-components/native';

export const List = styled.ScrollView.attrs({
  horizontal: true,
})`
  padding: 8px 0 24px;
`;

export const StarshipsList = styled.ScrollView.attrs({
  horizontal: false,
})`
  padding: 8px 0 24px;
`;

export const CharactersCategoryContainer = styled.View`
  margin-right: 10px;
  width: 250px;
  height: 140px;

  background: #32264d;
  
  flex-direction: row;
`;

export const CategoryPlanetContainer = styled.View`
  background: #32264d;
  margin-right: 10px;
  width: 235px;
  height: 150px;

  flex-direction: row;
`;

export const CategoryStarshipsContainer = styled.View`
  background: #32264d;
  margin-bottom: 10px;
  width: 360px;
  height: 150px;

  flex-direction: row;
`;

export const CategoryImage = styled.Image`
  width: 98px;
  height: 100%;
`;

export const CategoryOfStarshipsImage = styled.Image`
  width: 180px;
  height: 100%;
  resize-mode: cover;
`;

export const PlanetCategoryImage = styled.Image`
  width: 98px;
  height: 100%;
  resize-mode: cover;
`;

export const BoxInfo = styled.View`

`;

export const CategoryName = styled.Text`
  margin-top: 5px;
  max-width: 130px;

  color: #FFF;

  font-size: 13px;
  font-family: Nunito_400Regular;
  text-align: center;
`;

export const StarshipsCategoryName = styled.Text`
  margin-top: 5px;
  max-width: 180px;

  color: #FFF;

  font-size: 13px;
  font-family: Nunito_400Regular;
  text-align: center;
`;

export const StrongText = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #4ee1e6;
  
`;

export const CharactersCategoryStatus = styled.Text`
  margin-top: 10px;
  max-width: 140px;
  
  color: #FFF;

  font-size: 13px;
  font-family: Nunito_400Regular;
  line-height: 30px;
`;

export const CategoryStatus = styled.Text`
  margin-top: 5px;
  max-width: 140px;
  
  color: #FFF;

  font-size: 13px;
  font-family: Nunito_400Regular;
  line-height: 25px;
`;

export const StarshipsCategoryStatus = styled.Text`
  margin-top: 5px;
  max-width: 180px;
  
  color: #FFF;
  font-size: 13px;
  font-family: Nunito_400Regular;
  line-height: 30px;
`;