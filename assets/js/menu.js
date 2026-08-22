/*
	Portfolio v1 — mobile menu toggle + selected case-study enhancement.
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

	function linkCase(caseEl, href, ariaLabel) {
		var title = caseEl.querySelector(".case__body h3");
		var figure = caseEl.querySelector(".case__figure");

		if (title && !title.querySelector("a")) {
			var titleLink = document.createElement("a");
			titleLink.href = href;
			titleLink.textContent = title.textContent;
			title.textContent = "";
			title.appendChild(titleLink);
		}

		if (figure && !figure.querySelector(":scope > a")) {
			var figureLink = document.createElement("a");
			figureLink.href = href;
			figureLink.setAttribute("aria-label", ariaLabel);
			while (figure.firstChild) {
				figureLink.appendChild(figure.firstChild);
			}
			figure.appendChild(figureLink);
		}
	}

	function appendScaleAndLink(caseEl, scaleText, href) {
		var body = caseEl.querySelector(".case__body");
		if (!body) return;

		var tags = body.querySelector(".case__tags");
		var oldScale = body.querySelector(".case-scale");
		if (!oldScale) {
			var scale = document.createElement("p");
			scale.className = "muted case-scale";
			scale.textContent = scaleText;
			if (tags) body.insertBefore(scale, tags);
			else body.appendChild(scale);
		}

		if (!body.querySelector(".case-more-link")) {
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

	var cases = document.querySelectorAll("#work .case");

	if (cases.length > 0) {
		var flagship = cases[0];
		var flagshipHref = "case-studies/financial-reporting-transformation.html";
		linkCase(flagship, flagshipHref, "View Financial Reporting Transformation case study");
		appendScaleAndLink(
			flagship,
			"Verified scale: 36 source workbooks, 34 periods reconstructed, 4,600+ transaction groups, and 12/12 migration checks passed.",
			flagshipHref
		);
	}

	if (cases.length > 1) {
		var operations = cases[1];
		var operationsHref = "case-studies/financial-operations-reporting-system.html";
		var title = operations.querySelector(".case__body h3");
		var paragraphs = operations.querySelectorAll(".case__body p");
		var tags = operations.querySelector(".case__tags");
		var figure = operations.querySelector(".case__figure");

		if (title) title.textContent = "Financial Operations & Reporting System";
		if (paragraphs.length > 0) {
			paragraphs[0].innerHTML = "<strong>Problem:</strong> Daily finance administration, validation, journal logic, and management reporting needed to operate as one connected workflow rather than separate activities.";
		}
		if (paragraphs.length > 1) {
			paragraphs[1].innerHTML = "<strong>Role:</strong> Structured the workbook architecture, validation statuses, account mapping, journal generation, period reporting, and cash-visibility workflow for an education organization.";
		}

		if (tags) {
			tags.innerHTML = '<span class="tag">Finance Operations</span><span class="tag">Excel Systems</span><span class="tag">Process Improvement</span>';
		}

		if (figure) {
			figure.innerHTML = '<div class="schematic" role="img" aria-label="Operational finance workflow from admin input through management reporting"><svg viewBox="0 0 320 240" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><rect class="schematic__hair" x="20" y="34" width="280" height="66"/><line class="schematic__hair" x1="20" y1="58" x2="300" y2="58"/><line class="schematic__hair" x1="88" y1="34" x2="88" y2="100"/><line class="schematic__hair" x1="216" y1="34" x2="216" y2="100"/><rect class="schematic__fill-soft" x="28" y="68" width="50" height="18"/><rect class="schematic__fill-soft" x="98" y="68" width="108" height="18"/><rect class="schematic__accent" x="228" y="68" width="58" height="18"/><line class="schematic__stroke" x1="34" y1="160" x2="286" y2="160"/><circle class="schematic__node" cx="34" cy="160" r="9"/><circle class="schematic__node" cx="84" cy="160" r="9"/><circle class="schematic__node" cx="134" cy="160" r="9"/><circle class="schematic__node" cx="184" cy="160" r="9"/><circle class="schematic__node" cx="234" cy="160" r="9"/><circle class="schematic__accent" cx="286" cy="160" r="9"/><line class="schematic__hair" x1="34" y1="184" x2="34" y2="202"/><line class="schematic__hair" x1="84" y1="184" x2="84" y2="202"/><line class="schematic__hair" x1="134" y1="184" x2="134" y2="202"/><line class="schematic__hair" x1="184" y1="184" x2="184" y2="202"/><line class="schematic__hair" x1="234" y1="184" x2="234" y2="202"/><line class="schematic__accent" x1="286" y1="184" x2="286" y2="202"/></svg></div>';
		}

		linkCase(operations, operationsHref, "View Financial Operations and Reporting System case study");
		appendScaleAndLink(
			operations,
			"Verified structure: 10 sheets, 22 input fields, 15 validation conditions, a 16-field journal, and five ready test records producing ten journal lines.",
			operationsHref
		);
	}
})();
