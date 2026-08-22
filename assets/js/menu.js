/* Portfolio interactions and selected case-study previews. */
(function () {
	"use strict";

	var toggle = document.querySelector(".nav-toggle");
	var panel = document.getElementById("nav-mobile");
	if (toggle && panel) {
		function closeMenu() { panel.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); }
		toggle.addEventListener("click", function () {
			var open = toggle.getAttribute("aria-expanded") === "true";
			panel.classList.toggle("is-open", !open);
			toggle.setAttribute("aria-expanded", String(!open));
		});
		panel.addEventListener("click", function (event) { if (event.target.closest("a")) closeMenu(); });
		document.addEventListener("keydown", function (event) { if (event.key === "Escape") closeMenu(); });
		window.matchMedia("(min-width: 768px)").addEventListener("change", function (event) { if (event.matches) closeMenu(); });
	}

	if (!document.querySelector('link[href="assets/css/case-study.css"]')) {
		var caseStyles = document.createElement("link");
		caseStyles.rel = "stylesheet";
		caseStyles.href = "assets/css/case-study.css";
		document.head.appendChild(caseStyles);
	}

	function linkTitle(caseEl, href) {
		var title = caseEl.querySelector(".case__body h3");
		if (title && !title.querySelector("a")) {
			var link = document.createElement("a");
			link.href = href;
			link.textContent = title.textContent;
			title.textContent = "";
			title.appendChild(link);
		}
	}

	function setFigure(caseEl, href, label, html) {
		var figure = caseEl.querySelector(".case__figure");
		if (!figure) return;
		figure.innerHTML = '<a href="' + href + '" aria-label="' + label + '" style="display:block;color:inherit;text-decoration:none">' + html + '</a>';
	}

	function addScale(caseEl, text, href) {
		var body = caseEl.querySelector(".case__body");
		if (!body) return;
		var tags = body.querySelector(".case__tags");
		if (!body.querySelector(".case-scale")) {
			var scale = document.createElement("p");
			scale.className = "muted case-scale";
			scale.textContent = text;
			if (tags) body.insertBefore(scale, tags); else body.appendChild(scale);
		}
		if (!body.querySelector(".case-more-link")) {
			var more = document.createElement("a");
			more.className = "case-more-link";
			more.href = href;
			more.textContent = "View full case study →";
			more.style.cssText = "display:inline-block;margin-top:20px;font-family:var(--font-sans);font-size:12px;font-weight:700;letter-spacing:.04em;color:var(--secondary)";
			body.appendChild(more);
		}
	}

	var cases = document.querySelectorAll("#work .case");

	if (cases[0]) {
		var p1 = cases[0];
		var p1Href = "case-studies/financial-reporting-transformation.html";
		var p1Visual = '<div class="demo-dashboard" role="img" aria-label="Synthetic management reporting dashboard"><div class="demo-dashboard__title">Management Reporting Dashboard <span>Synthetic Data</span></div><div class="demo-kpis"><article><span>Total Receipts</span><strong>72.95M</strong></article><article><span>Total Payments</span><strong>49.32M</strong></article><article><span>Net Cash Movement</span><strong>23.64M</strong></article><article><span>Items for Review</span><strong>2</strong></article></div><div class="demo-panels"><div class="demo-panel"><h3>Monthly movement</h3><div class="bar-row"><span>Jan</span><i style="--w:74%"></i><b>5.38M</b></div><div class="bar-row"><span>Feb</span><i style="--w:67%"></i><b>4.85M</b></div><div class="bar-row"><span>Mar</span><i style="--w:100%"></i><b>7.23M</b></div><div class="bar-row"><span>Apr</span><i style="--w:86%"></i><b>6.19M</b></div></div><div class="demo-panel"><h3>Validation status</h3><div class="status-row"><span class="status-dot status-dot--ok"></span><span>Ready</span><strong>22</strong></div><div class="status-row"><span class="status-dot status-dot--review"></span><span>Review</span><strong>2</strong></div><hr><h3>Reconciliation</h3><div class="status-row"><span class="status-dot status-dot--ok"></span><span>Passed periods</span><strong>4</strong></div></div></div></div>';
		setFigure(p1, p1Href, "View Financial Reporting Transformation case study", p1Visual);
		linkTitle(p1, p1Href);
		addScale(p1, "Verified scale: 36 source workbooks, 34 periods reconstructed, 4,600+ transaction groups, and 12/12 migration checks passed.", p1Href);
	}

	if (cases[1]) {
		var p2 = cases[1];
		var p2Href = "case-studies/financial-operations-reporting-system.html";
		var title = p2.querySelector(".case__body h3");
		var paragraphs = p2.querySelectorAll(".case__body p");
		var tags = p2.querySelector(".case__tags");
		if (title) title.textContent = "Financial Operations & Reporting System";
		if (paragraphs[0]) paragraphs[0].innerHTML = "<strong>Problem:</strong> Daily finance administration, validation, journal logic, and management reporting needed to operate as one connected workflow rather than separate activities.";
		if (paragraphs[1]) paragraphs[1].innerHTML = "<strong>Role:</strong> Structured the workbook architecture, validation statuses, account mapping, journal generation, period reporting, and cash-visibility workflow for an education organization.";
		if (tags) tags.innerHTML = '<span class="tag">Finance Operations</span><span class="tag">Excel Systems</span><span class="tag">Process Improvement</span>';

		var p2Visual = '<svg viewBox="0 0 800 600" role="img" aria-label="Synthetic financial operations overview" style="display:block;width:100%;height:auto;background:#f7f4ed;border:.5px solid #c8c2b7"><rect width="800" height="600" fill="#f7f4ed"/><text x="44" y="58" font-family="Georgia,serif" font-size="30" font-weight="600" fill="#292826">Financial Operations Overview</text><text x="44" y="84" font-family="Arial,sans-serif" font-size="12" letter-spacing="2" fill="#8b6f59">SYNTHETIC DATA</text><g font-family="Arial,sans-serif"><rect x="44" y="118" width="160" height="90" fill="#fff" stroke="#d8d2c7"/><text x="62" y="145" font-size="12" fill="#6f6a63">Opening Cash</text><text x="62" y="181" font-size="26" font-weight="700" fill="#292826">10.0M</text><rect x="220" y="118" width="160" height="90" fill="#fff" stroke="#d8d2c7"/><text x="238" y="145" font-size="12" fill="#6f6a63">Ending Cash</text><text x="238" y="181" font-size="26" font-weight="700" fill="#292826">16.65M</text><rect x="396" y="118" width="160" height="90" fill="#fff" stroke="#d8d2c7"/><text x="414" y="145" font-size="12" fill="#6f6a63">Ready Records</text><text x="414" y="181" font-size="26" font-weight="700" fill="#292826">5</text><rect x="572" y="118" width="184" height="90" fill="#fff" stroke="#d8d2c7"/><text x="590" y="145" font-size="12" fill="#6f6a63">Needs Review</text><text x="590" y="181" font-size="26" font-weight="700" fill="#292826">1</text><text x="44" y="255" font-size="13" font-weight="700" fill="#292826">Operational workflow</text><g font-size="11" font-weight="600" text-anchor="middle" fill="#373431"><rect x="44" y="278" width="88" height="58" fill="#fff" stroke="#d8d2c7"/><text x="88" y="312">Admin Input</text><rect x="144" y="278" width="88" height="58" fill="#fff" stroke="#d8d2c7"/><text x="188" y="312">Validation</text><rect x="244" y="278" width="96" height="58" fill="#fff" stroke="#d8d2c7"/><text x="292" y="306">Account</text><text x="292" y="321">Mapping</text><rect x="352" y="278" width="96" height="58" fill="#fff" stroke="#d8d2c7"/><text x="400" y="306">Journal</text><text x="400" y="321">Generation</text><rect x="460" y="278" width="96" height="58" fill="#fff" stroke="#d8d2c7"/><text x="508" y="306">Period</text><text x="508" y="321">Reporting</text><rect x="568" y="278" width="88" height="58" fill="#fff" stroke="#d8d2c7"/><text x="612" y="306">Cash</text><text x="612" y="321">Visibility</text><rect x="668" y="278" width="88" height="58" fill="#fff" stroke="#9b433f"/><text x="712" y="306">Management</text><text x="712" y="321">Review</text></g><text x="44" y="388" font-size="13" font-weight="700" fill="#292826">Monthly cash movement</text><text x="520" y="388" font-size="13" font-weight="700" fill="#292826">Validation status</text><g font-size="11" fill="#6f6a63"><text x="44" y="426">Jan</text><rect x="78" y="416" width="330" height="10" rx="5" fill="#e8e2d9"/><rect x="78" y="416" width="258" height="10" rx="5" fill="#4a4e50"/><text x="420" y="426" text-anchor="end">8.9M net</text><text x="44" y="463">Feb</text><rect x="78" y="453" width="330" height="10" rx="5" fill="#e8e2d9"/><rect x="78" y="453" width="130" height="10" rx="5" fill="#9b433f"/><text x="420" y="463" text-anchor="end">-2.25M net</text></g><circle cx="530" cy="425" r="6" fill="#4d8a64"/><text x="546" y="430" font-family="Arial,sans-serif" font-size="12" fill="#373431">Ready</text><text x="728" y="430" font-family="Arial,sans-serif" font-size="13" font-weight="700" text-anchor="end" fill="#292826">5</text><circle cx="530" cy="463" r="6" fill="#c4933f"/><text x="546" y="468" font-family="Arial,sans-serif" font-size="12" fill="#373431">Needs review</text><text x="728" y="468" font-family="Arial,sans-serif" font-size="13" font-weight="700" text-anchor="end" fill="#292826">1</text><line x1="44" y1="515" x2="756" y2="515" stroke="#d8d2c7"/><text x="44" y="548" font-size="11" fill="#6f6a63">22 input fields · 15 validation conditions · 16-field journal</text><text x="756" y="548" font-size="11" text-anchor="end" fill="#8b6f59">Portfolio-safe synthetic overview</text></g></svg>';
		setFigure(p2, p2Href, "View Financial Operations and Reporting System case study", p2Visual);
		linkTitle(p2, p2Href);
		addScale(p2, "Verified structure: 10 sheets, 22 input fields, 15 validation conditions, a 16-field journal, and five ready test records producing ten journal lines.", p2Href);
	}
})();
