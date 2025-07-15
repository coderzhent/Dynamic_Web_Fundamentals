const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	}
]

const books = document.querySelector("#books");

articles.forEach(art => {
	const temp = document.createElement("div");
	temp.innerHTML = "<aside><h3></h3><p></p><p></p><p></p></aside><div><h2></h2><img><p></p></div>";

	temp.classList.add("book");
	temp.children[0].classList.add("book-info");
	temp.children[0].children[0].innerText=art.date;
	temp.children[0].children[1].innerText=art.ages;
	temp.children[0].children[2].innerText=art.genre;
	temp.children[0].children[3].innerText=art.stars;
	temp.children[1].children[0].innerText=art.title;
	temp.children[1].children[1].src=art.imgSrc;
	temp.children[1].children[1].alt=art.imgAlt;
	temp.children[1].children[2].innerText=art.description;

	books.appendChild(temp);
});

// for (let i = 0; i < articles.length; i++) {
// 	const temp = document.createElement("div");
// 	temp.innerHTML = "<aside><h3></h3><p></p><p></p><p></p></aside><div><h2></h2><img><p></p></div>";

// 	temp.classList.add("book");
// 	temp.children[0].children[0].innerText=articles[0].date;
// 	temp.children[0].children[1].innerText=articles[0].ages;
// 	temp.children[0].children[2].innerText=articles[0].genre;
// 	temp.children[0].children[3].innerText=articles[0].stars;
// 	temp.children[1].children[0].innerText=articles[0].title;
// 	temp.children[1].children[1].src=articles[0].imgSrc;
// 	temp.children[1].children[1].alt=articles[0].imgAlt;
// 	temp.children[1].children[2].innerText=articles[0].description;

// 	books.appendChild(temp);
// }