export const countryCapitalList = [
    {name: 'Англии', capital: 'Лондон'},
    {name: 'Германии', capital: 'Берлин'},
    {name: 'Росcии', capital: 'Москва'},
    {name: 'Франции', capital: 'Париж'},
    {name: 'Испании', capital: 'Мадрид'},
    {name: 'Белоруссии', capital: 'Минск'},
    {name: 'Украины', capital: 'Киев'},
    {name: 'Австрии', capital: 'Вена'},
]

export const randomCountry = () => {
    let countryNumber = Math.floor(countryCapitalList.length * Math.random())
    return countryCapitalList[countryNumber]
}