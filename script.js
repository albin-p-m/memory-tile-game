//Grabing some elements..
const livesCount = document.querySelector('.LivesCount');
const cards = document.querySelectorAll('.card');

const totalLives = 6;

//setting initial lives count..
let currentLives = totalLives;

//setting image data..
const imgData = [
    { imgName: 'img1', imgSrc: './images/pexels-arthouse-studio-4558293.jpg' },
    { imgName: 'img2', imgSrc: './images/pexels-daria-nekipelova-9731982.jpg' },
    { imgName: 'img3', imgSrc: './images/pexels-matheus-bertelli-3036883.jpg' },
    { imgName: 'img4', imgSrc: './images/pexels-milada-vigerova-6185062.jpg' },
    { imgName: 'img5', imgSrc: './images/pexels-misha-voguel-9671348.jpg' },
    { imgName: 'img6', imgSrc: './images/pexels-monstera-5874589.jpg' },
    { imgName: 'img7', imgSrc: './images/pexels-анастасия-беккер-5738033.jpg' },
    { imgName: 'img8', imgSrc: './images/pexels-диана-дунаева-9838766.jpg' }
];
const getData = () => [...imgData, ...imgData];

//randomizing the image data collected..
const randomize = () => {
    const cardData = getData();
    return cardData.sort(() => Math.random() - 0.5);
};

//generating card data..
const cardGenerator = () => {
    const cardData = randomize();
    // console.log(cardData);

    const face = document.querySelectorAll('.face');
    face.forEach((item) => {
        const img = document.createElement('img');
        item.appendChild(img);
    });

    const img = document.querySelectorAll('img');
    // console.log(img);
    let i = 0;
    img.forEach(item => {
        if (i < img.length) {
            item.setAttribute('src', cardData[i].imgSrc);
            item.setAttribute('name', cardData[i].imgName);
            i++;
        }
    });
};

// console.log(cards);
cards.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle('flip');
        // console.log(item);
    });
});

livesCount.textContent = currentLives;
cardGenerator();