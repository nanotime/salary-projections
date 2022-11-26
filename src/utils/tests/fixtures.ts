import { Job } from '../data';

const peopleTest = new Map<string, Job[]>();

peopleTest.set('Pancha', [
  { year: 2018, company: 'Freelance', salary: 250 },
  { year: 2019, company: 'Freelance', salary: 250 },
  { year: 2020, company: 'Industrias Mokepon', salary: 850 },
  { year: 2021, company: 'Industrias Mokepon', salary: 1050 },
  { year: 2022, company: 'Industrias Mokepon', salary: 1250 },
  { year: 2023, company: 'Industrias Mokepon', salary: 1250 },
]);

peopleTest.set('Panchita', [
  { year: 2018, company: 'Freelance', salary: 250 },
  { year: 2019, company: 'Freelance', salary: 350 },
  { year: 2020, company: 'Industrias Mokepon', salary: 950 },
  { year: 2021, company: 'Industrias Mokepon', salary: 1150 },
  { year: 2022, company: 'Industrias Mokepon', salary: 1350 },
  { year: 2023, company: 'Industrias Mokepon', salary: 1450 },
]);

peopleTest.set('Panchota', [
  { year: 2018, company: 'Freelance', salary: 450 },
  { year: 2019, company: 'Freelance', salary: 450 },
  { year: 2020, company: 'Industrias Mokepon', salary: 1050 },
  { year: 2021, company: 'Industrias Mokepon', salary: 1250 },
  { year: 2022, company: 'Industrias Mokepon', salary: 1450 },
  { year: 2023, company: 'Industrias Mokepon', salary: 1650 },
]);

const list = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
const oddList = [10, 10, 10, 10, 11];

export { peopleTest, list, oddList };

// [250, 250, 850, 1050, 1250, 1250];
// Promedy pancha 1050
// Promedy panchita 1150
// Promedy panchota 1250
