

//deposit button event handler
const deposit_btn = document.getElementById('PayButton');
deposit_btn.addEventListener('click', function(){
    //debugger;
    var tot = parseFloat(localStorage.getItem("Total"));
    //const total = tot + parseFloat(document.getElementById("depositAmount").value);
    const total = parseFloat(document.getElementById("depositAmount").value);

    updateSpanTest("currBalance", total);
   

    document.getElementById('depositAmount').value = "";
    document.getElementById('NameOnCard').value = "";
    document.getElementById('CreditCardNumber').value = "";
    document.getElementById('ExpiryDate').value = "";
    document.getElementById('SecurityCode').value = "";
    document.getElementById('ZIPCode').value = "";
    
    //localStorage.setItem("Total", total);

})

function updateSpanTest(idName, addedNumber){
    //x1.1 updating balance the same way
    const currentAmount = document.getElementById(idName).innerText;
    const currentStringToInt = parseFloat(currentAmount);
    if(NegativeCash(addedNumber))
    {
        alert("Invalid input");
    }
    else{
        const total = currentStringToInt + addedNumber;
        localStorage.setItem("Total", total);

        //x1.2 setting this value in balance
        document.getElementById(idName).innerText = total;
        alert("Transaction Successful");
    }
    /*const total = currentStringToInt + addedNumber;
    localStorage.setItem("Total", total);

    //x1.2 setting this value in balance
    document.getElementById(idName).innerText = total;*/
}
function NegativeCash(num) {
    if (Math.sign(num) === -1) {
      return true;
    }
  
    return false;
  }

function currentBalance(){
    //let tot = localStorage.getItem("Total");
    //debugger;
    document.getElementById("currBalance").innerText = localStorage.getItem("Total");
    return tot;
}
/*      const deposit = getInputNumb("depositAmount");
      debugger;
      updateSpanTest("currAmount", deposit);
      updateSpanTest("currBalance", deposit);

      //setting up the input field blank when clicked
      document.getElementById('depositAmount').value = "";

  })

  //withdraw button event handler
   const withdraw_btn = document.getElementById('withdrawalbtn');
   withdraw_btn.addEventListener('click', function(){
      const withdrawTotal = getInputNumb("withdrawalAmount");

      //updateSpanTest("currWithdraw", withdrawTotal);
      updateSpanTest("currBalance", -1 * withdrawTotal);
      //setting up the input field blank when clicked
      document.getElementById('withdrawalAmount').value = "";
  })

  //function to parse string input to int
  function getInputNumb(idName){
      const amount = document.getElementById(idName).value;
      const amountTotal = parseFloat(amount);
      return amountTotal;
  }

  function updateSpanTest(idName, addedNumber){
      //x1.1 updating balance the same way
      const currentAmount = document.getElementById(idName).innerText;
      const currentStringToInt = parseFloat(currentAmount);

      const total = currentStringToInt + addedNumber;
      localStorage.setItem("total", total);

      //x1.2 setting this value in balance
      document.getElementById(idName).innerText = total;
  }*/