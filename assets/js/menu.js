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

		var p2Visual = '<svg viewBox="0 0 800 600" role="img" aria-label="Financial operations system architecture" style="display:block;width:100%;height:auto;background:#f7f4ed;border:.5px solid #c8c2b7"><rect width="800" height="600" fill="#f7f4ed"/><text x="54" y="66" font-family="Georgia,serif" font-size="32" font-weight="600" fill="#292826">Finance Workflow Architecture</text><text x="54" y="94" font-family="Arial,sans-serif" font-size="11" letter-spacing="2" fill="#8b6f59">PORTFOLIO-SAFE SYSTEM VIEW</text><g font-family="Arial,sans-serif"><rect x="54" y="148" width="188" height="230" rx="3" fill="#fff" stroke="#d8d2c7"/><text x="76" y="178" font-size="11" font-weight="700" letter-spacing="1.5" fill="#8b6f59">01 · INPUT</text><text x="76" y="218" font-size="23" font-weight="700" fill="#292826">Admin Input</text><text x="76" y="248" font-size="13" fill="#6f6a63">Daily transaction capture</text><line x1="76" y1="276" x2="220" y2="276" stroke="#e4ded5"/><text x="76" y="310" font-size="12" fill="#373431">22 structured fields</text><text x="76" y="337" font-size="12" fill="#373431">Standardized categories</text><text x="76" y="364" font-size="12" fill="#373431">Supporting references</text><path d="M252 263 H276" stroke="#9b433f" stroke-width="2"/><path d="M268 255 L278 263 L268 271" fill="none" stroke="#9b433f" stroke-width="2"/><rect x="286" y="148" width="228" height="230" rx="3" fill="#fff" stroke="#9b433f"/><text x="308" y="178" font-size="11" font-weight="700" letter-spacing="1.5" fill="#8b6f59">02 · CONTROL</text><text x="308" y="218" font-size="23" font-weight="700" fill="#292826">Validation & Mapping</text><text x="308" y="248" font-size="13" fill="#6f6a63">Control before posting</text><line x1="308" y1="276" x2="492" y2="276" stroke="#e4ded5"/><text x="308" y="310" font-size="12" fill="#373431">15 validation conditions</text><text x="308" y="337" font-size="12" fill="#373431">4 workflow statuses</text><text x="308" y="364" font-size="12" fill="#373431">Account mapping rules</text><path d="M524 263 H548" stroke="#9b433f" stroke-width="2"/><path d="M540 255 L550 263 L540 271" fill="none" stroke="#9b433f" stroke-width="2"/><rect x="558" y="148" width="188" height="230" rx="3" fill="#fff" stroke="#d8d2c7"/><text x="580" y="178" font-size="11" font-weight="700" letter-spacing="1.5" fill="#8b6f59">03 · OUTPUT</text><text x="580" y="218" font-size="23" font-weight="700" fill="#292826">Reporting</text><text x="580" y="248" font-size="13" fill="#6f6a63">Reviewable financial output</text><line x1="580" y1="276" x2="724" y2="276" stroke="#e4ded5"/><text x="580" y="310" font-size="12" fill="#373431">16-field journal</text><text x="580" y="337" font-size="12" fill="#373431">Period reporting</text><text x="580" y="364" font-size="12" fill="#373431">Cash visibility</text><rect x="54" y="430" width="692" height="104" rx="3" fill="#2f3437"/><text x="78" y="462" font-size="11" font-weight="700" letter-spacing="1.4" fill="#d9c7c5">CONTROLLED FLOW</text><text x="78" y="497" font-size="16" font-weight="700" fill="#fff">5 ready records → 10 journal lines</text><circle cx="434" cy="492" r="5" fill="#c4933f"/><text x="450" y="497" font-size="13" fill="#fff">1 item held for review</text><text x="78" y="522" font-size="11" fill="#cfd1d1">Only validated records move forward to management reporting.</text></g></svg>';
		setFigure(p2, p2Href, "View Financial Operations and Reporting System case study", p2Visual);
		linkTitle(p2, p2Href);
		addScale(p2, "Verified structure: 10 sheets, 22 input fields, 15 validation conditions, a 16-field journal, and five ready test records producing ten journal lines.", p2Href);
	}
})();
