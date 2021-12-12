firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("Signin.html")
    }
})