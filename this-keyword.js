const myObj = {
    name: 'Saddam Rakib',
    getFullName: function() {
        console.log(this);
        return 'Mr ' + this.name;
    }
}

const anotherObj = {
    name: 'Hossain'
}

anotherObj.getFullName = myObj.getFullName;
// console.log(anotherObj.getFullName);

myObj.getFullName();
anotherObj.getFullName();