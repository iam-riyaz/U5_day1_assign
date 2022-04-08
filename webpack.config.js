const path=require("path")

module.exports=
{
    entry:"./src/index.js",
    output:{
        path:path.resolve(".","build"), //folder name
        filename:"main.js" //file name
    },
    mode:"development",
    module:{
        rules:[{test: /\.css$/,use:["style-loader","css-loader"]},
        {test: /\.png$/,use: "file-loader"}]
    },
    

}