//function to create seven selects in '#senior' with the
//course options
function seniorClasses() {
	$('#screen').append(`
			<form id='senior' class='classes'>
				<fieldset>
					<legend>Classes</legend>
				</fieldset>
			</form>
	`);
	
	var sel1 = createSelect('#screen fieldset', 'first', "First Period:");
	var classVals = ['math', 'art'];
	var classText = ["Pre-calc", "Sketching"];
	fillSelect(sel1, classVals, classText);
}

//helper function to create a label and select
//with an id and label text inside specified object
function createSelect(place, id, label) {
	$(place).append(`
			<label for=` + id + `>` + label + `</label>
			<select id=` + id + `></select>
	`);
	return $(place + ' select');
}

//helper function to fill a select with some values and text
function fillSelect(place, value, text) {
	for (i = 0; i < value.length; i++) {
		place.append(`
				<option value=` + value[i] + `>` + text[i] + `</option>
		`);
	}
}

//function to gray out a selection that's already
//been selected
	//$('selected thing').attr('disabled', 'disabled')