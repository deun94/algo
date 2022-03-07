//Greatest common Factor
//given two integers create recursive Greatest Common Factor(num1, num2) to determine the greates common factor
//1) if num 1 === num2, that num is the GCF
// 2) if a>b, then you can remove b from a
// 3) if b>a //

function recursiveGreatestCommonFactor(num1, num2){
    var comFac = 0

    if (num1 === num2){
        comFac = num1
        return comFac
    }

    if(num1 > num2){
        var temp = num1/num2
        return temp
    }

    else if (num2 > num1){
        var temp2 = num2/num1
        return temp2
    }

    return 
}

//(7, 35) = 7
//123456, 987654 //6