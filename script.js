function allPrime(){
    let n=''
    let flag=true
    let value = document.getElementById('number').value
    for (let i = 0; i < value; i++) {
        if (isPrime(i)) {
            if(flag){
                n=n+''+i 
                flag = false
            }else
                n=n+','+i
        }
        
    }
    document.getElementById('primeoutput').innerHTML=n
}
function isPrime(n) {
    if (n<=1) return false
    if(n<=3) return true

    if(n%2==0||n%3==0) return false

    for (let i = 5; i*i<=n; i=i+6) {
        if(n%i==0||n%(i+2)==0) return false
        
    }return true
}