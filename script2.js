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

function redirect(link){
    const a = document.createElement('a');
    a.href=link;
    a.click();
}

function register(e){
    e.preventDefault();
    const name = document.querySelector('#reg_name').value;
    const email = document.querySelector('#reg_email').value;
    const pass = document.querySelector('#reg_pass').value;
    const confirm_pass = document.querySelector('#reg_confirm').value;

    console.log(name,email,pass,confirm_pass);

    if(!name) return;
    if(!email) return;
    if(!pass) return;
    if(!confirm_pass) return;
    if(pass!==confirm_pass) return;

    const username = name.split(' ').join('_');

    const data={
        username: username,
        email: email,
        password: pass
    }

    fetch('http://localhost:1337/api/auth/local/register',{
        method: "POST",
        mode:"cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    .then((res)=>{
        return res.json();
    })
    .then((parsed)=>{
        document.querySelector('#reg_name').value="";
        document.querySelector('#reg_email').value="";
        document.querySelector('#reg_pass').value="";
        document.querySelector('#reg_confirm').value="";
        setUser(parsed)
        redirect('/profile.html');
    })

}

function login(e){
    e.preventDefault();

    const email = document.querySelector('#log_email').value;
    const pass = document.querySelector('#log_pass').value;

    if(!email) return;
    if(!pass) return;

    const data={
        identifier: email,
        password: pass
    }

    fetch('http://localhost:1337/api/auth/local',{
        method: "POST",
        mode:"cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    .then((res)=>{
        return res.json();
    })
    .then((parsed)=>{
        document.querySelector('#log_email').value="";
        document.querySelector('#log_pass').value="";
        setUser(parsed);
        redirect('/profile.html');
    })

}

function setUser(data){
    localStorage.setItem("jwt", data.jwt || "");
    localStorage.setItem("user", JSON.stringify(data.user) || {});
}

async function isLoggedIn(cb){
    if(!localStorage.getItem('jwt') || !localStorage.getItem('user'))
        return false;

    const auth_token = `Bearer ${localStorage.getItem('jwt')}`;

    const res = await fetch('http://localhost:1337/api/users/me?populate=*',{
        method:"GET",
        headers: {
            Authorization: auth_token
        },
    })

    const parsed = await res.json(); 
    if(parsed && cb) cb(parsed);
    if(parsed) return true;
    
    return false;
}

async function setNavLink(){
    const links = document.querySelector('.links');
    const new_link = document.createElement('a');

    if(await isLoggedIn()){
        new_link.textContent="Profile";
        new_link.addEventListener('click',(e)=>{
            redirect('/profile.html')
        })
    }else{
        new_link.textContent="Login";
        new_link.addEventListener('click',(e)=>{
            promptActive('login')
        })
    }

    links.appendChild(new_link);
}

function setProfileCard(data){
    const userDetails = document.querySelector('.profile_card .mid_details');
    const name = userDetails.querySelector('h1');

    let refined_name = data.username?.split('_').join(' ');

    name.textContent= refined_name;

    console.log(data.bookings);
    const orderBookings = document.querySelector('.order_bookings');

    data.bookings.forEach((inf,i)=>{
        const orderCard = document.createElement('div');
        orderCard.classList.add('order_card');
        
        const pkgTitle = document.createElement('div');
        const title = document.createElement('h1');
        pkgTitle.classList.add('pkg_title');

        title.textContent=inf.package_name;
        pkgTitle.appendChild(title);


        const pkgFields = document.createElement('div');
        pkgFields.classList.add('pkg_fields');

        Object.entries(inf).forEach(([key,val])=>{
            const fieldDisplay = document.createElement('div');
            fieldDisplay.classList.add('field_display');

            const label = document.createElement('label');
            label.textContent=key;
            const input = document.createElement('input');
            input.value=val;
            input.readOnly=true;

            fieldDisplay.append(label,input);
            pkgFields.appendChild(fieldDisplay)
        })
            
        orderCard.appendChild(pkgTitle);
        orderCard.appendChild(pkgFields);
        orderBookings.appendChild(orderCard);
    })

}

async function setUserProfile(){
    if(!await isLoggedIn(setProfileCard)){
        Logout();
        redirect('/index.html');
        return;
    } 
    setNavLink();
}

function Logout(){
    localStorage.clear();
    redirect('/index.html')
}

hamburger.addEventListener('click', toggleHam);



// Details Page
function stopEventTravel(e){
   e.stopPropagation()
}

function getDateDifference(startDate, endDate) {
    const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
    const start = new Date(startDate);
    const end = new Date(endDate);
  
    // Calculate the difference in days
    const diffInDays = Math.round(Math.abs((start - end) / oneDay));
  
    return diffInDays;
}  

function setDayAmount(){
    const amount = document.querySelector('#inp_amt');
    if(!amount) return;

    let pkg_amt = parseInt(amount.getAttribute('data-val') || 0)

    const checkIn = document.getElementById('check-in');
    const checkOut = document.getElementById('check-out');

    if(!pkg_amt || !checkIn.value || !checkOut.value) return;

    pkg_cost.checkIn=checkIn.value;
    pkg_cost.checkOut=checkOut.value;
    const days = getDateDifference(checkIn.value, checkOut.value);

    amount.value=`Rs. ${pkg_amt*days || ''}`;
    amount.setAttribute('data-val',pkg_amt*days);
    pkg_cost.amount=pkg_amt*days;
    pkg_cost.days=days;
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
        cost = pkg_cost.adult_cost*(pkg_cost.days || 1);
    }else if(field==='Kids') {
       lower_bound = pkg_cost.kids;
       cost = pkg_cost.kid_cost*(pkg_cost.days || 1);
    }else if(field==='Rooms'){
       lower_bound = pkg_cost.rooms;
        cost = pkg_cost.room_cost*(pkg_cost.days || 1);
    }

   switch(op){
       case '+':{
         
           if(val+1>10) return;

           inp.value=`${field}(${val+1})`;
           inp.setAttribute('data-val',val+1);
           amount.value=`Rs. ${pkg_amt+cost || ''}`;
           amount.setAttribute('data-val',pkg_amt+cost);

           if(field==='Adults') pkg_cost.adults+=1;
           else if(field==='Kids') pkg_cost.kids+=1;
           else if(field==='Rooms') pkg_cost.rooms+=1;
            
           pkg_cost.amount=pkg_amt+cost;
           break;
       }
       case '-':{
          
           if(val-1<lower_bound){
               inp.value=`${field}(${lower_bound})`;
               inp.setAttribute('data-val',lower_bound);
               return;
           }

           inp.value=`${field}(${val-1})`;
           inp.setAttribute('data-val',val-1);
           amount.value=`Rs. ${pkg_amt-cost || ''}`;
           amount.setAttribute('data-val',pkg_amt-cost);

           if(field==='Adults') pkg_cost.adults-=1;
           else if(field==='Kids') pkg_cost.kids-=1;
           else if(field==='Rooms') pkg_cost.rooms-=1;

           pkg_cost.amount=pkg_amt-cost;
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
        if(!localStorage.getItem('jwt') || !localStorage.getItem('user')) {
            const login_form = document.querySelector('.login');
            login_form.classList.add('active');
            return;
        }
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