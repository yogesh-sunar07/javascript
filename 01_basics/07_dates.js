// Dates
 let mydate = new Date()
 console.log(mydate);//2026-06-19T02:55:12.597Z
 console.log(mydate.toString());//Fri Jun 19 2026 08:40:12 GMT+0545 (Nepal Time)
 console.log(mydate.toLocaleString());//6/19/2026, 8:40:12 AM
 console.log(mydate.toDateString());//Fri Jun 19 2026
 console.log(mydate.toISOString());//2026-06-19T02:57:36.434Z
 console.log(mydate.toTimeString());//08:42:36 GMT+0545 (Nepal Time)
 

 console.log(typeof mydate);
 

 let myCreatedDateTime = new Date(2023, 0, 23, 5, 3);
 let myCreatedDate = new Date(2023, 0, 23);
 console.log(myCreatedDate.toDateString());
 console.log(myCreatedDateTime.toLocaleString());
 