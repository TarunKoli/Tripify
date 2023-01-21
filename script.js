const packages = [
    {
        pkg_id: "1",
        img_url: "./Assets/new_orleans/img (5).jpg",
        title: "Night life in New orleans",
        desc: "New Orleans is a Louisiana city on the Mississippi River, near the Gulf of Mexico. Nicknamed the 'Big Easy', it's known for its round-the-clock nightlife",
    },
    {
        pkg_id: "2",
        img_url: "./Assets/los_angeles/img (4).jpg",
        title: "Explore Hollywood in Los angeles",
        desc: "Los Angeles is a sprawling Southern California city and the center of the nation’s film and television industry.",
    },
    {
        pkg_id: "3",
        img_url: "./Assets/sikkim/img (1).jpg",
        title: "Cultural Sikkim",
        desc: "Sikkim is a state in northeast India, bordered by Bhutan, Tibet and Nepal. Part of the Himalayas, the area has a dramatic landscape that includes India’s highest mountain",
    },
    {
        pkg_id: "4",
        img_url: "./Assets/manali/img (7).jpg",
        title: "Chilling Manali",
        desc: "Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It has a reputation as a backpacking center",
    },
    {
        pkg_id: "5",
        img_url: "./Assets/leh_ladak/img (2).jpg",
        title: "Travelling to Leh Ladak",
        desc: "Leh is the joint capital and largest city of Ladakh, a union territory of India. Leh, located in the Leh district, was also the historical capital of the Kingdom of Ladakh",
    },
]

const details_page = new Map();
details_page["1"] = {
    title: "New Orleans",
    subtitle: "Wondering where to travel in 2023? Look no further than New Orleans. Between Mardi Gras, unforgettable food, and one-of-a-kind festivals, there’s never been a better time to visit",
    banner_img: "./Assets/new_orleans/img (4).jpg",
    banner_title: "Top things to do in New Orleans",
    desc1: [
        {
            heading: "Top things to do in New Orleans",
            weather: "14",
            img: "./Assets/new_orleans/img (5).jpg",
            para: [
                `New Orleans is world-renowned for its distinctive music, Creole cuisine, unique dialects, and its annual
                 celebrations and festivals, most notably Mardi Gras. The historic heart of the city is the French Quarter,
                 known for its French and Spanish Creole architecture and vibrant nightlife along Bourbon Street. The city
                 has been described as the "most unique" in the United States, owing in large part to its cross-cultural
                 and multilingual heritage. Additionally, New Orleans has increasingly been known as "Hollywood South" due
                 to its prominent role in the film industry and in pop culture.`,
                `In the city of New Orleans an inspiring mixture of foreign influences created a melting pot of culture that
                 is still celebrated today. By the end of French colonization in Louisiana, New Orleans was recognized
                 commercially in the Atlantic world. Its inhabitants traded across the French commercial system. New Orleans
                 was a hub for this trade both physically and culturally because it served as the exit point to the rest of 
                 the globe for the interior of the North American continent.`
            ]
        },
        {
            heading: "More On New orleans",
            img: "./Assets/new_orleans/img (8).jpg",
            para: [
                `The early city was located on the east bank along a sharp bend in the Mississippi, from which the nickname
                 “Crescent City” is derived. The modern metropolis has spread far beyond this original location. Because its 
                 saucer-shaped terrain lies as low as 5 to 10 feet (1.5 to 3 metres) below sea level and has an average 
                 rainfall of 57 inches (1,448 mm), a levee, or embankment, system and proper drainage have always been of 
                 prime importance. `
            ]
        },
    ],
    featured_imgs: {
        img1: "./Assets/new_orleans/img (1).jpg",
        img2: "./Assets/new_orleans/img (6).jpg",
        img3: "./Assets/new_orleans/img (3).jpg",
    },
    desc2: [
        {
            heading: "City layout In New orleans",
            para: [
                `The city of New Orleans and Orleans parish (county) are coextensive, occupying a point at the head of the
                 Mississippi River delta at the Gulf of Mexico. The boundaries are formed by the Mississippi River and 
                 Jefferson parish to the west and Lake Pontchartrain to the north. Lake Pontchartrain is connected by The 
                 Rigolets channel to Lake Borgne on the east (and thence to the gulf), and the southern boundary of 
                 New Orleans is made up of St. Bernard parish and, again, the Mississippi River. The city is divided by 
                 the Mississippi, with the principal settlement on the east bank. The west bank, known as Algiers, 
                 has grown rapidly. It is connected to eastern New Orleans by the Greater New Orleans Bridge 
                 (also known as the Crescent City Connection)`,
                `The population of New Orleans has been declining. Whites account for less than one-third of the total, 
                whereas in 1960 they made up almost two-thirds. In contrast to the population decline in Orleans parish, 
                the adjacent parishes of St. Bernard, Plaquemines, Jefferson, St. Charles, St. John the Baptist, and 
                St. Tammany—which, together with Orleans, compose the New Orleans Metropolitan Statistical Area (MSA)—have 
                shown steady increases.`
            ]
        },
        {
            heading: "Cultural life in New orleans",
            para: [
                `The cultural life of New Orleans is a synthesis of contributions by both whites and Blacks.Facilities for 
                recreation and relaxation in New Orleans are justly famous. New Orleans is often referred to as “the city 
                that care forgot,” and it has always been a town for those seeking a good time. Its residents love music, 
                dancing, and a “Continental Sunday” spent in amusements. The three factors that have contributed to its 
                popularity with tourists are the Old World charm of the Spanish-French architecture in its Vieux Carré 
                (French: “Old Square”), the reckless abandon of its Carnival and Mardi Gras, and its reputation as the 
                birthplace.`,
                `Facilities for recreation and relaxation in New Orleans are justly famous. New Orleans is often referred to
                 as “the city that care forgot,” and it has always been a town for those seeking a good time. Its residents 
                 love music, dancing, and a “Continental Sunday” spent in amusements. The three factors that have contributed
                to its popularity with tourists are the Old World charm of the Spanish-French architecture in its Vieux Carré 
                (French: “Old Square”), the reckless abandon of its Carnival and Mardi Gras, and its reputation as the 
                birthplace.`
            ]
        },
    ]
}
details_page["2"] = {
    title: "Los Angeles",
    subtitle: "Los Angeles is a sprawling Southern California city and the center of the nation’s film and television industry. Near its iconic Hollywood sign, studios such as Paramount Pictures, Universal and Warner Brothers offer behind-the-scenes tours.",
    banner_img: "./Assets/los_angeles/img (3).jpg",
    banner_title: "Top things to do in Los Angeles",
    desc1: [
        {
            heading: "Top things to do in Los Angeles",
            weather: "14",
            img: "./Assets/los_angeles/img (1).jpg",
            para: [
                `Los Angeles , city, seat of Los Angeles county, southern California, U.S. It is the second most populous 
                city and metropolitan area (after New York City) in the United States. The city sprawls across a broad 
                coastal plain situated between mountains and the Pacific Ocean; the much larger Los Angeles county, which 
                encompasses the city, contains some 90 other incorporated cities, including Beverly Hills, Pasadena, and 
                Long Beach. The county also encompasses two of the Channel Islands, Santa Catalina and San Clemente; Mount 
                San Antonio, familiarly known as Mount Baldy or Old Baldy, 10,046 feet (3,062 metres) high; more than 900 
                square miles (2,330 square km) of desert; and 75 miles (120 km) of seacoast.`,
                `the city and the county are interwoven geographically, culturally, and economically, any consideration of
                 Los Angeles must, to some degree, involve both entities. Population density around the metropolitan area 
                 varies greatly—as low as one person per square mile in mountainous areas and as high as 50,000 per square 
                 mile near downtown Los Angeles. `
            ]
        },
        {
            heading: "More On Los Angeles",
            img: "./Assets/los_angeles/img (2).jpg",
            para: [
                `Los Angeles, the heart of southern California, became a world-class city very recently. At the start of the
                 20th century it was considered merely “a large village.” This ascendancy is all the more remarkable 
                 considering that the city originally lacked some of the essential building blocks associated with cityhood,
                 such as a natural harbour. Yet it overcame natural deficiencies and established itself as an important 
                 centre of commerce, agriculture, tourism, and industry. `
            ]
        },
    ],
    featured_imgs: {
        img1: "./Assets/los_angeles/img (4).jpg",
        img2: "./Assets/los_angeles/img (5).jpg",
        img3: "./Assets/los_angeles/img (6).jpg",
    },
    desc2: [
        {
            heading: "Landscape of Los angeles",
            para: [
                `Los Angeles county is a vast and varied geographic entity. It includes a group of inland valleys, a coastal 
                plain separated by low mountains that are interspersed with steep passes, an arc of still higher mountains, 
                and a long seacoast. Nearly half of the county is taken up by mountain chains—most of them running 
                east-west—that have a dynamic history of earthquakes, firestorms, and mud slides. To the north and northeast 
                are the massive and sprawling San Gabriel and San Bernardino mountains. Stretching in front of them—and more 
                or less in parallel lines from west to east—are the Santa Monica Mountains, Puente Hills, Repetto Hills, and 
                San Jose Hills. These chains delineate the San Fernando, San Gabriel, and San Bernardino valleys. Farther 
                south—running roughly between Orange and Riverside counties—are the Santa Ana Mountains.`,
                `Three waterways cross the county: the westward-flowing Santa Clara River in the north; the Los Angeles River
                 in the south, extending from the San Fernando Valley east and south to the Pacific Ocean; and the San Gabriel
                 River, which rises from the San Gabriel Mountains in the north and flows south to the ocean. Huge floods have 
                 periodically inundated large parts of Los Angeles, and much human effort has gone into confining the waterways 
                 within concrete channels.`
            ]
        },
        {
            heading: "Climate in Los angeles",
            para: [
                `The Los Angeles climate is typically classified as semiarid or Mediterranean. It results from a harmonious 
                interplay of at least three natural conditions: the region’s latitude is far enough south to dissipate the 
                most severe North Pacific winter storms, a cooling layer of marine air moderates the summer sun, and the tall 
                mountain ranges shield the region from potentially intense blasts of desert heat and cold. However, the warm 
                climate and the bowl-like alignment of the ranges also provide the ideal conditions for another well-known 
                Los Angeles phenomenon: photochemical smog, which has remained a part of the landscape since the 1940s.`,
                `The city of Los Angeles is composed of a series of widely dispersed settlements loosely connected to 
                downtown. It certainly does not conform to the popular Chicago school of urban theory of the 1920s and later, 
                which held that a downtown was the main focus of community life, with its influence unfolding in a series 
                of concentric circles out into the hinterlands.`
            ]
        },
    ]
}
details_page["3"] = {
    title: "Sikkim",
    subtitle: "Sikkim is notable for its biodiversity, including alpine and subtropical climates, as well as being a host to Kangchenjunga, the highest peak in India and third highest on Earth",
    banner_img: "./Assets/sikkim/img (7).jpg",
    banner_title: "Top things to do in Sikkim",
    desc1: [
        {
            heading: "Top things to do in Sikkim",
            weather: "14",
            img: "./Assets/sikkim/img (1).jpg",
            para: [
                `Sikkim, state of India, located in the northeastern part of the country, in the eastern Himalayas. It is one 
                of the smallest states in India. Sikkim is bordered by the Tibet Autonomous Region of China to the north and 
                northeast, by Bhutan to the southeast, by the Indian state of West Bengal to the south, and by Nepal to the
                west. The capital is Gangtok, in the southeastern part of the state. Long a sovereign political entity, Sikkim
                 became a protectorate of India in 1950 and an Indian state in 1975. Its small size notwithstanding, Sikkim 
                 is of great political and strategic importance for India because of its location along several international 
                 boundaries. Area 2,740 square miles (7,096 square km). Pop. (2011) 607,688`,
                `the city and the county are interwoven geographically, culturally, and economically, any consideration of
                 Los Angeles must, to some degree, involve both entities. Population density around the metropolitan area 
                 varies greatly—as low as one person per square mile in mountainous areas and as high as 50,000 per square 
                 mile near downtown Los Angeles. `
            ]
        },
        {
            heading: "More On Sikkim",
            img: "./Assets/sikkim/img (2).jpg",
            para: [
                `Sikkim is a basin surrounded on three sides by precipitous mountain walls. There is little lowland, and the
                 variation in relief is extreme. Within a stretch of roughly 50 miles (80 km), the land rises from an 
                 elevation of about 750 feet (225 metres) in the Tista River valley to nearly 28,200 feet (8,600 metres) 
                 at Kanchenjunga, India’s highest peak and the world’s third highest mountain. The Sikkim basin is drained 
                 by the Tista River and its tributaries, such as the Rangit, Lhonak, Talung, and Lachung, which have cut 
                 deep valleys into the mountains.`,
                 `Some two-thirds of Sikkim consists of perpetually snow-covered mountains, dominated by the Kanchenjunga
                  massif. The residents of Sikkim have traditionally viewed the mountain as both a god and the abode of gods.
                The legendary Abominable Snowman, or yeti, called Nee-gued in Sikkim, is believed to roam its slopes.`
            ]
        },
    ],
    featured_imgs: {
        img1: "./Assets/sikkim/img (4).jpg",
        img2: "./Assets/sikkim/img (5).jpg",
        img3: "./Assets/sikkim/img (6).jpg",
    },
    desc2: [
        {
            heading: "Cultural Life in Sikkim",
            para: [
                `Sikkim’s cultural life, though showing strong Tibetan influences, retains a character derived from the 
                various tribes of Sikkim and their pre-Buddhist customs. The most important festival of the year is the 
                two-day Phanglhapsol festival in August or September, in which masked dancers perform in honour of 
                Kanchenjunga, the presiding deity. The Namgyal Institute of Tibetology (1958), in Gangtok, has one of the 
                largest collections of Tibetan books in the world. Many monasteries are repositories of wall paintings, 
                thang-kas (religious paintings mounted on brocade), bronze images, and other artworks.`,
                `Sikkim has a rich and varied animal life, including black bears, brown bears, red pandas, numerous species
                 of deer, blue sheep, gorals (small goatlike mammals), and Tibetan antelope. Tigers, leopards, and lesser 
                 cats are also found. Birdlife includes pheasants, partridges, quail, eagles, barbets, Himalayan cuckoos, 
                 Tibetan black crows, and minivets. Sikkim has several national parks and a number of wildlife sanctuaries, 
                 which provide a protected environment for the state’s diverse flora and fauna. The Kanchenjunga National 
                 Park (established in 1977), near the peak from which it draws its name, is among the largest of India’s 
                 high-elevation conservation areas.`
            ]
        },
        {
            heading: "Climate in Sikkim",
            para: [
                `Sikkim exhibits a variety of climatic types, from almost tropical conditions in the south to severe mountain
                 climates in the north. In Gangtok, temperatures in January (the coldest month) drop into the low 30s F 
                 (about 0 °C); in August (the warmest month), temperatures may reach the low 80s F (about 28 °C). Depending 
                 on elevation and exposure, annual precipitation varies from 50 to 200 inches (1,270 to 5,080 mm), most 
                 occurring during the months of the southwest monsoon (May through October). The heavy rains and snows often 
                 trigger destructive landslides and avalanches.`
            ]
        },
    ]
}
details_page["4"] = {
    title: "Manali",
    subtitle: "Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It’s a gateway for skiing in the Solang Valley and trekking in Parvati Valley.",
    banner_img: "./Assets/manali/img (6).jpg",
    banner_title: "Top things to do in Manali",
    desc1: [
        {
            heading: "Top things to do in Manali",
            weather: "14",
            img: "./Assets/manali/img (3).jpg",
            para: [
                `A gift of the Himalayas to the world, Manali is a beautiful township nestled in the picturesque Beas River 
                valley. It is a rustic enclave known for its cool climate and snow-capped mountains, offering respite to 
                tourists escaping scorching heat of the plains. The tourism industry in Manali started booming only in the
                 early 20th century, mainly because of its natural bounties and salubrious climate. The modern town cocooned 
                 in its rich cultural heritage and age-old traditions is now one of the most popular destinations of India. 
                 The place is a classic blend of peace and tranquility which makes it a haven for nature lovers and adventure
                  enthusiasts, who want to get off the main tourist trails and experience nature up close.`,
                `The glacial water of River Beas after rushing down the slopes of Rohtang Pass allows adventure sport 
                activities of rowing, white water rafting and river crossing as it meanders through the valley from Manali 
                to Kullu.The open valley with terraced fields dotted with hotels and resorts has tourists converge on this 
                township in summer from April to July and in autumn to early winter from October to December. `
            ]
        },
        {
            heading: "Rohtang Pass",
            img: "./Assets/manali/img (2).jpg",
            para: [
                `On a meandering uphill road, 51 km away from Manali, Rohtang Pass is an ace tourist attraction that elevates
                 your travel experience. The pass gives summer access to the land of Lahaul and Spiti. Heavy snow closes the
                  pass in late November which after much effort is again opened six months later by May. 
                  As the summer picks up and snow starts to melt, tourist vehicles start making a beeline to the Pass to 
                  experience snow in the months of June to August. The tourists do also enjoy adventure activities of 
                  paragliding, trekking and skiing here. Other excursions in the area include a visit to Nehru Kund, Jogini 
                  Fall and Kothi.`,
                 `
                 To preserve the pristine beauty of the Pass, the small streams, alpine pastures and mesmerizing waterfalls,
                  overcrowding of the destination by law stands restricted. The government has enforced regulated access of 
                  visitors and vehicles to Rohtang. A special permit for petrol and diesel vehicles by the designated authority
                at Manali is required to visit Rohtang Pass for tourism purposes.`
            ]
        },
    ],
    featured_imgs: {
        img1: "./Assets/manali/img (4).jpg",
        img2: "./Assets/manali/img (1).jpg",
        img3: "./Assets/manali/img (5).jpg",
    },
    desc2: [
        {
            heading: "Solang Nullah",
            para: [
                `An open meadow running along a slope surrounded by a deodar rich forest in the midst of high peaks around, 
                Solang Nullah, 13 km from Manali, is one of the most beautiful tourist spots on the outskirts of the resort 
                township. Solang bustles with tourism activity both in the summer and winters. A variety of adventure sporting 
                activities that include quad-bike rides, zorbing, paragliding and gondola (ropeway) ride, rock climbing, 
                ballooning, camping and mountaineering can be indulged in at Solang. In winters, the slopes packed with snow 
                becomes a winter sports arena for skiing where even state and national level ski championship are regularly 
                conducted. Solang also serves as a base camp for mountaineering expeditions to Anjani Mahadev, Hanuman Tibba 
                and Patalsu peak.`,
            ]
        },
        {
            heading: "Naggar",
            para: [
                `
                Overlooking the valley from high up on the left bank side of the Beas River, Naggar, 22 kms from Manali, 
                served as the capital of the principality before it moved to Sultanpur, Kullu in 1660 AD. Many monuments and 
                temples along with a 500 year palace castle scattered around Naggar bear testimony of the importance the 
                place once held. It has become popular tourist attraction on the periphery of Manali. The small settlement 
                has a lot to offer. The most prominent being the Nicholas Roerich Art Gallery, Vasuki Nag Temple, Tripura 
                Sundari Temple and the Gauri Shankar Temple. The well conserved Naggar Castle exhibits magnificent 
                architecture, wood carvings, stone and metal craft of the times. Once a royal residence built by Raja Sidh Singh, 
                the castle is now a museum and a heritage hotel run by Himachal Tourism.`,
                `Some masterpieces from the brush of the Russian count and artist Nicholas Roerich are on permanent display 
                at his former residence, now turned into an art gallery-cum-museum. In close proximity to Manali, Naggar is 
                the quickest way to get off the travel grid to find solace. A blend of history and local culture, Naggar 
                manages to maintain the arty environment with a vintage touch.`
            ]
        },
    ]
}
details_page["5"] = {
    title: "Leh Ladak",
    subtitle: "Leh Ladakh is most famous for breathtaking landscapes, the crystal clear skies, the highest mountain passes, thrilling adventure activities, Buddhist Monasteries and festivals.",
    banner_img: "./Assets/leh_ladak/img (1).jpg",
    banner_title: "Top things to do in Leh Ladak",
    desc1: [
        {
            heading: "Top things to do in Leh Ladak",
            weather: "14",
            img: "./Assets/leh_ladak/img (6).jpg",
            para: [
                `Ladakh is a paradise on Earth and boasts of unparalleled beauty. It is a 'Land of high passes' and dotted
                 with high altitude lakes and lofty mountains. It is wedged between the high Himalayas and renowned as the 
                 'Shangri La of India'. Trip for Ladakh is one of the most sought after road trips. Drive through the high
                  mountain passes and wandering in the winding lanes is once in a lifetime experience. Ladakh is a fascinating
                  place with jaw-dropping locales and blessed with exceptional beauty. It is home to ancient Buddhist 
                  monasteries, glacier lakes, high altitude mountain passes, and lofty Himalayan peaks, which leave everyone 
                  spellbound. Ladakh is an absolute delight for nature lovers and adventure enthusiasts.`,
                `Ladakh is a dream destination for avid travelers and adventure lovers. The ancient monasteries, fluttering 
                flags, and the snow-clad Himalayas dominate the picturesque landscape of Ladakh. The cultural diversities, 
                geographical marvels, and serene environs make Ladakh worth visiting. Trip to Ladakh is a once in a lifetime 
                experience.The Ladakh capital city of Leh lies near the eastern parts of Jammu and Kashmir, on the crossroads
                 of the historic "Silk Route" from Sinkiang to West Asia and to the plains of India. The humbling monasteries 
                 of Shey, Hemis, Alchi, Thikse and Lamayuru will nurture your spiritual needs, and the landscape of Leh 
                 provides for a number of adventure activities including mountaineering, white-water rafting and trekking 
                 along the Markha Valley.`
            ]
        },
        {
            heading: "Pangong TSO",
            img: "./Assets/leh_ladak/img (7).jpg",
            para: [
                `Pangong Tso or Pangong Lake is an endorheic lake spanning eastern Ladakh and West Tibet situated at an 
                elevation of 4,225 m. It is 134 km long and divided into five sublakes, called Pangong Tso, Tso Nyak, Rum Tso 
                and Nyak Tso.The beauty and allure of this lake has attracted people from all over the country and beyond. 
                The lake is said to be in the process of being identified as a wetland with international significance under 
                the Ramsar Convention and if everything goes as expected then the Pangong Lake will be the first in South Asia 
                to be a trans-boundary wetland and that too under this convention.`,
                 `The one factor that makes this Lake so popular is the fact that it keeps changing colors. Situated in the 
                 Himalayan range it is approximately 140 km from Leh in Jammu and Kashmir. The name of the lake Pangong was 
                 got from a Tibetan word Banggong Co that means a narrow and enchanted lake. And now you know that the lake 
                 has got its name rightfully. You will know this when you visit the beautiful lake of Pangong. 
                 You are sure to be enchanted by the charm.`
            ]
        },
    ],
    featured_imgs: {
        img1: "./Assets/leh_ladak/img (2).jpg",
        img2: "./Assets/leh_ladak/img (8).jpg",
        img3: "./Assets/leh_ladak/img (5).jpg",
    },
    desc2: [
        {
            heading: "Hall Of Fame",
            para: [
                `Hall of Fame is a museum constructed by the Indian Army in memory of the brave Indian soldiers who laid down
                 their lives defending the motherland in the Indo-Pak wars. The Hall of Fame museum is located on the 
                 Leh-Kargil Road, about 4km from the city of Leh. It stands as a reminder of the great sacrifices made by 
                 our soldiers to ensure the safety and security of our country.`,
                 `The Hall of Fame museum, consisting of two stories, is divided into various sections which contain several 
                 displays. In the upper floor, there is a section named OP Vijay Gallery. Here, you can see the various kinds 
                 of weapons used in the Kargil war, along with the various arms and ammunition captured by the Indian Army 
                 during the war. On the same floor, in yet another section, various kinds of apparel and amenities used by 
                 the Indian Army in the Siachen region have also been displayed. Some of these show the pictures of army posts 
                 on the glacier, living accommodation of the troops and the training process of the troops on ice walls, 
                 besides others.`,
                 `Another section of the same ground floor, you will find the pictures of Kargil War on the walls. The 
                 pictures provide an elaborate and fascinating account of how the Indian Army fought the war. There is 
                 also a wall named "Lest We Forget" which displays the photographs of those soldiers who laid down their 
                 lives defending our nation. It's a very moving sight to come across and reminds you of the enormous 
                 sacrifices made by our soldiers to ensure that our country is safe and secure from foreign aggression at 
                 all times.`
            ]
        },
        {
            heading: "Thiksey Monastery",
            para: [
                `Thiksay Monastery is located 19 kilometres from Leh, the capital town of Ladakh. It is situated on a hillock 
                overlooking the Indus Valley with full view of the magnificent Stok range. Spon Palden Sherab with his Master 
                Jangsem Sherab Zang, one of the six contemporary disciples of Lord Tsongkhapa, the founder of Gelugpa school 
                of Tibetan Buddhism, responsible for the dissemination of his teachings to the remote provinces founded 
                Thiksay monastery in 1433 AD. Tsongkhapa once prpohesied: My doctrine will flourish along the right side of 
                the Indus River. This prophecy came to realization with the establishment of the first Gelugpa monastery at 
                Thiksay followed by many other large-scale monasteries belonging to the same order such as Spituk and Likir 
                monasteries, all located on the right side of the Indus River. Jangsem Sherab Zangpo had initially built a 
                temple called Lhakhang Serpo (Yellow Temple) prior to Thiksay Monastery.`
            ]
        },
    ]
}
details_page["6"] = {
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
details_page["7"] = {
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
details_page["8"] = {
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
details_page["9"] = {
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


function set_Intro(pkg_id) {
    const details = document.querySelector('.details_sec1');
    const data = details_page[pkg_id] || details_page["1"];

    const intro = details.querySelector('.intro');
    const title = intro.querySelector('h1');
    const subTitle = intro.querySelector('p');
    title.textContent = data.title;
    subTitle.textContent = data.subtitle;

    const banner_img = details.querySelector('.video img');
    const banner_title = details.querySelector('.video h2');
    banner_img.src = data.banner_img;
    banner_title.textContent = data.banner_title;
}

function set_Description(pkg_id) {
    const details = document.querySelector('.details_sec2');
    const data = details_page[pkg_id] || details_page["1"];

    data.desc1.forEach((des, i) => {

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
        h1.textContent = "14";

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

        des.para.forEach((p) => {
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

function set_feature_img(pkg_id) {
    const details = document.querySelector('.details_sec3');
    const data = details_page[pkg_id] || details_page["1"];

    const video_cards = details.querySelectorAll('.video_cards img');
    video_cards[0].src = data.featured_imgs.img1;
    video_cards[1].src = data.featured_imgs.img2;
    video_cards[2].src = data.featured_imgs.img3;
}

function set_bottom_desc(pkg_id) {
    const details = document.querySelector('.details_sec4');
    const data = details_page[pkg_id] || details_page["1"];

    data.desc2.forEach((des) => {
        const aside = document.createElement('aside');
        const h1 = document.createElement('h1');
        h1.textContent = des.heading;
        aside.appendChild(h1);

        des.para.forEach((para) => {
            const p = document.createElement('p');
            const br = document.createElement('br');
            p.textContent = para;
            aside.append(p, br);
        })


        details.appendChild(aside);
    })

}

function render_details() {
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