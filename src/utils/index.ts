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

export const chartColors = {
  black: '#000',
  teal: '#00ABB3',
  'soft-black': '#3C4048',
  'light-teal': '#97DECE',
  'soft-purple': '#85586F',
  'light-yellow': '#F3ECB0',
  'dark-teal': '#678983',
  'pink': '#FF8E9E',
}