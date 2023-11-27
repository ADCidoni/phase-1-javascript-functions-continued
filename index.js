function saturdayFun(someActivity = "roller-skate"){
    return`This Saturday, I want to ${someActivity}!`
}
saturdayFun("bathe my dog");

const mondayWork = function(someActivity = "go to the office"){
    return `This Monday, I will ${someActivity}.`
}
mondayWork("work from home");
function wrapAdjective (wrapper = "*") {
    const innerFunction = function (someAdjective = "special") {
        return `You are ${wrapper}${someAdjective}${wrapper}!`
    }
    return innerFunction
}
wrapAdjective("||")("a dedicated programmer")