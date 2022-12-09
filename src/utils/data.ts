export const dataKeys = { company: 'company_data', persons: 'persons_data' };

export type CompanyData = {
  [key: number]: {
    salarys: number[];
    workers: string[];
  };
};

export type Job = {
  year: number;
  company: string;
  salary: number;
};

type DataStruct = {
  company_data: Map<string, CompanyData>;
  persons_data: Map<string, Job[]>;
};

const people = new Map<string, Job[]>();

export function getData(): DataStruct {
  return {
    company_data: formatCompanyData(),
    persons_data: people,
  };
}

enum CompanyNames {
  free = 'Freelance',
  mok = 'Mokepon Industries',
  mark = 'IAMarketers',
  inv = 'Inversionify',
  green = 'Green Makers',
  ecorp = 'E corp',
  dpl = 'Daily Planet'
}

people.set('Juanita', [
  { year: 2018, company: CompanyNames.free, salary: 250 },
  { year: 2019, company: CompanyNames.free, salary: 250 },
  { year: 2020, company: CompanyNames.mok, salary: 850 },
  { year: 2021, company: CompanyNames.mok, salary: 1050 },
  { year: 2022, company: CompanyNames.mok, salary: 1250 },
  { year: 2023, company: CompanyNames.mok, salary: 1250 },
]);

people.set('Alex', [
  { year: 2018, company: CompanyNames.free, salary: 450 },
  { year: 2019, company: CompanyNames.free, salary: 550 },
  { year: 2020, company: CompanyNames.free, salary: 400 },
  { year: 2021, company: CompanyNames.mok, salary: 1050 },
  { year: 2022, company: CompanyNames.mok, salary: 1230 },
  { year: 2023, company: CompanyNames.mok, salary: 1300 },
]);

people.set('Nath', [
  { year: 2018, company: CompanyNames.free, salary: 600 },
  { year: 2019, company: CompanyNames.free, salary: 625 },
  { year: 2020, company: CompanyNames.free, salary: 575 },
  { year: 2021, company: CompanyNames.mark, salary: 1000 },
  { year: 2022, company: CompanyNames.mark, salary: 1000 },
  { year: 2023, company: CompanyNames.mark, salary: 1100 },
]);

people.set('Julia', [
  { year: 2018, company: CompanyNames.mark, salary: 455 },
  { year: 2019, company: CompanyNames.mark, salary: 800 },
  { year: 2020, company: CompanyNames.mark, salary: 830 },
  { year: 2021, company: CompanyNames.mark, salary: 1000 },
  { year: 2022, company: CompanyNames.mark, salary: 1175 },
  { year: 2023, company: CompanyNames.mark, salary: 1275 },
]);

people.set('Jonatan', [
  { year: 2019, company: CompanyNames.mark, salary: 1000 },
  { year: 2020, company: CompanyNames.mark, salary: 1000 },
  { year: 2021, company: CompanyNames.mark, salary: 1100 },
  { year: 2022, company: CompanyNames.mark, salary: 1200 },
  { year: 2023, company: CompanyNames.mark, salary: 1290 },
]);

people.set('Armando', [
  { year: 2018, company: CompanyNames.inv, salary: 750 },
  { year: 2019, company: CompanyNames.inv, salary: 980 },
  { year: 2020, company: CompanyNames.inv, salary: 980 },
  { year: 2021, company: CompanyNames.inv, salary: 1000 },
  { year: 2022, company: CompanyNames.free, salary: 1200 },
  { year: 2023, company: CompanyNames.free, salary: 1300 },
]);

people.set('Dilan', [
  { year: 2018, company: CompanyNames.free, salary: 800 },
  { year: 2019, company: CompanyNames.free, salary: 1000 },
  { year: 2020, company: CompanyNames.free, salary: 930 },
  { year: 2021, company: CompanyNames.inv, salary: 1100 },
  { year: 2022, company: CompanyNames.inv, salary: 1200 },
  { year: 2023, company: CompanyNames.inv, salary: 1500 },
]);

people.set('Zamir', [
  { year: 2018, company: CompanyNames.free, salary: 400 },
  { year: 2019, company: CompanyNames.free, salary: 500 },
  { year: 2020, company: CompanyNames.free, salary: 570 },
  { year: 2021, company: CompanyNames.mok, salary: 1100 },
  { year: 2022, company: CompanyNames.mok, salary: 1100 },
  { year: 2023, company: CompanyNames.mok, salary: 1200 },
]);

people.set('Daniela', [
  { year: 2018, company: CompanyNames.free, salary: 500 },
  { year: 2019, company: CompanyNames.free, salary: 700 },
  { year: 2020, company: CompanyNames.free, salary: 630 },
  { year: 2021, company: CompanyNames.free, salary: 950 },
  { year: 2022, company: CompanyNames.free, salary: 1200 },
  { year: 2023, company: CompanyNames.mark, salary: 1250 },
]);

people.set('Daniel', [
  { year: 2020, company: CompanyNames.free, salary: 150 },
  { year: 2021, company: CompanyNames.free, salary: 450 },
  { year: 2022, company: CompanyNames.free, salary: 550 },
  { year: 2023, company: CompanyNames.free, salary: 650 },
]);

people.set('Rigoberto', [
  { year: 2018, company: CompanyNames.green, salary: 700 },
  { year: 2019, company: CompanyNames.green, salary: 880 },
  { year: 2020, company: CompanyNames.green, salary: 830 },
  { year: 2021, company: CompanyNames.mark, salary: 1000 },
  { year: 2022, company: CompanyNames.mark, salary: 1060 },
  { year: 2023, company: CompanyNames.mark, salary: 1100 },
]);

people.set('Alicia', [
  { year: 2018, company: CompanyNames.inv, salary: 1500 },
  { year: 2019, company: CompanyNames.inv, salary: 1700 },
  { year: 2020, company: CompanyNames.inv, salary: 2700 },
  { year: 2021, company: CompanyNames.inv, salary: 3750 },
  { year: 2022, company: CompanyNames.free, salary: 3845 },
  { year: 2023, company: CompanyNames.free, salary: 3900 },
]);

people.set('Teodoro', [
  { year: 2018, company: CompanyNames.free, salary: 1200 },
  { year: 2019, company: CompanyNames.free, salary: 1400 },
  { year: 2020, company: CompanyNames.inv, salary: 1700 },
  { year: 2021, company: CompanyNames.inv, salary: 1750 },
  { year: 2022, company: CompanyNames.green, salary: 2000 },
  { year: 2023, company: CompanyNames.green, salary: 2300 },
]);

people.set('Bruce', [
  { year: 2018, company: CompanyNames.ecorp, salary: 4600 },
  { year: 2019, company: CompanyNames.ecorp, salary: 4700 },
  { year: 2020, company: CompanyNames.ecorp, salary: 4500 },
  { year: 2021, company: CompanyNames.ecorp, salary: 4850 },
  { year: 2022, company: CompanyNames.dpl, salary: 5000 },
  { year: 2023, company: CompanyNames.dpl, salary: 5200 },
]);

people.set('Alfred', [
  { year: 2018, company: CompanyNames.ecorp, salary: 2000 },
  { year: 2019, company: CompanyNames.ecorp, salary: 2000 },
  { year: 2020, company: CompanyNames.ecorp, salary: 1800 },
  { year: 2021, company: CompanyNames.dpl, salary: 2200 },
  { year: 2022, company: CompanyNames.dpl, salary: 2230 },
  { year: 2023, company: CompanyNames.ecorp, salary: 2800 },
]);

people.set('Clark', [
  { year: 2018, company: CompanyNames.inv, salary: 1000 },
  { year: 2019, company: CompanyNames.inv, salary: 1500 },
  { year: 2020, company: CompanyNames.green, salary: 1800 },
  { year: 2021, company: CompanyNames.ecorp, salary: 2235 },
  { year: 2022, company: CompanyNames.dpl, salary: 2300 },
  { year: 2023, company: CompanyNames.dpl, salary: 2330 },
]);

people.set('Lois Gartner', [
  { year: 2018, company: CompanyNames.green, salary: 2000 },
  { year: 2019, company: CompanyNames.green, salary: 2500 },
  { year: 2020, company: CompanyNames.green, salary: 2200 },
  { year: 2021, company: CompanyNames.green, salary: 2500 },
  { year: 2022, company: CompanyNames.green, salary: 2577 },
  { year: 2023, company: CompanyNames.green, salary: 2642 },
]);

people.set('Jim Kent', [
  { year: 2018, company: CompanyNames.green, salary: 1500 },
  { year: 2019, company: CompanyNames.green, salary: 2000 },
  { year: 2020, company: CompanyNames.green, salary: 2000 },
  { year: 2021, company: CompanyNames.ecorp, salary: 2500 },
  { year: 2022, company: CompanyNames.ecorp, salary: 2500 },
  { year: 2023, company: CompanyNames.ecorp, salary: 3500 },
]);

people.set('Perry White', [
  { year: 2018, company: CompanyNames.free, salary: 3500 },
  { year: 2019, company: CompanyNames.free, salary: 3700 },
  { year: 2020, company: CompanyNames.free, salary: 2700 },
  { year: 2021, company: CompanyNames.ecorp, salary: 4000 },
  { year: 2022, company: CompanyNames.ecorp, salary: 4050 },
  { year: 2023, company: CompanyNames.ecorp, salary: 4050 },
]);

people.set('Ryan Brath', [
  { year: 2018, company: CompanyNames.ecorp, salary: 5000 },
  { year: 2019, company: CompanyNames.ecorp, salary: 5300 },
  { year: 2020, company: CompanyNames.ecorp, salary: 4800 },
  { year: 2021, company: CompanyNames.dpl, salary: 4900 },
  { year: 2022, company: CompanyNames.ecorp, salary: 5500 },
  { year: 2023, company: CompanyNames.dpl, salary: 5800 },
]);

function formatCompanyData(): Map<string, CompanyData> {
  const companies = new Map<string, CompanyData>();

  people.forEach((jobs, worker: string) => {
    jobs.forEach(job => {
      const companyName = job.company.toLowerCase();
      const company = companies.get(companyName);

      if (company && company[job.year]) {
        company[job.year].salarys.push(job.salary);
        company[job.year].workers.push(worker);
      }

      if (company && !company[job.year]) {
        company[job.year] = { salarys: [job.salary], workers: [worker] };
      }

      if (!company) {
        companies.set(companyName, {
          [job.year]: { salarys: [job.salary], workers: [worker] },
        });
      }
    });
  });

  return companies;
}
