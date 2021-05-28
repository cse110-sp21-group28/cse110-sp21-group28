

const weekButton = document.querySelectorAll("div > input");
weekButton[1].addEventListener('click', ()=>{
    const dateRange = document.querySelector(".dateRange");
    let dates = dateRange.innerHTML;
    const splitDates = dates.split(" - ");
    const firstDate = splitDates[0].split("/");
    const secondDate = splitDates[1].split("/");
    console.log(firstDate[0]);
    console.log(firstDate[1]);
    console.log(firstDate[2]);
    console.log(secondDate[0]);
    console.log(secondDate[1]);
    console.log(secondDate[2]);
    const dateContainer = document.querySelector(".dateContainer");
    dateRange.innerHTML = findNextWeeklyDates(Number(firstDate[0]), Number(firstDate[1]), 
    Number(firstDate[2]), Number(secondDate[0]), Number(secondDate[1]), Number(secondDate[2]), "forward");
});
weekButton[0].addEventListener('click', ()=>{
    const dateRange = document.querySelector(".dateRange");
    let dates = dateRange.innerHTML;
    const splitDates = dates.split(" - ");
    const firstDate = splitDates[0].split("/");
    const secondDate = splitDates[1].split("/");
    console.log(firstDate[0]);
    console.log(firstDate[1]);
    console.log(firstDate[2]);
    console.log(secondDate[0]);
    console.log(secondDate[1]);
    console.log(secondDate[2]);
    const dateContainer = document.querySelector(".dateContainer");
    dateRange.innerHTML = findNextWeeklyDates(Number(firstDate[0]), Number(firstDate[1]), 
    Number(firstDate[2]), Number(secondDate[0]), Number(secondDate[1]), Number(secondDate[2]), "backward");
});




const day = document.querySelectorAll(".day");

day[0].addEventListener('click', () =>{

});
day[1].addEventListener('click', () =>{

});
day[2].addEventListener('click', () =>{

});
day[3].addEventListener('click', () =>{

});
day[4].addEventListener('click', () =>{

});
day[5].addEventListener('click', () =>{

});
day[6].addEventListener('click', () =>{

});


function findNextWeeklyDates(firstMonth, firstDate, firstYear, secondMonth, secondDate, secondYear, direction){
    var newfirstMonth, newfirstDate, newfirstYear; 
    newfirstYear = firstYear;
    var newsecondMonth, newsecondDate, newsecondYear;
    newsecondYear = secondYear;
    var returnValue;
    if(direction == "forward"){
        if(firstYear != secondYear){
            newfirstYear = secondYear;
        }
        //All possibilities when setting the firstMonth, firstDate, and firstYear when we push the forward button
        if(secondMonth == 1 || secondMonth == 3 || secondMonth == 5 || secondMonth == 7 || secondMonth == 8 || secondMonth == 10 || secondMonth == 12){
            if(secondDate != 31){
                newfirstMonth =secondMonth;
                newfirstDate = secondDate + 1;
            }
            else{
                if(firstMonth != 12){
                    newfirstMonth = firstMonth + 1; 
                }
                else{
                    newfirstMonth = 1;
                    newfirstYear = secondYear + 1;
                }
                newfirstDate = 1;
            }
        }
        else if(secondMonth == 4 || secondMonth == 6 || secondMonth == 9 || secondMonth == 11 ){
            if(secondDate != 30){
                newfirstMonth = secondMonth;
                newfirstDate = secondDate + 1;
            }
            else{
                newfirstMonth = firstMonth + 1;
                newfirstDate = 1;
            }
        }
        else{
            if(secondYear % 4 == 0 && secondDate == 29){
                newfirstMonth = 3;
                newfirstDate = 1;
            }
            else if(secondYear % 4 != 0 && secondDate == 28){
                newfirstMonth = 3; 
                newfirstDate = 1;
            }
            else{
                newfirstMonth = secondMonth;
                newfirstDate = secondDate+1;
            }
        }


        if(secondMonth == 1 || secondMonth == 3 || secondMonth == 5 || secondMonth == 7 || secondMonth == 8 || secondMonth == 10 || secondMonth == 12){
            if(secondDate + 7 <= 31){
                newsecondMonth = secondMonth;
                newsecondDate = secondDate + 7;
            }
            else{
                newsecondDate = (secondDate + 7)%31;
                if(secondMonth == 12){
                    newsecondMonth = 1;
                    newsecondYear = secondYear + 1;
                }
                else{
                    newsecondMonth = secondMonth + 1;
                }
            }
        }
        else if(secondMonth == 4 || secondMonth == 6 || secondMonth == 9 || secondMonth == 11 ){
            if(secondDate +7 <= 30){
                newsecondMonth = secondMonth;
                newsecondDate = secondDate + 7;
            }
            else{
                newsecondMonth = secondMonth+1;
                newsecondDate = (secondDate +7) %30;
            }
        }
        else{
            if(secondYear % 4 == 0 && secondDate +7 > 29){
                newsecondMonth = 3;
                newsecondDate = (secondDate +7)%29;
            }
            else if(secondYear % 4 != 0 && secondDate+ 7 > 28){
                newsecondMonth = 3;
                newsecondDate = (secondDate +7)%28;
            }
            else{
                newsecondMonth = 2;
                newsecondDate = secondDate+7;
            }
        }
    }
    else{
        if(firstYear != secondYear){
            newsecondYear = firstYear;
        }
        if(firstMonth == 2 || firstMonth == 4 || firstMonth == 8 || firstMonth == 6 || firstMonth == 9 || firstMonth == 11 || firstMonth == 1){
            if(firstDate != 1){
                newsecondMonth = firstMonth;
                newsecondDate = firstDate - 1;
            }
            else{
                if(firstMonth != 1){
                    newsecondMonth = firstMonth - 1; 
                    newsecondDate = 31;
                }
                else{
                    newsecondMonth = 12;
                    newsecondYear = secondYear - 1;
                }
                newsecondDate = 31;
            }
        }
        else if(firstMonth == 5 || firstMonth == 7 || firstMonth == 10 || firstMonth == 12 ){
            if(firstDate != 1){
                newsecondMonth =firstMonth;
                newsecondDate = firstDate - 1;
            }
            else{
                newsecondMonth = firstMonth -1;
                newsecondDate = 30;
            }
        }
        else{
            if(secondYear % 4 == 0 && firstDate == 1){
                newsecondMonth = 2;
                newsecondDate = 29;
            }
            else if(secondYear % 4 != 0 && firstDate == 1){
                newsecondMonth = 2; 
                newsecondDate = 28;
            }
            else{
                newsecondMonth = firstMonth;
                newsecondDate = firstDate-1;
            }
        }
        

        if(firstMonth == 2 || firstMonth == 4 || firstMonth == 8 || firstMonth == 6 || firstMonth == 9 || firstMonth == 11 || firstMonth == 1){
            if(firstDate - 7 >= 1){
                newfirstMonth = firstMonth;
                newfirstDate = firstDate - 7;
            }
            else{
                newfirstDate = (firstDate - 7) + 31;
                if(firstMonth == 1){
                    newfirstMonth = 12;
                    newfirstYear = firstYear - 1;
                }
                else{
                    newfirstMonth = firstMonth - 1;
                }
            }
        }
        else if(firstMonth == 5 || firstMonth == 7 || firstMonth == 10 || firstMonth == 12 ){
            if(firstDate -7 >= 1){
                newfirstMonth = firstMonth;
                newfirstDate = firstDate - 7;
            }
            else{
                newfirstMonth = firstMonth-1;
                newfirstDate = (firstDate -7) + 30;
            }
        }
        else{
            if(firstYear % 4 == 0 && firstDate - 7 <= 0){
                newfirstMonth = 2;
                newfirstDate = (firstDate -7)+29;
            }
            else if(firstYear % 4 != 0 && firstDate- 7 <= 0){
                newfirstMonth = 2;
                newfirstDate = (firstDate -7)+28;
            }
            else{
                newfirstMonth = 3;
                newfirstDate = firstDate-7;
            }
        }
    }
    returnValue = newfirstMonth + "/" + newfirstDate + "/" + newfirstYear + " - " + newsecondMonth + "/" + newsecondDate + "/" + newsecondYear;
    return returnValue;
}
