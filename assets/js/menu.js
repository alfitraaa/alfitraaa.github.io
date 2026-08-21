/*
	Portfolio v1 — mobile menu toggle + lightweight case-study enhancement.
*/
(function () {
	"use strict";

	var toggle = document.querySelector(".nav-toggle");
	var panel = document.getElementById("nav-mobile");

	if (toggle && panel) {
		function openMenu() {
			panel.classList.add("is-open");
			toggle.setAttribute("aria-expanded", "true");
		}

		function closeMenu() {
			panel.classList.remove("is-open");
			toggle.setAttribute("aria-expanded", "false");
		}

		function isOpen() {
			return toggle.getAttribute("aria-expanded") === "true";
		}

		toggle.addEventListener("click", function () {
			if (isOpen()) {
				closeMenu();
			} else {
				openMenu();
			}
		});

		panel.addEventListener("click", function (event) {
			if (event.target.closest("a")) {
				closeMenu();
			}
		});

		document.addEventListener("keydown", function (event) {
			if (event.key === "Escape" && isOpen()) {
				closeMenu();
				toggle.focus();
			}
		});

		var desktop = window.matchMedia("(min-width: 768px)");
		desktop.addEventListener("change", function (event) {
			if (event.matches) {
				closeMenu();
			}
		});
	}

	/* The first selected case study is the public flagship. Keep the homepage
	   concise while exposing the evidence-rich detail page one click away. */
	var flagship = document.querySelector("#work .case:first-of-type");
	if (flagship) {
		var href = "case-studies/financial-reporting-transformation.html";
		var title = flagship.querySelector(".case__body h3");
		var body = flagship.querySelector(".case__body");
		var figure = flagship.querySelector(".case__figure");

		if (title) {
			var titleLink = document.createElement("a");
			titleLink.href = href;
			titleLink.textContent = title.textContent;
			title.textContent = "";
			title.appendChild(titleLink);
		}

		if (figure) {
			var figureLink = document.createElement("a");
			figureLink.href = href;
			figureLink.setAttribute("aria-label", "View Financial Reporting Transformation case study");
			while (figure.firstChild) {
				figureLink.appendChild(figure.firstChild);
			}
			figure.appendChild(figureLink);
		}

		if (body && !body.querySelector(".case-more-link")) {
			var scale = document.createElement("p");
			scale.className = "muted";
			scale.textContent = "Verified scale: 36 source workbooks · 34 periods reconstructed · 4,600+ transaction groups · 12/12 migration checks passed.";
			body.insertBefore(scale, body.querySelector(".case__tags"));

			var more = document.createElement("a");
			more.className = "case-more-link";
			more.href = href;
			more.textContent = "View full case study →";
			more.style.display = "inline-block";
			more.style.marginTop = "20px";
			more.style.fontFamily = "var(--font-sans)";
			more.style.fontSize = "12px";
			more.style.fontWeight = "700";
			more.style.letterSpacing = ".04em";
			more.style.color = "var(--secondary)";
			body.appendChild(more);
		}
	}
})();
