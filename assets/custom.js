// document ready block
$(function() {

 	//TODO: Make a fresh N by M grid table
	function makeGrid() {
	 	//Select size input -- get values from choose grid size form
	 	const gridHeight = $('#input_height').val();
	 		if(gridHeight > 100) {
	 			alert('please keep grid height 100 or less');
    			gridHeight = 100;
			}
	 	const gridWidth = $('#input_width').val();
	 		if(gridWidth > 100) {
	 			alert('please keep grid width 100 or less');
    			gridWidth = 100;
			}
		//access design canvas table
		const table = $('#pixel_canvas');

		//Remove all child nodes from the table so a fresh one can be made
  	table.empty();
		//Create the table rows
		for (let i = 0; i < gridHeight; i++) {
			// create new tr and append to table
			table.append('<tr></tr>');
			//Create the table data cell
			for (let j = 0; j < gridWidth; j++) {
				// create new td and append to tr
				table.children().last().append('<td></td>');
			}
		}
		//TODO: Add event listener for a number of elements, on every td element
		$('td').click(function(evt) {
			// Get selected color input and store
			let pickedColor = $('#colorPicker').val();
			//Listen for just the clicked on cell then use the stored color value to update it's background color
			$(evt.target).css('background-color', pickedColor);

			// TODO: Remove a pixel color from the table if needed on double click
			$(table.find('td')).dblclick(function(){
            	$(this).removeAttr('style');
         	});
		});//event listener function for color picker
	};//make grid function

	//access submit button
	const submit = $('input[type="Submit"]');
	/*TODO: Use event listener to trigger grid creation --
	call makeGrid function on click of submit button.
	 */
	submit.click(function(evt) {
		// to stop page refresh after hitting submit button
		evt.preventDefault();
		// console.log('default prevented');
		makeGrid();
	});
}); //document ready block









