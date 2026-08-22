/* Portfolio interactions and selected case-study previews. */
(function () {
	"use strict";

	var toggle = document.querySelector(".nav-toggle");
	var panel = document.getElementById("nav-mobile");

	function closeMenu() {
		if (!toggle || !panel) return;
		panel.classList.remove("is-open");
		toggle.setAttribute("aria-expanded", "false");
	}

	if (toggle && panel) {
		toggle.addEventListener("click", function () {
			var open = toggle.getAttribute("aria-expanded") === "true";
			panel.classList.toggle("is-open", !open);
			toggle.setAttribute("aria-expanded", String(!open));
		});
		panel.addEventListener("click", function (event) { if (event.target.closest("a")) closeMenu(); });
		document.addEventListener("keydown", function (event) { if (event.key === "Escape") closeMenu(); });
		window.matchMedia("(min-width: 768px)").addEventListener("change", function (event) { if (event.matches) closeMenu(); });
	}

	if (!document.querySelector('link[href$="assets/css/case-study.css"]')) {
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
			more.textContent = "View Case Study →";
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

		var p2Visual = '<svg viewBox="0 0 800 600" role="img" aria-label="Refined finance workflow from admin input to management review" style="display:block;width:100%;height:auto;background:#f7f4ed;border:.5px solid #c8c2b7"><rect width="800" height="600" fill="#f7f4ed"/><text x="50" y="62" font-family="Georgia,serif" font-size="30" font-weight="600" fill="#292826">Refined Finance Workflow</text><text x="50" y="91" font-family="Arial,sans-serif" font-size="13" fill="#6f6a63">Connecting daily input to controlled, reviewable reporting</text><g font-family="Arial,sans-serif"><rect x="50" y="145" width="160" height="238" rx="3" fill="#fff" stroke="#d8d2c7"/><text x="70" y="174" font-size="10" font-weight="700" letter-spacing="1.3" fill="#8b6f59">01 · CAPTURE</text><text x="70" y="210" font-size="19" font-weight="700" fill="#292826">Admin</text><text x="70" y="234" font-size="19" font-weight="700" fill="#292826">Input</text><line x1="70" y1="257" x2="190" y2="257" stroke="#e4ded5"/><text x="70" y="292" font-size="11" fill="#373431">Standard fields</text><text x="70" y="320" font-size="11" fill="#373431">Categories</text><text x="70" y="348" font-size="11" fill="#373431">References</text><path d="M210 264 H226" stroke="#9b433f" stroke-width="2"/><path d="M220 257 L228 264 L220 271" fill="none" stroke="#9b433f" stroke-width="2"/><rect x="230" y="145" width="160" height="238" rx="3" fill="#fff" stroke="#9b433f"/><text x="250" y="174" font-size="10" font-weight="700" letter-spacing="1.3" fill="#8b6f59">02 · CONTROL</text><text x="250" y="210" font-size="19" font-weight="700" fill="#292826">Validate</text><text x="250" y="234" font-size="19" font-weight="700" fill="#292826">&amp; Map</text><line x1="250" y1="257" x2="370" y2="257" stroke="#e4ded5"/><text x="250" y="292" font-size="11" fill="#373431">Completeness</text><text x="250" y="320" font-size="11" fill="#373431">Workflow status</text><text x="250" y="348" font-size="11" fill="#373431">Account rules</text><path d="M390 264 H406" stroke="#9b433f" stroke-width="2"/><path d="M400 257 L408 264 L400 271" fill="none" stroke="#9b433f" stroke-width="2"/><rect x="410" y="145" width="160" height="238" rx="3" fill="#fff" stroke="#d8d2c7"/><text x="430" y="174" font-size="10" font-weight="700" letter-spacing="1.3" fill="#8b6f59">03 · STRUCTURE</text><text x="430" y="210" font-size="19" font-weight="700" fill="#292826">Journal</text><text x="430" y="234" font-size="19" font-weight="700" fill="#292826">&amp; Reporting</text><line x1="430" y1="257" x2="550" y2="257" stroke="#e4ded5"/><text x="430" y="292" font-size="11" fill="#373431">Balanced journal</text><text x="430" y="320" font-size="11" fill="#373431">Period summary</text><text x="430" y="348" font-size="11" fill="#373431">Cash visibility</text><path d="M570 264 H586" stroke="#9b433f" stroke-width="2"/><path d="M580 257 L588 264 L580 271" fill="none" stroke="#9b433f" stroke-width="2"/><rect x="590" y="145" width="160" height="238" rx="3" fill="#2f3437"/><text x="610" y="174" font-size="10" font-weight="700" letter-spacing="1.3" fill="#d9c7c5">04 · REVIEW</text><text x="610" y="210" font-size="19" font-weight="700" fill="#fff">Management</text><text x="610" y="234" font-size="19" font-weight="700" fill="#fff">Review</text><line x1="610" y1="257" x2="730" y2="257" stroke="#626668"/><text x="610" y="292" font-size="11" fill="#e6e8e8">Ready records</text><text x="610" y="320" font-size="11" fill="#e6e8e8">Held exceptions</text><text x="610" y="348" font-size="11" fill="#e6e8e8">Clear follow-up</text><line x1="50" y1="430" x2="750" y2="430" stroke="#d8d2c7"/><text x="50" y="466" font-size="10" font-weight="700" letter-spacing="1.3" fill="#8b6f59">WORKFLOW STRUCTURE</text><text x="50" y="510" font-size="28" font-weight="700" fill="#292826">22</text><text x="50" y="535" font-size="11" fill="#6f6a63">Input fields</text><text x="292" y="510" font-size="28" font-weight="700" fill="#292826">15</text><text x="292" y="535" font-size="11" fill="#6f6a63">Validation conditions</text><text x="552" y="510" font-size="28" font-weight="700" fill="#292826">16</text><text x="552" y="535" font-size="11" fill="#6f6a63">Journal fields</text><text x="50" y="568" font-size="11" fill="#6f6a63">Validated records move forward. Exceptions remain visible for review.</text></g></svg>';
		setFigure(p2, p2Href, "View Financial Operations and Reporting System case study", p2Visual);
		linkTitle(p2, p2Href);
		addScale(p2, "Verified structure: 10 sheets, 22 input fields, 15 validation conditions, a 16-field journal, and five ready test records producing ten journal lines.", p2Href);
	}

	var casesContainer = document.querySelector("#work .cases");
	if (casesContainer && !document.querySelector(".case--project-governance")) {
		var p3 = document.createElement("article");
		p3.className = "case case--img-left case--project-governance";
		p3.innerHTML = '<figure class="case__figure"></figure><div class="case__body"><h3>Project Governance &amp; Construction Oversight</h3><p><strong>Problem:</strong> Parallel construction workstreams required clearer visibility over progress, dependencies, vendor actions, staged payments, decisions, and unresolved issues.</p><p><strong>Role:</strong> Structured management oversight by translating field updates into project status, significant project history, dependency tracking, decision follow-up, and ongoing management review.</p><div class="case__tags"><span class="tag">Project Governance</span><span class="tag">Project Management</span><span class="tag">Operations</span></div></div>';
		casesContainer.appendChild(p3);
		var p3Href = "case-studies/project-governance-construction-oversight.html";
		var p3Visual = '<svg viewBox="0 0 800 600" role="img" aria-label="Governance board for active project oversight" style="display:block;width:100%;height:auto;background:#f7f4ed;border:.5px solid #c8c2b7"><rect width="800" height="600" fill="#f7f4ed"/><text x="50" y="62" font-family="Georgia,serif" font-size="30" font-weight="600" fill="#292826">Governance Board</text><text x="50" y="91" font-family="Arial,sans-serif" font-size="13" fill="#6f6a63">Managing workstreams, dependencies, and follow-up</text><rect x="50" y="132" width="700" height="348" rx="4" fill="#2f3437"/><g font-family="Arial,sans-serif"><rect x="70" y="154" width="210" height="280" rx="3" fill="#f7f4ed"/><text x="88" y="181" font-size="10" font-weight="700" letter-spacing="1.1" fill="#9b433f">LIVE WORKSTREAMS</text><rect x="88" y="202" width="174" height="82" rx="2" fill="#fff" stroke="#d8d2c7"/><text x="102" y="226" font-size="13" font-weight="700" fill="#292826">Interior fit-out</text><text x="102" y="249" font-size="10" fill="#6f6a63">Installation</text><rect x="198" y="217" width="50" height="18" rx="9" fill="#e3f2e8"/><text x="223" y="230" text-anchor="middle" font-size="8" font-weight="700" fill="#1e6b3b">ACTIVE</text><rect x="88" y="300" width="174" height="82" rx="2" fill="#fff" stroke="#d8d2c7"/><text x="102" y="324" font-size="13" font-weight="700" fill="#292826">Electrical</text><text x="102" y="347" font-size="10" fill="#6f6a63">Partial install</text><rect x="194" y="315" width="54" height="18" rx="9" fill="#fff1cc"/><text x="221" y="328" text-anchor="middle" font-size="8" font-weight="700" fill="#8a5a00">WAITING</text><rect x="295" y="154" width="210" height="280" rx="3" fill="#f7f4ed"/><text x="313" y="181" font-size="10" font-weight="700" letter-spacing="1.1" fill="#9b433f">OPEN DEPENDENCIES</text><rect x="313" y="202" width="174" height="82" rx="2" fill="#fff" stroke="#d8d2c7"/><text x="327" y="226" font-size="13" font-weight="700" fill="#292826">Finish sequencing</text><text x="327" y="249" font-size="10" fill="#6f6a63">Re-sequence work</text><line x1="327" y1="263" x2="468" y2="263" stroke="#9b433f" stroke-width="2"/><rect x="313" y="300" width="174" height="82" rx="2" fill="#fff" stroke="#d8d2c7"/><text x="327" y="324" font-size="13" font-weight="700" fill="#292826">Ceiling readiness</text><text x="327" y="347" font-size="10" fill="#6f6a63">Dependent scope on hold</text><line x1="327" y1="361" x2="433" y2="361" stroke="#c4933f" stroke-width="2"/><rect x="520" y="154" width="210" height="280" rx="3" fill="#fff"/><text x="538" y="181" font-size="10" font-weight="700" letter-spacing="1.1" fill="#9b433f">DECISION QUEUE</text><rect x="538" y="202" width="174" height="82" rx="2" fill="#f7f4ed" stroke="#d8d2c7"/><text x="552" y="226" font-size="13" font-weight="700" fill="#292826">Structural package</text><text x="552" y="249" font-size="10" fill="#6f6a63">Commercial review</text><text x="552" y="268" font-size="9" font-weight="700" fill="#9b433f">COMPARE OPTIONS</text><rect x="538" y="300" width="174" height="82" rx="2" fill="#f7f4ed" stroke="#d8d2c7"/><text x="552" y="324" font-size="13" font-weight="700" fill="#292826">Staged payment</text><text x="552" y="347" font-size="10" fill="#6f6a63">Match progress</text><text x="552" y="366" font-size="9" font-weight="700" fill="#9b433f">FOLLOW UP</text><text x="70" y="456" font-size="10" fill="#d9c7c5">Active oversight view</text><line x1="50" y1="515" x2="750" y2="515" stroke="#d8d2c7"/><text x="50" y="551" font-size="10" font-weight="700" letter-spacing="1.1" fill="#8b6f59">GOVERNANCE CYCLE</text><text x="190" y="551" font-size="11" fill="#292826">Field update</text><text x="277" y="551" font-size="11" fill="#9b433f">→</text><text x="300" y="551" font-size="11" fill="#292826">Status</text><text x="356" y="551" font-size="11" fill="#9b433f">→</text><text x="380" y="551" font-size="11" fill="#292826">Decision</text><text x="451" y="551" font-size="11" fill="#9b433f">→</text><text x="476" y="551" font-size="11" fill="#292826">Follow-up</text><text x="50" y="578" font-size="10" fill="#6f6a63">Ongoing case study. Final schedule and cost outcomes are not yet claimed.</text></g></svg>';
		setFigure(p3, p3Href, "View Project Governance and Construction Oversight case study", p3Visual);
		linkTitle(p3, p3Href);
		addScale(p3, "Current verified scope: two education sites, five-plus parallel workstreams, three-plus surfaced dependencies, and staged vendor-payment monitoring.", p3Href);
	}

	function normalizeEditorialDashes(root) {
		var walker = document.createTreeWalker(root || document.body, NodeFilter.SHOW_TEXT, {
			acceptNode: function (node) {
				if (!node.nodeValue || node.nodeValue.indexOf("—") === -1) return NodeFilter.FILTER_REJECT;
				var parent = node.parentElement;
				if (!parent || /^(SCRIPT|STYLE|CODE|PRE)$/.test(parent.tagName)) return NodeFilter.FILTER_REJECT;
				return NodeFilter.FILTER_ACCEPT;
			}
		});
		var nodes = [];
		while (walker.nextNode()) nodes.push(walker.currentNode);
		nodes.forEach(function (node) {
			if (node.nodeValue.trim() === "—") node.nodeValue = node.nodeValue.replace("—", "Missing");
			else node.nodeValue = node.nodeValue.replace(/\s+—\s+/g, ". ");
		});
	}

	document.title = document.title.replace(/\s+—\s+/g, " | ");
	normalizeEditorialDashes(document.body);

	/* Contact focus + subtle macOS-style dock magnification. */
	var footer = document.getElementById("contact");
	var contactLinks = footer ? footer.querySelector(".site-footer__links") : null;
	var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
	var contactTimer = null;

	if (footer && contactLinks) {
		var contactStyle = document.createElement("style");
		contactStyle.textContent = [
			".site-footer{scroll-margin-top:96px;position:relative;transition:background-color .4s ease,box-shadow .4s ease}",
			".site-footer__links{align-items:center;isolation:isolate}",
			".site-footer__links a{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding-inline:3px;white-space:nowrap;transform-origin:center bottom;will-change:transform;transition:transform .18s cubic-bezier(.22,1,.36,1),color .2s ease,opacity .25s ease;position:relative;z-index:1}",
			".site-footer.contact-focus{background:var(--surface-container-low);box-shadow:inset 0 3px 0 rgba(155,67,63,.62)}",
			".site-footer.contact-focus:not(.contact-project) .site-footer__links a{transform:translateY(-4px) scale(1.07)}",
			".site-footer.contact-project .site-footer__copy{color:var(--secondary)}",
			".site-footer.contact-project .site-footer__links a{opacity:.38}",
			".site-footer.contact-project .site-footer__links a[href^='mailto:'],.site-footer.contact-project .site-footer__links a[href*='wa.me']{opacity:1;color:var(--secondary);font-weight:700;transform:translateY(-8px) scale(1.22)!important}",
			".site-footer.contact-project .site-footer__links a[href^='mailto:']::after,.site-footer.contact-project .site-footer__links a[href*='wa.me']::after{content:'';position:absolute;left:50%;bottom:1px;width:4px;height:4px;border-radius:50%;background:var(--secondary);transform:translateX(-50%)}",
			"@media(min-width:768px){.site-footer.contact-focus .site-footer__links{flex-wrap:nowrap}}",
			"@media(prefers-reduced-motion:reduce){.site-footer,.site-footer__links a{transition:none!important}.site-footer.contact-focus .site-footer__links a{transform:none!important}}"
		].join("");
		document.head.appendChild(contactStyle);

		function resetDock() {
			contactLinks.querySelectorAll("a").forEach(function (link) {
				link.style.transform = "";
				link.style.zIndex = "";
			});
		}

		function focusContact(projectMode, shouldScroll) {
			if (contactTimer) window.clearTimeout(contactTimer);
			footer.classList.remove("contact-focus", "contact-project");
			void footer.offsetWidth;
			footer.classList.add("contact-focus");
			if (projectMode) footer.classList.add("contact-project");

			if (shouldScroll !== false) {
				footer.scrollIntoView({
					behavior: reducedMotion.matches ? "auto" : "smooth",
					block: "end"
				});
			}

			contactTimer = window.setTimeout(function () {
				footer.classList.remove("contact-focus", "contact-project");
				resetDock();
			}, 3600);
		}

		document.querySelectorAll('a[href="#contact"]').forEach(function (link) {
			link.addEventListener("click", function (event) {
				event.preventDefault();
				closeMenu();
				window.history.replaceState(null, "", "#contact");
				focusContact(false, true);
			});
		});

		if (window.matchMedia("(hover: hover) and (pointer: fine)").matches && !reducedMotion.matches) {
			contactLinks.addEventListener("pointermove", function (event) {
				if (footer.classList.contains("contact-project")) return;
				contactLinks.querySelectorAll("a").forEach(function (link) {
					var rect = link.getBoundingClientRect();
					var center = rect.left + rect.width / 2;
					var distance = Math.abs(event.clientX - center);
					var influence = Math.max(0, 1 - distance / 135);
					var scale = 1 + influence * 0.24;
					var lift = influence * 8;
					link.style.transform = "translateY(" + (-lift).toFixed(2) + "px) scale(" + scale.toFixed(3) + ")";
					link.style.zIndex = String(1 + Math.round(influence * 10));
				});
			});
			contactLinks.addEventListener("pointerleave", resetDock);
		}

		contactLinks.querySelectorAll("a").forEach(function (link) {
			link.addEventListener("focus", function () {
				if (!reducedMotion.matches && !footer.classList.contains("contact-project")) {
					link.style.transform = "translateY(-5px) scale(1.14)";
				}
			});
			link.addEventListener("blur", resetDock);
		});

		if (window.location.hash === "#contact") {
			var fromCaseStudy = document.referrer.indexOf("/case-studies/") !== -1;
			window.setTimeout(function () {
				focusContact(fromCaseStudy, false);
			}, 180);
		}
	}

})();
