const goGreenData = [
    {
        id: '1',
        title: 'Save Energy',
        color: '#FFA149',
        img: 'energy.jpg',
        items: [
            'Set your thermostat a few degrees lower in the winter and a few degrees higher in the summer to save on heating and cooling costs.',
            'Install compact fluorescent light bulbs (CFLs) when your older incandescent bulbs burn out.',
            `Unplug appliances when you're not using them. Or, use a "smart" power strip that senses when appliances are off and cuts "phantom" or "vampire" energy use.`,
            `Wash clothes in cold water whenever possible. As much as 85 percent of the energy used to machine-wash clothes goes to heating the water.`,
            `Use a drying rack or clothesline to save the energy otherwise used during machine drying.`
        ]
    },
    {
        id: '2',
        title: 'Save water',
        color:'#42A0F8',
        img:'water.jpg',
        items: [
            'Take shorter showers to reduce water use. This will lower your water and heating bills too.',
            `Install a low-flow showerhead. They don't cost much, and the water and energy savings can quickly pay back your investment.`,
            `Make sure you have a faucet aerator on each faucet. These inexpensive appliances conserve heat and water, while keeping water pressure high.`,
            `Plant drought-tolerant native plants in your garden. Many plants need minimal watering. Find out which occur naturally in your area.`
        ]
    },
    {
        id: '3',
        title: 'Save Gas',
        color: '#444444',
        img: 'gas.jpg',
        items: [
            'Walk or bike to work. This saves on gas and parking costs while improving your cardiovascular health and reducing your risk of obesity.',
            'Consider telecommuting if you live far from your work. Or move closer. Even if this means paying more rent, it could save you money in the long term.',
            `Lobby your local government to increase spending on sidewalks and bike lanes. With little cost, these improvements can pay huge dividends in bettering your health and reducing traffic.`,
        ]
    },
    {
        id: '4',
        title: 'Eat Smart',
        color: '#c552ff',
        img: 'eat.jpg',
        items: [
            `If you eat meat, add one meatless meal a week. Meat costs a lot at the store-and it's even more expensive when you consider the related environmental and health costs.`,
            'Buy locally raised, humane, and organic meat, eggs, and dairy whenever you can. Purchasing from local farmers keeps money in the local economy.',
            `Watch videos about why local food and sustainable seafood are so great.`,
            `Whatever your diet, eat low on the food chain [pdf]. This is especially true for seafood.`,
        ]
    },
    {
        id: '5',
        title: 'Reuse Water Bottles',
        color: '#49cdff',
        img: 'bottles.jpg',
        items: [
            `Use a water filter to purify tap water instead of buying bottled water. Not only is bottled water expensive, but it generates large amounts of container waste.`,
            'Bring a reusable water bottle, preferably aluminum rather than plastic, with you when traveling or at work.',
        ]
    }   
]
function generateGoGreenTips(gogreen){
    const container = document.getElementById('contentContainer');
    const card = document.createElement('div');
    const info = document.createElement('div');
    const title = document.createElement('h2');
    const data = document.createElement('div');
    title.style.color= gogreen.color;
    const img = new Image();
    img.src=`images/${gogreen.img}`
    info.setAttribute('class', 'info');
    card.setAttribute('class', 'going-green');
    card.setAttribute('id', gogreen.id);
    const list = document.createElement('ol');
    gogreen.items.forEach(d => {
        const item = document.createElement('li');
        item.textContent = d;
        list.appendChild(item)
    })
    info.appendChild(title)
    title.textContent = gogreen.title;
    info.appendChild(list) 
    card.appendChild(info)
    card.appendChild(img)
    container.appendChild(card);
}
goGreenData.forEach(d => {
    generateGoGreenTips(d);
})
const firstSection = document.getElementById('1');
document.getElementById('letsBeginButton').addEventListener('click', ()=> {
    zenscroll.to(firstSection);
})
