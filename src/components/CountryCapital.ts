export const countryCapitalList = [
    ['Англии', 'Лондон'],
    ['Германии', 'Берлин'],
    ['Росcии', 'Москва'],
    ['Франции', 'Париж'],
    ['Испании', 'Мадрид'],
    ['Белоруссии', 'Минск'],
    ['Украины', 'Киев'],
    ['Австрии', 'Вена'],
]

export const randomCountry = () => {
    let countryNumber = Math.floor(countryCapitalList.length * Math.random())
    return countryCapitalList[countryNumber]
}