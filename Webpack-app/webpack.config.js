const path=require('path');

module.exports={
    entry:'./src/app.js',//Entry point of our program
    output:{
        path:  path.join(__dirname,'public'),
        filename:'bundle.js'//Give the file name to save in public folder
    },
    module:{
        rules:[{
            loader:'babel-loader',
            test:/\.js$/,
            exclude:/node_modules/
        },{
            test:/\.s?css$/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool:'eval-cheap-module-source-map',
    devServer:{
        static:{
            directory:path.join(__dirname,'public')
        }
    }
};