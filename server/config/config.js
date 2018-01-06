const config = {
    production:{
        KODE: process.env.KODE,
        DATABASE: process.env.MONGODB_URI,
        PORT: process.env.PORT
    },

    defualt:{
        KODE:"password123",
        DATABASE: "//mongodb://localhost:27017/Bookie_app",
        PORT: 3000 

    }
}

exports.get = function get(env){
  
    return config[env] || config.defualt
}