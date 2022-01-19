// function ConverToCoinChange(Dollars){
//     var quarter = 0.25

//     if( Dollars % quarter === 0){
//         quarter = Dollars / quarter;
//         console.log ( quarter + " quarters");
//     }

//     else (Dollars % quarter !== 0)
//         remainder =  Dollars % 0.25;
//         console.log (remainder);
//     // var dime = (Dollars % quarter)/10

//     // console.log(quarter + " quarters " + dime + " dimes");
//     // return (quarter + " quarters" + dime + " dimes"  + nickel +  "nickels");
// }

// console.log(ConverToCoinChange(4.65))
function convertToCoinChange(input){

    input = Math.floor(input * 100);

    let coins = {
        "quarter" : 0,
        "dime" : 0,
        "nickel" : 0,
        "penny" : 0


    while(input >0){
        if(input >= 25){
            input -= 25;
            change["quareter"] ++;
        }
        else if (input >=10){
            
        }
    }

// const coins = {
//     "silver dollar": 1,
//     "quarter": 0.25,
//     "dime": 0.1,
//     "nickel": 0.05,
//     "penny": 0.01
// }

// function convertToCoinChange(ammount, coins){
//     ammount += 0.009;
//     var output = "";

//     Object.keys(coins).forEach(key => {
//         if (ammount >= coins[key]){
//             var coinCount = Math.floor(ammount / coins[key]);
//             ammount -= coinCount * coins[key];
//             output += coinCount + " " + key + "(s), ";
//         }
//     });

//     output = output.slice(0, output.length - 2);
//     return output;
// }