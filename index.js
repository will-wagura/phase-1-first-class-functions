function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function returnsANamedFunction(){
    }
}

function returnsAnAnonymousFunction(){
    return function(){};
}