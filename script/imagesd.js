window.onload = (event) => {
        
    const leftbtn1 = document.querySelector('.toleft');
    const rightbtn=document.querySelector('.toright');
    let slideNo = 0;
    rightbtn.addEventListener("click",function goSlide1(){
        if (slideNo<3){
            slideNo += 1;
            document.querySelector(`#slide${slideNo}`).style.transform=`translateX(${-100*slideNo}%)`;
            }
            console.log("버튼확인"+rightbtn)
        }
        );
    leftbtn1.addEventListener("click",function goSlide2(){
        if(slideNo>0){
            slideNo -= 1;
            const whatwillchange=document.querySelector(`#slide${slideNo+1}`).style;
            whatwillchange.transform=`translateX(0%)`;
            }
        }
    );

    //--------------------------------------------------



    const leftbtn2 = document.querySelector('.toleft2');
    const rightbtn2 =document.querySelector('.toright2');
    console.log(rightbtn2)
    let slideNo2 = 0;


    rightbtn2.addEventListener("click",function goSlide3(){
        
        if (slideNo2<3){
            slideNo2 += 1;
            document.querySelector(`#slidee${slideNo2}`).style.transform=`translateX(${-100*slideNo2}%)`;
            }
            console.log("버튼확인"+rightbtn2) 
        }
        );
    leftbtn2.addEventListener("click",function goSlide4(){
        if(slideNo2>0){
            slideNo2 -= 1;
            const whatwillchange=document.querySelector(`#slidee${slideNo2+1}`).style;
            whatwillchange.transform=`translateX(0%)`;
            }
        }
    );

}
