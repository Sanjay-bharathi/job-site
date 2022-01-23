import { JOB_LIST_UPDATE } from "./actionTypes";

const initialState = [
    {
        id: 1,
        name: 'Reliance Industries Ltd',
        title: 'Digital Marketing Agency',
        is_verified: true,
        is_add: true,
        country: 'IN',
        country_logo: 'https://cdn.explara.com/tie-cm-dinner-06151920190615222922.jpg',
        logo: 'https://www.nextbigbrand.in/wp-content/uploads/2019/10/reliance-industries-ltd-bandra-east-mumbai-corporate-companies-2e2arrm.jpg',
        work_list: ['Digital Marketing', ' Gsuite Google Mail', 'Mob Apps Development', 'Branding & Creative', 'Mobile Apps Development', 'IPad Apps'],
        address: '504, NBC Complex, Plot # 43, Sector 11, Opp IDBI Bank, CBD Belapur, Navi Mumbai - 400614.',
        founding_year: '2017',
        phone: '+91 987564321',
        opening_time: '8am',
        closing_time: '8pm',
        min_order: '1000 - 2000',
        team: '1 - 1000',
        response_rate: 20,
        rating: 3.5,
        no_of_reviews: 97592
    },
    {
        id: 2,
        name: 'Tata Consultancy Services Ltd',
        title: 'Digital Marketing Agency',
        is_verified: true,
        is_add: true,
        country: 'IN',
        country_logo: 'https://cdn.explara.com/tie-cm-dinner-06151920190615222922.jpg',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhwzFYuOXlamKPAKcEkVFQawiYaMCwA3ELp8ZB4lEfF7JxsI0uLh9Q7bSQ8qZExvhU41I&usqp=CAU',
        work_list: ['Digital Marketing', ' Gsuite Google Mail', 'Mob Apps Development', 'Branding & Creative', 'Mobile Apps Development', 'IPad Apps'],
        address: '504, NBC Complex, Plot # 43, Sector 11, Opp IDBI Bank, CBD Belapur, Navi Mumbai - 400614.',
        founding_year: '2017',
        phone: '+91 987564321',
        opening_time: '8am',
        closing_time: '8pm',
        min_order: '1000 - 2000',
        team: '1 - 1000',
        response_rate: 20,
        rating: 3.5,
        no_of_reviews: 97592
    },
    {
        id: 3,
        name: 'HDFC Bank',
        title: 'Digital Marketing Agency',
        is_verified: true,
        is_add: true,
        country: 'IN',
        country_logo: 'https://cdn.explara.com/tie-cm-dinner-06151920190615222922.jpg',
        logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAMAAAAKE/YAAAAAulBMVEX////tHSQAS40fYZv0ycn24eFgj7iApcbwsLHpj5DzsLH4qq2gvNVQg7HgS03oYWTjUlVNVn5CWYY9THgxTH3vOD/DPE3P3eqvx9sQVpT2jpH1f4MwbaLw9Pj81NZAeKpwmr/6xsjE1eXi6/KQsc00cKQoZ5/83+BRhLH96uoTWJXo7/Vai7V9o8WLrcvkZ2iCgp58co778vJscpNnYYPlc3TKUF/zY2jxTlPKoa/MtcOfu9T0dXnyWl/3QfWIAAADjElEQVR4nO2a6XabMBBGVUihiaHpjtWAcQBjJ2Cn+5b2/V+rIwkQYIJx6no557s/kARCcxkkwCdhDAAAAAAAAAAAAAAAAAA4CZ4M4HnR93JI56eQhjSkIQ1pSEMa0pA+Num7Z11Mir7zzqNXh5Y+f8QIF5AeBKQh3QOkId0DpCHdA6SPQfrDy24+HrP0K6Ob15CGNKQhfZrSLxpcP0J60hzi0x6k+xgmfWRAel9Ael9AepfcXdY5axwbJj1vjHC5j+f0Sb4RIQ1pSEN699Kf33Tz5ZilhwHpYUAa0j1AGtI9QBrSPUD6MNJfz7ooPW46j54fWrqbI/9vMUhDGtKQhjSkIQ1pSK/R+bW51adpiz04AwAAANvyVjNnF7rxzTwgm6Rr3wQTNtKNdw/8WXMvQPqYpL+/l9ywiar8OAXpUWvf1alLm5ZlhVS6VHIjtATuTB7yrQJx3AhXjmPPdGCr6MqLdk6t2/KIOCOl0jS4aonCqs7+V2mX2g6VHpWm4RQ9giXtssv+Y7q2qKjyduDAks1U1KeixkUtNYwpFa5hqvHHVHi320oHniIYJM1Y0pDmXu0C2oF90VyJmldJR03phLZx5TxYugzmbZQeO55SEdKRQ0xlNZ5OMypCHTi2rKjMb8yKBCtpZtWl5enm9nO6Tzqi+RZX0mQlErOSpureS6VUdV7pwJTYUJqpkjrZlXRgaums5bxRekTMW9IT2vezJl1SSc/kCTLTSZLkMrK89b7vmzpw4IyzYuR70ZXUKmk21tKsFn+QdEldmpUOD0mLSFE1px3Db0etB07E2qSlsgzVybzIbdSQlvdjqPQ1cdOSntO+X3XpIAga0jrTSlpdhMp0qgNnSSLMaMIsqJjxQK5fIT12StNKOuPDpbdfiKG82TQ9hXTiuq4vExlwdTFOY06L2e6pJ1qSUH6DQvo2q0nHqWjd/09pZyWfyX59IYqVGbkL0SnXgWPXXUp3ruO5SlrmXj/ycsb0c2e4dDZWDH1O3xt1aTMr93vrgVeGxeQUC6SukpbJ1y8XkYd47cW0SbrOAGmam3Vpw48LZ3MtML0khRJXcyXghbQZ1KVTdXU7kk5t2xYL26KSGy5t7eV0IV9eIdX96pbmThQ5edU0bMnUSlVdvmEWVEk5bfLi9NTgxfi5GHhX0gdhiPTvkeSGzVXlzylIn+QvF0hDGgAAAAAAAAAAAAAAAAA4HH8Bzb5wgjlhX+sAAAAASUVORK5CYII=',
        work_list: ['Digital Marketing', ' Gsuite Google Mail', 'Mob Apps Development', 'Branding & Creative', 'Mobile Apps Development', 'IPad Apps'],
        address: '504, NBC Complex, Plot # 43, Sector 11, Opp IDBI Bank, CBD Belapur, Navi Mumbai - 400614.',
        founding_year: '2017',
        phone: '+91 987564321',
        opening_time: '8am',
        closing_time: '8pm',
        min_order: '1000 - 2000',
        team: '1 - 1000',
        response_rate: 20,
        rating: 3.5,
        no_of_reviews: 97592
    }
]

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case JOB_LIST_UPDATE:
            return { ...state, ...payload };

        default:
            return state;
    }
};
