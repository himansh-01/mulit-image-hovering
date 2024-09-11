var elem1 = document.querySelectorAll(".elem")

elem1.forEach(function(val){

    val.addEventListener("mousemove", function(dets){
        val.childNode[3].style.opacity = 1
    })

    val.addEventListener("mouseleave", function(dets){
        val.childNodes[3].style.opacity = 0
    })

    val.addEventListener("mousemove", function(dets){
        val.childNodes[3].style.left = dets.x+"px"
    })
})
