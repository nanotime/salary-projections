export * from './data';
export * from './chartConfigs';
export * from './tops';
export { isPair } from './isPair';
export { calcMedian } from './calcMedian';
export { calcPromedy } from './calcPromedy';
export { medianByPerson } from './medianByPerson';
export { generalMedianOfPersons } from './generalMedianOfPersons';
export { calcPercentualProjection } from './calcPercentualProjection';
export { projectionByPerson } from './projectionByPerson';
export { projectionByCompany } from './projectionByCompany';

export const Stringify = (datum: any) => JSON.stringify(datum);

export const colorPalette = {
  white: '#fff',
  black: '#000',
  'soft-black': '#3C4048',
  teal: '#00ABB3',
  'light-green': '#97DECE',
  grey: '#B2B2B2',
  'soft-grey': '#EAEAEA',  
}