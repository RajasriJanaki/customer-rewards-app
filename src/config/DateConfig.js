/**
 * @returns 3 recent months based on current date.
 */
function getReducedMonths() {
    let month = [];
  
    let today = new Date();
    let lastBefore = new Date();
    let last = new Date();

    lastBefore.setMonth(lastBefore.getMonth() - 2);
    last.setMonth(last.getMonth() - 1);
    
    month.push({"month" : Number(lastBefore.getMonth()), "year" :  Number(lastBefore.getFullYear())});
    month.push({"month" : Number(last.getMonth()), "year" :  Number(last.getFullYear())});
    month.push({"month" : Number(today.getMonth()), "year" :  Number(today.getFullYear())});
  
    return month;
}

export const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

export const reducedMonths = getReducedMonths();
