
//   reference messages collection
var messageRef = firebase.database().ref('messages');

// listen for form submit
document.getElementById('newuserForm').addEventListener('submit',submitForm);

// submit form
function submitForm(e){
    e.preventDefault();

    // Get Values
    var first = getInputVal('first');
    var last = getInputVal('last');
    var uid = getInputVal('uid');
    var pass = getInputVal('pass');
    var number = getInputVal('number');
    var email = getInputVal('email');
    
    // Save message
    saveMessage(first, last, uid, pass, number, email);


}

// function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(first, last, uid, pass, number, email){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        first: first,
        last: last,
        uid: uid,
        pass: pass,
        number: number,
        email: email
    });
}

// Cash Register
var cashRegister = {
    total:0,

    lastTransactionAmount: 0,

    add: function(itemCost) {
        this.total +=  itemCost;
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity) {
        switch (item) {
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    //Add the voidLastTransaction Method here
    voidLastTransaction: function() {
        this.lastTransactionAmount -= this.total;
    }  // was invalid ';' after '}'

};