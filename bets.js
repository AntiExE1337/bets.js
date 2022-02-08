        //  Pariuri Sportive redtimes
        Ta = Object(zt.a)(ka, (function() {
            var t = this,
                e = t.$createElement,
                a = t._self._c || e;
            return a("div", [a("div", {
                staticClass: "page-title"
            }, [a("div", {
                staticClass: "row"
            }, [t._m(0), t._v(" "), a("div", {
                staticClass: "col-sm-6"
            }, [a("ol", {
                staticClass: "breadcrumb pt-0 pr-0 float-left float-sm-right "
            }, [a("li", {
                staticClass: "breadcrumb-item"
            }, [a("router-link", {
                staticClass: "default-color",
                attrs: {
                    to: "/"
                }
            }, [t._v("Home")])], 1), t._v(" "), a("li", {
                staticClass: "breadcrumb-item active"
            }, [t._v("Pariuri sportive")])])])])]), t._v(" "), a("div", {
                staticClass: "row"
            }, [t._m(1), t._v(" "), a("div", {
                staticClass: "col-md-9"
            }, [a("div", {
                staticClass: "card card-body"
            }, [a("h5", {
                staticClass: "text-center"
            }, [t._v("\n                    Lista meciuri\n                ")]), t._v(" "), a("hr"), t._v(" "), t.loaded ? a("div", [t._m(2)]) : t._e(), t._v(" "), t._l(t.matches, (function(e) {
                return a("div", {
                    key: e.ID
                }, [a("div", {
                    staticClass: "row"
                }, [a("div", {
                    staticClass: "col-md-5"
                }, [a("h5", {
                    staticClass: "float-left"
                }, [a("img", {
                    staticClass: "img-fluid mr-15 avatar-small mr-5",
                    attrs: {
                        src: e.LogoHomeTeam,
                        alt: ""
                    }
                }), t._v("\n                                " + t._s(e.HomeTeam) + "\n                            ")])]), t._v(" "), a("div", {
                    staticClass: "col-md-2"
                }, [a("h5", {
                    staticClass: "text-center"
                }, [t._v("\n                                X\n                            ")]), t._v(" "), a("div", {
                    staticClass: "text-center"
                }, [t._v("\n                                " + t._s(e.MatchStart) + "\n                            ")])]), t._v(" "), a("div", {
                    staticClass: "col-md-5"
                }, [a("h5", {
                    staticClass: "float-right"
                }, [t._v("\n                                " + t._s(e.AwayTeam) + "\n                                "), a("img", {
                    staticClass: "img-fluid mr-15 avatar-small ml-5",
                    attrs: {
                        src: e.LogoAwayTeam,
                        alt: ""
                    }
                })])]), t._v(" "), a("div", {
                    staticClass: "col-md-12"
                }, [a("div", {
                    staticClass: "row"
                }, [a("div", {
                    staticClass: "col-md-4"
                }, [a("button", {
                    staticClass: "btn btn-danger btn-block",
                    on: {
                        click: function(a) {
                            return t.addMatch(e, 1)
                        }
                    }
                }, [t._v("\n                                        " + t._s(e.ODDS1) + "\n                                    ")])]), t._v(" "), a("div", {
                    staticClass: "col-md-4"
                }, [a("button", {
                    staticClass: "btn btn-secondary btn-block",
                    on: {
                        click: function(a) {
                            return t.addMatch(e, 2)
                        }
                    }
                }, [t._v("\n                                        " + t._s(e.ODDSX) + "\n                                    ")])]), t._v(" "), a("div", {
                    staticClass: "col-md-4"
                }, [a("button", {
                    staticClass: "btn btn-danger btn-block",
                    on: {
                        click: function(a) {
                            return t.addMatch(e, 3)
                        }
                    }
                }, [t._v("\n                                        " + t._s(e.ODDS2) + "\n                                    ")])])]), t._v(" "), a("hr")])])])
            }))], 2)]), t._v(" "), a("div", {
                staticClass: "col-md-3"
            }, [a("div", {
                staticClass: "card card-body"
            }, [a("h5", {
                staticClass: "text-center"
            }, [t._v("\n                    Pariul meu\n                ")]), t._v(" "), a("hr"), t._v(" "), a("div", {
                staticClass: "table-responsive"
            }, [a("table", {
                staticClass: "table"
            }, [t._m(3), t._v(" "), a("tbody", t._l(t.mymatches, (function(e, s) {
                return a("tr", {
                    key: e.ID
                }, [a("td", [t._v("\n                                    " + t._s(e.ID) + "\n                                ")]), t._v(" "), a("td", [t._v("\n                                    " + t._s(e.HomeTeam) + " - " + t._s(e.AwayTeam) + "\n                                ")]), t._v(" "), a("td", [t._v("\n                                    " + t._s(e.MyBet) + "\n                                ")]), t._v(" "), a("td", [t._v("\n                                    " + t._s(e.CotaMyBet) + "\n                                ")]), t._v(" "), a("td", [a("a", {
                    on: {
                        click: function(e) {
                            return t.deleteBet(s)
                        }
                    }
                }, [a("i", {
                    staticClass: "fa fa-trash text-danger",
                    attrs: {
                        "data-toggle": "tooltip",
                        title: "Stergeti acest meci de pe biletul dumneavoastra."
                    }
                })])])])
            })), 0)]), t._v(" "), 1 !== t.cotatotala && "1.00" !== t.cotatotala ? a("div", {
                staticClass: "text-center"
            }, [t._v("\n                        Cota totala: "), a("b", [t._v(t._s(t.cotatotala))])]) : t._e()]), t._v(" "), a("hr"), t._v(" "), a("input", {
                staticClass: "form-control",
                attrs: {
                    type: "number",
                    id: "sumBet",
                    "max-value": "10000000",
                    placeholder: "Introduceti suma..."
                }
            }), t._v(" "), a("br"), t._v(" "), a("button", {
                staticClass: "btn btn-danger btn-block",
                on: {
                    click: function(e) {
                        return t.placeBet()
                    }
                }
            }, [t._v("\n                    Pariaza\n                ")])])])])])
        }), [function() {
            var t = this.$createElement,
                e = this._self._c || t;
            return e("div", {
                staticClass: "col-sm-6"
            }, [e("h4", {
                staticClass: "mb-0"
            }, [this._v("Pariuri Sportive")])])
        }, function() {
            var t = this.$createElement,
                e = this._self._c || t;
            return e("div", {
                staticClass: "col-md-12"
            }, [e("div", {
                staticClass: "text-center"
            }, [this._v("\n                Toate meciurile, cat si informatii despre acestea, sunt extrase in jurul orei 00, sau la prima accesare a panelului, dupa ora 00.\n            ")]), this._v(" "), e("br")])
        }, function() {
            var t = this.$createElement,
                e = this._self._c || t;
            return e("div", {
                staticClass: "text-center"
            }, [e("i", {
                staticClass: "h1 fas fa-sync  fa-spin fa-7x"
            })])
        }, function() {
            var t = this,
                e = t.$createElement,
                a = t._self._c || e;
            return a("thead", [a("th", [t._v("#")]), t._v(" "), a("th", [t._v("Nume echipe")]), t._v(" "), a("th", [t._v("Pariu")]), t._v(" "), a("th", [t._v("Cota")]), t._v(" "), a("th")])
        }], !1, null, null, null).exports;
    n.a.component("app-all", a(37).default), n.a.config.devtools = !1, n.a.use(Ut), window.axios = a(19);