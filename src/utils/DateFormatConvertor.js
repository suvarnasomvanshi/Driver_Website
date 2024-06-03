export function formatDate(inputDate) {
    const dateObject = new Date(inputDate);
    
    // Get day, month, and year components
    const day = dateObject.getUTCDate();
    const month = dateObject.toLocaleString('default', { month: 'long' });
  
    // Format the date as "dd monthName"
    const formattedDate = `${day} ${month.slice(0,3)}`;
    
    return formattedDate;
  }