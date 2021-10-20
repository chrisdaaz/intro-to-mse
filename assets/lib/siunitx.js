MathJax.Extension["TeX/siunitx"] = { version: "0.1.0" }, MathJax.Hub.Register.StartupHook("TeX Jax Ready", function() {
    ! function() {
        var a, b, c, d, e, f, g, h;
        a = function() { var a = {},
                b = MathJax.InputJax.TeX,
                c = a.ValidationError = MathJax.Object.Subclass({ Init: function(a, b, c, d) { this._errormsg = 'ValidationError: Error validating "' + b + '" of "' + a.constructor + '" (a "' + c + '") to "' + d + '": '; for (var e = 4; e < arguments.length; ++e) this._errormsg += arguments[e].toString();
                        console.log(this._errormsg) }, toString: function() { return this._errormsg } }),
                d = a.ValidationBase = MathJax.Object.Subclass({ PropertyDescriptor: function(a, b) { var c = this; return { get: function() { return c.Get(this, b) }, set: function(a) { c.Set(this, b, a) } } }, Get: function(a, b) { var c = a._values[b]; return void 0 !== c ? c : this._default }, Set: function(a, b, c) { a._values[b] = this.Validate(a, b, c) }, Validate: function(a, b, c) { return c } }),
                e = a.Choice = d.Subclass({ Init: function() { this._default = arguments[0]; for (var a = {}, b = 0; b < arguments.length; b++) a[arguments[b]] = !0;
                        this._choices = a }, Validate: function(a, b, d) { if (!this._choices.hasOwnProperty(d)) throw c(a, b, this, d, 'must be one of ["' + Object.getOwnPropertyNames(this._choices).join('", "') + '"]'); return d } }),
                f = (a.SwitchChoice = e.Subclass({ Init: function() { this._switchchoice = arguments[1], e.prototype.Init.apply(this, arguments) }, Validate: function(a, b, c) { return void 0 === c && (c = this._switchchoice), e.prototype.Validate.call(this, a, b, c) } }), a.Integer = d.Subclass({ Init: function(a) { void 0 === a && (a = 0), this._default = a }, Validate: function(a, b, d) { if (d = parseInt(d), !Number.isInteger(d)) throw c(a, b, this, d, "must be an integer"); return d } }), a.Literal = d.Subclass({ Init: function(a) { this._default = a }, Validate: function(a, b, c) { return c } }));
            a.TeXParsedLiteral = f.Subclass({ Init: function(a) { this._default = a }, Get: function(a, c) { return val = arguments.callee.SUPER.Get.call(this, a, c), b.Parse("\\text{" + val + "}").mml() } }), a.Math = f.Subclass({}), a.Length = d.Subclass({ Init: function(a) { this._default = a }, Validate: function(a, b, c) { return c } }), a.Macro = d.Subclass({ Init: function(a) { this._default = a }, Validate: function(a, b, c) { return c } }), a.Switch = d.Subclass({ Init: function(a) { void 0 === a && (a = !1), this._default = a }, Validate: function(a, b, d) { if (void 0 === d && (d = !0), ("string" == typeof d || d instanceof String) && (d = d.toLowerCase(), "true" == d ? d = !0 : "false" == d && (d = !1)), d !== !0 && d !== !1) throw c(a, b, this, d, "must be a boolean"); return d } }), a.ConfigData = MathJax.Object.Subclass({ Init: function(a) { this._values = {}, void 0 != a && this.SetMany(a) }, Set: function(a, b) { if (void 0 === this._options[a]) throw TypeError(this.constructor + ' has no attribute named "' + a + '"');
                    this[a] = b }, SetMany: function(a) { for (var b in a) this.Set(b, a[b]) }, Derived: function(a) { var b = this.constructor(); return b._values.__proto__ = this._values.__proto__, void 0 != a && b.SetMany(a), b }, listSettings: function(a, b) { void 0 === b && (b = ",\n"); var c = []; for (var d in this._options) a && !this._values.hasOwnProperty(d) || c.push(d + " = " + this[d]); return c.join(b) } }, { Define: function(a) { var b = this.Subclass({ _options: a });
                    b.ParseOptions = this.ParseOptions; for (var c in a) Object.defineProperty(b.prototype, c, a[c].PropertyDescriptor(b, c)); return b }, ParseOptions: function(a) { var c = {}; if (a = a.trim(), !a) return this(c); for (var d = a.split(","), e = 0, f = d.length; e < f; ++e) { var g = d[e].split("="),
                            h = g[0].trim(); if (h || b.Error('Empty key in "' + a + '"'), g.length < 2) c[h] = void 0;
                        else { for (var i = g.slice(1).join("="), j = 0, k = -1;;) { for (;;) { var l = k + 1,
                                        m = i.indexOf("{", l),
                                        n = i.indexOf("}", l); if (k = n >= 0 && (n < m || m == -1) ? n : m, k < 0) break;
                                    k > 0 && "\\" == i[k - 1] || ("}" == i[k] ? (j--, j < 0 && b.Error('Too many closing braces in "' + a + '"')) : j++) } if (!j) break;
                                k = i.length, e++, e >= f && b.Error('Not enough closing braces in "' + a + '"'), i += "," + d[e] }
                            i = i.trim(), "{" == i[0] && "}" == i[i.length - 1] && (i = i.slice(1, -1)), c[h] = i } } return this(c) } }); return a }(), b = function(a) { var b = a.ConfigData,
                c = a.Switch,
                d = a.SwitchChoice,
                e = a.Choice,
                f = a.Literal,
                g = a.Macro,
                h = a.Integer,
                i = a.Math,
                j = a.TeXParsedLiteral,
                k = b.Define({ "detect-display-math": c(), "detect-family": c(), "detect-inline-family": e("text", "math"), "detect-inline-weight": e("text", "math"), "detect-mode": c(), "detect-shape": c(), "detect-weight": c(), color: f(""), "math-rm": g("\\mathrm"), "math-sf": g("\\mathsf"), "math-tt": g("\\mathtt"), mode: e("math", "text"), "text-rm": g("\\rmfamily"), "text-sf": g("\\sffamily"), "text-tt": g("\\ttfamily"), "unit-color": f(""), "unit-math-rm": g("\\mathrm"), "unit-math-sf": g("\\mathsf"), "unit-math-tt": g("\\mathtt"), "unit-mode": e("math", "text"), "unit-text-rm": g("\\rmfamily"), "unit-text-sf": g("\\sffamily"), "unit-text-tt": g("\\ttfamily"), "number-color": f(""), "number-math-rm": g("\\mathrm"), "number-math-sf": g("\\mathsf"), "number-math-tt": g("\\mathtt"), "number-mode": e("math", "text"), "number-text-rm": g("\\rmfamily"), "number-text-sf": g("\\sffamily"), "number-text-tt": g("\\ttfamily"), "input-close-uncertainty": f(")"), "input-comparators": f("<=>\\approx\\ge\\geq\\gg\\le\\leq\\ll\\sim"), "input-complex-roots": f("ij"), "input-decimal-markers": f(",."), "input-digits": f("0123456789"), "input-exponent-markers": f("dDeE"), "input-ignore": f(""), "input-open-uncertainty": f("("), "input-protect-tokens": f("\\approx\\dots\\ge\\geq\\gg\\le\\leq\\ll\\mp\\pi\\pm\\sim"), "input-signs": f("+-\\pm\\mp"), "input-uncertainty-signs": f("\\pm"), "input-symbols": f("\\pi\\dots"), "parse-numbers": c(!0), "add-decimal-zero": c(!0), "add-integer-zero": c(!0), "explicit-sign": f(""), "fixed-exponent": h(), "minimum-integer-digits": h(), "omit-uncertainty": c(), "retain-explicit-plus": c(), "retain-unity-mantissa": c(!0), "retain-zero-exponent": c(), "round-half": e("up", "even"), "round-integer-to-decimal": c(), "round-minimum": f("0"), "round-mode": e("off", "figures", "places"), "round-precision": h(2), "scientific-notation": d("false", "true", "fixed", "engineering"), "zero-decimal-to-integer": c(), "bracket-negative-numbers": c(), "bracket-numbers": c(!0), "close-bracket": f(")"), "complex-root-position": e("after-number", "before-number"), "copy-complex-root": c(!1), "copy-decimal-marker": c(!1), "exponent-base": f("10"), "exponent-product": i("\\times"), "group-digits": e("true", "false", "decimal", "integer"), "group-minimum-digits": h(5), "group-separator": f("\\,"), "negative-color": f(""), "open-bracket": f("("), "output-close-uncertainty": f(")"), "output-complex-root": f("\\mathrm{i}"), "output-decimal-marker": f("."), "output-exponent-marker": f(""), "output-open-uncertainty": f("("), "separate-uncertainty": c(!1), "tight-spacing": c(!1), "uncertainty-separator": f(""), "fraction-function": g("\\frac"), "input-product": f("x"), "input-quotient": f("/"), "output-product": i("\\times"), "output-quotient": f("/"), "quotient-mode": e("symbol", "fraction"), "list-final-separator": f(" and "), "list-pair-separator": f(" and "), "list-separator": f(", "), "range-phrase": j(" to "), "add-arc-degree-zero": c(!1), "add-arc-minute-zero": c(!1), "add-arc-second-zero": c(!1), "angle-symbol-over-decimal": c(!1), "arc-separator": f(!1), "number-angle-product": f(""), "free-standing-units": c(!1), "overwrite-functions": c(!1), "space-before-unit": c(!1), "unit-optional-argument": c(!1), "use-xspace": c(!1), abbreviations: c(!0), "binary-units": c(), "bracket-unit-denominator": c(!0), "forbid-literal-units": c(!1), "literal-superscript-as-power": c(!0), "inter-unit-product": f("\\,"), "parse-units": c(!0), "per-mode": e("reciprocal", "reciprocal-positive-first", "symbol", "repeated-symbol", "fraction", "symbol-or-fraction"), "per-symbol": f("/"), "power-font": e("number", "unit"), "prefixes-as-symbols": c(!0), "qualifier-mode": e("subscript", "brackets", "phrase", "space", "text"), "sticky-per": c(!1), "allow-number-unit-breaks": c(!1), "exponent-to-prefix": c(!1), "list-units": e("repeat", "brackets", "single"), "multi-part-units": e("brackets", "repeat", "single"), "number-unit-product": f("\\,"), "product-units": e("repeat", "brackets", "brackets-power", "power", "single"), "range-units": e("repeat", "brackets", "single") }); return k }(a), c = function() {
            function a(a, b) { var c = []; for (var d in b) { var e = b[d];
                    c.push({ name: d, category: a, symbol: e[0], abbrev: e[1] }) } return c }

            function b(a) { var b = k[a],
                    c = ""; if (void 0 === b) { if (b = k[a.slice(1)], void 0 === b) return void console.log("cannot parse abbreviation", a); if (c = j[a[0]], void 0 === c) return void console.log("cannot parse prefix ", a[0], " on unit ", b, " (", a, ")");
                    c = "\\" + c } return c += "\\" + b } var c = {},
                d = MathJax.ElementJax.mml,
                e = c.UNITSMACROS = { per: ["Per", -1], square: ["PowerPfx", 2], cubic: ["PowerPfx", 3], raiseto: ["PowerPfx", void 0], squared: ["PowerSfx", 2], cubed: ["PowerSfx", 3], tothe: ["PowerSfx", void 0], meter: ["Macro", "\\metre"], deka: ["Macro", "\\deca"], celsius: ["Macro", "\\degreeCelsius"], kg: ["Macro", "\\kilogram"], amu: ["Macro", "\\atomicmassunit"], kWh: ["Macro", "\\kilo\\watt\\hour"], of: "Of", cancel: "Unsupported", highlight: "Highlight" },
                f = MathJax.Extension["TeX/siunitx"].SIPrefixes = c.SIPrefixes = function(a) { var b = {}; for (var c in a) { var d = a[c];
                        b[c] = { name: c, power: d[0], abbrev: d[1], pfx: d.length >= 3 ? d[2] : d[1] } } return b }({ yocto: [-24, "y"], zepto: [-21, "z"], atto: [-18, "a"], femto: [-15, "f"], pico: [-12, "p"], nano: [-9, "n"], micro: [-6, "u", d.entity("#x03bc")], milli: [-3, "m"], centi: [-2, "c"], deci: [-1, "d"], deca: [1, "da"], hecto: [2, "h"], kilo: [3, "k"], mega: [6, "M"], giga: [9, "G"], tera: [12, "T"], peta: [15, "P"], exa: [18, "E"], zetta: [21, "Z"], yotta: [24, "Y"] }); for (var g in f) g = f[g], e[g.name] = ["SIPrefix", g]; var h = MathJax.Extension["TeX/siunitx"].SIUnits = c.SIUnits = function(a) { var b = {}; return a.forEach(function(a) { b[a.name] = a }), b }([].concat(a("SI base", { ampere: ["A", "A"], candela: ["cd"], kelvin: ["K", "K"], kilogram: ["kg"], gram: ["g", "g"], metre: ["m", "m"], mole: ["mol", "mol"], second: ["s", "s"] }), a("coherent derived", { becquerel: ["Bq"], degreeCelsius: [d.entity("#x2103")], coulomb: ["C"], farad: ["F", "F"], gray: ["Gy"], hertz: ["Hz", "Hz"], henry: ["H"], joule: ["J", "J"], katal: ["kat"], lumen: ["lm"], lux: ["lx"], newton: ["N", "N"], ohm: [d.entity("#x03a9"), "ohm"], pascal: ["Pa", "Pa"], radian: ["rad"], siemens: ["S"], sievert: ["Sv"], steradian: ["sr"], tesla: ["T"], volt: ["V", "V"], watt: ["W", "W"], weber: ["Wb"] }), a("accepted non-SI", { day: ["d"], degree: [d.entity("#x00b0")], hectare: ["ha"], hour: ["h"], litre: ["l", "l"], liter: ["L", "L"], arcminute: [d.entity("#x2032")], minute: ["min"], arcsecond: [d.entity("#x2033")], tonne: ["t"] }), a("experimental non-SI", { astronomicalunit: ["ua"], atomicmassunit: ["u"], bohr: [d.msub(d.mi(d.chars("a")).With({ mathvariant: d.VARIANT.NORMAL }), d.mn(0))], clight: ["c0"], dalton: ["Da"], electronmass: ["me"], electronvolt: ["eV", "eV"], elementarycharge: ["e"], hartree: ["Eh"], planckbar: [d.entity("#x0127")] }), a("other non-SI", { angstrom: [d.entity("#x212b")], bar: ["bar"], barn: ["b"], bel: ["B"], decibel: ["dB", "dB"], knot: ["kn"], mmHg: ["mmHg"], nauticmile: [";"], neper: ["Np"] })));
            h.percent = { name: "percent", symbol: "%", category: "non-unit", abbrev: void 0 }; for (var i in h) i = h[i], e[i.name] = ["SIUnit", i]; var j = {}; for (var g in f) g = f[g], g.abbrev && (j[g.abbrev] = g.name); var k = {}; for (var i in h) i = h[i], i.abbrev && (k[i.abbrev] = i.name); return ["fg pg ng ug mg g", "pm nm um mm cm dm m km", "as fs ps ns us ms s", "fmol pmol nmol umol mmol mol kmol", "pA nA uA mA A kA", "ul ml l hl uL mL L hL", "mHz Hz kHz MHz GHz THz", "mN N kN MN", "Pa kPa MPa GPa", "mohm kohm Mohm", "pV nV uV mV V kV", "uW mW W kW MW GW", "J kJ", "meV eV keV MeV GeV TeV", "fF pF F", "K", "dB"].forEach(function(a) { a.split(" ").forEach(function(a) { e[a] = ["Macro", b(a)] }) }), c }(), d = function(a) { var b = MathJax.InputJax.TeX,
                c = b.Stack,
                d = c.Item,
                e = MathJax.ElementJax.mml,
                f = a.UNITSMACROS,
                g = MathJax.Extension["TeX/siunitx"].SIUnitParser = b.Parse.Subclass({ Init: function(a, b, c) { this.cur_prefix = void 0, this.cur_pfxpow = void 0, this.per_active = !1, this.has_literal = !1, this.literal_chars = "", this.units = [], this.options = b, arguments.callee.SUPER.Init.call(this, a, c) }, mml: function() { if (!this.has_literal) { var a = b.Stack({}, !0),
                                c = this.options["per-mode"],
                                f = this,
                                g = [],
                                h = [],
                                i = []; if (this.units.forEach(function(a) { var b = void 0 === a.power ? 1 : a.power;
                                    a.inverse && (b = -b), b > 0 ? h.push(a) : i.push(a), g.push(a) }), "reciprocal" !== c && i.length)
                                if ("symbol" === c)
                                    if (h.forEach(function(b) { a.Push(f.UnitMML(b)) }), a.Push(this.mmlToken(e.mo(e.chars(this.options["per-symbol"]).With({ fence: !1, stretchy: !1 })))), 1 === i.length) { var j = i[0];
                                        j.inverse = !1, a.Push(this.UnitMML(j)) } else a.Push(this.mmlToken(e.mo(e.chars("(").With({ fence: !1, stretchy: !1 })))), i.forEach(function(b) { b.inverse = !1, a.Push(f.UnitMML(b)) }), a.Push(this.mmlToken(e.mo(e.chars(")").With({ fence: !1, stretchy: !1 }))));
                            else if ("fraction" === c) { var k = b.Stack({}, !0),
                                    l = b.Stack({}, !0);
                                h.forEach(function(a) { k.Push(f.UnitMML(a)) }), i.forEach(function(a) { a.inverse = !1, l.Push(f.UnitMML(a)) }), k.Push(d.stop()), l.Push(d.stop()), a.Push(e.mfrac(k.Top().data[0], l.Top().data[0])) } else b.Error("Unimplemented per-mode " + c);
                            else g.forEach(function(b) { a.Push(f.UnitMML(b)) }); return a.Push(d.stop()), "mml" !== a.Top().type ? null : a.Top().data[0] } return "mml" !== this.stack.Top().type ? null : this.stack.Top().data[0] }, Push: function() { this.finishLiteralUnit(); for (var a = 0; a < arguments.length; a++) { var b = arguments[a];
                            b instanceof d.stop || (this.has_literal = !0), this.stack.Push.call(this.stack, b) } }, PushUnitFallBack: function() { this.stack.Push.apply(this.stack, arguments) }, csFindMacro: function(a) { this.finishLiteralUnit(); var b = f[a]; return b ? b : arguments.callee.SUPER.csFindMacro.call(this, a) }, Variable: function(a) { this.literal_chars += a }, Number: function(a) { return "." == a ? this.finishLiteralUnit() : void arguments.callee.SUPER.Number.call(this, a) }, Tilde: function(a) { this.finishLiteralUnit() }, Superscript: function(a) { this.finishLiteralUnit(), arguments.callee.SUPER.Superscript.call(this, a) }, Subscript: function(a) { this.finishLiteralUnit(), arguments.callee.SUPER.Subscript.call(this, a) }, Unsupported: function() {}, Of: function(a) { var c = this.GetArgument(a);
                        this.has_literal && b.Error(["SIunitx", "NotImplementedYet"]), this.units.length || b.Error(["SIunitx", "Qualification suffix with no unit"]); var d = this.units[this.units.length - 1];
                        void 0 !== d.power && b.Error(["SIunitx", "double qualification", d.qual, c]), d.qual = c }, Highlight: function(a) { var b = this.GetArgument(a);
                        this.cur_highlight = b }, Per: function(a) { return this.per_active ? void b.Error(["SIunitx", "double \\per"]) : void(this.per_active = !0) }, PowerPfx: function(a, c) { void 0 === c && (c = this.GetArgument(a)), this.cur_pfxpow && b.Error(["SIunitx", "double power prefix", this.cur_pfxpow, c]), this.cur_pfxpow = c }, PowerSfx: function(a, c) { void 0 === c && (c = this.GetArgument(a)), this.has_literal && b.Error(["SIunitx", "NotImplementedYet"]), this.units.length || b.Error(["SIunitx", "Power suffix with no unit"]); var d = this.units[this.units.length - 1];
                        void 0 !== d.power && b.Error(["SIunitx", "double power", d.power, c]), d.power = c }, SIPrefix: function(a, c) { this.cur_prefix && b.Error(["SIunitx", "double SI prefix", this.cur_prefix, c]), this.cur_prefix = c }, UnitMML: function(a) { var b = [];
                        a.prefix && (b = b.concat(a.prefix.pfx)), b = b.concat(a.unit.symbol); var c = "",
                            d = [];
                        b.forEach(function(a) { "string" == typeof a || a instanceof String ? c += a : (c && (d.push(e.chars(c)), c = ""), d.push(a)) }), c && d.push(e.chars(c)); var f = { mathvariant: e.VARIANT.NORMAL },
                            g = e.mi.apply(e.mi, d).With(f),
                            h = void 0 === a.power ? 1 : a.power; return a.inverse && (h = -h), 1 != h ? g = void 0 === a.qual ? e.msup(g, e.mn(h)) : e.msubsup(g, e.mtext(a.qual), e.mn(h)) : void 0 !== a.qual && (g = e.msub(g, e.mtext(a.qual))), this.mmlToken(g) }, SIUnit: function(a, b) { this.pushUnit(b) }, finishLiteralUnit: function() { this.literal_chars && (this.pushUnit({ symbol: this.literal_chars, name: void 0, category: "literal", abbrev: this.literal_chars }), this.literal_chars = "") }, pushUnit: function(a) { this.units.push({ unit: a, prefix: this.cur_prefix, power: this.cur_pfxpow, inverse: this.per_active, qual: void 0 }); var b = [];
                        this.cur_prefix && (b = b.concat(this.cur_prefix.pfx)), b = b.concat(a.symbol); var c = "",
                            d = [];
                        b.forEach(function(a) { "string" == typeof a || a instanceof String ? c += a : (c && (d.push(e.chars(c)), c = ""), d.push(a)) }), c && d.push(e.chars(c)); var f = { mathvariant: e.VARIANT.NORMAL };
                        this.PushUnitFallBack(this.mmlToken(e.mi.apply(e.mi, d).With(f))), this.cur_prefix = void 0, this.cur_pfxpow = void 0, this.options["sticky-per"] || (this.per_active = !1) } }); return g }(c), e = function() { "use strict";

            function a(a, b) {
                function c() { this.constructor = a }
                c.prototype = b.prototype, a.prototype = new c }

            function b(a, c, d, e) { this.message = a, this.expected = c, this.found = d, this.location = e, this.name = "SyntaxError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, b) }

            function c(a) {
                function c() { return a.substring(s, r) }

                function d(b) { var c, d, e = t[b]; if (e) return e; for (c = b - 1; !t[c];) c--; for (e = t[c], e = { line: e.line, column: e.column, seenCR: e.seenCR }; c < b;) d = a.charAt(c), "\n" === d ? (e.seenCR || e.line++, e.column = 1, e.seenCR = !1) : "\r" === d || "\u2028" === d || "\u2029" === d ? (e.line++, e.column = 1, e.seenCR = !0) : (e.column++, e.seenCR = !1), c++; return t[b] = e, e }

                function e(a, b) { var c = d(a),
                        e = d(b); return { start: { offset: a, line: c.line, column: c.column }, end: { offset: b, line: e.line, column: e.column } } }

                function f(a) { r < u || (r > u && (u = r, v = []), v.push(a)) }

                function g(a, c, d, e) {
                    function f(a) { var b = 1; for (a.sort(function(a, b) { return a.description < b.description ? -1 : a.description > b.description ? 1 : 0 }); b < a.length;) a[b - 1] === a[b] ? a.splice(b, 1) : b++ }

                    function g(a, b) {
                        function c(a) {
                            function b(a) { return a.charCodeAt(0).toString(16).toUpperCase() } return a.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(a) { return "\\x0" + b(a) }).replace(/[\x10-\x1F\x80-\xFF]/g, function(a) { return "\\x" + b(a) }).replace(/[\u0100-\u0FFF]/g, function(a) { return "\\u0" + b(a) }).replace(/[\u1000-\uFFFF]/g, function(a) { return "\\u" + b(a) }) } var d, e, f, g = new Array(a.length); for (f = 0; f < a.length; f++) g[f] = a[f].description; return d = a.length > 1 ? g.slice(0, -1).join(", ") + " or " + g[a.length - 1] : g[0], e = b ? '"' + c(b) + '"' : "end of input", "Expected " + d + " but " + e + " found." } return null !== c && f(c), new b(null !== a ? a : g(c, d), c, d, e) }

                function h(a) { var b, c = new Array(a.length); for (b = 0; b < a.length; b++) c[b] = a.charCodeAt(b) - 32; return c }

                function i(b) { for (var c, d, e = q[b], g = 0, h = [], j = e.length, k = [], l = [];;) { for (; g < j;) switch (e[g]) {
                            case 0:
                                l.push(p[e[g + 1]]), g += 2; break;
                            case 1:
                                l.push(void 0), g++; break;
                            case 2:
                                l.push(null), g++; break;
                            case 3:
                                l.push(m), g++; break;
                            case 4:
                                l.push([]), g++; break;
                            case 5:
                                l.push(r), g++; break;
                            case 6:
                                l.pop(), g++; break;
                            case 7:
                                r = l.pop(), g++; break;
                            case 8:
                                l.length -= e[g + 1], g += 2; break;
                            case 9:
                                l.splice(-2, 1), g++; break;
                            case 10:
                                l[l.length - 2].push(l.pop()), g++; break;
                            case 11:
                                l.push(l.splice(l.length - e[g + 1], e[g + 1])), g += 2; break;
                            case 12:
                                l.push(a.substring(l.pop(), r)), g++; break;
                            case 13:
                                k.push(j), h.push(g + 3 + e[g + 1] + e[g + 2]), l[l.length - 1] ? (j = g + 3 + e[g + 1], g += 3) : (j = g + 3 + e[g + 1] + e[g + 2], g += 3 + e[g + 1]); break;
                            case 14:
                                k.push(j), h.push(g + 3 + e[g + 1] + e[g + 2]), l[l.length - 1] === m ? (j = g + 3 + e[g + 1], g += 3) : (j = g + 3 + e[g + 1] + e[g + 2], g += 3 + e[g + 1]); break;
                            case 15:
                                k.push(j), h.push(g + 3 + e[g + 1] + e[g + 2]), l[l.length - 1] !== m ? (j = g + 3 + e[g + 1], g += 3) : (j = g + 3 + e[g + 1] + e[g + 2], g += 3 + e[g + 1]); break;
                            case 16:
                                l[l.length - 1] !== m ? (k.push(j), h.push(g), j = g + 2 + e[g + 1], g += 2) : g += 2 + e[g + 1]; break;
                            case 17:
                                k.push(j), h.push(g + 3 + e[g + 1] + e[g + 2]), a.length > r ? (j = g + 3 + e[g + 1], g += 3) : (j = g + 3 + e[g + 1] + e[g + 2], g += 3 + e[g + 1]); break;
                            case 18:
                                k.push(j), h.push(g + 4 + e[g + 2] + e[g + 3]), a.substr(r, p[e[g + 1]].length) === p[e[g + 1]] ? (j = g + 4 + e[g + 2], g += 4) : (j = g + 4 + e[g + 2] + e[g + 3], g += 4 + e[g + 2]); break;
                            case 19:
                                k.push(j), h.push(g + 4 + e[g + 2] + e[g + 3]), a.substr(r, p[e[g + 1]].length).toLowerCase() === p[e[g + 1]] ? (j = g + 4 + e[g + 2], g += 4) : (j = g + 4 + e[g + 2] + e[g + 3], g += 4 + e[g + 2]); break;
                            case 20:
                                k.push(j), h.push(g + 4 + e[g + 2] + e[g + 3]), p[e[g + 1]].test(a.charAt(r)) ? (j = g + 4 + e[g + 2], g += 4) : (j = g + 4 + e[g + 2] + e[g + 3], g += 4 + e[g + 2]); break;
                            case 21:
                                l.push(a.substr(r, e[g + 1])), r += e[g + 1], g += 2; break;
                            case 22:
                                l.push(p[e[g + 1]]), r += p[e[g + 1]].length, g += 2; break;
                            case 23:
                                l.push(m), 0 === w && f(p[e[g + 1]]), g += 2; break;
                            case 24:
                                s = l[l.length - 1 - e[g + 1]], g += 2; break;
                            case 25:
                                s = r, g++; break;
                            case 26:
                                for (c = e.slice(g + 4, g + 4 + e[g + 3]), d = 0; d < e[g + 3]; d++) c[d] = l[l.length - 1 - c[d]];
                                l.splice(l.length - e[g + 2], e[g + 2], p[e[g + 1]].apply(null, c)), g += 4 + e[g + 3]; break;
                            case 27:
                                l.push(i(e[g + 1])), g += 2; break;
                            case 28:
                                w++, g++; break;
                            case 29:
                                w--, g++; break;
                            default:
                                throw new Error("Invalid opcode: " + e[g] + ".") }
                        if (!(k.length > 0)) break;
                        j = k.pop(), g = h.pop() } return l[0] }

                function j(a, b) { if (b < 1) return ""; for (var c = ""; b > 1;) 1 & b && (c += a), b >>= 1, a += a; return c + a } var k, l = arguments.length > 1 ? arguments[1] : {},
                    m = {},
                    n = { start: 0 },
                    o = 0,
                    p = [function(a) { return a }, { type: "other", description: "complex root" }, function(a) { return l["input-complex-roots"].indexOf(a) >= 0 }, function(a) { return a }, { type: "other", description: "decimal marker" }, function(a) { return l["input-decimal-markers"].indexOf(a) >= 0 }, { type: "other", description: "exponent marker" }, function(a) { return l["input-exponent-markers"].indexOf(a) >= 0 }, { type: "any", description: "any character" }, function(a, b) { var c = [a]; return b.forEach(function(a) { c.push(a[1]) }), c }, "x", { type: "literal", value: "x", description: '"x"' }, function(a) { return a }, "/", { type: "literal", value: "/", description: '"/"' }, function(a, b) { return { num: a, denom: b && b[3] } }, function(a, b, c) { return b.exp = c && c[1], b.rel = a && a[0], b }, function(a, b, c) { var d = { sign: b && b[0], exp: c, rel: a && a[0] }; return d }, function(a, b) { var c = a[0] && a[0][0];
                        a = a[1], a.sign = c; var d = b && b[1]; return b = b && b[3], b && (b.sign = d), { re: a, im: b } }, function(a, b) { return b.sign = a && a[0], { re: b } }, function(a, b, c) { var d = b.frac.length,
                            e = c.frac.length; return b.frac = b.frac + j("0", Math.max(0, e - d)), c.frac = c.frac + j("0", Math.max(0, d - e)), b.uncert = c["int"] + c.frac, b.sign = a && a[0], { re: b } }, function(a, b) { return a.root = b, a }, function(a, b) { return b.root = a, b }, function(a, b) { return b.sign = a && a[0], b }, /^[+\-]/, { type: "class", value: "[+-]", description: "[+-]" }, function() { return c() }, "+-", { type: "literal", value: "+-", description: '"+-"' }, "\\pm", { type: "literal", value: "\\pm", description: '"\\\\pm"' }, function() { return "\\pm" }, "-+", { type: "literal", value: "-+", description: '"-+"' }, "\\mp", { type: "literal", value: "\\mp", description: '"\\\\mp"' }, function() { return "\\mp" }, "<<", { type: "literal", value: "<<", description: '"<<"' }, "\\ll", { type: "literal", value: "\\ll", description: '"\\\\ll"' }, function() { return "\\ll" }, "<", { type: "literal", value: "<", description: '"<"' }, function() { return "<" }, "<=", { type: "literal", value: "<=", description: '"<="' }, "\\le", { type: "literal", value: "\\le", description: '"\\\\le"' }, "q", { type: "literal", value: "q", description: '"q"' }, function() { return "\\le" }, ">>", { type: "literal", value: ">>", description: '">>"' }, "\\gg", { type: "literal", value: "\\gg", description: '"\\\\gg"' }, function() { return "\\gg" }, ">", { type: "literal", value: ">", description: '">"' }, function() { return ">" }, ">=", { type: "literal", value: ">=", description: '">="' }, "\\ge", { type: "literal", value: "\\ge", description: '"\\\\ge"' }, function() { return "\\ge" }, "(", { type: "literal", value: "(", description: '"("' }, ")", { type: "literal", value: ")", description: '")"' }, function(a, b) { return b = b && b[3], a.uncert = b, a }, { type: "other", description: "decimal" }, function(a, b) { var c = b && b[1],
                            d = b && b[2] && b[2][1]; return { "int": a, sep: c, frac: d || "" } }, function(a, b) { return { "int": "", sep: a, frac: b } }, { type: "other", description: "integer" }, function() { return parseInt(c(), 10) }, /^[0-9]/, { type: "class", value: "[0-9]", description: "[0-9]" }, function() { return c() }, { type: "other", description: "whitespace" }, /^[ \t\n\r]/, { type: "class", value: "[ \\t\\n\\r]", description: "[ \\t\\n\\r]" }],
                    q = [h("%;D/:#;%/1$;D/($8#: #!!)(#'#(\"'#&'#"), h('<%;$/<#9:" ! -""&!&#/($8":#"!!)("\'#&\'#=." 7!'), h('<%;$/<#9:% ! -""&!&#/($8":#"!!)("\'#&\'#=." 7$'), h('<%;$/<#9:\' ! -""&!&#/($8":#"!!)("\'#&\'#=." 7&'), h('1""5!7('), h('%;\'/_#$%;D/,#;&/#$+")("\'#&\'#06*%;D/,#;&/#$+")("\'#&\'#&/)$8":)""! )("\'#&\'#'), h("%2*\"\"6*7+/:#;D/1$;'/($8#:,#! )(#'#(\"'#&'#"), h('%;(/b#%;D/D#2-""6-7./5$;D/,$;(/#$+$)($\'#(#\'#("\'#&\'#." &"/)$8":/""! )("\'#&\'#'), h(";*.# &;)"), h('%%;=/,#;D/#$+")("\'#&\'#." &"/T#;+/K$%;D/,#;2/#$+")("\'#&\'#." &"/*$8#:0##"! )(#\'#("\'#&\'#'), h('%%;=/,#;D/#$+")("\'#&\'#." &"/T#%;6/,#;D/#$+")("\'#&\'#." &"/3$;2/*$8#:1##"! )(#\'#("\'#&\'#'), h(";,.) &;..# &;-"), h('%%%;6/,#;D/#$+")("\'#&\'#." &"/,#;>/#$+")("\'#&\'#/W#%;D/>#;6/5$;D/,$;//#$+$)($\'#(#\'#("\'#&\'#/)$8":2""! )("\'#&\'#'), h('%%;6/,#;D/#$+")("\'#&\'#." &"/2#;>/)$8":3""! )("\'#&\'#'), h("%%;6/,#;D/#$+\")(\"'#&'#.\" &\"/W#;?/N$;D/E$;4/<$;D/3$;?/*$8&:4&#%$ )(&'#(%'#($'#(#'#(\"'#&'#"), h(";0.# &;1"), h("%;>/;#;D/2$;!/)$8#:5#\"\" )(#'#(\"'#&'#"), h("%;!/;#;D/2$;>/)$8#:6#\"\" )(#'#(\"'#&'#"), h("%;#/\\#;D/S$%;3/,#;D/#$+\")(\"'#&'#.\" &\"/2$;?/)$8$:7$\"! )($'#(#'#(\"'#&'#"), h('%48""5!79/& 8!::! )'), h('%2;""6;7<.) &2=""6=7>/& 8!:?! )'), h('%2@""6@7A.) &2B""6B7C/& 8!:D! )'), h(";4.) &;5.# &;3"), h('%2E""6E7F.) &2G""6G7H/& 8!:I! )'), h('%2J""6J7K/& 8!:L! )'), h('%2M""6M7N.G &%2O""6O7P/7#2Q""6Q7R." &"/#$+")("\'#&\'#/& 8!:S! )'), h('%2T""6T7U.) &2V""6V7W/& 8!:X! )'), h('%2Y""6Y7Z/& 8!:[! )'), h('%2\\""6\\7].G &%2^""6^7_/7#2Q""6Q7R." &"/#$+")("\'#&\'#/& 8!:`! )'), h(";7.; &;9.5 &;8./ &;:.) &;<.# &;;"), h('%;?/z#%;D/\\#2a""6a7b/M$;D/D$;C/;$;D/2$2c""6c7d/#$+&)(&\'#(%\'#($\'#(#\'#("\'#&\'#." &"/)$8":e""! )("\'#&\'#'), h('<;@.# &;A=." 7f'), h('%;C/k#%;D/M#;"/D$%;D/,#;C/#$+")("\'#&\'#." &"/#$+#)(#\'#("\'#&\'#." &"/)$8":g""! )("\'#&\'#'), h('%;"/;#;D/2$;C/)$8#:h#"" )(#\'#("\'#&\'#'), h('<%;C/& 8!:j! )=." 7i'), h('%$4k""5!7l/,#0)*4k""5!7l&&&#/& 8!:m! )'), h('<$4o""5!7p0)*4o""5!7p&=." 7n')],
                    r = 0,
                    s = 0,
                    t = [{ line: 1, column: 1, seenCR: !1 }],
                    u = 0,
                    v = [],
                    w = 0; if ("startRule" in l) { if (!(l.startRule in n)) throw new Error("Can't start parsing from rule \"" + l.startRule + '".');
                    o = n[l.startRule] } if (k = i(o), k !== m && r === a.length) return k; throw k !== m && r < a.length && f({ type: "end", description: "end of input" }), g(null, v, u < a.length ? a.charAt(u) : null, u < a.length ? e(u, u + 1) : e(u, u)) } return a(b, Error), { SyntaxError: b, parse: c } }(), f = function() {
            function a(a) { for (var b = a.length, c = b - 1; c >= 0 && "9" === a[c];) c--; return a = c >= 0 ? a.slice(0, c) + "123456789" [parseInt(a[c])] + "0".repeat(b - c - 1) : "1" + "0".repeat(b) }

            function b(b, c, d, e) { if (console.log(c), c) { var f; if (null === c.sign ? c.sign = b["explicit-sign"] : e || "+" !== c.sign || b["retain-explicit-plus"] || (c.sign = null), c["int"] = c["int"].replace(/^00*/, ""), !c["int"] && b["add-integer-zero"] && (c["int"] = "0"), c.sep && !c.frac && b["add-decimal-zero"] && (c.frac = "0"), f = b["minimum-integer-digits"] - c["int"].length, f > 0 && (c["int"] = "0".repeat(f) + c["int"]), !d && null === c.uncert && "off" !== b["round-mode"]) switch ("figures" === b["round-mode"] ? (f = c["int"].replace(/^00*/, "").length, f ? f += c.frac.length : f = c.frac.replace(/^00*/, "").length) : f = c.frac.length, f -= b["round-precision"], Math.sign(f)) {
                        case 1:
                            var g = c["int"] + c.frac,
                                h = Math.sign(parseInt(g[g.length - f]) - 5); if (!h && f > 1 && parseInt(g.slice(1 - f)) && (h = 1), g = g.slice(0, -f), !h) switch (b["round-half"]) {
                                case "up":
                                    h = 1; break;
                                default:
                                case "even":
                                    h = 1 & parseInt(g[g.length - 1]) ? 1 : -1 }
                            1 === h && (g = a(g)), f < c.frac.length ? (c["int"] = g.slice(0, f - c.frac.length), c.frac = g.slice(f - c.frac.length)) : (c["int"] = g + "0".repeat(f - c.frac.length), c.sep = null, c.frac = ""); break;
                        case -1:
                            (c.sep || b["round-integer-to-decimal"]) && (c.sep = c.sep || b["output-decimal-marker"], c.frac += "0".repeat(-f)) }!b["zero-decimal-to-integer"] || c.frac && parseInt(c.frac) || (c.frac = null, c.sep = null) } }

            function c(a, c) { b(a, c.re), b(a, c.im, !1, !0), b(a, c.exp, !0) }

            function d(a, b) { b.forEach(function(b) {
                    [b.num, b.denom].forEach(function(b) { b && c(a, b) }) }) }

            function e(a, b) { var c = b["int"],
                    d = b.frac,
                    e = a["group-digits"],
                    f = a["group-minimum-digits"],
                    g = "{" + a["group-separator"] + "}",
                    h = "{" + (a["copy-decimal-marker"] ? b.sep : a["output-decimal-marker"]) + "}",
                    i = b.sign || "",
                    j = c.length; if (j >= f && ("true" === e || "integer" === e))
                    for (j -= 3; j > 0; j -= 3) c = c.slice(0, j) + g + c.slice(j); if (!b.sep) return i + c; if (j = d.length, j >= f && ("true" === e || "decimal" === e))
                    for (j -= 1 + (j - 1) % 3; j > 0; j -= 3) d = d.slice(0, j) + g + d.slice(j); return i + c + h + d }

            function f(a, b) { var c = "",
                    d = "";
                b.exp && a["bracket-numbers"] && (c = (a["open-bracket"] || "(") + " ", d = " " + (a["close-bracket"] || ")")); var f = b.re && e(a, b.re),
                    g = null; if (b.im) { var h = a["copy-complex-root"] ? b.im.root : a["output-complex-root"];
                    g = e(a, b.im), "before-number" === a["complex-root-position"] ? g = h + g : g += h } var i = b.rel ? b.rel + " " : ""; if (f ? i += g ? c + f + " " + g + d : f : g && (i += g), b.sign && ((b.re || b.im) && error("sign but also re or im given"), i += " " + b.sign), b.exp) { var j = e(a, b.exp),
                        k = a["output-exponent-marker"];
                    i += k ? " " + k + " " + j : " " + (f || g ? a["exponent-product"] || "\\times" : "") + " " + (a["exponent-base"] || "10") + "^{" + j + "}" } return i }

            function g(a, b) { return b.map(function(b) { var d = [b.num, b.denom].map(function(b) { if (!b) return b; var d = {}; for (var e in b) b.hasOwnProperty(e) && (d[e] = b); return c(a, b), f(a, b) }); return { num: d[0], denom: d[1] } }) } return { postprocDecimal: b, postprocComplExp: c, postprocAll: d, fmtDecimal: e, fmtComplExp: f, processAll: g } }(), g = function(a, b, c) { var d = {},
                e = MathJax.InputJax.TeX,
                f = d.SINumberParser = MathJax.Object.Subclass({ Init: function(b, c) { if (this.string = b, this.i = 0, void 0 === c) c = a();
                        else if (!(c instanceof a)) throw console.log(c, a), "SINumberParser expects an options object";
                        this.options = c, this.Parse() }, Parse: function() { var a = this.string.replace(/\s+/gi, ""),
                            d = { "+-": "\\pm", "-+": "\\mp", "<=": "\\leq", ">=": "\\geq", "<<": "\\ll", ">>": "\\gg" }; for (var e in d) d.hasOwnProperty(e) && (a = a.replace(e, d[e]));
                        this.parsed = b.parse(a, this.options), this.preformatted = c.processAll(this.options, this.parsed) } });
            d.SINumberListParser = f.Subclass({ Parse: function() { for (var a = this.string.replace(/\s+/gi, ""), b = a.split(";"), c = [], d = 0; d < b.length; ++d) d == b.length - 1 ? 1 == d ? c.push("\\text{" + this.options["list-pair-separator"] + "}") : d && c.push("\\text{" + this.options["list-final-separator"] + "}") : d && c.push("\\text{" + this.options["list-separator"] + "}"), c.push(this._parse_multi_part_number(b[d]));
                    this.parsed = c }, mml: function() { return e.Parse(this.parsed.join("")).mml() } }); return d }(b, e, f), h = function(a, b, c, d) {
            var e = MathJax.InputJax.TeX,
                f = MathJax.ElementJax.mml,
                g = b.UNITSMACROS,
                h = d.SINumberParser,
                i = d.SINumberListParser,
                j = MathJax.Extension["TeX/siunitx"].SIunitxCommands = {
                    sisetup: function(a) { this.GetArgument(a) },
                    si: function(b) { var d = a.ParseOptions(this.GetBrackets(b, "")),
                            e = this.GetArgument(b);
                        this.Push(c(e, d, this.stack.env).mml()) },
                    SI: function(b) { var d = a.ParseOptions(this.GetBrackets(b, "")),
                            e = this.GetArgument(b),
                            g = this.GetBrackets(b, ""),
                            i = this.GetArgument(b);
                        g && (this.Push(c(g, d, this.stack.env).mml()), this.Push(f.mspace().With({ width: f.LENGTH.MEDIUMMATHSPACE, mathsize: f.SIZE.NORMAL, scriptlevel: 0 }))), this.Push(h(e, d, this.stack.env).mml()[0].num), this.Push(f.mspace().With({ width: f.LENGTH.MEDIUMMATHSPACE, mathsize: f.SIZE.NORMAL, scriptlevel: 0 })), this.Push(c(i, d, this.stack.env).mml()) },
                    SIlist: function(b) {
                        function d() { return f.mspace().With({ width: f.LENGTH.MEDIUMMATHSPACE, mathsize: f.SIZE.NORMAL, scriptlevel: 0 }) } var g = a.ParseOptions(this.GetBrackets(b, "")),
                            h = this.GetArgument(b),
                            j = this.GetBrackets(b, ""),
                            k = this.GetArgument(b);
                        j && (j = c(j, g, this.stack.env)), h = i(h, g, this.stack.env).parsed, k = c(k, g, this.stack.env); for (var l = 0; l < h.length; ++l) { var m = h[l];
                            1 & l ? this.Push(e.Parse(m).mml()) : (j && (this.Push(j.mml()), this.Push(d())), this.Push(e.Parse(m).mml()), this.Push(d()), this.Push(k.mml())) } },
                    SIrange: function(b) { var d = a.ParseOptions(this.GetBrackets(b, "")),
                            e = this.GetArgument(b),
                            g = this.GetArgument(b),
                            i = this.GetBrackets(b, ""),
                            j = this.GetArgument(b);
                        j = c(j, d, this.stack.env), i && (i = c(i, d, this.stack.env)), i && (this.Push(i.mml()), this.Push(f.mspace().With({ width: f.LENGTH.MEDIUMMATHSPACE, mathsize: f.SIZE.NORMAL, scriptlevel: 0 }))), this.Push(h(e, d, this.stack.env).mml()), this.Push(f.mspace().With({ width: f.LENGTH.MEDIUMMATHSPACE, mathsize: f.SIZE.NORMAL, scriptlevel: 0 })), this.Push(j.mml()), this.Push(d["range-phrase"]), i && (this.Push(i.mml()), this.Push(f.mspace().With({ width: f.LENGTH.MEDIUMMATHSPACE, mathsize: f.SIZE.NORMAL, scriptlevel: 0 }))), this.Push(h(g, d, this.stack.env).mml()), this.Push(f.mspace().With({ width: f.LENGTH.MEDIUMMATHSPACE, mathsize: f.SIZE.NORMAL, scriptlevel: 0 })), this.Push(j.mml()) },
                    num: function(b) { var c = a.ParseOptions(this.GetBrackets(b, "")),
                            d = this.GetArgument(b),
                            f = h(d, c, this.stack.env).preformatted.map(function(a) { return null === a.denom ? a.num : "symbol" == c["quotient-mode"] ? a.num + c["output-quotient"] + a.denom : c["fraction-function"] + "{" + a.num + "}{" + a.denom + "}" }).join(c["output-product"]);
                        this.Push(e.Parse(f).mml()) },
                    ang: function(b) { var c = a.ParseOptions(this.GetBrackets(b, "")),
                            d = this.GetArgument(b);
                        d = i(d, c, this.stack.env).parsed, d.length > 5 && e.Error("More than three elements in angle specification"); for (var h = ["degree", void 0, "arcminute", void 0, "arcsecond"], j = { mathvariant: f.VARIANT.NORMAL }, k = 0; k < d.length; ++k) { var l = d[k]; if (1 & k);
                            else { if (!l) continue;
                                this.Push(e.Parse(l).mml()); var m = g[h[k]][1],
                                    n = f.mi.apply(f.mi, [m.symbol]).With(j);
                                this.Push(this.mmlToken(n)) } } },
                    numlist: function(b) { var c = a.ParseOptions(this.GetBrackets(b, "")),
                            d = this.GetArgument(b);
                        this.Push(i(d, c, this.stack.env).mml()) },
                    numrange: function(b) {
                        var c = a.ParseOptions(this.GetBrackets(b, "")),
                            d = this.GetArgument(b),
                            e = this.GetArgument(b);
                        this.Push(h(d, c, this.stack.env).mml()), this.Push(c["range-phrase"]),
                            this.Push(h(e, c, this.stack.env).mml())
                    }
                };
            return e.Definitions.Add({ macros: { sisetup: "SIunitx", si: "SIunitx", SI: "SIunitx", SIlist: "SIunitx", SIrange: "SIunitx", num: "SIunitx", ang: "SIunitx", numlist: "SIunitx", numrange: "SIunitx" } }, null, !0), e.Parse.Augment({ SIunitx: function(a) { j[a.slice(1)].call(this, a) } }), MathJax.Hub.Startup.signal.Post("TeX siunitx Ready"), j
        }(b, c, d, g)
    }()
}), MathJax.Ajax.loadComplete("[Contrib]/siunitx/siunitx.js");