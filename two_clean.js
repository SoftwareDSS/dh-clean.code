// Created by Antonio González, May 2022

const fs   = require( "fs" );
const path = require( "path" );

function inscribeUserToCourse( name, age, courseId ) {

    const user = createUserObject( name, age, courseId );

    let users   = readJsonFromFile( "./users_clean.json" );
    let courses = readJsonFromFile( "./courses_clean.json" );

    users.push( user );

    courses = addUserToCourse( user, courses, courseId );

    writeJsonFile( "./users_clean.json", users );
    writeJsonFile( "./courses_clean.json", courses );

    console.log("User has been subscribed");

}

function createUserObject( name, age, courseId ) {

    return {
        id: Date.now(),
        age: age,
        courseId: courseId,
        name: name,
    }

}

function readJsonFromFile( jsonPath ) {

    let json = fs.readFileSync( path.resolve( jsonPath ), 'utf8' );

    return JSON.parse( json );

}

function addUserToCourse( user, courses, courseId ) {

    for( let i in courses ){

        if( courses[ i ].id === courseId ){
            
            user.userId = user.id;
        
            delete user.id;

            courses[ i ].users.push( user );

        }

    }

    return courses;

}

function writeJsonFile( jsonPath, json ) {

    json = JSON.stringify( json );

    fs.writeFileSync( path.resolve( jsonPath ), json, { encoding: "utf-8" } );

}

inscribeUserToCourse( "Max", 28, "FS101" );