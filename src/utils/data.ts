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

people.set('Juanita', [
  { year: 2018, company: 'Freelance', salary: 250 },
  { year: 2019, company: 'Freelance', salary: 250 },
  { year: 2020, company: 'Industrias Mokepon', salary: 850 },
  { year: 2021, company: 'Industrias Mokepon', salary: 1050 },
  { year: 2022, company: 'Industrias Mokepon', salary: 1250 },
  { year: 2023, company: 'Industrias Mokepon', salary: 1250 },
]);

people.set('Alex', [
  { year: 2018, company: 'Freelance', salary: 450 },
  { year: 2019, company: 'Freelance', salary: 550 },
  { year: 2020, company: 'Freelance', salary: 400 },
  { year: 2021, company: 'Industrias Mokepon', salary: 1050 },
  { year: 2022, company: 'Industrias Mokepon', salary: 1250 },
  { year: 2023, company: 'Industrias Mokepon', salary: 1250 },
]);

people.set('Nath', [
  { year: 2018, company: 'Freelance', salary: 600 },
  { year: 2019, company: 'Freelance', salary: 625 },
  { year: 2020, company: 'Freelance', salary: 575 },
  { year: 2021, company: 'MarketerosCOL', salary: 1000 },
  { year: 2022, company: 'MarketerosCOL', salary: 1000 },
  { year: 2023, company: 'MarketerosCOL', salary: 1100 },
]);

people.set('Julia', [
  { year: 2018, company: 'MarketerosCOL', salary: 1000 },
  { year: 2019, company: 'MarketerosCOL', salary: 2000 },
  { year: 2020, company: 'MarketerosCOL', salary: 2000 },
  { year: 2021, company: 'MarketerosCOL', salary: 2000 },
  { year: 2022, company: 'MarketerosCOL', salary: 2000 },
  { year: 2023, company: 'MarketerosCOL', salary: 2000 },
]);

people.set('Jonatan', [
  { year: 2019, company: 'MarketerosCOL', salary: 1000 },
  { year: 2020, company: 'MarketerosCOL', salary: 1000 },
  { year: 2021, company: 'MarketerosCOL', salary: 800 },
  { year: 2022, company: 'MarketerosCOL', salary: 900 },
  { year: 2023, company: 'MarketerosCOL', salary: 1000 },
]);

people.set('Armando', [
  { year: 2018, company: 'Freelance', salary: 750 },
  { year: 2019, company: 'Freelance', salary: 750 },
  { year: 2020, company: 'Freelance', salary: 750 },
  { year: 2021, company: 'Freelance', salary: 850 },
  { year: 2022, company: 'Freelance', salary: 850 },
  { year: 2023, company: 'Freelance', salary: 850 },
]);

people.set('Dilan', [
  { year: 2018, company: 'Freelance', salary: 500 },
  { year: 2019, company: 'Freelance', salary: 500 },
  { year: 2020, company: 'Freelance', salary: 600 },
  { year: 2021, company: 'Mokepon', salary: 1100 },
  { year: 2022, company: 'Mokepon', salary: 1100 },
  { year: 2023, company: 'Mokepon', salary: 1100 },
]);

people.set('Zamir', [
  { year: 2018, company: 'Freelance', salary: 400 },
  { year: 2019, company: 'Freelance', salary: 500 },
  { year: 2020, company: 'Freelance', salary: 500 },
  { year: 2021, company: 'Mokepon', salary: 1100 },
  { year: 2022, company: 'Mokepon', salary: 1100 },
  { year: 2023, company: 'Mokepon', salary: 1200 },
]);

people.set('Daniela', [
  { year: 2018, company: 'Freelance', salary: 500 },
  { year: 2019, company: 'Freelance', salary: 500 },
  { year: 2020, company: 'Freelance', salary: 500 },
  { year: 2021, company: 'Freelance', salary: 550 },
  { year: 2022, company: 'Freelance', salary: 550 },
  { year: 2023, company: 'MarketerosCOL', salary: 850 },
]);

people.set('Daniel', [
  { year: 2020, company: 'Freelance', salary: 150 },
  { year: 2021, company: 'Freelance', salary: 450 },
  { year: 2022, company: 'Freelance', salary: 550 },
  { year: 2023, company: 'Freelance', salary: 650 },
]);

people.set('Rigoberto', [
  { year: 2018, company: 'MarketerosCOL', salary: 700 },
  { year: 2019, company: 'MarketerosCOL', salary: 700 },
  { year: 2020, company: 'MarketerosCOL', salary: 700 },
  { year: 2021, company: 'MarketerosCOL', salary: 750 },
  { year: 2022, company: 'MarketerosCOL', salary: 750 },
  { year: 2023, company: 'MarketerosCOL', salary: 750 },
]);

people.set('Alicia', [
  { year: 2018, company: 'Inversionify', salary: 300 },
  { year: 2019, company: 'Inversionify', salary: 1700 },
  { year: 2020, company: 'Inversionify', salary: 2700 },
  { year: 2021, company: 'Inversionify', salary: 3750 },
  { year: 2022, company: 'Freelance', salary: 1550 },
  { year: 2023, company: 'Freelance', salary: 350 },
]);

people.set('Teodoro', [
  { year: 2018, company: 'Freelance', salary: 600 },
  { year: 2019, company: 'Freelance', salary: 700 },
  { year: 2020, company: 'Inversionify', salary: 1700 },
  { year: 2021, company: 'Inversionify', salary: 1750 },
  { year: 2022, company: 'Freelance', salary: 800 },
  { year: 2023, company: 'Freelance', salary: 850 },
]);

people.set('Bruce', [
  { year: 2018, company: 'Wayne Enterprises', salary: 4600 },
  { year: 2019, company: 'Wayne Enterprises', salary: 4700 },
  { year: 2020, company: 'Wayne Enterprises', salary: 3700 },
  { year: 2021, company: 'Wayne Enterprises', salary: 4150 },
  { year: 2022, company: 'Wayne Enterprises', salary: 4400 },
  { year: 2023, company: 'Wayne Enterprises', salary: 3850 },
]);

people.set('Alfred', [
  { year: 2018, company: 'Wayne Enterprises', salary: 2000 },
  { year: 2019, company: 'Wayne Enterprises', salary: 2000 },
  { year: 2020, company: 'Wayne Enterprises', salary: 1500 },
  { year: 2021, company: 'Wayne Enterprises', salary: 1500 },
  { year: 2022, company: 'Wayne Enterprises', salary: 2000 },
  { year: 2023, company: 'Wayne Enterprises', salary: 1500 },
]);

people.set('Clark Kent', [
  { year: 2018, company: 'Daily Planet', salary: 1000 },
  { year: 2019, company: 'Daily Planet', salary: 1500 },
  { year: 2020, company: 'Daily Planet', salary: 1000 },
  { year: 2021, company: 'Daily Planet', salary: 1500 },
  { year: 2022, company: 'Daily Planet', salary: 2000 },
  { year: 2023, company: 'Daily Planet', salary: 1500 },
]);

people.set('Lois Lane', [
  { year: 2018, company: 'Daily Planet', salary: 2000 },
  { year: 2019, company: 'Daily Planet', salary: 2500 },
  { year: 2020, company: 'Daily Planet', salary: 2000 },
  { year: 2021, company: 'Daily Planet', salary: 2500 },
  { year: 2022, company: 'Daily Planet', salary: 2500 },
  { year: 2023, company: 'Daily Planet', salary: 2500 },
]);

people.set('Jimmy Olsen', [
  { year: 2018, company: 'Daily Planet', salary: 1500 },
  { year: 2019, company: 'Daily Planet', salary: 2000 },
  { year: 2020, company: 'Daily Planet', salary: 2000 },
  { year: 2021, company: 'Daily Planet', salary: 2500 },
  { year: 2022, company: 'Daily Planet', salary: 2500 },
  { year: 2023, company: 'Daily Planet', salary: 1500 },
]);

people.set('Perry White', [
  { year: 2018, company: 'Daily Planet', salary: 3500 },
  { year: 2019, company: 'Daily Planet', salary: 3700 },
  { year: 2020, company: 'Daily Planet', salary: 3800 },
  { year: 2021, company: 'Daily Planet', salary: 4000 },
  { year: 2022, company: 'Daily Planet', salary: 4050 },
  { year: 2023, company: 'Daily Planet', salary: 4050 },
]);

people.set('Lex Luthor', [
  { year: 2018, company: 'LexCorp', salary: 5000 },
  { year: 2019, company: 'LexCorp', salary: 5300 },
  { year: 2020, company: 'LexCorp', salary: 4000 },
  { year: 2021, company: 'LexCorp', salary: 3000 },
  { year: 2022, company: 'LexCorp', salary: 3500 },
  { year: 2023, company: 'LexCorp', salary: 3050 },
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
