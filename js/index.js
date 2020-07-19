//SET DOM ELEMENTS AS VARIABLES
const butTn=document.getElementById('submitt')
const birthDay=document.getElementById('birthday')
const birthMnt=document.getElementById('birthmnt')
const birthYr=document.getElementById('birthyr')
const genders=document.getElementsByName('gender')

//Set array variables for weekdays names and akan names
const daysofWk=[
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
]
const maleAkanNames=[
  "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
]
const femaleAkanNames=[
  "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
]

//Set errors variables
let yearvalErrors=''
let mntvalErrors=''
let dayvalErrors=''

//FN CALLED BY BTN CLICK
let calcAge=()=>{

}