let minlimit = 0;
let maxlimit = 100;
let a = 2;
let b = 3;
let total = 0;

for(minlimit; minlimit<maxlimit ; minlimit++){
    if((minlimit % a == 0) && (minlimit % b == 0)){
        total+=minlimit;
    }
}
console.log(total);
