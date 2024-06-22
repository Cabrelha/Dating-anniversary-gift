var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
  },
});

tl.to(
  "#AluGio",
  {
    top: "100%",
    left: "-16%",
  },
  "orange"
);

tl.to(
  "#Cueiovamp",
  {
    width: "15%",
    top: "152%",
    right: "10%",
    left: "60%",
    rotate: "190deg",
  },
  "orange"
);
tl.to(
  "#bat3",
  {
    top: "107%",
    rotate: "100deg",
    left: "70%",
  },
  "orange"
);
tl.to(
  "#bat2",
  {
    top: "92%",
    rotate: "92deg",
    left: "-2%",
  },
  "orange"
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
  },
});
