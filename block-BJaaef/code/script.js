let container = document.querySelector('.container');

got.houses.forEach((item) => {
    for(let people of item.people) {
        let div = document.createElement('div');
        div.className = "box"
        let img = document.createElement('img');
        img.src = people.image;

        let h2 = document.createElement('h2');
        h2.innerText = people.name;

        let p = document.createElement('p');
        p.innerText = people.description;

        let a = document.createElement('a');
        a.href = people.wikiLink;
        a.innerText = "Learn More!"

        div.append(img, h2, p, a);
        container.append(div);
    }
});
