function soloAdmin(req,res,next){
    console.log("cookie:",req.headers.cookie)
}

function soloPublico(req,res,next){

}

export const methods = {
    soloAdmin,
    soloPublico
}