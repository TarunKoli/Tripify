const pkg_info_url='http://localhost:1337/api/packages?populate=package_info';
var pkg_cost={};


function set_Intro(d_title, d_subtitle, d_banner_img, d_banner_title) {
    const details = document.querySelector('.details_sec1');

    const intro = details.querySelector('.intro');
    const title = intro.querySelector('h1');
    const subTitle = intro.querySelector('p');
    title.textContent = d_title;
    subTitle.textContent = d_subtitle;

    const banner_img = details.querySelector('.video img');
    const banner_title = details.querySelector('.video h2');
    banner_img.src = d_banner_img;
    banner_title.textContent = d_banner_title;
}

function set_Description(descs=[]) {
    const details = document.querySelector('.details_sec2');

    descs.forEach((des, i) => {
        const row = document.createElement('div');
        row.classList.add('row');

        const row_img = document.createElement('div');
        row_img.classList.add('row_img');

        const weather = document.createElement('div');
        weather.classList.add('weather');
        const p = document.createElement('p');
        const h2 = document.createElement('h2');
        const h1 = document.createElement('h1');
        h1.classList.add('temp');

        p.textContent = 'LOS ANGELES';
        h2.textContent = "Weather";
        h1.textContent = des.weather || '';

        weather.append(p, h2, h1);

        const img = document.createElement('img');
        img.src = des.img;

        row_img.append(weather, img);

        const row_ctn = document.createElement('div');
        row_ctn.classList.add('row_ctn');

        const ctn_head = document.createElement('div');
        ctn_head.classList.add('ctn_head');
        const ctn_head_h2 = document.createElement('h2');
        ctn_head_h2.textContent = des.heading;

        ctn_head.appendChild(ctn_head_h2);

        const info = document.createElement('div');
        info.classList.add('info');

        let paragraphs = des.para.split('/n');
        
        if(paragraphs && paragraphs.length>0)
        paragraphs.forEach((p) => {
            const info_p = document.createElement('p');
            const break_line = document.createElement('br');
            info_p.textContent = p;
            info.append(info_p, break_line);
        })

        row_ctn.append(ctn_head, info);

        row.append(row_img, row_ctn);
        details.appendChild(row);
    })

}

function set_feature_img(images) {
    const details = document.querySelector('.details_sec3');

    const video_cards = details.querySelectorAll('.video_cards img');
    video_cards[0].src = images.img1;
    video_cards[1].src = images.img2;
    video_cards[2].src = images.img3;
}

function set_bottom_desc(descs=[]) {
    const details = document.querySelector('.details_sec4');

    descs.forEach((des) => {
        const aside = document.createElement('aside');
        const h1 = document.createElement('h1');
        h1.textContent = des.heading;
        aside.appendChild(h1);

        des.para?.split('/n').forEach((para) => {
            const p = document.createElement('p');
            const br = document.createElement('br');
            p.textContent = para;
            aside.append(p, br);
        })


        details.appendChild(aside);
    })

}

function set_package_cost(){

    const radio_btns = document.querySelector('.booking .radio_wrap');
    const radio_checked = radio_btns.querySelector('input[type = radio]:checked');
    
    if(radio_checked.value==='buisness'){
        pkg_cost.adult_cost*=1.5;
        pkg_cost.kid_cost*=1.5;
        pkg_cost.room_cost*=1.5;
        pkg_cost.amount*=1.2;
    }

    const adults = document.querySelector('#inp_adults');
    const kids = document.querySelector('#inp_kids');
    const rooms = document.querySelector('#inp_rooms');
    const amount = document.querySelector('#inp_amt');

    console.log(pkg_cost);
    adults.value=`Adults(${pkg_cost.adults || ''})`;
    adults.setAttribute('data-val',pkg_cost.adults)
    adults.setAttribute('data-field','Adults');
    
    kids.value=`Kids(${pkg_cost.kids || ''})`;
    kids.setAttribute('data-val',pkg_cost.kids)
    kids.setAttribute('data-field','Kids');
    
    rooms.value=`Rooms(${pkg_cost.rooms || ''})`;
    rooms.setAttribute('data-val',pkg_cost.rooms)
    rooms.setAttribute('data-field','Rooms');
    
    amount.value=`Rs. ${pkg_cost.amount || ''}`;
    amount.setAttribute('data-val',pkg_cost.amount)
    amount.setAttribute('data-field','Rs. ');

}

async function render_details() {
    const url = new URLSearchParams(window.location.href.split("?")[1]);

    let res = await fetch(`http://localhost:1337/api/packages/${url.get('pkg_id')}?populate[package_detail][populate]=*`);
        
    if(res.ok){
        res = await res.json();

        if(res.data && Object.entries(res.data).length>0){
            const details = {...res.data?.attributes?.package_detail};
            set_Intro(details.title,details.subtitle,details.banner_img, details.banner_title);
            set_Description(details.desc1);
            set_feature_img(details.featured_images);
            set_bottom_desc(details.desc2);        
            pkg_cost=details.package_cost;
        }
    }


}


function render_package(pkg) {
    
    if(!pkg || Object.entries(pkg).length===0) return;

    const pkg_list = document.querySelector('.pkg_list_wrapper');

        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('pkg_id', pkg.pkg_id);

        const card_img = document.createElement('div');
        card_img.classList.add('card_img');
        const img = document.createElement('img');
        img.src = pkg.img_url;
        img.alt = "pkg_img";
        card_img.appendChild(img);


        const card_ctn = document.createElement('div');
        card_ctn.classList.add('card_ctn');
        const span = document.createElement('span');
        const title = document.createElement('h2');
        const desc = document.createElement('p');

        span.textContent = "destination";
        title.textContent = pkg.title;
        desc.textContent = pkg.subtitle;

        card_ctn.append(span, title, desc);

        card.append(card_img, card_ctn);

        card.addEventListener("click", () => {
            const a = document.createElement('a');
            a.href = `./details_page.html?pkg_id=${pkg.pkg_id}`;
            a.click();
        })

        pkg_list.appendChild(card);
   
}

async function fetch_packages(){
    let res = await fetch(pkg_info_url);
        
    if(res.ok){
        res = await res.json();

        if(res.data && res.data.length>0){
            
            res.data.forEach((pkg)=>{
                render_package(pkg.attributes.package_info);
            })
        }
    }
    
}

function redirect(path){
    const a = document.createElement('a');
    a.href = path;
    a.click();
}