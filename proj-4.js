let movieData = {
    "The Darjeeling Limited": {
      plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
      cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
      runtime: 151,
      rating: 7.2,
      year: 2007,
    },
    "The Royal Tenenbaums": {
      plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
      rating: 7.6,
      year: 2001,
      cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
      runtime: 170,
    },
    "Fantastic Mr. Fox": {
      year: 2009,
      plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
      cast: ["George Clooney","Meryl Streep","Bill Murray", "Jason Schwartzman",],
      runtime: 147,
      rating: 7.9,
    },
    "The Grand Budapest Hotel": {
      rating: 8.1,
      runtime: 159,
      year: 2014,
      plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    },
  };

  const addFilm = document.forms['myForm'];
  addFilm.addEventListener('submit', function(e){
    e.preventDefault();
  const myForm = document.getElementById('myForm');
  const formData = new FormData(myForm);
  const newFilm = Object.fromEntries(formData.entries());

  movies.push(newFilm); 
  document.forms[0].reset();  //clear form of entries
  addData([newFilm])

});

//create a function to transform movieData into an array of objects
const cleanData = (inputData) => {
  return Object.entries(inputData).map((movieEntry) => {
    return {
      title: movieEntry[0],
      ...movieEntry[1]
    };
  });
};

//make headers to create and refer to later
const columnHeaders = ["title", "plot", "year", "rating", "runtime", "cast"];

//make referring back to transformed data easier
  const movies = cleanData(movieData);


  //this function creates the table and adds it to the HTML
  function addData(data){
    const body = document.getElementById("myDiv")
    for(i = 0; i < data.length; i++){
      var row = `<tr>
                <td class ="film">${data[i].title}
                <td class ="film">${data[i].rating}
                <td class ="film">${data[i].runtime}
                <td class ="film">${data[i].cast}
                <td class ="film">${data[i].plot}
                <td class ="film">${data[i].year}
                
                `
      myTable.innerHTML+=row
    }
  };

    

  //used + adapted code from w3schools to help sort the table

  function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    
    //Make a loop that will continue until no switching has been done:*/
    while (switching) {
     
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      
      //Loop through all table rows
      for (i = 0; i < rows.length ; i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        
        //Get the two elements you want to compare,one from current row and one from the next
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i+1].getElementsByTagName("TD")[0];
        //check if the two rows should switch place:
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      
      if (shouldSwitch) {
        //If a switch has been marked, make the switch and mark that a switch has been done
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
  addData(movies)

  
  



  