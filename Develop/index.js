// req inquierer, axios, genererateMarkdown.js, fs

// ask the user a bunch of questions
// -- use inquirer to ask a bunch of questions
// -- get the object w/ all the answers
// then block
// call out to the users gihub to get prof pic and email
// -- use axios to make an http call to dudes github -- promise
// -- then block
// -- sift thru that response and find the info u need
// -- create an obj w/ all that info
/*
    {
        title: "who is the black panther",
        profilePicUrl: "http://princeAchu"
    }
*/
// pass all of that crap to the genMarkdown funct
// -- catch the response in a var (makr)
// use that result to create a .md file (README.MD)
// -- fs.writeFile('Readme.md', makr, function(err) {
// if (err) {
//         console.log(err)
// }
//     console.log('IM DONE')
// })

const questions = [];

function writeToFile(fileName, data) {}

function init() {}

init();
