const day1TempF = 32
const day2TempC = 25
const day3TempF = 70
const day4TempC = 18
const day5TempF = 80
const day6TempC = 15
const day7TempF = 72
const day8TempC = 28
const day9TempF = 68
const day10TempC = 20
const day11TempF = 75
const day12TempC = 23
const day13TempF = 82
const day14TempC = 30
const day15TempF = 65
const day16TempC = 22
const day17TempF = 77
const day18TempC = 26
const day19TempF = 78
const day20TempC = 24
const day21TempF = 73
const day22TempC = 21
const day23TempF = 79
const day24TempC = 27
const day25TempF = 71
const day26TempC = 19
const day27TempF = 74
const day28TempC = 17
const day29TempF = 76
const day30TempC = 29

function tempInCelsius(tempF) {
    return (tempF * 9 / 5) + 32;
}

const tot_temperature_in_fahrenheit = 32 + 70 + 80 + 72 + 68 + 75 + 82 + 65 + 77 + 78 + 73 + 79 + 71 + 74 + 76;
const tot_temperature_in_celsius = 25 + 18 + 15 + 28 + 20 + 23 + 30 + 22 + 26 + 24 + 21 + 27 + 19 + 17 + 29;

console.log(tot_temperature_in_fahrenheit);
console.log(tot_temperature_in_celsius);

const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 15;
const avg_temperature_in_celsius = tot_temperature_in_celsius / 15;

console.log(avg_temperature_in_fahrenheit);
console.log(avg_temperature_in_celsius);