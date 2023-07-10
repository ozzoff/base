let hamburger=document.querySelector(".hamburger")
let close=document.querySelector(".nav-close")

hamburger.addEventListener("click", ()=>{
    
    document.querySelector(".nav-bar ").classList.add("open")
})
close.addEventListener("click", ()=>{
    
    document.querySelector(".nav-bar").classList.remove("open")
})


let about=document.querySelector(".nav-bar")
        let images=document.querySelectorAll(".image")
        let btns=document.querySelectorAll(".nav-link")

        about.addEventListener("mouseover", (e)=>{
            let id=e.target.dataset.id
            if(id){
                btns.forEach(btn=>{
                    btn.classList.remove("current")

                    e.target.classList.add("current")
                })

                images.forEach(image=>{
                    image.classList.remove("active-img")
                })

                let elem=document.getElementById(id)
                elem.classList.add("active-img")
            }
        })













window.addEventListener("scroll", (e)=>{
    let sc=window.scrollY

    if(sc>3628){
        document.querySelector("body").classList.add("scrolled")
        document.querySelector(".title-line").classList.remove("scrolled")
        document.querySelector(".hamburger i").style.background="black"
        document.querySelector(".hamburger i").style.color="white"
        document.querySelector(".scroll-line").style.background="black"
        
    }

    else{
        document.querySelector("body").classList.remove("scrolled")
        document.querySelector(".title-line").classList.add("scrolled")
        document.querySelector(".hamburger i").style.background="white"
        document.querySelector(".hamburger i").style.color="black"
        document.querySelector(".scroll-line").style.background="white"
        

    }

})














let next=document.querySelector(".next")
        let prev=document.querySelector(".prev")
        let img=document.querySelector(".slider-icons")

        let current=1
        
        next.addEventListener("click",()=>{
            current++
            clearTimeout(time)
            update()
        })
        let time;
        update()

        function update(){
            if(current>8){
                current=1

            }

            else if(current<1){
                current=8
            }
            img.style.transform=`translateX(-${(current-1)*img.clientWidth}px)`
            time=setTimeout(()=>{
                current++
                update()
            }, 400)

        }


        












        prev.addEventListener("click",()=>{
            current--
            clearTimeout(time)
            update()
        })











let dot=document.querySelector(".cursor-dot")
let outline=document.querySelector(".cursor-outline")




        window.addEventListener("mousemove",function(e){
            let posX=e.clientX
        
            let posY=e.clientY
        
            dot.style.left=`${posX}px`
            dot.style.top=`${posY}px`
        
            //cursoroutline.style.left=`${posX}px`
            //cursoroutline.style.top=`${posY}px`
        
        
            outline.animate({
                left:`${posX}px`,
                top:`${posY}px`,
        
            },{duration:200,fill:"forwards"})
        })
        
        
        








let news1=document.querySelector(".news1")
let news2=document.querySelector(".news2")

let newsImg1=document.querySelector(".news1-img")
let newsImg2=document.querySelector(".news2-img")


news1.addEventListener("mouseover", ()=>{
    newsImg1.classList.add("news-show")

    window.addEventListener("mousemove",function(e){
        let posX=e.clientX
    
        let posY=e.clientY
    
        newsImg1.animate({
            left:`${posX}px`,
            top:`${posY}px`,
     
        },{duration:5000,fill:"forwards"})
    
        
    })
})

news1.addEventListener("mouseout", ()=>{
    newsImg1.classList.remove("news-show")
})




news2.addEventListener("mouseover", ()=>{
    newsImg2.classList.add("news-show")
    window.addEventListener("mousemove",function(e){
        let posX=e.clientX
    
        let posY=e.clientY
    
        newsImg2.animate({
            left:`${posX}px`,
            top:`${posY}px`,
    
        },{duration:5000,fill:"forwards"})
    
        
    })
})

news2.addEventListener("mouseout", ()=>{
    newsImg2.classList.remove("news-show")
})



window.onscroll=function(){
    let pos=document.documentElement.scrollTop;
    let calc_height=document.documentElement.scrollHeight-document.documentElement.clientHeight
    let scroll=pos*100 / calc_height
    document.querySelector(".scroll-line").style.width =scroll+ "%"
}






let intro=document.querySelector(".open-intro")
let logo=document.querySelector(".logo-header")
let logospan=document.querySelectorAll(".intro-logo")


window.addEventListener("DOMContentLoaded", ()=>{
    setTimeout(()=>{
        logospan.forEach((span,idx)=>{
            setTimeout(()=>{
                span.classList.add("activation");
            },(idx+1)*400)
        })


        setTimeout(()=>{
            logospan.forEach((span,idx)=>{
                setTimeout(()=>{
                    span.classList.remove("activation")
                    span.classList.add("fade")
                }, (idx+1)*50)
            })
        },2000)


        setTimeout(()=>{
            intro.style.top="-100vh"
        }, 2300)
    })
})