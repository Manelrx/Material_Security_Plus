(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [41, 78, 176, 315, 500, 562, 829, 921],
  {
    8874: (e, t, l) => {
      Promise.resolve().then(l.bind(l, 9692));
    },
    9692: (e, t, l) => {
      "use strict";
      l.d(t, { default: () => o });
      var s = l(2860),
        n = l(3200);
      function o(e) {
        let { content: t } = e,
          [l, o] = (0, n.useState)(""),
          [r, c] = (0, n.useState)([]);
        (0, n.useEffect)(() => {
          let e;
          let l = /^(#{1,6})\s+(.+)$/gm,
            s = [];
          for (; null !== (e = l.exec(t)); ) {
            let t = e[1].length,
              l = e[2];
            if (t > 1 && t <= 4) {
              let e = l
                .toLowerCase()
                .replace(/[^\w\s-]/g, "")
                .replace(/\s+/g, "-");
              s.push({ id: e, text: l, level: t });
            }
          }
          c(s);
        }, [t]),
          (0, n.useEffect)(() => {
            let e = new IntersectionObserver(
              (e) => {
                e.forEach((e) => {
                  e.isIntersecting && o(e.target.id);
                });
              },
              { rootMargin: "0px 0px -80% 0px" }
            );
            return (
              r.forEach((t) => {
                let { id: l } = t,
                  s = document.getElementById(l);
                s && e.observe(s);
              }),
              () => {
                r.forEach((t) => {
                  let { id: l } = t,
                    s = document.getElementById(l);
                  s && e.unobserve(s);
                });
              }
            );
          }, [r]);
        let a = (e) => {
          let t = document.getElementById(e);
          t && (t.scrollIntoView({ behavior: "smooth" }), o(e));
        };
        return 0 === r.length
          ? null
          : (0, s.jsxs)("div", {
              className: "bg-white p-4 rounded-lg shadow-md sticky top-4",
              children: [
                (0, s.jsx)("h3", {
                  className:
                    "text-lg font-bold mb-3 text-blue-800 border-b pb-2",
                  children: "\xcdndice do Conte\xfado",
                }),
                (0, s.jsx)("nav", {
                  children: (0, s.jsx)("ul", {
                    className: "space-y-1",
                    children: r.map((e) =>
                      (0, s.jsx)(
                        "li",
                        {
                          className: "pl-".concat((e.level - 1) * 4),
                          children: (0, s.jsx)("button", {
                            onClick: () => a(e.id),
                            className:
                              "text-left w-full py-1 px-2 rounded hover:bg-blue-50 transition-colors ".concat(
                                l === e.id
                                  ? "font-medium text-blue-700 bg-blue-50"
                                  : "text-gray-700"
                              ),
                            children: e.text,
                          }),
                        },
                        e.id
                      )
                    ),
                  }),
                }),
              ],
            });
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [685, 411, 358], () => t(8874)), (_N_E = e.O());
  },
]);
