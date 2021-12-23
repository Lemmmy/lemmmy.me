module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px"
      }
    },

    extend: {
      backgroundImage: {
        "noise": "url('/img/noise.svg')"
      },

      colors: {
        "lemon-light": "#F2CC85",
        "lemon": "#F2AB6D",
        "lemon-mid": "#F2784B",
        "lemon-dark": "#D9593D",

        "spotify-logo": "#1ED760",
        "spotify-brand": "#1DB954",
        "spotify-black": "#191414",
        "apple-music-t": "#FB5C74",
        "apple-music-b": "#FA233B",
        "bandcamp-logo": "#60909A",
        "soundcloud-logo": "#FE5000",
        "github-logo": "#191717",
        "tmpim-logo": "#000000",
        "twitter-logo": "#1DA1F2",
        "paypal-logo": "#FFFFFF",
        "twitch-logo": "#9146FF",
        "youtube-logo": "#FF0000",

        "osusig": "#BB1177",
        "osusig-hover": "#EC31A2",
        "kristweb-t": "#242941",
        "kristweb-b": "#1B1F31",
        "kristweb-primary": "#6495ED",
        "kristweb-primary-hover": "#89AEF1",
        "kanjischool-t": "#141414",
        "kanjischool-b": "#000000"
      },
    },
  },
  plugins: [],
};
