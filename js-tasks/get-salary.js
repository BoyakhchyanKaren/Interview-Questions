const arrayOfEmployees = [
    {
        name: 'john',
        salary: '1000$',
    },
    {
        name: 'juan',
        salary: '1200$',
    },
    {
        name: 'jill',
        salary: '100$',
    },
    {
        name: 'jack',
        salary: '1030$',
    },
    {
        name: 'joni',
        salary: '300$',
    },
];
// find summary of salaries without '$' symbol;

const getSalaries = (employees) => {
    const salaries = employees.reduce((acum, element) => {
        const salaryWithoutSymbol = element.salary.slice(0, -1);
        return acum + Number(salaryWithoutSymbol);
    }, 0);

    return salaries;
}
