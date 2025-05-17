const navHeader = document.querySelector(".navbar");
const scrollWatcher = document.createElement("div");

scrollWatcher.setAttribute("data-scroll-watcher", "");
navHeader.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
  navHeader.classList.toggle("sticking", !entries[0].isIntersecting);
});

navObserver.observe(scrollWatcher);
