const hamburger = document.querySelector('.hamburger');

function toggleHam(){
  const ham_layer = document.querySelector('.ham_layer');
  const links = document.querySelector('.links');

  ham_layer.classList.toggle('active');
  hamburger.classList.toggle('active');

  if (links.classList.contains('active')) {
    links.classList.remove('active');
  } else {
    setTimeout(() => {
      links.classList.add('active');
    }, 300)
  }
}

hamburger.addEventListener('click', toggleHam);



// Details Page
function stopEventTravel(e){
   e.stopPropagation()
}

function counter(target, op){
   if(!target) return;
   const parent = document.querySelector(`.${target}`);
   if(!parent) return;
   const inp = parent.querySelector('input');
   if(!inp) return;
   const amount = document.querySelector('#inp_amt');
   if(!amount) return;
   
   let pkg_amt = parseInt(amount.getAttribute('data-val') || 0)
   
   let field = inp.getAttribute('data-field');
   
   let val = parseInt(inp.getAttribute('data-val') || 0);
   let cost = 0;
   let lower_bound=0;

   if(field==='Adults'){
        lower_bound = pkg_cost.adults;
        cost = pkg_cost.adult_cost;
    }else if(field==='Kids') {
       lower_bound = pkg_cost.kids;
       cost = pkg_cost.kid_cost;
    }else if(field==='Rooms'){
       lower_bound = pkg_cost.rooms;
        cost = pkg_cost.room_cost;
    }

   switch(op){
       case '+':{
         
           if(val+1>10) return;

           inp.value=`${field}(${val+1})`;
           inp.setAttribute('data-val',val+1);
           amount.value=`Rs. ${pkg_amt+cost || ''}`;
           amount.setAttribute('data-val',pkg_amt+cost);
           break;
       }
       case '-':{
          
           if(val-1<lower_bound){
               inp.value=`${field}(${lower_bound})`;
               inp.setAttribute('data-val',0);
               return;
           }

           inp.value=`${field}(${val-1})`;
           inp.setAttribute('data-val',val-1);
           amount.value=`Rs. ${pkg_amt-cost || ''}`;
           amount.setAttribute('data-val',pkg_amt-cost);
           break;
       }
       default:{

       }
   }
}

function promptActive(type){
   const prompt = document.querySelector('.prompt_wrap');
   
   prompt.classList.add('active');

   if(type==='booking'){
       const guideline = document.querySelector('.prompt_instruct');
       const book_form = document.querySelector('.prompt_book');
       guideline.classList.add('active');
       book_form.classList.remove('active');
   }
   
   if(type==='login'){
        toggleHam();
        const login_form = document.querySelector('.login');
        login_form.classList.add('active');
    }

}

function changeSlide(activeSlide,e,elem=""){
   const guideline = document.querySelector('.prompt_instruct');
   const book_form = document.querySelector('.prompt_book');
   
   switch(activeSlide){
       case 'instruct':{
           guideline.classList.add('active');
           book_form.classList.remove('active');
           break;
       }
       case 'booking':{
           guideline.classList.remove('active');
           book_form.classList.add('active');
           break;
       }
       case 'book_ext':{
           if(e) e.preventDefault();
           const skewBg = document.querySelector(`${elem} .skew_bg`);
           const leftHalf = document.querySelector(`${elem} .left_half`);
           const rightHalf = document.querySelector(`${elem} .right_half`);
       
           skewBg.classList.toggle('ext');
           leftHalf.classList.toggle('invisible');
           rightHalf.classList.toggle('visible');

           if(elem==='.booking') set_package_cost();
           break;
       }
       default:{
           guideline.classList.add('active');
           book_form.classList.remove('active');
       }
   }
}

function promptClose(type){
   const prompt = document.querySelector('.prompt_wrap');
   prompt.classList.remove('active');
   
   if(type==='booking'){
       const guideline = document.querySelector('.prompt_instruct');
       const book_form = document.querySelector('.prompt_book');
       
       if(guideline) guideline.classList.remove('active');
       if(book_form) book_form.classList.remove('active');

       const skewBg = document.querySelector('.skew_bg');
       const leftHalf = document.querySelector('.left_half');
       const rightHalf = document.querySelector('.right_half');
       
       if(skewBg) skewBg.classList.remove('ext');
       if(leftHalf) leftHalf.classList.remove('invisible');
       if(rightHalf) rightHalf.classList.remove('visible');

       const login_form = document.querySelector('.login');
       if(login_form) login_form.classList.remove('active');
   }
}