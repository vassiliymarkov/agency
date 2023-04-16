"use strict"

// SERVICES TABS
const tabs = document.querySelectorAll('.tabItem');
const contents = document.querySelectorAll('.contentItem');

tabs.forEach((tab, index) => {
	tab.onclick = () => {
		changeTab(index)
	};
});

function changeTab(index) {
	for (var tab of tabs) {
		tab.classList.remove('active');
	}
	tabs[index].classList.add('active');

	for (let el of contents) {
		el.classList.remove('active');
	}
	contents[index].classList.add('active');
};