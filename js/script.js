let colums = document.querySelectorAll(".item-servise");
colums.forEach((element) => {
	element.addEventListener("mouseover", count(element, colums));
});
function count(element, colums) {
	return (e) => {
		if (e.target.closest(".item-servise")) {
			colums.forEach((item) => {
				item.classList.remove("active");
				let icon = item.querySelector(".item-servise__icon > img");
				icon.setAttribute("src", icon.getAttribute("src").replace(/-active/g, ""));
			});
			// console.log(e);
			element.classList.add("active");
			icon = element.querySelector(".item-servise__icon > img");
			icon.setAttribute("src", icon.getAttribute("src").replace(/.svg/g, "") + "-active.svg");
			// console.log(icon.getAttribute("src"));
		}
	};
}

// let getintouch__items = document.querySelector(".getintouch__items");
let itemGetintouch = document.querySelectorAll(".item-getintouch");

itemGetintouch.forEach((element) => {
	element.addEventListener("mouseover", count2(element, itemGetintouch));
});
// getintouch__items.addEventListener("mouseover", );

function count2(element, colums) {
	return (e) => {
		if (e.target.closest(".item-getintouch")) {
			colums.forEach((item) => {
				item.classList.remove("item-getintouch__active");
				let icon = item.querySelector(".item-getintouch__icon > img");
				icon.setAttribute("src", icon.getAttribute("src").replace(/-active/g, ""));
			});
			// console.log(e);
			element.classList.add("item-getintouch__active");
			icon = element.querySelector(".item-getintouch__icon > img");
			icon.setAttribute("src", icon.getAttribute("src").replace(/.svg/g, "") + "-active.svg");
			// console.log(icon.getAttribute("src"));
		}
	};
}
