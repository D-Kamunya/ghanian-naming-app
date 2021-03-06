//SET DOM ELEMENTS AS VARIABLES
const formm=document.getElementById('form')
const butTn=document.getElementById('submitt')
const birthDay=document.getElementById('birthDay')
const birthMnt=document.getElementById('birthMnt')
const birthYr=document.getElementById('birthYr')
const genders=document.getElementsByName('gender')
const results=document.getElementById('result')
const bd=document.getElementById('bd')
const bm=document.getElementById('bm')
const by=document.getElementById('by')
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



//Fn called by eventlistener
let calcName=()=>{
  //Get dom elements values
  let birthDayVal=Number(birthDay.value)
  let birthMntVal=Number(birthMnt.value)
  let birthYrVal=birthYr.value
  let genderVal

  Array.from(genders).map((gender)=>{
    if(gender.checked){
      genderVal=gender.value
    }
  })

  

  //Calculate century and year from birthyear
  let CC=Number(birthYrVal.slice(0,2))
  let YY=Number(birthYrVal.slice(2,4))

  //Fn to validate year entered
  const valYear=()=>{
    if(birthYrVal.length<4 || birthYrVal.length>4){
      yearvalErrors="Years have 4 digits"
      return false
    }
    else{
      return true
    }
  }

  //Fn to validate month entered
  const valMonth=()=>{
    if(birthMntVal<1 || birthMntVal>12){
      mntvalErrors="There are twelve months in a year"
      return false
    }
    else{
      return true
    }
  }

  //Empty old error vars
  yearvalErrors=''
  mntvalErrors=''
  dayvalErrors=''
  //Fn to validate day entered
  const valDay=()=>{
    if((Number(birthYrVal)%4)===0 && birthMntVal===2){
      if(birthDayVal<1 || birthDayVal >29){
        dayvalErrors="In this year Feb range is 0-29 days"
        return false
      }else{
        return true
      }
    }else if(birthMntVal===2){
      if(birthDayVal<1 ||birthDayVal >28){
        dayvalErrors="In this year Feb range is 0-28 days"
        return false
      }else{
        return true
      }
    }else if(birthDayVal <1 || birthDayVal >31){
      dayvalErrors="Months range is 0-31 days"
      return false
    }else{
      return true
    }
  }

  //Calling validation fns
  let valDayy=valDay()
  let valMntt=valMonth()
  let valYr=valYear()

  //Calculate day of week index
  let dayofWk = Math.floor(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(birthMntVal+1)/10)) + birthDayVal ) % 7)
  if(dayofWk===0){
    dayofWk=6
  }else{
    dayofWk--
  }
  
  results.innerHTML=''
  results.style.display = "none"
 
  bd.innerHTML=''
  bm.innerHTML=''
  by.innerHTML=''
  //Determine validity and find day of week name
  if(birthDayVal==='' || birthMntVal==='' || birthYrVal==='' || genderVal===undefined){
    alert('Please fill all fields')
  }
  else if(valDayy && valMntt && valYr){
    let birthDayName=daysofWk[dayofWk]
    let AkanName
    
    (genderVal==='male'?AkanName=maleAkanNames[dayofWk]:
    AkanName=femaleAkanNames[dayofWk])

    results.innerHTML='Your were born on '+birthDayName+' and your Akan Name is '+AkanName
    results.style.display = "block"
    console.log(AkanName)
    console.log(birthDayName)
  }else{
    dayvalErrors.length>0?bd.innerHTML=dayvalErrors:''
    mntvalErrors.length>0?bm.innerHTML=mntvalErrors:''
    yearvalErrors.length>0?by.innerHTML=yearvalErrors:''
  }  

}

//butTn click eventlistener
butTn.addEventListener('click',calcName)