function helpFn(){
    console.log(`
    you entered command is wrong. please try below commands
    node <file> <command> <folder> <argument>

    node mycli view "E:\yani html\javascript\filesystemorganiser\activity\mycli.js" flat
    node mycli organize "E:\yani html\javascript\filesystemorganiser\activity\mycli.js" tree
    node mycli view "E:\yani html\javascript\filesystemorganiser\activity\mycli.js" <optional>
    node mycli help
    `)
}
module.exports ={
    help:helpFn
}