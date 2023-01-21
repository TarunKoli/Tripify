const packages = [
    {
        pkg_id:"1",
        img_url: "./Assets/new_orleans/img (5).jpg",
        title: "Night life in New orleans",
        desc: "New Orleans is a Louisiana city on the Mississippi River, near the Gulf of Mexico. Nicknamed the 'Big Easy', it's known for its round-the-clock nightlife",
    },
    {
        pkg_id:"2",
        img_url: "./Assets/los_angeles/img (4).jpg",
        title: "Explore Hollywood in Los angeles",
        desc: "Los Angeles is a sprawling Southern California city and the center of the nation’s film and television industry.",
    },
    {
        pkg_id:"3",
        img_url: "./Assets/sikkim/img (1).jpg",
        title: "Cultural Sikkim",
        desc: "Sikkim is a state in northeast India, bordered by Bhutan, Tibet and Nepal. Part of the Himalayas, the area has a dramatic landscape that includes India’s highest mountain",
    },
    {
        pkg_id:"4",
        img_url: "./Assets/manali/img (7).jpg",
        title: "Chilling Manali",
        desc: "Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It has a reputation as a backpacking center",
    },
    {
        pkg_id:"5",
        img_url: "./Assets/leh_ladak/img (2).jpg",
        title: "Travelling to Leh Ladak",
        desc: "Leh is the joint capital and largest city of Ladakh, a union territory of India. Leh, located in the Leh district, was also the historical capital of the Kingdom of Ladakh",
    },
]

const details_page = new Map();
details_page["1"] = {
    title: "Los Angeles",
    subtitle: "The state of Utah in united states is home to lots of beautiful National parks & Bryce Canyon National Park ranks as three of the most magnificient & inspiring",
    banner_img: "./Assets/pexels-eberhard-grossgasteiger-640781.jpg",
    banner_title:"Top things to do in Los Angeles",
    desc1: [
        {
            heading: "Top things to do in Los Angeles",
            weather:"14",
            img:"./Assets/pexels-eberhard-grossgasteiger-640781.jpg",
            para: [
                `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Eu ultrices vitae auctor eu augue ut lectus arcu. Varius sit amet mattis vulputate enim nulla
                aliquet porttitor. Eget gravida cum sociis natoque penatibus et magnis. Tristique senectus et netus et malesuada fames ac.
                Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Eget est lorem ipsum dolor sit amet consectetur adipiscing.
                Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Gravida neque convallis a cras semper
                auctor neque vitae. Amet massa vitae tortor condimentum lacinia quis vel eros donec. Nibh praesent tristique
                magna sit amet purus gravida quis. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Nibh venenatis
                cras sed felis eget. Vitae semper quis lectus nulla.`,
                `Fringilla est ullamcorper eget nulla facilisi etiam dignissim.Accumsan in nisl nisi scelerisque eu ultrices
                vitae auctor.Sed cras ornare arcu dui vivamus arcu.Integer feugiat scelerisque varius morbi enim nunc.Ipsum
                faucibus vitae aliquet nec.Id cursus metus aliquam eleifend.Vestibulum mattis ullamcorper velit sed 
                ullamcorper.Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet.Et malesuada fames ac turpis egestas.
                Ullamcorper a lacus vestibulum sed arcu non odio euismod.Ac felis donec et odio pellentesque.Ultrices in 
                iaculis nunc sed augue lacus viverra vitae congue.`               
            ]
        },
        {
            heading: "Top things to do in Los Angeles",
            img:"./Assets/pexels-eberhard-grossgasteiger-640781.jpg",
            para: [
                `Fringilla est ullamcorper eget nulla facilisi etiam dignissim.Accumsan in nisl nisi scelerisque eu ultrices
                vitae auctor.Sed cras ornare arcu dui vivamus arcu.Integer feugiat scelerisque varius morbi enim nunc.Ipsum
                faucibus vitae aliquet nec.Id cursus metus aliquam eleifend.Vestibulum mattis ullamcorper velit sed 
                ullamcorper.Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet.Et malesuada fames ac turpis egestas.
                Ullamcorper a lacus vestibulum sed arcu non odio euismod.Ac felis donec et odio pellentesque.Ultrices in 
                iaculis nunc sed augue lacus viverra vitae congue.`               
            ]
        },
    ],
    featured_imgs:{
        img1:"./Assets/pexels-eberhard-grossgasteiger-640781.jpg",
        img2:"./Assets/pexels-eberhard-grossgasteiger-640781.jpg",
        img3:"./Assets/pexels-eberhard-grossgasteiger-640781.jpg",
    },
    desc2:[
        {
            heading: "Tremblant In Canada",
            para: [
                `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Eu ultrices vitae auctor eu augue ut lectus arcu. Varius sit amet mattis vulputate enim nulla
                aliquet porttitor. Eget gravida cum sociis natoque penatibus et magnis. Tristique senectus et netus et malesuada fames ac.
                Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Eget est lorem ipsum dolor sit amet consectetur adipiscing.
                Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Gravida neque convallis a cras semper
                auctor neque vitae. Amet massa vitae tortor condimentum lacinia quis vel eros donec. Nibh praesent tristique
                magna sit amet purus gravida quis. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Nibh venenatis
                cras sed felis eget. Vitae semper quis lectus nulla.`,
                `Fringilla est ullamcorper eget nulla facilisi etiam dignissim.Accumsan in nisl nisi scelerisque eu ultrices
                vitae auctor.Sed cras ornare arcu dui vivamus arcu.Integer feugiat scelerisque varius morbi enim nunc.Ipsum
                faucibus vitae aliquet nec.Id cursus metus aliquam eleifend.Vestibulum mattis ullamcorper velit sed 
                ullamcorper.Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet.Et malesuada fames ac turpis egestas.
                Ullamcorper a lacus vestibulum sed arcu non odio euismod.Ac felis donec et odio pellentesque.Ultrices in 
                iaculis nunc sed augue lacus viverra vitae congue.`               
            ]
        },
        {
            heading: "Tremblant In Canada",
            para: [
                `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Eu ultrices vitae auctor eu augue ut lectus arcu. Varius sit amet mattis vulputate enim nulla
                aliquet porttitor. Eget gravida cum sociis natoque penatibus et magnis. Tristique senectus et netus et malesuada fames ac.
                Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Eget est lorem ipsum dolor sit amet consectetur adipiscing.
                Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Gravida neque convallis a cras semper
                auctor neque vitae. Amet massa vitae tortor condimentum lacinia quis vel eros donec. Nibh praesent tristique
                magna sit amet purus gravida quis. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Nibh venenatis
                cras sed felis eget. Vitae semper quis lectus nulla.`,
                `Fringilla est ullamcorper eget nulla facilisi etiam dignissim.Accumsan in nisl nisi scelerisque eu ultrices
                vitae auctor.Sed cras ornare arcu dui vivamus arcu.Integer feugiat scelerisque varius morbi enim nunc.Ipsum
                faucibus vitae aliquet nec.Id cursus metus aliquam eleifend.Vestibulum mattis ullamcorper velit sed 
                ullamcorper.Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet.Et malesuada fames ac turpis egestas.
                Ullamcorper a lacus vestibulum sed arcu non odio euismod.Ac felis donec et odio pellentesque.Ultrices in 
                iaculis nunc sed augue lacus viverra vitae congue.`               
            ]
        },
    ]
}

function set_Intro(pkg_id){
    const details = document.querySelector('.details_sec1');
    const data = details_page[pkg_id] || details_page["1"];
    
    const intro = details.querySelector('.intro');
    const title = intro.querySelector('h1');
    const subTitle = intro.querySelector('p');
    title.textContent=data.title;
    subTitle.textContent=data.subtitle;

    const banner_img = details.querySelector('.video img');
    const banner_title = details.querySelector('.video h2');
    banner_img.src=data.banner_img;
    banner_title.textContent=data.banner_title;
}

function set_Description(pkg_id){
    const details = document.querySelector('.details_sec2');
    const data = details_page[pkg_id] || details_page["1"];
    
    data.desc1.forEach((des,i)=>{
        
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

        p.textContent='LOS ANGELES';
        h2.textContent="Weather";
        h1.textContent="14";
        
        weather.append(p,h2,h1);

        const img = document.createElement('img');
        img.src=des.img;
        
        row_img.append(weather,img);

        const row_ctn = document.createElement('div');
        row_ctn.classList.add('row_ctn');
        
        const ctn_head = document.createElement('div');
        ctn_head.classList.add('ctn_head');
        const ctn_head_h2 = document.createElement('h2');
        ctn_head_h2.textContent=des.heading;

        ctn_head.appendChild(ctn_head_h2);

        const info = document.createElement('div');
        info.classList.add('info');
        
        des.para.forEach((p)=>{
            const info_p = document.createElement('p');
            const break_line = document.createElement('br');
            info_p.textContent=p;
            info.append(info_p,break_line);
        })

        row_ctn.append(ctn_head,info);
        
        row.append(row_img,row_ctn);
        details.appendChild(row);
    })

}

function set_feature_img(pkg_id){
    const details = document.querySelector('.details_sec3');
    const data = details_page[pkg_id] || details_page["1"];

    const video_cards = details.querySelectorAll('.video_cards img');
    video_cards[0].src=data.featured_imgs.img1;    
    video_cards[1].src=data.featured_imgs.img2;    
    video_cards[2].src=data.featured_imgs.img3;    
}

function set_bottom_desc(pkg_id){
    const details = document.querySelector('.details_sec4');
    const data = details_page[pkg_id] || details_page["1"];

    data.desc2.forEach((des)=>{
        const aside = document.createElement('aside');
        const h1 = document.createElement('h1');
        h1.textContent=des.heading;
        aside.appendChild(h1);

        des.para.forEach((para)=>{
            const p = document.createElement('p');
            const br = document.createElement('br');
            p.textContent=para; 
            aside.append(p,br);
        })  
    
    
        details.appendChild(aside);
    })

}

function render_details(){
    const url = new URLSearchParams(window.location.href.split("?")[1]);

    set_Intro(url.get('pkg_id'));
    set_Description(url.get('pkg_id'));
    set_feature_img(url.get('pkg_id'));
    set_bottom_desc(url.get('pkg_id'));
}

function render_packages() {
    const pkg_list = document.querySelector('.pkg_list_wrapper');

    packages.forEach((pkg, i) => {

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
        desc.textContent = pkg.desc;

        card_ctn.append(span, title, desc);

        card.append(card_img, card_ctn);

        card.addEventListener("click", () => {
            const a = document.createElement('a');
            a.href = `./details_page.html?pkg_id=${pkg.pkg_id}`;
            a.click();
        })

        pkg_list.appendChild(card);
    })
}