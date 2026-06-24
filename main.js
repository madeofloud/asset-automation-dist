"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // src/types.ts
  var RATIO_DIMENSIONS;
  var init_types = __esm({
    "src/types.ts"() {
      "use strict";
      RATIO_DIMENSIONS = {
        "1080x1080": { width: 1080, height: 1080, label: "1080 \xD7 1080" },
        "1080x1350": { width: 1080, height: 1350, label: "1080 \xD7 1350" },
        "1080x1920": { width: 1080, height: 1920, label: "1080 \xD7 1920" },
        "1920x1080": { width: 1920, height: 1080, label: "1920 \xD7 1080" },
        "120x600": { width: 120, height: 600, label: "120 \xD7 600" },
        "300x250": { width: 300, height: 250, label: "300 \xD7 250" },
        "728x90": { width: 728, height: 90, label: "728 \xD7 90" },
        "790x250": { width: 790, height: 250, label: "790 \xD7 250" }
      };
    }
  });

  // src/brandTokens.ts
  var BRAND_TOKENS;
  var init_brandTokens = __esm({
    "src/brandTokens.ts"() {
      "use strict";
      BRAND_TOKENS = {
        logo: {
          minSizeDigital: 75,
          minSizePrint: 20,
          safeAreaUnits: 2,
          overBackgrounds: {
            light: "box",
            medium: "box",
            lowContrast: "script",
            black: "script"
          },
          narrowVertical: {
            w160plus_h600plus: "standard",
            w159to121_h600plus: "box_full_width",
            w120below: "script",
            anyWidth_hBelow600: "script"
          },
          narrowHorizontal: {
            h100plus_w600plus: "standard",
            h99to81_w600plus: "box_full_height",
            h80below: "script",
            anyHeight_wBelow600: "script"
          }
        },
        typography: {
          approvedHeadlineFonts: [
            "Helvetica Neue LT W1G",
            "Source Han Sans SC",
            "Source Han Sans JP",
            "Source Han Sans KR"
          ],
          approvedBodyFonts: [
            "Helvetica Neue",
            "Source Han Sans SC",
            "Source Han Sans JP",
            "Source Han Sans KR"
          ],
          headlineLarge: {
            fontFamily: "Helvetica Neue LT W1G",
            fontWeight: "87 Heavy Condensed",
            lineHeight: 1,
            kerning: 0,
            minSizeForWeight: 20
            // below this, use 77 Bold Condensed
          },
          headlineSmall: {
            fontFamily: "Helvetica Neue LT W1G",
            fontWeight: "77 Bold Condensed",
            lineHeight: 1,
            kerning: 0
          },
          body: {
            fontFamily: "Helvetica Neue",
            lineHeight: 1.4,
            paragraphSpacing: 0.8
            // 80% of font size
          },
          bodyIntro: {
            fontFamily: "Helvetica Neue",
            lineHeight: 1.3
          }
        },
        colors: {
          white: "#FFFFFF",
          black: "#000000",
          ui5Light: "#F2F2F2",
          ui10Light: "#E6E6E6",
          ui35Medium: "#A6A6A6",
          ui45Medium: "#8C8C8C",
          ui65Medium: "#595959",
          ui75Dark: "#404040",
          ui85Dark: "#262626",
          ui90Dark: "#1A1A1A",
          greenBright: "#2A9E43",
          green: "#1F7732",
          redBright: "#F63131",
          red: "#CB1D1D",
          textOverImages: "#FFFFFF"
          // ALWAYS white text over images
        },
        cta: {
          primaryColor: "white",
          sizes: {
            xl: { fontSize: 40, paddingV: 22, paddingH: 45 },
            l: { fontSize: 26, paddingV: 16, paddingH: 32 },
            m: { fontSize: 20, paddingV: 11, paddingH: 24 },
            s: { fontSize: 16, paddingV: 7, paddingH: 12 },
            xs: { fontSize: 12, paddingV: 5, paddingH: 8 }
          }
        },
        textLockup: {
          productNameAlwaysLargest: true,
          taglineRatio: 0.5,
          maxElements: 3,
          taglineToProductSpacing: 0.8,
          // of tagline size
          textToCtaSpacing: 1.25,
          // of tagline size
          headlineToCtaSpacing: 0.5
          // of headline size
        },
        grid: {
          baseUnitFraction: 0.125,
          // 1/8 of logo width
          marginUnits: 2,
          gutterUnits: 2,
          logoSizeDivisions: [2, 3, 4, 5, 6, 7, 8]
        },
        compliance: {
          // Layer prefix that marks brand-locked layers — plugin never touches these
          lockedLayerPrefix: "_brand_",
          maxLockupElements: 3,
          productNameMustBeLargest: true,
          imageCuts: {
            lifestyleOnly: true,
            productMustBeVisible: true,
            maxCutsStandard: 1,
            maxCutsRetail: 2
          }
        }
      };
    }
  });

  // src/plugin/main.ts
  var require_main = __commonJS({
    "src/plugin/main.ts"(exports) {
      init_types();
      init_brandTokens();
      figma.showUI(__html__, { width: 480, height: 720, title: "Marshall Asset Automation" });
      var PAGE_PREFIX = "\u{1F7E2} ";
      function buildGridCache(templatePage) {
        const cache = /* @__PURE__ */ new Map();
        if (!templatePage) return cache;
        for (const child of templatePage.children) {
          if (child.type !== "FRAME" && child.type !== "COMPONENT") continue;
          const node = child;
          if (node.layoutGrids.length === 0) continue;
          const key = `${Math.round(node.width)}x${Math.round(node.height)}`;
          if (!cache.has(key)) cache.set(key, node.layoutGrids);
        }
        return cache;
      }
      function applyGridsFromCache(frame, cache) {
        const key = `${Math.round(frame.width)}x${Math.round(frame.height)}`;
        const grids = cache.get(key);
        if (!grids || grids.length === 0) return;
        frame.layoutGrids = grids.map((g) => __spreadValues({}, g));
      }
      figma.ui.onmessage = (msg) => __async(exports, null, function* () {
        try {
          switch (msg.type) {
            case "GET_TEMPLATES":
              return handleGetTemplates();
            case "REGISTER_IMAGE":
              return handleRegisterImage(msg.bytes);
            case "GENERATE":
              return yield handleGenerate(msg.payload);
            case "GENERATE_FLIXMEDIA":
              return yield handleGenerateFlixmedia(msg.payload);
            case "GENERATE_VIDEOTITLES":
              return yield handleGenerateVideoTitles(msg.payload);
            case "GENERATE_PDP":
              return yield handleGeneratePdp(msg.payload);
            case "CREATE_PDP_COMPONENTS":
              return yield handleCreatePdpComponents(msg.campaignName);
            case "INSPECT_PDP":
              return yield handleInspectPdp();
            case "EXPORT_ALL":
              return yield handleExportAll(msg.campaignName);
            case "EXPORT_GIF_ROWS":
              return yield handleExportGifRows();
            case "RESIZE":
              return figma.ui.resize(msg.width, msg.height);
            case "OPEN_URL":
              return figma.openExternal(msg.url);
          }
        } catch (err) {
          const message = err instanceof Error ? err.message : String(err);
          console.error("[Marshall] Unhandled error:", message);
          send({ type: "GENERATION_ERROR", message: `Plugin error: ${message}` });
        }
      });
      function send(msg) {
        figma.ui.postMessage(msg);
      }
      function handleGetTemplates() {
        const REQUIRED_PAGES = ["_Templates_Lifestyle", "_Templates_Product", "_Templates_Flixmedia", "_Templates_Videotitle"];
        const pageNames = figma.root.children.map((p) => p.name);
        const missing = REQUIRED_PAGES.filter((p) => !pageNames.includes(p));
        if (missing.length > 0) {
          send({
            type: "GENERATION_ERROR",
            message: `This plugin must be run inside the Marshall Asset Automation Figma file.

Missing template pages: ${missing.join(", ")}

Open the correct file at:
https://www.figma.com/design/X1p3bykaygsmL0WH9KKKQH/Asset-Automation-Plugin`
          });
          return;
        }
        send({ type: "TEMPLATES_FOUND", componentNames: [] });
      }
      function handleRegisterImage(bytes) {
        return __async(this, null, function* () {
          const image = figma.createImage(bytes);
          send({ type: "IMAGE_REGISTERED", hash: image.hash });
        });
      }
      function handleGenerate(payload) {
        return __async(this, null, function* () {
          const {
            ratios,
            imageHash,
            imageDimensions,
            focalPoint,
            copyMap,
            language,
            allLanguages,
            generateAllLanguages,
            campaignName,
            templateType
          } = payload;
          const langsToGenerate = generateAllLanguages === true && allLanguages.length > 1 ? allLanguages : [language];
          let outputPage = figma.root.children.find((p) => p.name === PAGE_PREFIX + campaignName);
          if (!outputPage) {
            outputPage = figma.createPage();
            outputPage.name = PAGE_PREFIX + campaignName;
          }
          figma.currentPage = outputPage;
          const existing = [...outputPage.children];
          for (const node of existing) node.remove();
          const templatePageName = templateType === "product" ? "_Templates_Product" : "_Templates_Lifestyle";
          const templatePage = figma.root.children.find((p) => p.name === templatePageName);
          const lifestyleTemplatePage = figma.root.children.find(
            (p) => p.name === "_Templates_Lifestyle"
          );
          const gridCache = buildGridCache(lifestyleTemplatePage != null ? lifestyleTemplatePage : templatePage);
          const total = ratios.length * langsToGenerate.length;
          let current = 0;
          const GAP = 120;
          const colX = {};
          let xCursor = 0;
          for (const ratio of ratios) {
            colX[ratio] = xCursor;
            xCursor += RATIO_DIMENSIONS[ratio].width + GAP;
          }
          for (let rIdx = 0; rIdx < ratios.length; rIdx++) {
            const ratio = ratios[rIdx];
            const dims = RATIO_DIMENSIONS[ratio];
            for (let lIdx = 0; lIdx < langsToGenerate.length; lIdx++) {
              const lang = langsToGenerate[lIdx];
              current++;
              const frameName = `${campaignName}_${ratio}_${lang}`;
              send({ type: "GENERATION_PROGRESS", current, total, label: `${ratio} \xB7 ${lang}` });
              let frame = tryCloneTemplate(templatePage, ratio, frameName, templateType);
              if (!frame) {
                frame = yield buildBrandFrame(frameName, dims.width, dims.height);
              }
              applyGridsFromCache(frame, gridCache);
              if (imageHash && imageDimensions) {
                if (templateType === "product") {
                  setProductImage(frame, imageHash, imageDimensions, focalPoint);
                } else {
                  setHeroImage(frame, imageHash, imageDimensions, focalPoint);
                }
              }
              yield injectCopy(frame, copyMap, lang, templateType);
              frame.x = colX[ratio];
              frame.y = lIdx * (dims.height + GAP);
            }
          }
          figma.viewport.scrollAndZoomIntoView(outputPage.children);
          send({ type: "GENERATION_COMPLETE", frameCount: total, pageName: campaignName });
        });
      }
      function handleGenerateFlixmedia(payload) {
        return __async(this, null, function* () {
          const { copyMap, languages, campaignName } = payload;
          let outputPage = figma.root.children.find((p) => p.name === PAGE_PREFIX + campaignName);
          if (!outputPage) {
            outputPage = figma.createPage();
            outputPage.name = PAGE_PREFIX + campaignName;
          }
          figma.currentPage = outputPage;
          const existing = [...outputPage.children];
          for (const node of existing) node.remove();
          const templatePage = figma.root.children.find(
            (p) => p.name === "_Templates_Flixmedia"
          );
          if (!templatePage) {
            send({ type: "GENERATION_ERROR", message: 'Page "_Templates_Flixmedia" not found. Please create it in your Figma file.' });
            return;
          }
          const templateFrame = templatePage.children.find(
            (n) => n.type === "FRAME"
          );
          if (!templateFrame) {
            send({ type: "GENERATION_ERROR", message: "No frame found in _Templates_Flixmedia page." });
            return;
          }
          const templateGrids = templateFrame.layoutGrids;
          const GAP = 200;
          const total = languages.length;
          let current = 0;
          let xCursor = 0;
          for (const lang of languages) {
            current++;
            send({ type: "GENERATION_PROGRESS", current, total, label: `Flixmedia \xB7 ${lang}` });
            const frame = templateFrame.clone();
            outputPage.appendChild(frame);
            frame.name = `${campaignName}_Flixmedia_${lang}`;
            detachAllInstances(frame);
            if (templateGrids.length > 0) {
              frame.layoutGrids = templateGrids.map((g) => __spreadValues({}, g));
            }
            yield injectFlixmediaCopy(frame, copyMap, lang);
            frame.x = xCursor;
            frame.y = 0;
            xCursor += frame.width + GAP;
          }
          figma.viewport.scrollAndZoomIntoView(outputPage.children);
          send({ type: "GENERATION_COMPLETE", frameCount: total, pageName: campaignName });
        });
      }
      var FLIXMEDIA_NODES = {
        // Single-field nodes (no auto-fit)
        "txt_productname": ["Item name"],
        "txt_tagline": ["Tagline"],
        // Intro copy block — auto-fit: long → medium → short
        "txt_intro_headline": ["Item name short"],
        "txt_intro_body": [
          "Production description long",
          "Production description medium",
          "Production description short"
        ],
        // KSP 1–6 titles (single field)
        "txt_ksp1_title": ["1 Key Selling Point Title"],
        "txt_ksp2_title": ["2 Key Selling Point Title"],
        "txt_ksp3_title": ["3 Key Selling Point Title"],
        "txt_ksp4_title": ["4 Key Selling Point Title"],
        "txt_ksp5_title": ["5 Key Selling Point Title"],
        "txt_ksp6_title": ["6 Key Selling Point Title"],
        // KSP 1–6 body — auto-fit: long → medium → short
        "txt_ksp1_body": ["1 Key Selling Point Long", "1 Key Selling Point Medium", "1 Key Selling Point Short"],
        "txt_ksp2_body": ["2 Key Selling Point Long", "2 Key Selling Point Medium", "2 Key Selling Point Short"],
        "txt_ksp3_body": ["3 Key Selling Point Long", "3 Key Selling Point Medium", "3 Key Selling Point Short"],
        "txt_ksp4_body": ["4 Key Selling Point Long", "4 Key Selling Point Medium", "4 Key Selling Point Short"],
        "txt_ksp5_body": ["5 Key Selling Point Long", "5 Key Selling Point Medium", "5 Key Selling Point Short"],
        "txt_ksp6_body": ["6 Key Selling Point Long", "6 Key Selling Point Medium", "6 Key Selling Point Short"]
      };
      function injectFlixmediaCopy(frame, copyMap, language) {
        return __async(this, null, function* () {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
          const txtNodes = frame.findAll(
            (n) => n.type === "TEXT" && n.name.startsWith("txt_")
          );
          const fontSet = /* @__PURE__ */ new Set();
          for (const node of txtNodes) {
            const fn = node.fontName;
            if (fn !== figma.mixed) fontSet.add(JSON.stringify(fn));
          }
          for (const f of fontSet) {
            try {
              yield figma.loadFontAsync(JSON.parse(f));
            } catch (e) {
            }
          }
          for (const [nodeName, fields] of Object.entries(FLIXMEDIA_NODES)) {
            const nodes = frame.findAll(
              (n) => n.type === "TEXT" && n.name === nodeName
            );
            if (nodes.length === 0) continue;
            for (const node of nodes) {
              const originalBottom = node.y + node.height;
              if (fields.length === 1) {
                const val = (_d = (_c = (_a = copyMap[fields[0]]) == null ? void 0 : _a[language]) != null ? _c : (_b = copyMap[fields[0]]) == null ? void 0 : _b["English"]) != null ? _d : "";
                if (val) {
                  node.textAutoResize = "HEIGHT";
                  node.characters = val;
                }
              } else {
                const maxH = node.height;
                let injected = false;
                for (const fieldId of fields) {
                  const val = (_f = (_e = copyMap[fieldId]) == null ? void 0 : _e[language]) != null ? _f : "";
                  if (!val) continue;
                  node.textAutoResize = "HEIGHT";
                  node.characters = val;
                  if (node.height <= maxH) {
                    injected = true;
                    break;
                  }
                }
                if (!injected) {
                  for (let i = fields.length - 1; i >= 0; i--) {
                    const val = (_h = (_g = copyMap[fields[i]]) == null ? void 0 : _g[language]) != null ? _h : "";
                    if (val) {
                      node.textAutoResize = "HEIGHT";
                      node.characters = val;
                      break;
                    }
                  }
                  if (!((_i = copyMap[fields[0]]) == null ? void 0 : _i[language])) {
                    const val = (_k = (_j = copyMap[fields[fields.length - 1]]) == null ? void 0 : _j["English"]) != null ? _k : "";
                    if (val) {
                      node.textAutoResize = "HEIGHT";
                      node.characters = val;
                    }
                  }
                }
              }
              const skipRestack = nodeName === "txt_productname" || nodeName === "txt_tagline";
              if (!skipRestack) {
                const newBottom = node.y + node.height;
                const delta = newBottom - originalBottom;
                if (Math.abs(delta) > 1) {
                  repositionSiblingsBelow(node, delta);
                }
              }
            }
          }
          repositionTaglineAfterProductname(frame);
        });
      }
      function repositionSiblingsBelow(node, delta) {
        if (Math.abs(delta) < 1) return;
        _pushDown(node, delta);
      }
      function _pushDown(node, delta) {
        const parent = node.parent;
        if (!parent || !("children" in parent) || parent.type === "PAGE") return;
        const nodeH = "height" in node ? node.height : 0;
        const nodeBottom = node.y + nodeH;
        const origBottom = nodeBottom - delta;
        for (const sibling of parent.children) {
          if (sibling === node) continue;
          if (sibling.y >= origBottom - 1) {
            sibling.y += delta;
          }
        }
        if (parent.type !== "FRAME") return;
        const pf = parent;
        if (pf.layoutMode !== "NONE") return;
        const newContentBottom = pf.children.reduce((max, c) => {
          const b = c.y + ("height" in c ? c.height : 0);
          return b > max ? b : max;
        }, 0);
        if (newContentBottom <= pf.height) return;
        const oldH = pf.height;
        pf.resize(pf.width, newContentBottom);
        const frameDelta = pf.height - oldH;
        if (frameDelta > 1) _pushDown(pf, frameDelta);
      }
      function repositionTaglineAfterProductname(frame) {
        const productnames = frame.findAll((n) => n.type === "TEXT" && n.name === "txt_productname");
        const taglines = frame.findAll((n) => n.type === "TEXT" && n.name === "txt_tagline");
        for (const pn of productnames) {
          const sibling = taglines.find((t) => t.parent === pn.parent);
          if (!sibling) continue;
          const originalGap = sibling.y - (pn.y + pn.height);
          const gap = Math.max(originalGap, 12);
          pn.y = sibling.y - gap - pn.height;
        }
      }
      function tryCloneTemplate(templatePage, ratio, frameName, templateType = "lifestyle") {
        if (!templatePage) return null;
        const dims = RATIO_DIMENSIONS[ratio];
        const template = templatePage.findOne((n) => {
          if (n.type !== "FRAME" && n.type !== "COMPONENT") return false;
          const node = n;
          if (node.width === dims.width && node.height === dims.height) return true;
          const nameMatch = ratio.replace("x", "\xD7");
          if (n.name.includes(nameMatch) || n.name.includes(ratio)) return true;
          return false;
        });
        if (!template) return null;
        let frame;
        if (template.type === "COMPONENT") {
          const instance = template.createInstance();
          figma.currentPage.appendChild(instance);
          frame = instance.detachInstance();
        } else {
          frame = template.clone();
          figma.currentPage.appendChild(frame);
        }
        if (frame.layoutMode !== "NONE") frame.layoutMode = "NONE";
        detachAllInstances(frame);
        if (Math.abs(frame.width - dims.width) > 2 || Math.abs(frame.height - dims.height) > 2) {
          frame.resize(dims.width, dims.height);
        }
        frame.clipsContent = true;
        frame.name = frameName;
        if (templateType === "lifestyle") {
          clearPlaceholderFills(frame);
        }
        return frame;
      }
      function detachAllInstances(node) {
        if (!("children" in node)) return;
        const children = [...node.children];
        for (const child of children) {
          if (child.type === "INSTANCE") {
            const hasEditableText = !!child.findOne((n) => {
              if (n.type !== "TEXT") return false;
              const chars = n.characters.trim().toUpperCase();
              return chars !== "SHOP NOW" && chars !== "";
            });
            if (hasEditableText) {
              const detached = child.detachInstance();
              detachAllInstances(detached);
            }
          } else {
            detachAllInstances(child);
          }
        }
      }
      function clearPlaceholderFills(frame) {
        const frameArea = frame.width * frame.height;
        const candidates = [];
        for (const child of frame.children) {
          if (child.type === "RECTANGLE" || child.type === "FRAME") candidates.push(child);
          if (child.type === "GROUP" || child.type === "FRAME") {
            for (const gc of child.children) {
              if (gc.type === "RECTANGLE" || gc.type === "FRAME") candidates.push(gc);
            }
          }
        }
        for (const node of candidates) {
          if (node.name === "bg_grey" || node.name === "product" || node.name === "image_zone" || node.name.startsWith("gradient")) continue;
          if (node.width * node.height / frameArea < 0.6) continue;
          const fills = node.fills;
          if (!Array.isArray(fills) || fills.length !== 1) continue;
          const fill = fills[0];
          if (fill.type !== "SOLID") continue;
          const { r, g, b } = fill.color;
          if (r < 0.05 && g < 0.05 && b < 0.05) continue;
          if (r > 0.95 && g > 0.95 && b > 0.95) continue;
          node.fills = [];
        }
      }
      function buildBrandFrame(name, w, h) {
        return __async(this, null, function* () {
          const frame = figma.createFrame();
          frame.name = name;
          frame.resize(w, h);
          frame.clipsContent = true;
          frame.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
          figma.currentPage.appendChild(frame);
          const imageZone = figma.createRectangle();
          imageZone.name = "image_zone";
          imageZone.resize(w, h);
          imageZone.x = 0;
          imageZone.y = 0;
          imageZone.fills = [{ type: "SOLID", color: { r: 0.08, g: 0.08, b: 0.08 } }];
          frame.appendChild(imageZone);
          const margin = Math.round(w * 0.04);
          const ctaFrame = figma.createFrame();
          ctaFrame.name = "_brand_cta";
          ctaFrame.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
          for (const fn of [{ family: "Helvetica Neue", style: "Bold" }, { family: "Arial", style: "Bold" }]) {
            try {
              yield figma.loadFontAsync(fn);
              const t = figma.createText();
              t.fontName = fn;
              t.characters = "SHOP NOW";
              t.fontSize = 20;
              t.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
              ctaFrame.appendChild(t);
              ctaFrame.resize(t.width + 48, 42);
              t.x = 24;
              t.y = 11;
              break;
            } catch (_) {
            }
          }
          ctaFrame.x = margin;
          ctaFrame.y = h - margin - ctaFrame.height;
          frame.appendChild(ctaFrame);
          return frame;
        });
      }
      function setHeroImage(frame, imageHash, imgDims, focal) {
        const target = findImageTarget(frame);
        const fw = target.width, fh = target.height;
        const imgAspect = imgDims.width / imgDims.height, frameAspect = fw / fh;
        let scaleX, scaleY;
        if (imgAspect > frameAspect) {
          scaleY = 1;
          scaleX = frameAspect / imgAspect;
        } else {
          scaleX = 1;
          scaleY = imgAspect / frameAspect;
        }
        const TEXT_ZONE = fw > fh ? 0.32 : 0.45;
        let offsetX, offsetY;
        if (focal.bbox) {
          const { x1, y1, x2, y2 } = focal.bbox;
          offsetX = clamp01((x1 + x2) / 2 - scaleX * 0.5, scaleX);
          const minOffsetY = y2 - scaleY * (1 - TEXT_ZONE);
          offsetY = clamp01(Math.max((y1 + y2) / 2 - scaleY * (1 - TEXT_ZONE) / 2, minOffsetY), scaleY);
        } else {
          offsetX = clamp01(focal.x - scaleX * 0.5, scaleX);
          offsetY = clamp01(focal.y - scaleY * 0.5, scaleY);
        }
        target.fills = [{ type: "IMAGE", imageHash, scaleMode: "CROP", imageTransform: [[scaleX, 0, offsetX], [0, scaleY, offsetY]] }];
      }
      function setProductImage(frame, imageHash, imgDims, focal) {
        var _a, _b;
        const PRODUCT_NAMES = ["product", "product_image", "product_img", "img_product", "image", "image_zone", "hero", "bg"];
        let productLayer = null;
        for (const name of PRODUCT_NAMES) {
          const found = frame.findOne(
            (n) => (n.type === "RECTANGLE" || n.type === "FRAME") && n.name.toLowerCase() === name
          );
          if (found) {
            productLayer = found;
            break;
          }
        }
        if (!productLayer) {
          const frameArea = frame.width * frame.height;
          const rects = frame.findAll(
            (n) => (n.type === "RECTANGLE" || n.type === "FRAME") && !n.name.startsWith("_brand_")
          );
          productLayer = (_a = rects.find(
            (n) => Array.isArray(n.fills) && n.fills.some((f) => f.type === "IMAGE")
          )) != null ? _a : null;
          if (!productLayer) {
            const large = rects.filter((n) => n.width * n.height / frameArea >= 0.2).sort((a, b) => b.width * b.height - a.width * a.height);
            productLayer = (_b = large[0]) != null ? _b : null;
          }
        }
        if (!productLayer) {
          console.warn("[Marshall] setProductImage: no suitable layer found in", frame.name);
          return;
        }
        const fw = productLayer.width, fh = productLayer.height;
        const imgAspect = imgDims.width / imgDims.height;
        const frameAspect = fw / fh;
        let scaleX, scaleY;
        if (imgAspect > frameAspect) {
          scaleY = 1;
          scaleX = frameAspect / imgAspect;
        } else {
          scaleX = 1;
          scaleY = imgAspect / frameAspect;
        }
        const offsetX = clamp01(focal.x - scaleX * 0.5, scaleX);
        const offsetY = clamp01(focal.y - scaleY * 0.5, scaleY);
        productLayer.fills = [{ type: "IMAGE", imageHash, scaleMode: "CROP", imageTransform: [[scaleX, 0, offsetX], [0, scaleY, offsetY]] }];
      }
      function findImageTarget(frame) {
        const named = frame.findOne((n) => n.name === "image_zone");
        if (named && (named.type === "RECTANGLE" || named.type === "FRAME")) return named;
        const frameArea = frame.width * frame.height;
        const rects = frame.findAll(
          (n) => (n.type === "RECTANGLE" || n.type === "FRAME") && !n.name.startsWith("_brand_")
        );
        const imageFill = rects.find((n) => Array.isArray(n.fills) && n.fills.some((f) => f.type === "IMAGE"));
        if (imageFill) return imageFill;
        const large = rects.filter((n) => n.width * n.height / frameArea >= 0.5).sort((a, b) => b.width * b.height - a.width * a.height);
        if (large.length > 0) return large[0];
        return frame;
      }
      function injectCopy(frame, copyMap, language, templateType = "lifestyle") {
        return __async(this, null, function* () {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w;
          const namedHeadline = frame.findOne(
            (n) => n.type === "TEXT" && (n.name === "txt_headline" || n.name === "PRODUCT NAME")
          );
          const namedTagline = frame.findOne(
            (n) => n.type === "TEXT" && (n.name === "txt_tagline" || n.name === "TAGLINE")
          );
          const isTemplateBased = !!(namedHeadline || namedTagline);
          if (isTemplateBased) {
            const itemName = (_h = (_g = (_e = (_c = (_a = copyMap["Item name"]) == null ? void 0 : _a[language]) != null ? _c : (_b = copyMap["Item name"]) == null ? void 0 : _b["English"]) != null ? _e : (_d = copyMap["Name medium"]) == null ? void 0 : _d[language]) != null ? _g : (_f = copyMap["Name medium"]) == null ? void 0 : _f["English"]) != null ? _h : "";
            const taglineText = (_p = (_o = (_m = (_k = (_i = copyMap["Tagline"]) == null ? void 0 : _i[language]) != null ? _k : (_j = copyMap["Tagline"]) == null ? void 0 : _j["English"]) != null ? _m : (_l = copyMap["Subheadline"]) == null ? void 0 : _l[language]) != null ? _o : (_n = copyMap["Subheadline"]) == null ? void 0 : _n["English"]) != null ? _p : "";
            const colorName = (_s = (_q = copyMap["Color name"]) == null ? void 0 : _q[language]) != null ? _s : (_r = copyMap["Color name"]) == null ? void 0 : _r["English"];
            const cleanedHeadline = stripColor(itemName, colorName);
            function loadNodeFont(node) {
              return __async(this, null, function* () {
                try {
                  const fn = node.fontName;
                  if (fn !== figma.mixed) {
                    yield figma.loadFontAsync(fn);
                  } else {
                    const len = Math.max(node.characters.length, 1);
                    const seen = /* @__PURE__ */ new Set();
                    for (let i = 0; i < len; i++) {
                      const rf = node.getRangeFontName(i, i + 1);
                      if (rf !== figma.mixed) seen.add(JSON.stringify(rf));
                    }
                    for (const f of seen) {
                      try {
                        yield figma.loadFontAsync(JSON.parse(f));
                      } catch (e) {
                      }
                    }
                  }
                } catch (e) {
                }
              });
            }
            if (namedHeadline) yield loadNodeFont(namedHeadline);
            if (namedTagline) yield loadNodeFont(namedTagline);
            if (namedTagline && namedHeadline && namedTagline.parent === namedHeadline.parent && namedTagline.width < namedHeadline.width) {
              const layoutMode0 = detectLayoutMode(frame);
              if (layoutMode0 === "center_bottom" || layoutMode0 === "left_bottom") {
                namedTagline.textAutoResize = "HEIGHT";
                namedTagline.resize(namedHeadline.width, namedTagline.height);
                namedTagline.x = namedHeadline.x;
                namedTagline.textAlignHorizontal = "CENTER";
              }
            }
            const layoutMode = detectLayoutMode(frame);
            if (layoutMode === "right_middle") {
              const refNode = namedHeadline != null ? namedHeadline : namedTagline;
              const msgBlock = refNode ? findMessagingBlock(refNode, frame) : null;
              const containerW = msgBlock ? msgBlock.container.width : null;
              if (namedHeadline) {
                namedHeadline.textAutoResize = "HEIGHT";
                if (containerW && namedHeadline.width < containerW)
                  namedHeadline.resize(containerW, namedHeadline.height);
              }
              if (namedTagline) {
                namedTagline.textAutoResize = "HEIGHT";
                if (containerW && namedTagline.width < containerW)
                  namedTagline.resize(containerW, namedTagline.height);
              }
            } else {
              if (namedHeadline) namedHeadline.textAutoResize = "HEIGHT";
              if (namedTagline) namedTagline.textAutoResize = "HEIGHT";
            }
            if (namedHeadline && cleanedHeadline) {
              yield forceSetText(namedHeadline, cleanedHeadline);
            }
            if (namedTagline && taglineText) {
              yield forceSetText(namedTagline, taglineText);
            }
            try {
              yield fitTextInTemplate(frame);
            } catch (err) {
              console.warn("[Marshall] fitTextInTemplate failed:", err instanceof Error ? err.message : String(err));
            }
            return;
          }
          const nodes = frame.findAll((n) => n.type === "TEXT").filter((n) => !isInsideLocked(n) && !isCTAButton(n, frame)).sort((a, b) => getFontSize(b) - getFontSize(a));
          if (nodes.length === 0) return;
          const FIELD_PRIORITY = [
            "Item name",
            "Name medium",
            "Tagline",
            "Subheadline",
            "1 Product Highlight One-liner",
            "2 Product Highlight One-liner",
            "3 Product Highlight One-liner"
          ];
          const copyList = [];
          for (const fid of FIELD_PRIORITY) {
            if (copyList.length >= nodes.length) break;
            const val = (_w = (_v = (_t = copyMap[fid]) == null ? void 0 : _t[language]) != null ? _v : (_u = copyMap[fid]) == null ? void 0 : _u["English"]) != null ? _w : "";
            if (val.trim()) copyList.push(val);
          }
          for (let i = 0; i < nodes.length; i++) {
            yield forceSetText(nodes[i], i < copyList.length ? copyList[i] : "");
          }
          restackTextNodes(frame, nodes);
        });
      }
      function detectLayoutMode(frame) {
        if (frame.width >= 1500) return "left_bottom";
        if (frame.height <= 260 && frame.width >= 700) return "right_middle";
        return "center_bottom";
      }
      function findMessagingBlock(textNode, frame) {
        let current = textNode.parent;
        while (current && current !== frame) {
          if (current.type === "FRAME") {
            const hasCTA = !!current.findOne(
              (n) => n.type === "INSTANCE" && n.name.toLowerCase().includes("button") || n.type === "FRAME" && n.name === "CTA"
            );
            if (hasCTA) {
              const parent = current.parent;
              return {
                container: current,
                relativeTo: parent && parent.type === "FRAME" ? parent : frame
              };
            }
          }
          current = current.parent;
        }
        current = textNode.parent;
        while (current && current !== frame) {
          if (current.parent === frame && current.type === "FRAME")
            return { container: current, relativeTo: frame };
          current = current.parent;
        }
        return null;
      }
      function fitTextInTemplate(frame) {
        return __async(this, null, function* () {
          const mode = detectLayoutMode(frame);
          const cta = findCTAFrame(frame);
          if (!cta) return;
          const ctaAbsTop = absY(cta, frame);
          const headline = frame.findOne(
            (n) => n.type === "TEXT" && (n.name === "txt_headline" || n.name === "PRODUCT NAME")
          );
          const tagline = frame.findOne(
            (n) => n.type === "TEXT" && (n.name === "txt_tagline" || n.name === "TAGLINE")
          );
          let origHeadlineY = 0, origHeadlineH = 0, origHeadlineFS = 0;
          let origTaglineY = 0, origTaglineH = 0, origTaglineFS = 0;
          let textToButtonGap = 0;
          let taglineToHeadlineGap = 0;
          if (headline) {
            origHeadlineY = absY(headline, frame);
            origHeadlineH = headline.height;
            origHeadlineFS = typeof headline.fontSize === "number" ? headline.fontSize : 0;
            textToButtonGap = ctaAbsTop - (origHeadlineY + origHeadlineH);
          }
          if (tagline) {
            origTaglineY = absY(tagline, frame);
            origTaglineH = tagline.height;
            origTaglineFS = typeof tagline.fontSize === "number" ? tagline.fontSize : 0;
            if (headline) taglineToHeadlineGap = origHeadlineY - (origTaglineY + origTaglineH);
          }
          const MIN_SCALE = 0.7, STEP = 0.05;
          function shrinkToFit(node, originalFS, maxHeight) {
            return __async(this, null, function* () {
              if (!originalFS) return;
              node.textAutoResize = "HEIGHT";
              if (node.height <= maxHeight) return;
              for (let scale = 1 - STEP; scale >= MIN_SCALE; scale -= STEP) {
                const newSize = Math.round(originalFS * scale * 10) / 10;
                try {
                  if (node.fontSize !== figma.mixed) node.fontSize = newSize;
                  else node.setRangeFontSize(0, node.characters.length, newSize);
                } catch (e) {
                }
                if (node.height <= maxHeight) return;
              }
            });
          }
          function shrinkForHorizontalFit(node, originalFS) {
            return __async(this, null, function* () {
              if (!originalFS) return;
              const targetW = node.width;
              const originalChars = node.characters;
              const words = originalChars.split(/\s+/).filter(Boolean);
              if (words.length === 0) return;
              const longestWord = words.reduce((a, b) => a.length > b.length ? a : b);
              let wordWidth = 0;
              try {
                const fn = node.fontName;
                if (fn !== figma.mixed) yield figma.loadFontAsync(fn);
                node.characters = longestWord;
                node.textAutoResize = "WIDTH_AND_HEIGHT";
                wordWidth = node.width;
                node.textAutoResize = "NONE";
                node.resize(targetW, node.height);
                node.characters = originalChars;
                node.textAutoResize = "HEIGHT";
              } catch (e) {
                try {
                  node.characters = originalChars;
                } catch (e2) {
                }
                node.textAutoResize = "HEIGHT";
                return;
              }
              if (wordWidth <= targetW) return;
              const scale = Math.max(MIN_SCALE, targetW / wordWidth * 0.98);
              const newSize = Math.round(originalFS * scale * 10) / 10;
              try {
                if (node.fontSize !== figma.mixed) node.fontSize = newSize;
                else node.setRangeFontSize(0, node.characters.length, newSize);
              } catch (e) {
              }
            });
          }
          if (tagline) {
            tagline.textAutoResize = "HEIGHT";
            yield shrinkForHorizontalFit(tagline, origTaglineFS);
            const curFS = typeof tagline.fontSize === "number" ? tagline.fontSize : origTaglineFS;
            yield shrinkToFit(tagline, curFS, origTaglineH * 2);
          }
          if (headline) {
            headline.textAutoResize = "HEIGHT";
            yield shrinkForHorizontalFit(headline, origHeadlineFS);
            const curFS = typeof headline.fontSize === "number" ? headline.fontSize : origHeadlineFS;
            yield shrinkToFit(headline, curFS, origHeadlineH * 2);
          }
          const TOLERANCE = 1.15;
          const headlineGrew = headline && headline.height > origHeadlineH * TOLERANCE;
          const taglineGrew = tagline && tagline.height > origTaglineH * TOLERANCE;
          const needsReflow = headlineGrew || taglineGrew;
          if (needsReflow || mode === "right_middle") {
            if (headline) {
              const currentAbsY = absY(headline, frame);
              const targetAbsY = ctaAbsTop - textToButtonGap - headline.height;
              if (mode === "right_middle" || targetAbsY < currentAbsY) {
                headline.y += targetAbsY - currentAbsY;
              }
            }
            if (tagline && headline) {
              const headlineAbsY = absY(headline, frame);
              const currentAbsY = absY(tagline, frame);
              const targetAbsY = headlineAbsY - taglineToHeadlineGap - tagline.height;
              if (mode === "right_middle" || targetAbsY < currentAbsY) {
                tagline.y += targetAbsY - currentAbsY;
              }
            } else if (tagline) {
              const currentAbsY = absY(tagline, frame);
              const targetAbsY = ctaAbsTop - textToButtonGap - tagline.height;
              if (mode === "right_middle" || targetAbsY < currentAbsY) {
                tagline.y += targetAbsY - currentAbsY;
              }
            }
          }
          if (mode === "right_middle") {
            const refNode = headline != null ? headline : tagline;
            if (refNode) {
              const msg = findMessagingBlock(refNode, frame);
              if (msg) {
                msg.container.y = Math.round((msg.relativeTo.height - msg.container.height) / 2);
              }
            }
          }
        });
      }
      function absY(node, root) {
        let y = node.y;
        let p = node.parent;
        while (p && p !== root && p.type !== "PAGE") {
          y += p.y;
          p = p.parent;
        }
        return y;
      }
      function restackTextNodes(frame, nodes) {
        if (nodes.length === 0) return;
        const cta = findCTAFrame(frame);
        const frameH = frame.height;
        const frameW = frame.width;
        const isLandscape = frameW > frameH;
        const ctaNode = cta;
        const ctaAbsTop = ctaNode ? absY(ctaNode, frame) : frameH * 0.88;
        const ctaH = cta ? cta.height : Math.round(frameH * 0.1);
        const ctaAbsBot = ctaAbsTop + ctaH;
        const BTM_MARGIN = frameH - ctaAbsBot;
        const TOP_MARGIN = Math.max(BTM_MARGIN, Math.round(frameH * 0.04));
        const GAP = Math.round(frameH * 0.015);
        const MIN_LEFT = Math.round(frameW * 0.33);
        const headline = nodes.find((n) => n.name === "txt_headline" || n.name === "PRODUCT NAME");
        const tagline = nodes.find((n) => n.name === "txt_tagline" || n.name === "TAGLINE");
        const unnamed = nodes.filter((n) => n !== headline && n !== tagline).sort((a, b) => getFontSize(b) - getFontSize(a));
        const finalOrder = headline || tagline ? [...headline ? [headline] : [], ...tagline ? [tagline] : [], ...unnamed] : [...nodes].sort((a, b) => getFontSize(b) - getFontSize(a));
        for (const node of finalOrder) {
          if (node.parent && node.parent !== frame && node.parent.type === "FRAME") {
            const pf = node.parent;
            if (pf.layoutMode !== "NONE") pf.layoutMode = "NONE";
          }
        }
        const RIGHT_MARGIN = Math.round(frameW * 0.04);
        let fixedRight = 0;
        for (const node of finalOrder) {
          let ax = node.x;
          let p = node.parent;
          while (p && p !== frame && p.type !== "PAGE") {
            ax += p.x;
            p = p.parent;
          }
          const r = ax + node.width;
          if (r > fixedRight) fixedRight = r;
        }
        fixedRight = Math.min(fixedRight, frameW - Math.round(frameW * 0.02));
        for (const node of finalOrder) {
          node.textAutoResize = "HEIGHT";
          let ax = node.x;
          let p = node.parent;
          while (p && p !== frame && p.type !== "PAGE") {
            ax += p.x;
            p = p.parent;
          }
          const maxW = fixedRight - ax;
          if (maxW > 0 && node.width > maxW) node.resize(maxW, node.height);
        }
        function doStack() {
          let cursor = ctaAbsTop - GAP;
          let topmost2 = cursor;
          for (const node of finalOrder) {
            let py = 0;
            let pp = node.parent;
            while (pp && pp !== frame && pp.type !== "PAGE") {
              py += pp.y;
              pp = pp.parent;
            }
            const ay = cursor - node.height;
            node.y = ay - py;
            cursor = ay - GAP;
            if (ay < topmost2) topmost2 = ay;
          }
          return topmost2;
        }
        function getAbsX(node) {
          let x = node.x;
          let p = node.parent;
          while (p && p !== frame && p.type !== "PAGE") {
            x += p.x;
            p = p.parent;
          }
          return x;
        }
        function setAbsX(node, ax) {
          let px = 0;
          let p = node.parent;
          while (p && p !== frame && p.type !== "PAGE") {
            px += p.x;
            p = p.parent;
          }
          node.x = ax - px;
        }
        let topmost = doStack();
        if (topmost < TOP_MARGIN) {
          for (let iter = 0; iter < 5; iter++) {
            if (topmost >= TOP_MARGIN) break;
            const extraW = Math.ceil((TOP_MARGIN - topmost) * 0.9);
            for (const node of finalOrder) {
              const newW = node.width + extraW;
              const newLeft = fixedRight - newW;
              const clampedLeft = Math.max(newLeft, MIN_LEFT);
              const clampedW = fixedRight - clampedLeft;
              if (clampedW > node.width) {
                node.resize(clampedW, node.height);
                setAbsX(node, clampedLeft);
              }
            }
            topmost = doStack();
          }
        }
        const isTrueLandscape = frameW > frameH && frameW >= 700;
        if (cta && isTrueLandscape) {
          let colLeft = frameW;
          for (const node of finalOrder) {
            const ax = getAbsX(node);
            if (ax < colLeft) colLeft = ax;
          }
          setAbsX(cta, colLeft);
        }
      }
      function findCTAFrame(frame) {
        const named = frame.findOne((n) => n.name === "_brand_cta");
        if (named && (named.type === "FRAME" || named.type === "INSTANCE")) return named;
        const shopNow = frame.findOne(
          (n) => n.type === "TEXT" && n.characters.trim().toUpperCase() === "SHOP NOW"
        );
        if (shopNow) {
          let p = shopNow.parent;
          while (p && p !== frame && p.type !== "PAGE") {
            if (p.type === "FRAME" || p.type === "INSTANCE") return p;
            p = p.parent;
          }
        }
        const frameH = frame.height;
        const candidates = frame.findAll((n) => n.type === "FRAME" || n.type === "INSTANCE");
        for (const c of candidates) {
          if (c === frame) continue;
          const fills = c.fills;
          if (!Array.isArray(fills) || !fills.length) continue;
          const fill = fills[0];
          if (fill.type !== "SOLID") continue;
          const { r, g, b } = fill.color;
          const isButtonColor = r > 0.85 && g > 0.85 && b > 0.85 || r < 0.15 && g < 0.15 && b < 0.15;
          const absBottom = absY(c, frame) + c.height;
          if (isButtonColor && c.height < frameH * 0.12 && absBottom > frameH * 0.7) return c;
        }
        return null;
      }
      function isCTAButton(node, rootFrame) {
        if (node.characters.trim().toUpperCase() === "SHOP NOW") return true;
        let p = node.parent;
        while (p && p.type !== "PAGE") {
          if (p.name === "_brand_cta") return true;
          if (p.type === "FRAME") {
            const pf = p;
            const fills = pf.fills;
            if (Array.isArray(fills) && fills.length) {
              const fill = fills[0];
              if (fill.type === "SOLID") {
                const { r, g, b } = fill.color;
                const isButtonColor = r > 0.85 && g > 0.85 && b > 0.85 || r < 0.15 && g < 0.15 && b < 0.15;
                const absBottom = absY(pf, rootFrame) + pf.height;
                if (isButtonColor && pf.height < rootFrame.height * 0.12 && absBottom > rootFrame.height * 0.7) return true;
              }
            }
          }
          p = p.parent;
        }
        return false;
      }
      function isInsideLocked(node) {
        if (node.name.startsWith(BRAND_TOKENS.compliance.lockedLayerPrefix)) return true;
        let p = node.parent;
        while (p && p.type !== "PAGE") {
          if ("name" in p && p.name.startsWith(BRAND_TOKENS.compliance.lockedLayerPrefix)) return true;
          p = p.parent;
        }
        return false;
      }
      function getFontSize(node) {
        const fs = node.fontSize;
        return typeof fs === "number" ? fs : 0;
      }
      function forceSetText(node, copy) {
        return __async(this, null, function* () {
          try {
            const fn = node.fontName;
            if (fn !== figma.mixed) {
              yield figma.loadFontAsync(fn);
            } else {
              const len = Math.max(node.characters.length, 1);
              const seen = /* @__PURE__ */ new Set();
              for (let i = 0; i < len; i++) {
                const rf = node.getRangeFontName(i, i + 1);
                if (rf !== figma.mixed) seen.add(JSON.stringify(rf));
              }
              for (const f of seen) {
                try {
                  yield figma.loadFontAsync(JSON.parse(f));
                } catch (e) {
                }
              }
            }
            node.characters = copy;
            return;
          } catch (e) {
          }
          for (const fn of [{ family: "Helvetica Neue", style: "Bold" }, { family: "Arial", style: "Bold" }, { family: "Arial", style: "Regular" }]) {
            try {
              yield figma.loadFontAsync(fn);
              node.fontName = fn;
              node.characters = copy;
              return;
            } catch (e) {
            }
          }
          console.warn(`[Marshall] forceSetText failed on "${node.name}"`);
        });
      }
      function clamp01(val, scale) {
        return Math.max(0, Math.min(1 - scale, val));
      }
      function handleExportAll(campaignName) {
        return __async(this, null, function* () {
          const outputPage = figma.root.children.find((p) => p.name === PAGE_PREFIX + campaignName);
          if (!outputPage) return;
          for (const node of outputPage.children) {
            if ("exportAsync" in node) {
              yield node.exportAsync({ format: "PNG", constraint: { type: "SCALE", value: 1 } });
            }
          }
          send({ type: "EXPORT_COMPLETE" });
        });
      }
      var INTRODUCING = {
        "English": "INTRODUCING",
        "Spanish": "PRESENTAMOS",
        "German": "WIR PR\xC4SENTIEREN",
        "French": "VOICI",
        "Japanese": "\u3054\u7D39\u4ECB",
        "Chinese": "\u9686\u91CD\u63A8\u51FA",
        "Italian": "PRESENTAZIONE",
        "Dutch": "INTRODUCTIE",
        "Swedish": "VI PRESENTERAR",
        "Korean": "\uC18C\uAC1C",
        "Danish": "INTRODUKTION",
        "Finnish": "ESITTELYSS\xC4",
        "Norwegian": "INTRODUSERER"
      };
      var LANG_CODE = {
        "English": "EN",
        "Spanish": "ES",
        "German": "DE",
        "French": "FR",
        "Japanese": "JP",
        "Chinese": "CH",
        "Italian": "IT",
        "Dutch": "NL",
        "Swedish": "SE",
        "Korean": "KO",
        "Danish": "DA",
        "Finnish": "FI",
        "Norwegian": "NO"
      };
      var ASIAN_LANGS = /* @__PURE__ */ new Set(["Japanese", "Chinese", "Korean"]);
      var ASIAN_FONT_MAP = {
        "Chinese": [
          { family: "Source Han Sans SC", style: "Regular" },
          { family: "Noto Sans SC", style: "Regular" },
          { family: "PingFang SC", style: "Regular" },
          { family: "Arial", style: "Regular" }
        ],
        "Japanese": [
          { family: "Source Han Sans", style: "Bold" },
          { family: "Noto Sans JP", style: "Bold" },
          { family: "Hiragino Kaku Gothic Pro", style: "W6" },
          { family: "Arial", style: "Regular" }
        ],
        "Korean": [
          { family: "Source Han Sans K", style: "Bold" },
          { family: "Noto Sans KR", style: "Bold" },
          { family: "Apple SD Gothic Neo", style: "Bold" },
          { family: "Arial", style: "Regular" }
        ]
      };
      function loadMarshallFont() {
        return __async(this, null, function* () {
          const candidates = [
            { family: "Helvetica Neue LT W1G", style: "87 Heavy Condensed" },
            { family: "Helvetica Neue", style: "Bold Condensed" },
            { family: "Arial", style: "Bold" },
            { family: "Arial", style: "Regular" }
          ];
          for (const fn of candidates) {
            try {
              yield figma.loadFontAsync(fn);
              return fn;
            } catch (e) {
            }
          }
          return { family: "Arial", style: "Regular" };
        });
      }
      function loadFontForLang(language) {
        return __async(this, null, function* () {
          var _a;
          if (ASIAN_LANGS.has(language)) {
            const candidates = (_a = ASIAN_FONT_MAP[language]) != null ? _a : [];
            for (const fn of candidates) {
              try {
                yield figma.loadFontAsync(fn);
                return fn;
              } catch (e) {
              }
            }
          }
          return loadMarshallFont();
        });
      }
      function loadSubFont() {
        return __async(this, null, function* () {
          const candidates = [
            { family: "Helvetica Neue LT W1G", style: "77 Bold Condensed" },
            { family: "Helvetica Neue", style: "Condensed" },
            { family: "Arial", style: "Regular" }
          ];
          for (const fn of candidates) {
            try {
              yield figma.loadFontAsync(fn);
              return fn;
            } catch (e) {
            }
          }
          return { family: "Arial", style: "Regular" };
        });
      }
      function stripColor(name, colorName) {
        const sepRegex = /[\s\u00A0]+[-\u2013\u2014][\s\u00A0]+/g;
        let lastIdx = -1;
        let m;
        while ((m = sepRegex.exec(name)) !== null) lastIdx = m.index;
        if (lastIdx > 0) return name.slice(0, lastIdx).trim();
        if (colorName && colorName.trim()) {
          const escaped = colorName.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          const colorRegex = new RegExp(`[\\s\\u00A0]+${escaped}\\s*$`);
          const stripped = name.replace(colorRegex, "");
          if (stripped !== name) return stripped.trim();
        }
        return name;
      }
      function makeVtText(content, font, size, lineHeightPct, frameW, maxW) {
        const t = figma.createText();
        t.fontName = font;
        t.characters = content.toUpperCase();
        t.fontSize = size;
        t.lineHeight = { value: lineHeightPct, unit: "PERCENT" };
        t.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
        t.textAlignHorizontal = "CENTER";
        t.textAlignVertical = "CENTER";
        t.textAutoResize = "HEIGHT";
        t.resize(maxW, size * 2);
        t.textAutoResize = "HEIGHT";
        return t;
      }
      function applyLatinOverride(node, marshallFont, langFont) {
        return __async(this, null, function* () {
          if (langFont.family === marshallFont.family) return;
          const text = node.characters;
          if (!text) return;
          let i = 0;
          while (i < text.length) {
            const cp = text.charCodeAt(i);
            const isLatin = cp <= 591 || cp >= 7680 && cp <= 7935;
            if (!isLatin) {
              i++;
              continue;
            }
            let j = i + 1;
            while (j < text.length) {
              const cp2 = text.charCodeAt(j);
              if (!(cp2 <= 591 || cp2 >= 7680 && cp2 <= 7935)) break;
              j++;
            }
            try {
              node.setRangeFontName(i, j, marshallFont);
            } catch (e) {
            }
            i = j;
          }
        });
      }
      function generateVtFrame(outputPage, type, content, subContent, language, w, h, x, y, campaignName) {
        return __async(this, null, function* () {
          var _a;
          const langCode = (_a = LANG_CODE[language]) != null ? _a : language.slice(0, 2).toUpperCase();
          const is916 = h > w;
          const isAsian = ASIAN_LANGS.has(language);
          const marshallFont = yield loadMarshallFont();
          const langFont = yield loadFontForLang(language);
          const isProductNameType = type === "logo" || type === "lockup";
          const mainFont = isProductNameType ? marshallFont : langFont;
          const subFont = yield ASIAN_LANGS.has(language) ? Promise.resolve(langFont) : loadSubFont();
          const mainSize = is916 ? isAsian ? 105 : 105 : isAsian ? 105 : 175;
          const subSize = is916 ? 64 : 88;
          const productNameSize916 = 128;
          const lineH = isAsian ? 120 : 110;
          const frame = figma.createFrame();
          frame.name = `${langCode}/${content} ${w}\xD7${h}`;
          frame.resize(w, h);
          frame.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
          frame.clipsContent = true;
          frame.x = x;
          frame.y = y;
          outputPage.appendChild(frame);
          const PAD = Math.round(w * 0.08);
          const maxW = w - PAD * 2;
          if (type === "lockup") {
            const nameSize = is916 ? productNameSize916 : mainSize;
            const tName = makeVtText(content, mainFont, nameSize, lineH, w, maxW);
            const tSub = makeVtText(subContent, subFont, subSize, 110, w, maxW);
            if (isAsian) yield applyLatinOverride(tSub, marshallFont, langFont);
            frame.appendChild(tName);
            frame.appendChild(tSub);
            const gap = Math.round(h * 0.02);
            const totalH = tName.height + gap + tSub.height;
            tName.x = (w - tName.width) / 2;
            tName.y = (h - totalH) / 2;
            tSub.x = (w - tSub.width) / 2;
            tSub.y = tName.y + tName.height + gap;
          } else {
            const t = makeVtText(content, mainFont, mainSize, lineH, w, maxW);
            if (isAsian && !isProductNameType) yield applyLatinOverride(t, marshallFont, langFont);
            frame.appendChild(t);
            t.x = (w - t.width) / 2;
            t.y = (h - t.height) / 2;
          }
          return frame;
        });
      }
      function vtTemplateFrameName(typeKey, langCode, w, h) {
        const size = `${w}x${h}`;
        switch (typeKey) {
          case "introducing":
            return `${langCode}/INTRODUCING ${size}`;
          case "logo":
            return `LOGO/PRODUCTNAME LOGO ${size}`;
          case "lockup":
            return `${langCode}/PRODUCTNAME LOCKUP ${size}`;
          case "usp1":
            return `${langCode}/USP01 ${size}`;
          case "usp2":
            return `${langCode}/USP02 ${size}`;
          case "usp3":
            return `${langCode}/USP03 ${size}`;
          case "usp4":
            return `${langCode}/USP04 ${size}`;
          case "usp5":
            return `${langCode}/USP05 ${size}`;
          case "usp6":
            return `${langCode}/USP06 ${size}`;
          default:
            return "";
        }
      }
      function collectTextNodes(node, out = []) {
        if (node.type === "TEXT") out.push(node);
        if ("children" in node) for (const c of node.children) collectTextNodes(c, out);
        return out;
      }
      function setVtText(node, text) {
        return __async(this, null, function* () {
          const len = node.characters.length;
          const fonts = [];
          const seen = /* @__PURE__ */ new Set();
          const add = (fn) => {
            if (fn === figma.mixed) return;
            const key = JSON.stringify(fn);
            if (!seen.has(key)) {
              seen.add(key);
              fonts.push(fn);
            }
          };
          add(node.fontName);
          for (let i = 0; i < len; i++) add(node.getRangeFontName(i, i + 1));
          const loaded = /* @__PURE__ */ new Set();
          for (const fn of fonts) {
            try {
              yield figma.loadFontAsync(fn);
              loaded.add(JSON.stringify(fn));
            } catch (e) {
            }
          }
          let baseFont = null;
          const declared = node.fontName;
          if (declared !== figma.mixed) baseFont = declared;
          else if (len > 0) {
            const f0 = node.getRangeFontName(0, 1);
            if (f0 !== figma.mixed) baseFont = f0;
          }
          if (!baseFont && fonts.length) baseFont = fonts[0];
          if (baseFont && loaded.has(JSON.stringify(baseFont))) {
            if (len > 0) {
              try {
                node.setRangeFontName(0, len, baseFont);
              } catch (e) {
              }
            }
            try {
              node.fontName = baseFont;
            } catch (e) {
            }
            node.characters = text;
            try {
              node.setRangeFontName(0, text.length, baseFont);
            } catch (e) {
            }
            return true;
          }
          const anyLoaded = fonts.find((f) => loaded.has(JSON.stringify(f)));
          if (anyLoaded) {
            try {
              node.fontName = anyLoaded;
            } catch (e) {
            }
            node.characters = text;
            try {
              node.setRangeFontName(0, text.length, anyLoaded);
            } catch (e) {
            }
            return true;
          }
          return false;
        });
      }
      function cloneVtFrameFromTemplate(templatePage, outputPage, typeKey, langCode, mainText, subText, w, h, x, y) {
        return __async(this, null, function* () {
          var _a, _b;
          const name = vtTemplateFrameName(typeKey, langCode, w, h);
          const tpl = templatePage.children.find((c) => c.type === "FRAME" && c.name === name);
          if (!tpl) return null;
          const clone = tpl.clone();
          outputPage.appendChild(clone);
          clone.x = x;
          clone.y = y;
          const MARGIN_RATIO = 0.1;
          const maxTextW = Math.round(w * (1 - MARGIN_RATIO * 2));
          const wrapAndCenter = (t) => {
            try {
              const parent = t.parent;
              const parentW = parent && "width" in parent ? parent.width : w;
              const wrapW = Math.min(maxTextW, Math.round(parentW * (1 - MARGIN_RATIO * 2)));
              const cy = t.y + t.height / 2;
              t.textAlignHorizontal = "CENTER";
              t.textAutoResize = "HEIGHT";
              t.resize(wrapW, t.height);
              t.x = Math.round((parentW - wrapW) / 2);
              t.y = Math.round(cy - t.height / 2);
            } catch (e) {
            }
          };
          const texts = collectTextNodes(clone);
          if (typeKey === "lockup") {
            const header = (_a = texts.find((t) => /productname/i.test(t.name))) != null ? _a : texts[0];
            const sub = (_b = texts.find((t) => t !== header && /sub|header/i.test(t.name))) != null ? _b : texts.find((t) => t !== header);
            if (header) {
              yield setVtText(header, mainText);
              wrapAndCenter(header);
            }
            if (sub) {
              if (subText) {
                yield setVtText(sub, subText);
                wrapAndCenter(sub);
              } else sub.remove();
            }
            if (header && sub && subText) {
              const gap = Math.round(h * 0.02);
              const totalH = header.height + gap + sub.height;
              const top = Math.round((h - totalH) / 2);
              header.y = top;
              sub.y = top + header.height + gap;
            }
          } else {
            if (texts[0]) {
              yield setVtText(texts[0], mainText);
              wrapAndCenter(texts[0]);
            }
          }
          return clone;
        });
      }
      function handleGenerateVideoTitles(payload) {
        return __async(this, null, function* () {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I;
          const { copyMap, languages, campaignName } = payload;
          let outputPage = figma.root.children.find((p) => p.name === PAGE_PREFIX + campaignName);
          if (!outputPage) {
            outputPage = figma.createPage();
            outputPage.name = PAGE_PREFIX + campaignName;
          }
          figma.currentPage = outputPage;
          const existing = [...outputPage.children];
          for (const n of existing) n.remove();
          const templatePage = figma.root.children.find((p) => p.name === "_Templates_Videotitle");
          if (templatePage) yield templatePage.loadAsync();
          const FRAME_TYPES = [
            { key: "introducing", label: "INTRODUCING" },
            { key: "logo", label: "PRODUCT LOGO" },
            { key: "lockup", label: "LOCK-UP" },
            { key: "usp1", label: "USP 01" },
            { key: "usp2", label: "USP 02" },
            { key: "usp3", label: "USP 03" },
            { key: "usp4", label: "USP 04" },
            { key: "usp5", label: "USP 05" },
            { key: "usp6", label: "USP 06" }
          ];
          const W16 = 3200, H16 = 1800;
          const W9 = 1800, H9 = 3200;
          const COL_GAP = 300;
          const LANG_GAP = 600;
          const ROW_GAP = 400;
          const COL_W = W16 + COL_GAP + W9;
          const ROW_H = Math.max(H16, H9);
          const LABEL_W = 700;
          const logoTypes = FRAME_TYPES.filter((ft) => ft.key === "logo").length;
          const nonLogoTypes = FRAME_TYPES.length - logoTypes;
          const total = nonLogoTypes * languages.length * 2 + logoTypes * 2;
          let current = 0;
          const labelFont = yield loadMarshallFont();
          const COL_HEADER_Y = -500;
          for (let li = 0; li < languages.length; li++) {
            const lang = languages[li];
            const langCode = (_a = LANG_CODE[lang]) != null ? _a : lang.slice(0, 2).toUpperCase();
            const colX = LABEL_W + li * (COL_W + LANG_GAP);
            const colHeader = figma.createText();
            colHeader.fontName = labelFont;
            colHeader.fontSize = 160;
            colHeader.lineHeight = { value: 110, unit: "PERCENT" };
            colHeader.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
            colHeader.textAlignHorizontal = "LEFT";
            colHeader.textAutoResize = "HEIGHT";
            colHeader.resize(COL_W, 200);
            colHeader.characters = langCode;
            colHeader.textAutoResize = "HEIGHT";
            colHeader.x = colX;
            colHeader.y = COL_HEADER_Y;
            outputPage.appendChild(colHeader);
          }
          for (let ri = 0; ri < FRAME_TYPES.length; ri++) {
            const ft = FRAME_TYPES[ri];
            const rowY = ri * (ROW_H + ROW_GAP);
            if (ft.key !== "introducing") {
              const labelText = figma.createText();
              labelText.fontName = labelFont;
              labelText.fontSize = 120;
              labelText.lineHeight = { value: 110, unit: "PERCENT" };
              labelText.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
              labelText.textAlignHorizontal = "RIGHT";
              labelText.textAutoResize = "HEIGHT";
              labelText.resize(LABEL_W - 80, 400);
              labelText.characters = ft.label;
              labelText.textAutoResize = "HEIGHT";
              labelText.x = 0;
              labelText.y = rowY + Math.round((ROW_H - labelText.height) / 2);
              outputPage.appendChild(labelText);
            }
            const langsForRow = ft.key === "logo" ? languages.filter((l) => l === "English") : languages;
            for (let li = 0; li < langsForRow.length; li++) {
              const lang = langsForRow[li];
              const colX = LABEL_W + li * (COL_W + LANG_GAP);
              let mainText = "";
              let subText = "";
              const itemName = stripColor((_e = (_d = (_b = copyMap["Item name"]) == null ? void 0 : _b[lang]) != null ? _d : (_c = copyMap["Item name"]) == null ? void 0 : _c["English"]) != null ? _e : "PRODUCT NAME");
              const tagline = (_i = (_h = (_f = copyMap["Tagline"]) == null ? void 0 : _f[lang]) != null ? _h : (_g = copyMap["Tagline"]) == null ? void 0 : _g["English"]) != null ? _i : "";
              switch (ft.key) {
                case "introducing":
                  mainText = (_j = INTRODUCING[lang]) != null ? _j : "INTRODUCING";
                  break;
                case "logo":
                  mainText = itemName;
                  break;
                case "lockup":
                  mainText = itemName;
                  subText = tagline;
                  break;
                case "usp1":
                  mainText = (_n = (_m = (_k = copyMap["1 Key Selling Point Title"]) == null ? void 0 : _k[lang]) != null ? _m : (_l = copyMap["1 Key Selling Point Title"]) == null ? void 0 : _l["English"]) != null ? _n : "";
                  break;
                case "usp2":
                  mainText = (_r = (_q = (_o = copyMap["2 Key Selling Point Title"]) == null ? void 0 : _o[lang]) != null ? _q : (_p = copyMap["2 Key Selling Point Title"]) == null ? void 0 : _p["English"]) != null ? _r : "";
                  break;
                case "usp3":
                  mainText = (_v = (_u = (_s = copyMap["3 Key Selling Point Title"]) == null ? void 0 : _s[lang]) != null ? _u : (_t = copyMap["3 Key Selling Point Title"]) == null ? void 0 : _t["English"]) != null ? _v : "";
                  break;
                case "usp4":
                  mainText = (_z = (_y = (_w = copyMap["4 Key Selling Point Title"]) == null ? void 0 : _w[lang]) != null ? _y : (_x = copyMap["4 Key Selling Point Title"]) == null ? void 0 : _x["English"]) != null ? _z : "";
                  break;
                case "usp5":
                  mainText = (_D = (_C = (_A = copyMap["5 Key Selling Point Title"]) == null ? void 0 : _A[lang]) != null ? _C : (_B = copyMap["5 Key Selling Point Title"]) == null ? void 0 : _B["English"]) != null ? _D : "";
                  break;
                case "usp6":
                  mainText = (_H = (_G = (_E = copyMap["6 Key Selling Point Title"]) == null ? void 0 : _E[lang]) != null ? _G : (_F = copyMap["6 Key Selling Point Title"]) == null ? void 0 : _F["English"]) != null ? _H : "";
                  break;
              }
              if (!mainText) continue;
              send({ type: "GENERATION_PROGRESS", current: ++current, total, label: `${ft.label} \xB7 ${lang}` });
              const langCode = (_I = LANG_CODE[lang]) != null ? _I : lang.slice(0, 2).toUpperCase();
              const y16 = rowY + Math.round((ROW_H - H16) / 2);
              let f16 = null;
              if (templatePage) {
                f16 = yield cloneVtFrameFromTemplate(templatePage, outputPage, ft.key, langCode, mainText, subText, W16, H16, colX, y16);
              }
              if (!f16) {
                f16 = yield generateVtFrame(outputPage, ft.key, mainText, subText, lang, W16, H16, colX, y16, campaignName);
              }
              const y9 = rowY + Math.round((ROW_H - H9) / 2);
              let f9 = null;
              if (templatePage) {
                f9 = yield cloneVtFrameFromTemplate(templatePage, outputPage, ft.key, langCode, mainText, subText, W9, H9, colX + W16 + COL_GAP, y9);
              }
              if (!f9) {
                f9 = yield generateVtFrame(outputPage, ft.key, mainText, subText, lang, W9, H9, colX + W16 + COL_GAP, y9, campaignName);
              }
              current++;
            }
          }
          figma.viewport.scrollAndZoomIntoView(outputPage.children);
          send({ type: "GENERATION_COMPLETE", frameCount: total, pageName: campaignName });
        });
      }
      function findPdpTemplatePage() {
        var _a, _b, _c;
        return (_c = (_b = (_a = figma.root.children.find((p) => p.name === "_Templates_BrandstorePDP")) != null ? _a : figma.root.children.find((p) => p.name === "_Templates_PDP")) != null ? _b : figma.root.children.find((p) => p.name === "_Templates_Amazon")) != null ? _c : figma.root.children.find((p) => p.name === "_Templates_Amazon correct");
      }
      function slideIdFromName(name) {
        const m = name.match(/^(?:generic|[A-Z]{2})\/(\d{2})/);
        return m ? m[1] : null;
      }
      function handleCreatePdpComponents(campaignName) {
        return __async(this, null, function* () {
          const srcPage = findPdpTemplatePage();
          if (!srcPage) {
            send({ type: "GENERATION_ERROR", message: 'Template page "_Templates_PDP" (or "_Templates_Amazon") not found.' });
            return;
          }
          yield srcPage.loadAsync();
          const outName = "\u{1F7E2} " + campaignName;
          let outPage = figma.root.children.find((p) => p.name === outName);
          if (!outPage) {
            outPage = figma.createPage();
            outPage.name = outName;
          } else {
            yield outPage.loadAsync();
            for (const c of [...outPage.children]) c.remove();
          }
          yield figma.setCurrentPageAsync(outPage);
          const srcChildren = [...srcPage.children];
          const total = srcChildren.length;
          let progress = 0;
          const masters = [];
          for (const child of srcChildren) {
            progress++;
            send({ type: "GENERATION_PROGRESS", current: progress, total, label: `Setting up "${child.name.slice(0, 24)}"` });
            const isSourceFrame = /^(generic|[A-Z]{2})\//.test(child.name);
            const isSection1 = child.name === "Section 1";
            const isLegend = child.type === "TEXT";
            if (isSection1 || isLegend) continue;
            const clone = child.clone();
            outPage.appendChild(clone);
            if (isSourceFrame && clone.type === "FRAME") {
              const comp = figma.createComponentFromNode(clone);
              masters.push(comp);
            }
          }
          figma.viewport.scrollAndZoomIntoView(outPage.children);
          send({ type: "PDP_COMPONENTS_READY", pageName: outName, componentCount: masters.length });
        });
      }
      function handleInspectPdp() {
        return __async(this, null, function* () {
          const srcPage = findPdpTemplatePage();
          if (!srcPage) {
            send({ type: "PDP_INSPECTION", text: "Template page not found." });
            return;
          }
          yield srcPage.loadAsync();
          const lines = [];
          const sources = srcPage.children.filter((n) => /^(generic|EN)\//.test(n.name)).sort((a, b) => a.x - b.x);
          lines.push(`SOURCE FRAMES (${sources.length}):`);
          for (const s of sources) lines.push(`  "${s.name}" @x=${Math.round(s.x)}`);
          const sec = srcPage.children.find((n) => n.name === "Section 1" && n.type === "SECTION");
          if (!sec) {
            lines.push('\nNo "Section 1" found.');
            send({ type: "PDP_INSPECTION", text: lines.join("\n") });
            return;
          }
          lines.push(`
SECTION 1: ${sec.children.length} children, origin x=${Math.round(sec.x)} y=${Math.round(sec.y)}`);
          const labels = sec.children.filter((c) => c.type === "TEXT");
          const frames = sec.children.filter((c) => c.type === "FRAME" || c.type === "INSTANCE" || c.type === "COMPONENT");
          lines.push(`
GROUP LABELS (${labels.length}):`);
          for (const t of labels.sort((a, b) => a.y - b.y || a.x - b.x)) {
            lines.push(`  y=${Math.round(t.y)} x=${Math.round(t.x)} :: "${t.characters.replace(/\n/g, " ").slice(0, 60)}"`);
          }
          const rows = [];
          for (const f of frames.sort((a, b) => a.y - b.y || a.x - b.x)) {
            const fy = f.y;
            let row = rows.find((r) => Math.abs(r.y - fy) < 200);
            if (!row) {
              row = { y: fy, items: [] };
              rows.push(row);
            }
            row.items.push(f);
          }
          lines.push(`
FRAME ROWS (${rows.length}):`);
          for (const row of rows) {
            const names = row.items.map((i) => i.name.slice(0, 22)).join(" | ");
            lines.push(`  y=${Math.round(row.y)} (${row.items.length}): ${names.slice(0, 200)}`);
          }
          send({ type: "PDP_INSPECTION", text: lines.join("\n") });
        });
      }
      function handleGeneratePdp(payload) {
        return __async(this, null, function* () {
          const { campaignName, copyMap } = payload;
          let step = "init";
          try {
            let translateManual2 = function(englishText, lang) {
              var _a, _b, _c;
              const n = norm(englishText);
              let key = (_a = manualKeyByEnglish[n]) != null ? _a : manualKeyByEnglish[n.slice(0, 40)];
              if (!key) return null;
              return (_c = (_b = copyMap[key]) == null ? void 0 : _b[lang]) != null ? _c : null;
            }, applyTreatment2 = function(inst, t) {
              if (t.regular !== null) {
                const reg = inst.findOne((n) => n.name === "Regular version");
                if (reg && "visible" in reg) {
                  try {
                    reg.visible = t.regular;
                  } catch (e) {
                  }
                }
              }
              if (t.withoutCopy !== null) {
                const woc = inst.findOne((n) => n.name === "Version without copy");
                if (woc && "visible" in woc) {
                  try {
                    woc.visible = t.withoutCopy;
                  } catch (e) {
                  }
                }
              }
              if (t.shadow !== null) {
                const shadows = inst.findAll((n) => n.name.toLowerCase().includes("shadow"));
                for (const s of shadows) {
                  if ("visible" in s) {
                    try {
                      s.visible = t.shadow;
                    } catch (e) {
                    }
                  }
                }
              }
            };
            var translateManual = translateManual2, applyTreatment = applyTreatment2;
            step = "find template page";
            const srcPage = findPdpTemplatePage();
            if (!srcPage) {
              send({ type: "GENERATION_ERROR", message: 'Template page "_Templates_PDP" (or "_Templates_Amazon") not found.' });
              return;
            }
            yield srcPage.loadAsync();
            const outName = "\u{1F7E2} " + campaignName;
            const outPage = figma.root.children.find((p) => p.name === outName);
            if (!outPage) {
              send({ type: "GENERATION_ERROR", message: 'Run "Create components" first \u2014 campaign page not found.' });
              return;
            }
            yield outPage.loadAsync();
            yield figma.setCurrentPageAsync(outPage);
            step = "build master map";
            const masterMap = {};
            for (const node of outPage.children) {
              if (node.type !== "COMPONENT") continue;
              const sid = slideIdFromName(node.name);
              if (sid) masterMap[sid] = node;
            }
            if (Object.keys(masterMap).length === 0) {
              send({ type: "GENERATION_ERROR", message: 'No master components found on the campaign page. Re-run "Create components".' });
              return;
            }
            const kspMap = {};
            for (const node of srcPage.children) {
              const m = node.name.match(/^(?:generic|[A-Z]{2})\/(\d{2})\.(?:main|shading|clean|bestbuy)\.ksp(\d+)/i);
              if (m) kspMap[m[1]] = parseInt(m[2]);
            }
            const LANG_MAP = {
              EN: "English",
              DE: "German",
              ES: "Spanish",
              FR: "French",
              IT: "Italian",
              CN: "Chinese",
              JP: "Japanese",
              KO: "Korean",
              NL: "Dutch",
              SE: "Swedish"
            };
            const norm = (s) => s.replace(/\s+/g, " ").trim().toLowerCase();
            const manualKeyByEnglish = {};
            for (const [field, langs] of Object.entries(copyMap || {})) {
              const en = langs["English"];
              if (en) manualKeyByEnglish[norm(en)] = field;
              manualKeyByEnglish[norm(field)] = field;
            }
            function setText(node, value) {
              return __async(this, null, function* () {
                try {
                  yield figma.loadFontAsync(node.fontName);
                } catch (e) {
                }
                try {
                  node.characters = value;
                } catch (e) {
                }
              });
            }
            function injectText(inst, slideId, langCode) {
              return __async(this, null, function* () {
                var _a, _b, _c, _d, _e, _f;
                if (langCode === "EN") return;
                const lang = (_a = LANG_MAP[langCode]) != null ? _a : "English";
                const scope = (_b = inst.findOne((n) => n.name === "Regular version")) != null ? _b : inst;
                const kspNum = kspMap[slideId];
                if (kspNum) {
                  const hl = (_c = copyMap[`${kspNum} Key Selling Point Title`]) == null ? void 0 : _c[lang];
                  const bod = (_f = (_d = copyMap[`${kspNum} Key Selling Point Medium`]) == null ? void 0 : _d[lang]) != null ? _f : (_e = copyMap[`${kspNum} Key Selling Point Short`]) == null ? void 0 : _e[lang];
                  const hn = scope.findOne((n) => n.type === "TEXT" && (n.name === "Headline" || n.name === "Hedline"));
                  const bn = scope.findOne((n) => n.type === "TEXT" && n.name === "Body");
                  if (hn && hl) yield setText(hn, hl);
                  if (bn && bod) yield setText(bn, bod);
                }
                const texts = scope.findAll((n) => n.type === "TEXT");
                for (const t of texts) {
                  if (t.name === "Headline" || t.name === "Hedline" || t.name === "Body") continue;
                  const english = t.characters;
                  if (!english.trim()) continue;
                  const translated = translateManual2(english, lang);
                  if (translated) yield setText(t, translated);
                }
              });
            }
            step = "find blueprint section";
            const blueprintSection = srcPage.children.find((n) => n.name === "Section 1" && n.type === "SECTION");
            if (!blueprintSection) {
              send({ type: "GENERATION_ERROR", message: '"Section 1" not found in template.' });
              return;
            }
            step = "snapshot blueprint frames";
            const snaps = [];
            for (const bp of blueprintSection.children) {
              if (bp.type !== "FRAME" && bp.type !== "INSTANCE" && bp.type !== "COMPONENT") continue;
              const container = bp;
              const reg = container.findOne((n) => n.name === "Regular version");
              const woc = container.findOne((n) => n.name === "Version without copy");
              const regVis = reg && "visible" in reg ? reg.visible : null;
              const wocVis = woc && "visible" in woc ? woc.visible : null;
              let shadowVis = null;
              const visibleVersion = woc && wocVis ? woc : reg && regVis ? reg : null;
              if (visibleVersion && "findOne" in visibleVersion) {
                const sh = visibleVersion.findOne((n) => n.name.toLowerCase().includes("shadow"));
                if (sh && "visible" in sh) shadowVis = sh.visible;
              }
              snaps.push({
                name: bp.name,
                x: bp.x,
                y: bp.y,
                treatment: { regular: regVis, withoutCopy: wocVis, shadow: shadowVis }
              });
            }
            step = "snapshot section geometry";
            const secX = blueprintSection.x, secY = blueprintSection.y;
            const secW = blueprintSection.width, secH = blueprintSection.height;
            const secFills = blueprintSection.fills;
            const labelNodes = blueprintSection.children.filter((c) => c.type === "TEXT");
            step = "remove previous section";
            const prev = outPage.children.find((n) => n.name === "Section 1" && n.type === "SECTION");
            if (prev) prev.remove();
            step = "create section";
            const section = figma.createSection();
            section.name = "Section 1";
            outPage.appendChild(section);
            section.x = secX;
            section.y = secY;
            try {
              section.resizeWithoutConstraints(secW, secH);
            } catch (e) {
              step = "resize section: " + e.message;
            }
            try {
              if (secFills !== figma.mixed) section.fills = secFills;
            } catch (e) {
            }
            step = "clone labels";
            for (const lbl of labelNodes) {
              try {
                const lx = lbl.x, ly = lbl.y;
                const clone = lbl.clone();
                section.appendChild(clone);
                clone.x = lx;
                clone.y = ly;
              } catch (e) {
              }
            }
            const total = snaps.length;
            let progress = 0;
            let built = 0;
            for (const snap of snaps) {
              progress++;
              const mLang = snap.name.match(/^([A-Z]{2})\/(\d{2})/);
              const mNoLang = snap.name.match(/^(\d{2})/);
              const langCode = mLang ? mLang[1] : "EN";
              const slideId = mLang ? mLang[2] : mNoLang ? mNoLang[1] : null;
              if (!slideId) continue;
              const master = masterMap[slideId];
              if (!master) continue;
              step = `instance ${snap.name.slice(0, 20)} (create)`;
              const inst = master.createInstance();
              step = `instance ${snap.name.slice(0, 20)} (append)`;
              section.appendChild(inst);
              inst.x = snap.x;
              inst.y = snap.y;
              inst.name = snap.name;
              step = `instance ${snap.name.slice(0, 20)} (treatment)`;
              applyTreatment2(inst, snap.treatment);
              step = `instance ${snap.name.slice(0, 20)} (text)`;
              try {
                yield injectText(inst, slideId, langCode);
              } catch (e) {
              }
              built++;
              if (progress % 5 === 0 || progress === total) {
                send({ type: "GENERATION_PROGRESS", current: progress, total, label: `${snap.name.slice(0, 22)}` });
              }
            }
            step = "finalize";
            figma.viewport.scrollAndZoomIntoView(outPage.children);
            send({ type: "GENERATION_COMPLETE", frameCount: built, pageName: outName });
          } catch (err) {
            const message = err instanceof Error ? err.message : String(err);
            send({ type: "GENERATION_ERROR", message: `Failed at step [${step}]: ${message}` });
          }
        });
      }
      var GIF_ROW_THRESHOLD = 50;
      function handleExportGifRows() {
        return __async(this, null, function* () {
          const selection = figma.currentPage.selection;
          if (selection.length === 0) {
            return send({ type: "GIF_ERROR", message: "Select a section in Figma first." });
          }
          const node = selection[0];
          if (node.type !== "SECTION" && node.type !== "FRAME" && node.type !== "GROUP") {
            return send({ type: "GIF_ERROR", message: "Select a section, frame or group." });
          }
          const container = node;
          const SKIP_NAMES = /COPY\s*BRIEF|DESIGN\s*BRIEF|BRIEF|PHASE|INFO/i;
          const frames = container.children.filter((c) => {
            if (c.type !== "FRAME" && c.type !== "COMPONENT") return false;
            if (SKIP_NAMES.test(c.name)) return false;
            return true;
          }).map((c) => ({ id: c.id, name: c.name, x: c.x, y: c.y, width: c.width, height: c.height }));
          if (frames.length === 0) {
            return send({ type: "GIF_ERROR", message: "No frames found in the selected section." });
          }
          frames.sort((a, b) => a.y - b.y || a.x - b.x);
          const rowGroups = [];
          let currentRow = [frames[0]];
          let rowBaseY = frames[0].y;
          for (let i = 1; i < frames.length; i++) {
            const f = frames[i];
            if (Math.abs(f.y - rowBaseY) <= GIF_ROW_THRESHOLD) {
              currentRow.push(f);
            } else {
              rowGroups.push(currentRow);
              currentRow = [f];
              rowBaseY = f.y;
            }
          }
          rowGroups.push(currentRow);
          function deriveLabel(rowFrames, idx) {
            const parts = rowFrames[0].name.split("_");
            const suffix = parts[parts.length - 1];
            if (/^[A-Z]{2,4}$/.test(suffix)) return suffix;
            return `row-${idx + 1}`;
          }
          const exportedRows = yield Promise.all(
            rowGroups.map((rowFrames, idx) => __async(this, null, function* () {
              return {
                label: deriveLabel(rowFrames, idx),
                frames: yield Promise.all(
                  rowFrames.map((f) => __async(this, null, function* () {
                    const frameNode = figma.getNodeById(f.id);
                    const bytes = yield frameNode.exportAsync({ format: "PNG", constraint: { type: "SCALE", value: 1 } });
                    return { name: f.name, width: f.width, height: f.height, bytes: Array.from(bytes) };
                  }))
                )
              };
            }))
          );
          send({ type: "GIF_ROWS_READY", rows: exportedRows, sectionName: node.name });
        });
      }
    }
  });
  require_main();
})();
