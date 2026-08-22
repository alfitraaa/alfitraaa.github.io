/* Portfolio interactions and selected case-study previews. */
(function () {
	"use strict";

	var toggle = document.querySelector(".nav-toggle");
	var panel = document.getElementById("nav-mobile");

	if (toggle && panel) {
		function closeMenu() {
			panel.classList.remove("is-open");
			toggle.setAttribute("aria-expanded", "false");
		}
		toggle.addEventListener("click", function () {
			var open = toggle.getAttribute("aria-expanded") === "true";
			panel.classList.toggle("is-open", !open);
			toggle.setAttribute("aria-expanded", String(!open));
		});
		panel.addEventListener("click", function (event) {
			if (event.target.closest("a")) closeMenu();
		});
		document.addEventListener("keydown", function (event) {
			if (event.key === "Escape") closeMenu();
		});
		window.matchMedia("(min-width: 768px)").addEventListener("change", function (event) {
			if (event.matches) closeMenu();
		});
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

		var p2Visual = '<div class="ops-demo" aria-label="Synthetic operational finance workflow"><div class="ops-demo__header"><div><strong>Admin Finance Input</strong><span>Synthetic records</span></div><div class="ops-demo__summary"><span><b>5</b> Ready</span><span><b>1</b> Needs review</span></div></div><div class="ops-table" role="table"><div class="ops-table__row ops-table__head" role="row"><span>Ref</span><span>Description</span><span>Type</span><span>Category</span><span>Status</span></div><div class="ops-table__row" role="row"><span>RC-001</span><span>Monthly education receipts</span><span>Receipt</span><span>Education Revenue</span><span class="ops-status ops-status--ready">Ready</span></div><div class="ops-table__row" role="row"><span>PV-002</span><span>Electricity and water</span><span>Payment</span><span>Utilities</span><span class="ops-status ops-status--ready">Ready</span></div><div class="ops-table__row" role="row"><span>PV-003</span><span>Learning supplies</span><span>Payment</span><span>Supplies</span><span class="ops-status ops-status--ready">Ready</span></div><div class="ops-table__row" role="row"><span>—</span><span>Minor facility repair</span><span>Payment</span><span>Maintenance</span><span class="ops-status ops-status--review">Needs review</span></div></div><div class="ops-flow"><span>Input</span><span>Validation</span><span>Mapping</span><span>Journal</span><span>Monthly report</span><span>Cash overview</span></div></div>';
		setFigure(p2, p2Href, "View Financial Operations and Reporting System case study", p2Visual);
		linkTitle(p2, p2Href);
		addScale(p2, "Verified structure: 10 sheets, 22 input fields, 15 validation conditions, a 16-field journal, and five ready test records producing ten journal lines.", p2Href);
	}
})();
