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

		var p2Visual = '<svg viewBox="0 0 800 600" role="img" aria-label="Refined finance workflow from admin input to management review" style="display:block;width:100%;height:auto;background:#f7f4ed;border:.5px solid #c8c2b7"><rect width="800" height="600" fill="#f7f4ed"/><text x="50" y="62" font-family="Georgia,serif" font-size="30" font-weight="600" fill="#292826">Refined Finance Workflow</text><text x="50" y="91" font-family="Arial,sans-serif" font-size="13" fill="#6f6a63">Connecting daily input to controlled, reviewable reporting</text><g font-family="Arial,sans-serif"><rect x="50" y="145" width="155" height="250" rx="3" fill="#fff" stroke="#d8d2c7"/><text x="70" y="176" font-size="10" font-weight="700" letter-spacing="1.4" fill="#8b6f59">01 · CAPTURE</text><text x="70" y="212" font-size="19" font-weight="700" fill="#292826">Admin Input</text><line x1="70" y1="232" x2="185" y2="232" stroke="#e4ded5"/><text x="70" y="266" font-size="11" fill="#373431">Standard fields</text><text x="70" y="294" font-size="11" fill="#373431">Categories</text><text x="70" y="322" font-size="11" fill="#373431">References</text><path d="M213 270 H228" stroke="#9b433f" stroke-width="2"/><path d="M222 263 L230 270 L222 277" fill="none" stroke="#9b433f" stroke-width="2"/><rect x="235" y="145" width="155" height="250" rx="3" fill="#fff" stroke="#9b433f"/><text x="255" y="176" font-size="10" font-weight="700" letter-spacing="1.4" fill="#8b6f59">02 · CONTROL</text><text x="255" y="212" font-size="19" font-weight="700" fill="#292826">Validate</text><text x="255" y="235" font-size="19" font-weight="700" fill="#292826">& Map</text><line x1="255" y1="255" x2="370" y2="255" stroke="#e4ded5"/><text x="255" y="289" font-size="11" fill="#373431">Completeness</text><text x="255" y="317" font-size="11" fill="#373431">Workflow status</text><text x="255" y="345" font-size="11" fill="#373431">Account rules</text><path d="M398 270 H413" stroke="#9b433f" stroke-width="2"/><path d="M407 263 L415 270 L407 277" fill="none" stroke="#9b433f" stroke-width="2"/><rect x="420" y="145" width="155" height="250" rx="3" fill="#fff" stroke="#d8d2c7"/><text x="440" y="176" font-size="10" font-weight="700" letter-spacing="1.4" fill="#8b6f59">03 · STRUCTURE</text><text x="440" y="212" font-size="19" font-weight="700" fill="#292826">Journal</text><text x="440" y="235" font-size="19" font-weight="700" fill="#292826">& Reporting</text><line x1="440" y1="255" x2="555" y2="255" stroke="#e4ded5"/><text x="440" y="289" font-size="11" fill="#373431">Balanced journal</text><text x="440" y="317" font-size="11" fill="#373431">Period summary</text><text x="440" y="345" font-size="11" fill="#373431">Cash visibility</text><path d="M583 270 H598" stroke="#9b433f" stroke-width="2"/><path d="M592 263 L600 270 L592 277" fill="none" stroke="#9b433f" stroke-width="2"/><rect x="605" y="145" width="145" height="250" rx="3" fill="#2f3437"/><text x="625" y="176" font-size="10" font-weight="700" letter-spacing="1.4" fill="#d9c7c5">04 · REVIEW</text><text x="625" y="212" font-size="19" font-weight="700" fill="#fff">Management</text><text x="625" y="235" font-size="19" font-weight="700" fill="#fff">Review</text><line x1="625" y1="255" x2="730" y2="255" stroke="#626668"/><text x="625" y="289" font-size="11" fill="#e6e8e8">Ready records</text><text x="625" y="317" font-size="11" fill="#e6e8e8">Held exceptions</text><text x="625" y="345" font-size="11" fill="#e6e8e8">Clear follow-up</text><line x1="50" y1="445" x2="750" y2="445" stroke="#d8d2c7"/><text x="50" y="485" font-size="10" font-weight="700" letter-spacing="1.3" fill="#8b6f59">WORKFLOW PROOF POINTS</text><text x="50" y="525" font-size="25" font-weight="700" fill="#292826">22</text><text x="91" y="525" font-size="11" fill="#6f6a63">input fields</text><text x="245" y="525" font-size="25" font-weight="700" fill="#292826">15</text><text x="286" y="525" font-size="11" fill="#6f6a63">validation conditions</text><text x="482" y="525" font-size="25" font-weight="700" fill="#292826">16</text><text x="523" y="525" font-size="11" fill="#6f6a63">journal fields</text><text x="50" y="558" font-size="11" fill="#6f6a63">Validated records move forward; exceptions stay visible for review.</text></g></svg>';
		setFigure(p2, p2Href, "View Financial Operations and Reporting System case study", p2Visual);
		linkTitle(p2, p2Href);
		addScale(p2, "Verified structure: 10 sheets, 22 input fields, 15 validation conditions, a 16-field journal, and five ready test records producing ten journal lines.", p2Href);
	}
})();
