const parseEnv = () => {
    let args = process.env;
    let validArgsArray = [];
    for(let arg in args){
        if(/^RSS_.*/.test(arg)){
            validArgsArray.push(`${arg}=${args[arg]}`);
        }
    }
    console.log(validArgsArray.join('; '));
};

parseEnv();