let colums = document.querySelectorAll(".servises__column");
colums.forEach((element) => {
	element.addEventListener("mouseover", count(element, colums));
});
function count(element, colums) {
	return (e) => {
		if (e.target.closest(".servises__column")) {
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
