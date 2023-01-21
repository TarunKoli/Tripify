const packages = [
    {
        pkg_id: "1",
        img_url: "./Assets/Barcelona/Barcelona (1).jpg",
        title: "Traveling to Barcelona",
        desc: "Barcelona is a city on the coast of northeastern Spain. It is the capital and largest city of the autonomous community of Catalonia, as well as the second most populous municipality of Spain.",
    },
    {
        pkg_id: "2",
        img_url: "./Assets/Bali/Bali (1).jpg",
        title: "Traveling Bali, Indonesia",
        desc: "Bali, Indonesia’s most famous island, is located to the west of Java in the Lesser Sunda Islands. It is world-renowned for its scenic rice terraces, fragrant cuisine, stunning beaches and a galore of culture and tradition.",
    },
    {
        pkg_id: "3",
        img_url: "./Assets/Sydney/Sydney (1).jpg",
        title: "Traveling to Sydney",
        desc: "Sydney is home to must-visit icons like the Sydney Harbour Bridge and Opera House, but this Harbour City is constantly evolving. New rooftop bars, theatre shows and designer shops pop up at every turn, and the urban excitement is perfectly balanced by afternoons spent lying on the sand.",
    },
    {
        pkg_id: "4",
        img_url: "./Assets/Maldives/Maldives (1).jpg",
        title: "Traveling to Maldives",
        desc: "The beauty of the Maldives is not only above the water. The Maldives is home to about five percent of the planet’s reefs that comes with an explosion of color contributed by soft and hard corals that form them. The reefs are home to a thousand species of fish. Lured by the rich nutrients that flow in with the currents, large pelagic fishes such as manta rays and whale sharks also make the Maldives their home.",
    }
]

const details_page = new Map();
details_page["1"] = {
    title: "Barcelona",
    subtitle: "Barcelona is a city on the coast of northeastern Spain. It is the capital and largest city of the autonomous community of Catalonia, as well as the second most populous municipality of Spain.",
    banner_img: "./Assets/Barcelona/Barcelona (2).jpg",
    banner_title:"Top things to do in Barcelona",
    desc1: [
        {
            heading: "Top things to do in Barcelona",
            weather:"14",
            img:"./Assets/Barcelona/Barcelona (3).jpg",
            para: [
                `It’s easy to see why Casa Batlló has been likened to Claude Monet’s Water Lilies: Covered in shards of stained glass, 
                 it sometimes appears blue, then green, then shimmering like the glassy layer of a lake. Textile industrialist Josep 
                 Batlló commissioned Gaudí to design this home after seeing what Gaudí had done with Park Güell. Influenced by nature, 
                 Casa Batlló has no straight lines (because they don’t exist in nature, said Gaudí), stone pillars that contort like 
                 animal bones, and a tall, ocean-blue stairwell that’s very Jules Verne. The result is both grand and intimate.`               
            ]
        },
        {
            heading: "Top things to do in Barcelona",
            img:"./Assets/Barcelona/Barcelona (4).jpg",
            para: [
                `While Tibidabo mountain is a fairground, it's also so much more. You’ll first notice it from the city center: high on a 
                 summit, the silhouette of a majestic temple makes you curious to go. Officially called the Temple Expiatori del Sagrat 
                 Cor (or Sacred Heart church, easier on the tongue), its roof is topped with an enormous bronze statue of Jesus that you 
                 can take an elevator to. Mind-blown (and a little breeze-blown), you suddenly see the charm of the amusement park next 
                 to it—like its retro-styled attractions, such as a Ferris wheel with color-pop seating pods, built for the views as much 
                 as the screams. Adults love the views; kids love the rides. Finish with a gin and tonic on the terrace of Mirablau Bar, 
                 near where the blue tram stops. The edge seats rule.`               
            ]
        },
    ],
    featured_imgs:{

        img1:"./Assets/Barcelona/Barcelona (5).jpg",
        img2:"./Assets/Barcelona/Barcelona (4).jpg",
        img3:"./Assets/Barcelona/Barcelona (1).jpg",
    },
    desc2:[
        {
            heading: "Explore Barcelona",
            para: [
                `Known for its charming alleyways, cheerful beaches, and lovely pieces of modernist architecture, the city of Barcelona 
                 truly personifies the word ‘vivacity’. Therefore, be it a peaceful family vacation or an amorous honeymoon, the vibrant 
                 capital of Catalunya would be a perfect destination for you. So, if you are visiting Barcelona for the first time, 
                 then make sure to check out the names of these 12 places to visit in Barcelona, which can help you to savor the real 
                 beauty and elegance of the city.`               
            ]
        },
        {
            heading: "Why you should make a visit to Barcelona",
            para: [
                `If you think of Flamenco and bullfighting when you think of Barcelona, then you don’t even know half the story. 
                 Barcelona, capital of the autonomous community of Catalonia, stands out from the rest of Spain with a culture and 
                 pride of its own. Antoni Gaudi, the renowned Spanish architect is single handedly responsible for setting the 
                 Barcelona landscape apart from any other city in the world. The art and science behind his whimsical modernism is 
                 reason enough to visit Barcelona. Barcelona’s food scene is creative and eclectic, fusing Catalan and Spanish traditions 
                 with global and cutting-edge techniques and flavours. Ten years ago, vegetarians would have struggled in Barcelona with 
                 most dishes centered around pork and red meat. Today, you will find both Spanish favourites such as Paella and Tapas, along 
                 with innovative takes on vegetables, meats and grains, and a host of Michelin-starred restaurants to boot.`               
            ]
        },
    ]
}

details_page["2"] = {
    title: "Bali, Indonesia",
    subtitle: "Bali, Indonesia’s most famous island, is located to the west of Java in the Lesser Sunda Islands. It is world-renowned for its scenic rice terraces, fragrant cuisine, stunning beaches and a galore of culture and tradition. ",
    banner_img: "./Assets/Bali/Bali (5).jpg",
    banner_title:"Top things to do in Bali",
    desc1: [
        {
            heading: "Top things to do in Bali",
            weather:"14",
            img:"./Assets/Bali/Bali (3).jpg",
            para: [
                `Ascend to the top of Mount Batur to gift yourself the most mind-blowing sunset scenery of your life. Trek to Mount 
                 Batur is one of the most adventurous things to do in Bali where you get to trek on an active volcano and experience 
                 a unique getaway. 
                 The trek starts at midnight using headlamps and night torches and completes with a spectacular view of Mt. Agung during 
                 the sunrise. The two hours uphill journey to Mount Batur is a very thrilling adventure as you climb over the volcanic rocks. 
                 However, before starting your trek, you should confirm whether there is an active volcanic activity going on and if it 
                 is safe for trekking.`               
            ]
        },
        {
            heading: "Top things to do in Bali",
            img:"./Assets/Bali/Bali (4).jpg",
            para: [
                `Ubud is a haven for nature lovers and Tegenungan Waterfalls play a significant part in making it so. Located halfway 
                 between Ubud and Denpasar, it is the closest natural attraction of its kind to Ubud Central. If you choose to take the 
                 road, you can reach there in a couple of hours.

                 The waterfall is surrounded by many restaurants that serve delicious local and international food items including the 
                 local favourites like Balinese-style crispy fried duck. So, if you enjoy a meal with a view, this is the place to be.`               
            ]
        },
    ],
    featured_imgs:{
        img1:"./Assets/Bali/Bali (1).jpg",
        img2:"./Assets/Bali/Bali (2).jpg",
        img3:"./Assets/Bali/Bali (3).jpg",
    },
    desc2:[
        {
            heading: "Explore Bali",
            para: [
                `Bali is one of the most evocative places to visit in the entire Indonesian archipelago. A visit here sparks the senses. 
                 The intoxicating fragrance of incense and clove oil hangs in the thick tropical air. Peanuts sizzle at roadside stalls, 
                 petal-strewn offerings smolder on busy sidewalks, and traditional gamelan music jangles against the buzz of mopeds.`               
            ]
        },
        {
            heading: "Why you should make a visit to Bali",
            para: [
                `There is no other place like Bali in this world. A magical blend of culture, people, nature, activities, weather, 
                 culinary delights, nightlife, and beautiful accommodation. Bali is rated as one of the best travel destinations in 
                 the world by countless websites, review portals, and travel magazines each year – for very good reasons. Whatever your 
                 age, background, budget or interest, there is something great for everyone to explore and discover. And that’s a promise.`               
            ]
        },
    ]
}

details_page["3"] = {
    title: "Sydney",
    subtitle: "Sydney is home to must-visit icons like the Sydney Harbour Bridge and Opera House, but this Harbour City is constantly evolving. New rooftop bars, theatre shows and designer shops pop up at every turn, and the urban excitement is perfectly balanced by afternoons spent lying on the sand.",
    banner_img: "./Assets/Sydney/Sydney (2).jpg",
    banner_title:"Top things to do in Sydney",
    desc1: [
        {
            heading: "Top things to do in Sydney",
            weather:"14",
            img:"./Assets/Sydney/Sydney (3).jpg",
            para: [
                `The Opera House may be the first thing to come to mind when you think about Sydney, or indeed Australia. The world-heritage listed building is stunning in person, and it is illuminated beautifully at night.
                 There’s always plenty of events and shows going on in the Opera House and the surrounding area, and you can also tour the opera house or enjoy a tasty meal inside the premises.`               
            ]
        },
        {
            heading: "Top things to do in Sydney",
            img:"./Assets/Sydney/Sydney (4).jpg",
            para: [
                `The Darling Harbour is a popular recreational complex adjacent to Sydney’s city centre, with breathtaking river views and plenty to 
                 keep you well-fed and entertained. There’s a massive variety of attractions in the Harbour, but some favorites include the serene 
                 Chinese Garden of Friendship and its lovely teahouse, the Carousel, the National Maritime Museum, and the beautiful Dockside Pavilion.
                 There’s also a vibrant nightlife scene in the harbour, the excellent Harbourside Shopping Centre (including laser tag), an 
                 aquarium, a Madam Tussauds and much more.`               
            ]
        },
    ],
    featured_imgs:{
        img1:"./Assets/Sydney/Sydney (5).jpg",
        img2:"./Assets/Sydney/Sydney (3).jpg",
        img3:"./Assets/Sydney/Sydney (1).jpg",
    },
    desc2:[
        {
            heading: "Explore Sydney",
            para: [
                `Sydney's cultural diversity has shaped the city and its suburbs in a major way. Many localities have the unique smells, 
                 sights and sounds, cultural, community and family events that typify the cultures and nationalities that are predominant 
                 there. In other places, restaurants and shops of diverse ethnic backgrounds form an intoxicating mix that provides both 
                 visitors and locals a smorgasbord of choice, often within a single street.`               
            ]
        },
        {
            heading: "Why you should make a visit to Sydney",
            para: [
                `When you are a visitor to a place, there is nothing like the knowledge of a local to take you to some of the lesser 
                 known but equally interesting corners of a city. Sydney has plenty of fascinating nooks and crannies, many of which 
                 a lot of the locals don't even know about. So if you are a visitor or a local and eager to do a little exploring on 
                 or off the beaten track, here are hundreds of suggestions to get you going.`               
            ]
        },
    ]
}

details_page["4"] = {
    title: "Maldives",
    subtitle: "The Maldives is a nation of islands in the Indian Ocean, that spans across the equator. The country is comprised of 1192 islands that stretch along a length of 871 kilometers. The Maldives is home to about five percent of the planet’s reefs that comes with an explosion of color contributed by soft and hard corals that form them.",
    banner_img: "./Assets/Maldives/Maldives (2).jpg",
    banner_title:"Top things to do in Maldives",
    desc1: [
        {
            heading: "Top things to do in Maldives",
            weather:"14",
            img:"./Assets/Maldives/Maldives (3).jpg",
            para: [
                `The Maldives has one of the most delicate environments anywhere on the planet. Coral reefs are the foundation of the islands. 
                 They offer protection to the tiny islands as its natural defense system, and the country’s economy depends heavily on the 
                 health of its reefs and ecosystems. Several resorts too conduct their own programs. While some programs conducted by resorts 
                 focus on the protection and rehabilitation of sea turtles, others are engaged in cutting edge research on regeneration of 
                 coral reefs.`               
            ]
        },
        {
            heading: "Top things to do in Maldives",
            img:"./Assets/Maldives/Maldives (4).jpg",
            para: [
                `Several conservation efforts are underway to protect the valuable marine environment of Maldives. While several marine 
                 species and birds are protected by law, protected areas have been designated to ensure the conservation of specific 
                 ecosystems and the rich biodiversity of the country. This includes designated nature reserves in islands of various 
                 atolls to protect wetlands and mangroves and the protection of marine areas and the designation of biosphere reserves 
                 that covers coral reefs, islands, sea grass beds and mangroves.`               
            ]
        },
    ],
    featured_imgs:{
        img1:"./Assets/Maldives/Maldives (5).jpg",
        img2:"./Assets/Maldives/Maldives (2).jpg",
        img3:"./Assets/Maldives/Maldives (1).jpg",
    },
    desc2:[
        {
            heading: "Explore Maldives",
            para: [
                `Although home to just over half a million people the Maldives has its own unique culture and traditions. While heavily 
                 influenced by various cultures around the rim of the Indian Ocean, the Maldivian culture, craft and traditions have 
                 been shaped by the island environment and the seas that surround us. The traditional Maldivian boat, dhoni has been 
                 shaped over centuries, resulting in a craft that perfectly suits the various conditions of the seas. The traditional 
                 cuisine is heavily based on fish and coconut, with several dishes that have no parallels anywhere in the region.`               
            ]
        },
        {
            heading: "Why you should make a visit to Maldives",
            para: [
                `The Maldives is well connected with the rest of the world. Several flights from Europe, Middle East and South East Asia 
                 operate to Velana International Airport, the main gateway to the Maldives. The highest international traffic is from 
                 Colombo, Sri Lanka, various Indian cities and Dubai, while several scheduled and charter flights bring in passengers 
                 from all major European capitals, and South East Asian cities. Once in the Maldives you can travel to any of the twelve 
                 domestic and international airports to which several daily flights are operated. Scheduled ferry services also operate 
                 from Male’ to most of the atolls.`               
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