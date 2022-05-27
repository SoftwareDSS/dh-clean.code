// Created by Antonio González, May 2022

function saveEmployee( employee ) {

    validateEmployee( employee );

}

function validateEmployee( employee ) {

    if( validateText( employee.name ) || validateEmail( employee.email ) || validateNumber( employee.age ) || validateText( employee.role ) || validateText( employee.countryId ) || validateText( employee.startDate )) {
        console.log( "Data is required" );
    }
    else{
        // Data base
        console.log("Created", employeeData);
    }

}

function validateText( value ) {

    if( !value || value == '' )
        return false;
    else 
        return true;

}

function validateEmail( value ) {

    return value.includes( '@' );

}

function validateNumber() {

    const regex = /[0-9]+/;
    regex.test( regex );

}

const employee = {

    age: 25,
    countryId: "ID67843H",
    email: "ada@domain.com",
    startDate: "2022/05/27",
    name: "Ada",
    role: "Developer"

};

saveEmployee( employee );