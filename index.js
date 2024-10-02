//define missing functions:
function introduction(name){
    return `Hi, my name is ${name}.`;
}

function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function introductionWithLanguageOptional(name, language = "JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

//involke functions:
console.log(introduction("Max"));
console.log(introductionWithLanguage("Jack", "Java"));
console.log(introductionWithLanguageOptional("Helen"));
console.log(introductionWithLanguageOptional("Nick", "Python"));