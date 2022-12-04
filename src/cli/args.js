const parseArgs = () => {
    let args = process.argv;
    let validArgsArray = [];
    args.forEach((value, i) => {
        if(/^--\s*/.test(value)){
            validArgsArray.push(`${value} is ${args[++i]}`);
        }
    });
    console.log(validArgsArray.join(', '));
};

parseArgs();

