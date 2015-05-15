"use strict";

var _ = require( "lodash" );
var flow = require( "lodash/function/flow" );
var partial = require( "lodash/function/partial" );

function getId( data ) {
	return data.id;
}

function areEqual( expected, actual ) {
	return expected === actual;
}

var data = {
	id: "1"
};

var fullComposedFunction = _.flow( getId, _.partial( areEqual, "1" ) );
var fullResult = fullComposedFunction( data );

console.log(
	"Using _.flow and _.partial was successful. Result: ",
	fullResult,
	"\n"
);

try {
	var composedFunction = flow( getId, partial( areEqual, "1" ) );
	var result = composedFunction( data );

	console.log( "Test passed with a result of: ", result );
}
catch ( ex ) {
	console.error( "Test failed. Exception:" );
	console.error( ex.stack );
}
