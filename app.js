let y = 1
let arr1 = [0,0,0]
let arr2 = [0,0,0]
let arr3 = [0,0,0]
let result = false
function func1(x){
    console.log(x)
    if(y%2===0){
        document.getElementById(x).innerHTML = 'X'
        document.getElementById(x).disabled = true
        setvalue(x)
        y = y+1
    }
    else{
        document.getElementById(x).innerHTML = '0'
        document.getElementById(x).disabled = true
        setvalue(x)
        y = y+1
    }
}

function setvalue(k){
    if(k==='1'){
        if(y%2===0){
            arr1[0] = 1
        }
        else{
            arr1[0] = 2
        }
    }
    if(k==='2'){
        if(y%2===0){
            arr1[1] = 1
        }
        else{
            arr1[1] = 2
        }
    }
    if(k==='3'){
        if(y%2===0){
            arr1[2] = 1
        }
        else{
            arr1[2] = 2
        }
    }
    if(k==='4'){
        if(y%2===0){
            arr2[0] = 1
        }
        else{
            arr2[0] = 2
        }
    }
    if(k==='5'){
        if(y%2===0){
            arr2[1] = 1
        }
        else{
            arr2[1] = 2
        }
    }
    if(k==='6'){
        if(y%2===0){
            arr2[2] = 1
        }
        else{
            arr2[2] = 2
        }
    }
    if(k==='7'){
        if(y%2===0){
            arr3[0] = 1
        }
        else{
            arr3[0] = 2
        }
    }
    if(k==='8'){
        if(y%2===0){
            arr3[1] = 1
        }
        else{
            arr3[1] = 2
        }
    }
    if(k==='9'){
        if(y%2===0){
            arr3[2] = 1
        }
        else{
            arr3[2] = 2
        }
    }
    
    console.log(arr1)
    console.log(arr2)
    console.log(arr3)
    check_result()
}
function check_result(){
    if(arr1[0]===arr1[1] && arr1[1]===arr1[2] && arr1[0]!=0){
        result = true
        announce_result(arr1[0])
    }
    if(arr2[0]===arr2[1] && arr2[1]===arr2[2] && arr2[0]!=0){
        result = true
        announce_result(arr2[0])
    }
    if(arr3[0]===arr3[1] && arr3[1]===arr3[2] && arr3[0]!=0){
        result = true
        announce_result(arr3[0])
    }
    if(arr1[0]===arr2[0] && arr2[0]===arr3[0] && arr1[0]!=0){
        result = true
        announce_result(arr1[0])
    }
    if(arr1[1]===arr2[1] && arr2[1]===arr3[1] && arr1[1]!=0){
        result = true
        announce_result(arr1[1])
    }
    if(arr1[2]===arr2[2] && arr2[2]===arr3[2] && arr1[2]!=0){
        result = true
        announce_result(arr1[2])
    }
    if(arr1[0]===arr2[1] && arr2[1]===arr3[2] && arr1[0]!=0){
        result = true
        announce_result(arr1[0])
    }
    if(arr1[2]===arr2[1] && arr2[1]===arr3[0] && arr1[2]!=0){
        result = true
        announce_result(arr1[2])
    }
    if(y===9 && result===false){
        document.getElementById('result').innerHTML = 'Huh Noobs'
        document.getElementById('result').className = 'alert alert-dark mt-2'
        console.log('Huh Noobs')
    }

    console.log(result)
}

function announce_result(b){
    if(b===1){
        document.getElementById('result').innerHTML = 'X wins'
        document.getElementById('result').className = 'alert alert-dark mt-2'
        disable_all()
        console.log('x wins')
    }
    if(b===2){
        document.getElementById('result').innerHTML = '0 wins'
        document.getElementById('result').className = 'alert alert-dark mt-2'
        disable_all()
        console.log('0 wins')
    }
}
function disable_all(){
    document.getElementById('1').disabled = true
    document.getElementById('2').disabled = true
    document.getElementById('3').disabled = true
    document.getElementById('4').disabled = true
    document.getElementById('5').disabled = true
    document.getElementById('6').disabled = true
    document.getElementById('7').disabled = true
    document.getElementById('8').disabled = true
    document.getElementById('9').disabled = true
}