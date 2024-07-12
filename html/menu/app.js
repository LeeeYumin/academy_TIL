const menu = [
  {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "item-1.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "item-2.jpg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "item-3.jpg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "item-4.jpg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "item-5.jpg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "item-6.jpg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "item-7.jpg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "item-8.jpg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "item-9.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: "item-10.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

let selectedCategory = 'all';

function createCategoryBtn(category) {
  const $button = document.createElement("button");
  $button.classList.add('filter-btn');
  $button.textContent = category;
  return $button
}

const $categoryContainer = document.querySelector(".category-container");

const category = menu.reduce((values, item) => {
  console.log(item.id, values, item.category);
  if (!values.includes(item.category)) {
      values.push(item.category);
  }
  return values;
}, ['all']);

// 버튼 추가하기
category.forEach((category) => {
  const $btn = createCategoryBtn(category);
  $btn.addEventListener('click', (event) => {
      selectedCategory = event.currentTarget.textContent;
      displayMenu();
  });
  $categoryContainer.append($btn);
})

function createMenuItem(item) {
  const { id, title, category, price, img, desc } = item;
        // id말고 다르게 쓰고싶다면 id:idItem 요런식으로
  const $article = document.createElement("article");
  $article.classList.add('menu-item');

  const $image = document.createElement("img");
  $image.setAttribute('src', img);
  $article.appendChild($image);

  const $info = document.createElement("div");
  $info.classList.add('menu-info');

  const $title = document.createElement("h2");
  $title.textContent = title; //`{title}` 도 가능
  $info.appendChild($title);

  const $price = document.createElement("h2");
  $price.textContent = price;
  $info.appendChild($price);

  const $desc = document.createElement("p");
  $desc.textContent = desc;
  $info.appendChild($desc);

  $article.appendChild($info);

  return $article;
}

function clearDisplayMenu() {
  const items = document.querySelectorAll('.menu-item');
  console.log(items);
  if (!items.length) {
      console.log("There is no items!");
      return;
  }
  items.forEach((item) => $menuContainer.removeChild(item));
}

function displayMenu() {
  clearDisplayMenu();

  let displayItem = menu;
  if (selectedCategory !== 'all') {
      displayItem = menu.filter((item) => item.category === selectedCategory);
      console.log(displayItem);
  }
  displayItem.forEach((item) => {
      const $item = createMenuItem(item);
      $menuContainer.appendChild($item);
  })
}

const $menuContainer = document.querySelector(".menu-container");
displayMenu();
