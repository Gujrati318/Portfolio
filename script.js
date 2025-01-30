//turn page when click next btn and prev button 
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500)
        }
        else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500)
        }
    }
})

//contact me btn 
const pages =document.querySelectorAll('.book-page.page-right');
const contactMebtn = document.querySelector('.btn.Contact-Me');


contactMebtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');

            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500)

        }, (index + 1) * 200 + 100)
    })
}


 //create reversew index function 
 let totalPages = pages.length;
 let pageNumber = 0;

 function reverseindex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1 ;
    }
 }

 // back profile butn when click 
  const backProfileBtn = document.querySelector('.back-profile');

 backProfileBtn.onclick = () => {
     pages.forEach((_, index) => {
        setTimeout(() => {
            reverseindex();
            pages[pageNumber].classList.remove('turn');


            setTimeout(() => {
                reverseindex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500)
        }, (index + 1) * 200 + 100)
     })
 }



 //opening animation
  const coverRight = document.querySelector('.cover.cover-right');
  const pageLeft = document.querySelector('.book-page.page-left');

  //opening animation (cover  right)
  setTimeout(() => {
    coverRight.classList.add('turn');
  }, 2100)

  setTimeout(() => {
    coverRight.style.zIndex = -1;
  }, 2800)

//opening amination leftpage and animation

setTimeout(() => {
    pageLeft.style.zIndex = 20;
  }, 3200)



  //opening animation (all pages  right)
  pages.forEach((_, index) => {
    setTimeout(() => {
        reverseindex();
        pages[pageNumber].classList.remove('turn');


        setTimeout(() => {
            reverseindex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500)
    }, (index + 1) * 200 + 2100)
 })