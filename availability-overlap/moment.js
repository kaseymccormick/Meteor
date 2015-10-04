// Shit moment can do
// What time is it?
console.log(moment().format('HH:mm:ss')); // this works, not sure how to bring it forward to templates and html :(
console.log(moment().format('MMMM Do YYYY, h:mm:ss a')); // October 3rd 2015, 11:38:24 am
console.log(moment().format('dddd'));                    // Saturday
console.log(moment().format("MMM Do YY"));               // Oct 3rd 15
console.log(moment().format('YYYY [escaped] YYYY'));     // 2015 escaped 2015
console.log(moment().format());                          // 2015-10-03T11:38:24-05:00
console.log(moment("20111031", "YYYYMMDD").fromNow()); // 4 years ago
console.log(moment("20120620", "YYYYMMDD").fromNow()); // 3 years ago
console.log(moment().startOf('day').fromNow());        // 12 hours ago
console.log(moment().endOf('day').fromNow());          // in 12 hours
console.log(moment().startOf('hour').fromNow());      // 41 minutes
console.log(moment().subtract(10, 'days').calendar()); // 09/23/2015
console.log(moment().subtract(6, 'days').calendar());  // Last Sunday at 11:41 AM
console.log(moment().subtract(3, 'days').calendar());  // Last Wednesday at 11:41 AM
console.log(moment().subtract(1, 'days').calendar());  // Yesterday at 11:41 AM
console.log(moment().calendar());                      // Today at 11:41 AM
console.log(moment().add(1, 'days').calendar());       // Tomorrow at 11:41 AM
console.log(moment().add(3, 'days').calendar());       // Tuesday at 11:41 AM
console.log(moment().add( 'days', 10).calendar());      // 10/13/2015
console.log(moment().format('L'));    // 10/03/2015
console.log(moment().format('l'));    // 10/3/2015
console.log(moment().format('LL'));   // October 3, 2015
console.log(moment().format('ll'));   // Oct 3, 2015
console.log(moment().format('LLL'));  // October 3, 2015 11:41 AM
console.log(moment().format('lll'));  // Oct 3, 2015 11:41 AM
console.log(moment().format('LLLL')); // Saturday, October 3, 2015 11:41 AM
console.log(moment().format('llll')); // Sat, Oct 3, 2015 11:41 AM
// What time is it?
console.log(moment().format('HH:mm:ss')); // 16:13:11
// get the numebr of days in the current month
moment("2012-01", "YYYY-MM").daysInMonth()