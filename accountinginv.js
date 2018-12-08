
var txn = [[ 15 , 1.3],
	   [-2 ,2.343],
	   [4.346,298.03],
	   [-15.04, 3456],
	   [9.99,345]];  // [+/-volume, price]: +volume:= buy, -volume:=sell


// FIFO: We are running a first in first out scheme

function accountinginv() {

    var i;
    var result;
    var buyvolume=0;
    var costofgoodsold=0;
    var soldvolume=0;
    var salestotal=0;
    

    // Computing the sold volume and price
    for (i = 0; i < txn.length; i++) {
	if (txn[i][0]<0){  // if sold
	    soldvolume+=txn[i][0];
	    salestotal+=txn[i][0]*txn[i][1];
	    txn[i][0]=0;
	}
    }

      
    // Finding the balance entry in the list, i.e, the entry for which the buyvolume balances the soldvolume.
    var i=0;
    
    while (buyvolume => soldvolume){
	
	if (txn[i][0]>0){  // buy transactions
	    diffvolume=buyvolume+soldvolume+txn[i][0];
	    if(diffvolume<0){ // if soldvolume is greater than buyvolume
		buyvolume+=txn[i][0];
		costofgoodsold+=txn[i][0]*txn[i][1];
		
	    } else {  //soldvolume is less than buyvolume
		costofgoodsold=(txn[i][0]-diffvolume)*txn[i][1];
		txn[i][0]=diffvolume;
		result= costofgoodsold+salestotal;
		return [result,txn.slice(i)];
	    }
	}

	i++;

	if (i>txn.length){
	    return NaN;
	}
    }
}

console.log(txn);
console.log('\n');
console.log(accountinginv());
