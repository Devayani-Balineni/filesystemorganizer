let fs=require("fs");
let path=require("path");
function viewFn(src,mode){
    //console.log("viewing your file");
    if(mode=="flat")
        viewHelperFlat(src);
    else
        viewHelperTree(src,"|");
}
function checkFileOrFolder(path){
    //it is a file or folder
    let isFileOrFolder=fs.lstatSync(path).isFile();
    return isFileOrFolder;
}function viewHelperFlat(src){
    //it is a folder or file
    let isFile=checkFileOrFolder(src);
    if(isFile==true){//base case
        console.log(src,"*");
    }else{//folder=>folder1,file
        console.log(src);
        let childrens=fs.readdirSync(src);
        for(let i=0;i<childrens.length;i++){
            let child=childrens[i];//not a complete path just file or folder name
            let childpath=path.join(src,child);
            //console.log(childpath);
            viewHelperFlat(childpath);
        }
    }
}
function viewHelperTree(src,indent){
    //it is a folder or file
    let isFile=checkFileOrFolder(src);
    if(isFile==true){//base case
        console.log(indent,path.basename(src),"*");
    }else{//folder=>folder1,file
        console.log(indent,path.basename(src));
        let childrens=fs.readdirSync(src);
        for(let i=0;i<childrens.length;i++){
            let child=childrens[i];//not a complete path just file or folder name
            let childpath=path.join(src,child);
            //console.log(childpath);
            viewHelperTree(childpath,indent+"____");
        }
    }
}
module.exports={
    view:viewFn
}