//VERSION 10

//PART 01 DEFINE VARIABLES
//SELECT HEIGHT/ROWS
let height = $('#input_height');
//SELECT WIDHT/COLUMNS
let width = $('#input_width');
//SELECT COLOR INPUT
let color = $('#colorPicker');
//SELECT TABLE ELEMENT
let table = document.getElementById('pixel_canvas');

//PART 02 DEFINE THE FUNCTION
function makeGrid() {
    let result = "";
    //This will delete the previous grid if any
    table.innerHTML = "";
    for (let r = 0; r < height.val(); r++) {
        //insert <tr> into table
        var row = table.insertRow(r);
        for (let c = 0; c < width.val(); c++) {
        //insert <td> into <tr>
        var cell = row.insertCell(c);
        }
    }
    //Click a cell in the grid to fill that cell with the chosen color
    $( 'td' ).click(function() {
        $( this ).css( 'background-color', color.val());
    });
    return result;
};

//PART 03 WHEN SIZE IS SUBMITTED BY THE USER, CALL MAKEGRID()
$('#sizePicker').submit(function( event ) {
    makeGrid();
    event.preventDefault();
});
