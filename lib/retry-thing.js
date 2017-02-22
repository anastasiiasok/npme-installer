
module.exports = function(thing,times,cb){

  var attempts = 0
  (function retry(){
    thing(function(err,data){
      --times
      attempts++
      if(!err || times <= 0) return cb(err,data,attempts)
      retry()
    })
  }())
}


