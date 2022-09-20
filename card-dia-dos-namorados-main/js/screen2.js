console.clear();

// Actually my early impletation was not so cool
// The code you see here is actually suggested by Greensock. I really love those guys. So helpful

gsap.registerPlugin(MorphSVGPlugin);

const morphs = gsap.utils.toArray("#morphs path");

gsap.to("#orig path", {
	duration: 0.25,
	stagger: {
		each: 0.06,
		repeat: -1,
		repeatDelay: 0.35,
		yoyo: true,
	},
	morphSVG: i => morphs[i]
});
