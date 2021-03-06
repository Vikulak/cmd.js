/**
 * Command: join('-')(1, 2, 3) === ['1-2-3']
 * @author Nate Ferrero
 */
cmd.all('join', function (args, vals) {
    return args.map(function (arg) {
        return vals.join(arg);
    });
});
