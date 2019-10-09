btn = document.querySelectorAll("button")

a = document.getElementById("id1")
s = document.getElementById("id2")
d = document.getElementById("id3")
f = document.getElementById("id4")
g = document.getElementById("id5")
h = document.getElementById("id6")
j = document.getElementById("id7")
k = document.getElementById("id8")
l = document.getElementById("id9")

aud1 = document.getElementById("aud1")
aud2 = document.getElementById("aud2")
aud3 = document.getElementById("aud3")
aud4 = document.getElementById("aud4")
aud5 = document.getElementById("aud5")
aud6 = document.getElementById("aud6")
aud7 = document.getElementById("aud7")
aud8 = document.getElementById("aud8")
aud9 = document.getElementById("aud9")




window.addEventListener("keydown", myfun=()=>{
    var str = String.fromCharCode(event.which)
    console.log(str);
    
    if(str == "A"){
        a.style.color = "red"
        aud1.play();
        a.style.background = "blue"
        
    }
    else{
        if(str == "S"){
            s.style.color = "green"
            aud2.play()
            s.style.background = "red"

        }
        else{
            if(str == "D"){
                d.style.color = "yellow"
                aud3.play()
                d.style.background = "green"
                
            }
            else{
                if(str == "F"){
                    f.style.color = "blue"
                    aud4.play()
                    f.style.background = "cyan"

                }
                else{
                    if(str == "G"){
                        g.style.color = "cyan"
                        aud5.play()
                        g.style.background = "grey"
                    }
                    else{
                        if(str == "H"){
                            h.style.color = "pink"
                            aud6.play()
                            h.style.background = "yellow"
                        }
                        else{
                             if(str == "J"){
                                j.style.color = "orange"
                                aud7.play()
                                j.style.background = "white"
                             }
                             else{
                                 if(str == "K"){
                                    k.style.color = "skyblue"
                                    aud8.play()
                                    k.style.background = "cyan"
                                 }
                                 else{
                                     if(str == "L"){
                                         l.style.color = "grey"
                                         l.style.background = "skyblue"
                                         aud9.play()
                                     }
                                     else{
                                         console.log(str);
                                         
                                     }
                                 }
                             }
                        }
                    }
                }
            }
        }
    }
})

window.addEventListener("keyup", myfun2=()=>{
    for(var i = 0; i<=8; i++){
        btn[i].style.color = "white"
        btn[i].style.background= "transparent"
    }
})