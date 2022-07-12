const videoIntro = {
    "id": 0,
    "description":"",
    "path": "media/Presentazione.mp4",
    "waitGif": "media/GifAttesaDomanda.mp4",
    "choice": {
        1: 1,
        2: 2,
        3: 3
    }
}

const videoOutro =  "media/Company/saluto finale/salutofinale.mp4";

const videoQ = 
[
    {   
        "terzina":[   
                    {
                        "id": 1,
                        "description":"Are your products designed for durability?",
                        "path": "media/Company/Terna 1/Terna 1 - 1.mp4",
                        "waitGif": "media/Company/linagif.mp4"
                    },
                    {
                        "id": 2,
                        "description":"Are your products designed to serve multiple purposes, contexts, and uses?",
                        "path": "media/Company/Terna 1/Terna 1 - 2.mp4",
                        "waitGif": "media/Company/linagif.mp4"
                    },
                    {
                        "id": 3,
                        "description":"Are your products designed for repairability and upgradeability?",
                        "path": "media/Company/Terna 1/Terna 1 - 3.mp4",
                        "waitGif": "media/Company/linagif.mp4"
                    }]
    },
    { 
        "terzina":[
                    {
                        "id": 4,
                        "description":"Do you already have pricing and return policies that lower the risk of initial purchase decision?",
                        "path": "media/Company/Terna 2/Terna 2 - 1.mp4",
                        "waitGif": "media/Company/amnagif.mp4"
                    },
                    {
                        "id": 5,
                        "description":"Do you already enable or promote purchase of used products?",
                        "path": "media/Company/Terna 2/Terna 2 - 2.mp4",
                        "waitGif": "media/Company/amnagif.mp4"
                    },
                    {
                        "id": 6,
                        "description":"Do you already facilitate assessment of product benefits and costs over the product’s life cycle throught  third party and customer reviews?",
                        "path": "media/Company/Terna 2/Terna 2 - 3.mp4",
                        "waitGif": "media/Company/amnagif.mp4"
                    }]
    },
    { 
        "terzina":[
                    {
                        "id": 7,
                        "description":"Do you already oﬀer price promotions that encourage the return of products for recycling, reuse?",
                        "path": "media/Company/Terna 3/Terna 3 - 1.mp4",
                        "waitGif": "media/Company/saragif.mp4"
                    },
                    {
                        "id": 8,
                        "description":"Do you already establish rewards to motive consumers to return products?",
                        "path": "media/Company/Terna 3/Terna 3 - 2.mp4",
                        "waitGif": "media/Company/saragif.mp4"
                    },
                    {
                        "id": 9,
                        "description":"Do you already establish incentives to motive consumers to return products?",
                        "path": "media/Company/Terna 3/Terna 3 - 3.mp4",
                        "waitGif": "media/Company/saragif.mp4"
                    }]
    },
    { 
        "terzina":[
                    {
                        "id": 10,
                        "description":"Do you think hedonic benefits for consumers can play a role in fashion rental?",
                        "path": "media/Company/Terna 4/Terna 4 - 1.mp4",
                        "waitGif": "media/Company/saragif.mp4"
                    },
                    {
                        "id": 11,
                        "description":"Do you think economic benefits for consumers can play a role in fashion rental?",
                        "path": "media/Company/Terna 4/Terna 4 - 2.mp4",
                        "waitGif": "media/Company/saragif.mp4"
                    },
                    {
                        "id": 12,
                        "description":"Do you think social benefits for consumers can play a role in fashion rental?",
                        "path": "media/Company/Terna 4/Terna 4 - 3.mp4",
                        "waitGif": "media/Company/saragif.mp4"
                    }]
    },
    // { 
    //     "terzina":[
    //                 {
    //                     "id": 10,
    //                     "description":"Do you think sustainability benefits for consumers can play a role in fashion rental?",
    //                     "path": "media/Company/Terna 5/Terna 5 - 1.mp4",
    //                     "waitGif": "media/Company/linagif.mp4"
    //                 },
    //                 {
    //                     "id": 11,
    //                     "description":"Do you think environmental awareness in consumers can play a role in fashion rental?",
    //                     "path": "media/Company/Terna 5/Terna 5 - 2.mp4",
    //                     "waitGif": "media/Company/linagif.mp4"
    //                 },
    //                 {
    //                     "id": 12,
    //                     "description":"Do you think micro-celebrities can significantly inﬂuence attitudes towards fashion renting?",
    //                     "path": "media/Company/Terna 5/Terna 5 - 3.mp4",
    //                     "waitGif": "media/Company/linagif.mp4"
    //                 }]
    // },
    // { 
    //     "terzina":[
    //                 {
    //                     "id": 13,
    //                     "description":"Do you think culture can significantly inﬂuence the attitude toward fashion renting?",
    //                     "path": "media/Company/Terna 6/Terna 6 - 1.mp4",
    //                     "waitGif": "media/Company/amnagif.mp4"
    //                 },
    //                 {
    //                     "id": 14,
    //                     "description":"Do you think demographics can significantly inﬂuence the attitude toward fashion renting?",
    //                     "path": "media/Company/Terna 6/Terna 6 - 2.mp4",
    //                     "waitGif": "media/Company/amnagif.mp4"
    //                 },
    //                 {
    //                     "id": 15,
    //                     "description":"Do you think there is a diﬀerent between western and eastern cultures on the attitude toward fashion renting?",
    //                     "path": "media/Company/Terna 6/Terna 6 - 3.mp4",
    //                     "waitGif": "media/Company/amnagif.mp4"
    //                 }]
    // },
    // { 
    //     "terzina":[
    //                 {
    //                     "id": 16,
    //                     "description":"Unclear company motives are a cause of distrust in the service of fashion renting, how do you plan to remove this barrier?",
    //                     "path": "media/Company/Terna 7/Terna 7 - 1.mp4",
    //                     "waitGif": "media/Company/amnagif.mp4"
    //                 },
    //                 {
    //                     "id": 17,
    //                     "description":"Providers’ reputation is a cause of distrust in the service of fashion renting, how do you plan to remove this barrier?",
    //                     "path": "media/Company/Terna 7/Terna 7 - 2.mp4",
    //                     "waitGif": "media/Company/amnagif.mp4"
    //                 },
    //                 {
    //                     "id": 18,
    //                     "description":"Ease of use with respect to convenience is a cause of distrust in the service of fashion renting, how do you plan to remove this barrier?",
    //                     "path": "media/Company/Terna 7/Terna 7 - 3.mp4",
    //                     "waitGif": "media/Company/amnagif.mp4"
    //                 }]
    // },
    // { 
    //     "terzina":[
    //                 {
    //                     "id": 19,
    //                     "description":"Quality issues are a cause of distrust in the service of fashion renting, how do you plan to remove this  barrier?",
    //                     "path": "media/Company/Terna 8/Terna 8 - 1.mp4",
    //                     "waitGif": "media/Company/linagif.mp4"
    //                 },
    //                 {
    //                     "id": 20,
    //                     "description":"Hygiene issues/Contamination issues are a cause of distrust in the service of fashion renting, how do you plan to remove this barrier?",
    //                     "path": "media/Company/Terna 8/Terna 8 - 2.mp4",
    //                     "waitGif": "media/Company/linagif.mp4"
    //                 },
    //                 {
    //                     "id": 21,
    //                     "description":"Maintenance issues are a cause of distrust in the service of fashion renting, how do you plan to remove this barrier?",
    //                     "path": "media/Company/Terna 8/Terna 8 - 3.mp4",
    //                     "waitGif": "media/Company/linagif.mp4"
    //                 }]
    // },
    // { 
    //     "terzina":[
    //                 {
    //                     "id": 22,
    //                     "description":"Do you think social acceptance is a crucial issue for the success of fashion rental? If so, what do you plan to do to favor it?",
    //                     "path": "media/Company/Terna 9/Terna 9 - 1.mp4",
    //                     "waitGif": "media/Company/saragif.mp4"
    //                 },
    //                 {
    //                     "id": 23,
    //                     "description":"Do you think fashion rental can favor brand dilution? If so, do you have countermeasures?",
    //                     "path": "media/Company/Terna 9/Terna 9 - 2.mp4",
    //                     "waitGif": "media/Company/saragif.mp4"
    //                 },
    //                 {
    //                     "id": 24,
    //                     "description":"Do you think fashion rental can be diﬀerent depending on product categories?",
    //                     "path": "media/Company/Terna 9/Terna 9 - 3.mp4",
    //                     "waitGif": "media/Company/saragif.mp4"
    //                 }]
    // },
];
