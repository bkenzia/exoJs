let tab=[1,600,500,2,66,3];

console.log('tab==',tab);

console.log("max==", Math.max(... tab));

let max=tab[0];
for (let index = 0; index < tab.length-1; index++) {
    if(max < tab[index+1]){
        max = tab[index+1]
    }
    
}
console.log(max)