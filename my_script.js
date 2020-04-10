var numberOfColumnsAndRows = 100;

var input = prompt('How many rows and columns do you want?');

var inputNumOfColumnsAndRows = parseInt(input);

numberOfColumnsAndRows = inputNumOfColumnsAndRows;

let totalCells = numberOfColumnsAndRows * numberOfColumnsAndRows // this is the total number of cells that need to be made

const container = document.getElementById("container");

function makeRowsAndColumns(rows, columns) {
      container.style.gridTemplateRows = `repeat(${rows}, 100px`;
      container.style.gridTemplateColumns = `repeat(${columns}, 100px`;
      
   
      for(var i = 0; i < totalCells; i++) {
      var cell = document.createElement('div');
      container.appendChild(cell).className = 'item';
      console.log('Test1'); 
      }
}
makeRowsAndColumns(numberOfColumnsAndRows, numberOfColumnsAndRows);

var addListenerToClass = document.getElementsByClassName('item');
for (var i = 0; i < addListenerToClass.length; i++) {
      addListenerToClass[i].addEventListener('mouseover', respondMouseOver);
}

// var addListenerToClass = document.getElementsByClassName('item');
// for (var i = 0; i < addListenerToClass.length; i++) {
//       addListenerToClass[i].addEventListener('mouseover', respondMouseOver);
// }


// This solution to the above problem was provided through Reddit. It was explained that my issue was 
// that my loop was going through every <div> turning them all red when what I needed to do was turn them back 
// to their default color only targeting the specified <div> 

function respondMouseOver(e){
      let div2 = document.querySelectorAll('.item') // this puts all the square <divs> into a nodelist with the 
                                                    // class name .item       
      for(div of div2){ div.style.background="default color"}
      e.target.style.background= 'red';
      }


function resetColor(e) {
      let div3 = document.querySelectorAll('.item')
      for(div of div3){div.style.background='#F2F2F2'}
}

// three below functions are connected to buttons: small, medium, large
function resizeSmall (rows, columns) {
      container.style.gridTemplateRows = `repeat(${rows}, 25px`;
      container.style.gridTemplateColumns = `repeat(${columns}, 25px`;
      console.log(cSize);
      
      for(var i = 0; i < totalCells; i++) {
      var cell = document.createElement('div');
      container.appendChild(cell).className = 'item';
      console.log('Test1'); 
      }
}

function resizeMedium (rows, columns) {
      container.style.gridTemplateRows = `repeat(${rows}, 50px`;
      container.style.gridTemplateColumns = `repeat(${columns}, 50px`;
      console.log(cSize);
      
      for(var i = 0; i < totalCells; i++) {
      var cell = document.createElement('div');
      container.appendChild(cell).className = 'item';
      console.log('Test1'); 
      }
}

function resizeLarge (rows, columns) {
      container.style.gridTemplateRows = `repeat(${rows}, 100px`;
      container.style.gridTemplateColumns = `repeat(${columns}, 100px`;
      console.log(cSize);
      
      for(var i = 0; i < totalCells; i++) {
      var cell = document.createElement('div');
      container.appendChild(cell).className = 'item';
      console.log('Test1'); 
      }
}






function addEventListener2 (){

      for (var i = 0; i < addListenerToClass.length; i++) {
            addListenerToClass[i].addEventListener('mouseover', changeColorToBlack);
      }
}

       
function changeColorToBlack (e) {
      let div2 = document.querySelectorAll('.item')     
      for(div of div2){ div.style.background="default color"}
      e.target.style.background= 'black';
      }

function addEventListener3 (){

      for (var i = 0; i < addListenerToClass.length; i++) {
            addListenerToClass[i].addEventListener('mouseover', changeColorToRed);
      }
}

            
function changeColorToRed (e) {
      let div2 = document.querySelectorAll('.item')     
      for(div of div2){ div.style.background="default color"}
      e.target.style.background= 'red';
      }

function addEventListener4 (){

      for (var i = 0; i < addListenerToClass.length; i++) {
            addListenerToClass[i].addEventListener('mouseover', changeColorToWhite);
      }
}

            
function changeColorToWhite (e) {
      let div2 = document.querySelectorAll('.item')     
      for(div of div2){ div.style.background="default color"}
      e.target.style.background= 'white';
      }










            
            
            
            
            
            
            
            
            