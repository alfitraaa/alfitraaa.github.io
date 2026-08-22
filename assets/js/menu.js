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
		var css = document.createElement("link");
		css.rel = "stylesheet";
		css.href = "assets/css/case-study.css";
		document.head.appendChild(css);
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
		if (figure) figure.innerHTML = '<a href="' + href + '" aria-label="' + label + '" style="display:block;color:inherit;text-decoration:none">' + html + '</a>';
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
		var p1Visual = '<div class="demo-dashboard" role="img" aria-label="Synthetic management reporting dashboard"><div class="demo-dashboard__title">Management Reporting Dashboard <span>Synthetic Data</span></div><div class="demo-kpis"><article style="display:flex;flex-direction:column;justify-content:space-between;min-height:96px"><span style="display:block;min-height:32px;line-height:1.25">Total Receipts</span><strong style="display:block;margin-top:12px">72.95M</strong></article><article style="display:flex;flex-direction:column;justify-content:space-between;min-height:96px"><span style="display:block;min-height:32px;line-height:1.25">Total Payments</span><strong style="display:block;margin-top:12px">49.32M</strong></article><article style="display:flex;flex-direction:column;justify-content:space-between;min-height:96px"><span style="display:block;min-height:32px;line-height:1.25">Net Cash Movement</span><strong style="display:block;margin-top:12px">23.64M</strong></article><article style="display:flex;flex-direction:column;justify-content:space-between;min-height:96px"><span style="display:block;min-height:32px;line-height:1.25">Items for Review</span><strong style="display:block;margin-top:12px">2</strong></article></div><div class="demo-panels"><div class="demo-panel"><h3>Monthly movement</h3><div class="bar-row"><span>Jan</span><i style="--w:74%"></i><b>5.38M</b></div><div class="bar-row"><span>Feb</span><i style="--w:67%"></i><b>4.85M</b></div><div class="bar-row"><span>Mar</span><i style="--w:100%"></i><b>7.23M</b></div><div class="bar-row"><span>Apr</span><i style="--w:86%"></i><b>6.19M</b></div></div><div class="demo-panel"><h3>Validation status</h3><div class="status-row"><span class="status-dot status-dot--ok"></span><span>Ready</span><strong>22</strong></div><div class="status-row"><span class="status-dot status-dot--review"></span><span>Review</span><strong>2</strong></div><hr><h3>Reconciliation</h3><div class="status-row"><span class="status-dot status-dot--ok"></span><span>Passed periods</span><strong>4</strong></div></div></div></div>';
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

		var p2Visual = '<svg viewBox="0 0 800 600" role="img" aria-label="Refined financial operations workflow" style="display:block;width:100%;height:auto;background:#f7f4ed;border:.5px solid #c8c2b7"><rect width="800" height="600" fill="#f7f4ed"/><text x="54" y="62" font-family="Georgia,serif" font-size="32" font-weight="600" fill="#292826">Refined Finance Workflow</text><text x="54" y="90" font-family="Arial,sans-serif" font-size="11" letter-spacing="2" fill="#8b6f59">PORTFOLIO-SAFE SYSTEM VIEW</text><line x1="118" y1="220" x2="680" y2="220" stroke="#d7d1c5" stroke-width="2"/><g font-family="Arial,sans-serif"><rect x="54" y="156" width="148" height="128" rx="3" fill="#fff" stroke="#d8d2c7"/><text x="74" y="180" font-size="11" font-weight="700" letter-spacing="1.4" fill="#8b6f59">01</text><text x="74" y="214" font-size="22" font-weight="700" fill="#292826">Admin Input</text><line x1="70" y1="255" x2="185" y2="255" stroke="#e4ded5"/><text x="70" y="289" font-size="11" fill="#373431">Standard fields</text><text x="70" y="317" font-size="11" fill="#373431">Categories</text><text x="70" y="345" font-size="11" fill="#373431">References</text><path d="M202 220 H228" stroke="#9b433f" stroke-width="2"/><path d="M220 212 L230 220 L220 228" fill="none" stroke="#9b433f" stroke-width="2"/><rect x="230" y="156" width="148" height="128" rx="3" fill="#fff" stroke="#9b433f"/><text x="250" y="180" font-size="11" font-weight="700" letter-spacing="1.4" fill="#8b6f59">02</text><text x="250" y="214" font-size="22" font-weight="700" fill="#292826">Validate &amp; Map</text><line x1="255" y1="255" x2="370" y2="255" stroke="#e4ded5"/><text x="255" y="289" font-size="11" fill="#373431">Completeness</text><text x="255" y="317" font-size="11" fill="#373431">Workflow status</text><text x="255" y="345" font-size="11" fill="#373431">Account rules</text><path d="M378 220 H404" stroke="#9b433f" stroke-width="2"/><path d="M396 212 L406 220 L396 228" fill="none" stroke="#9b433f" stroke-width="2"/><rect x="406" y="156" width="148" height="128" rx="3" fill="#fff" stroke="#d8d2c7"/><text x="426" y="180" font-size="11" font-weight="700" letter-spacing="1.4" fill="#8b6f59">03</text><text x="426" y="214" font-size="22" font-weight="700" fill="#292826">Journal &amp; Report</text><line x1="440" y1="255" x2="555" y2="255" stroke="#e4ded5"/><text x="440" y="289" font-size="11" fill="#373431">Balanced journal</text><text x="440" y="317" font-size="11" fill="#373431">Period summary</text><text x="440" y="345" font-size="11" fill="#373431">Cash visibility</text><path d="M554 220 H580" stroke="#9b433f" stroke-width="2"/><path d="M572 212 L582 220 L572 228" fill="none" stroke="#9b433f" stroke-width="2"/><rect x="582" y="156" width="164" height="128" rx="3" fill="#fff" stroke="#d8d2c7"/><text x="602" y="180" font-size="11" font-weight="700" letter-spacing="1.4" fill="#8b6f59">04</text><text x="602" y="214" font-size="22" font-weight="700" fill="#292826">Management Review</text><line x1="602" y1="255" x2="724" y2="255" stroke="#e4ded5"/><text x="602" y="289" font-size="11" fill="#373431">Ready records</text><text x="602" y="317" font-size="11" fill="#373431">Held exceptions</text><text x="602" y="345" font-size="11" fill="#373431">Clear follow-up</text><rect x="54" y="340" width="204" height="120" rx="3" fill="#fff" stroke="#d8d2c7"/><text x="78" y="370" font-size="12" font-weight="700" letter-spacing="1.2" fill="#8b6f59">INPUT FIELDS</text><text x="78" y="404" font-size="40" font-weight="700" fill="#292826">22</text><text x="78" y="432" font-size="12" fill="#5f5a54">Structured fields for</text><text x="78" y="450" font-size="12" fill="#5f5a54">daily transaction capture</text><rect x="298" y="340" width="204" height="120" rx="3" fill="#fff" stroke="#d8d2c7"/><text x="322" y="370" font-size="12" font-weight="700" letter-spacing="1.2" fill="#8b6f59">VALIDATION RULES</text><text x="322" y="404" font-size="40" font-weight="700" fill="#292826">15</text><text x="322" y="432" font-size="12" fill="#5f5a54">Conditions used before</text><text x="322" y="450" font-size="12" fill="#5f5a54">records move forward</text><rect x="542" y="340" width="204" height="120" rx="3" fill="#fff" stroke="#d8d2c7"/><text x="566" y="370" font-size="12" font-weight="700" letter-spacing="1.2" fill="#8b6f59">JOURNAL FIELDS</text><text x="566" y="404" font-size="40" font-weight="700" fill="#292826">16</text><text x="566" y="432" font-size="12" fill="#5f5a54">Structured output layer</text><text x="566" y="450" font-size="12" fill="#5f5a54">for reporting and review</text><rect x="54" y="494" width="692" height="56" rx="3" fill="#2f3437"/><text x="78" y="528" font-size="14" font-weight="700" fill="#ffffff">Validated records continue to reporting. Exceptions remain visible for review.</text></g></svg>';
		setFigure(p2, p2Href, "View Financial Operations and Reporting System case study", p2Visual);
		linkTitle(p2, p2Href);
		addScale(p2, "Verified structure: 10 sheets, 22 input fields, 15 validation conditions, a 16-field journal, and five ready test records producing ten journal lines.", p2Href);
	}
})();
