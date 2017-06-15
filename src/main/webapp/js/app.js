//This passed array contains the row order
function movedarows(tbl,arr){
  numofrows = tbl.getElementsByTagName('tr').length;
  remed = new Array();
  var tbody = tbl.tBodies[0];
  for(i=1;i<numofrows;i++){
      remed.push(tbody.rows[i].cloneNode(true));
  }
  for(i=0;i<remed.length;i++){
      tbody.replaceChild(remed[i], tbody.rows[arr[i]+1]);
  }
}
function compare(a,b){
    if(a == b){
       return 0;
    }//Check for condition a.isNaN and b.isNum
    //nums go before letters
    else if(isNaN(a) && !isNaN(b)){
         //a goes after b
        return 1;
    }else if(!isNaN(a) && isNaN(b)){
        return (-1);
    }//Both not nums
    else if(!isNaN(a) && !isNaN(b)){
        return a-b;
    }//If both are words
    else{
        as = a.toLowerCase();
        bs = b.toLowerCase();
        return (as < bs) ? -1 : ((as > bs) ? 1 : 0);
    }
}
function sorttable(tbl, colnum){
    /*
    This function returns an array of str indexed 
    as seen in the Table
    */
    numofcols = tbl.getElementsByTagName('th').length;
    numofrows = tbl.getElementsByTagName('tr').length;
    sorted = new Array();
    
    if(numofcols < colnum){
        throw "Invalid Column number"
    }else{
      for(i=1; i<numofrows; i++){
        trel = tbl.getElementsByTagName('tr')[i];
        tdel = trel.getElementsByTagName('td')[colnum];
        for(j=(i+1);j<numofrows; j++){
            trel2 = tbl.getElementsByTagName('tr')[j];
            tdel2 = trel2.getElementsByTagName('td')[colnum];
            if(compare(tdel.innerHTML, tdel2.innerHTML) < 0){
                if(sorted[i-1] == undefined){sorted[i-1]=0;}
                if(sorted[j-1] == undefined){sorted[j-1]=0;}
                //sorted[i-1] += (-1);
                sorted[j-1] += 1;
            }else if(compare(tdel.innerHTML, tdel2.innerHTML) > 0){
                if(sorted[i-1] == undefined){sorted[i-1]=0;}
                if(sorted[j-1] == undefined){sorted[j-1]=0;}
                sorted[i-1] += 1;
                //sorted[j-1] += (-1);
            }else{
                if(sorted[i-1] == undefined){sorted[i-1]=0;}
                if(sorted[j-1] == undefined){sorted[j-1]=0;}
                sorted[i-1] += 1;
            }
        }
      }
    }
    movedarows(tbl,sorted);
}
//Table Col indexing from 0
//The function call
sorttable(document.getElementById('codexpl'),0);
