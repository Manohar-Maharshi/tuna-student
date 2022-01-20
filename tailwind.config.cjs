module.exports = {
	darkMode: 'class',
  content: [
  	"./src/**/*.{html,js,svelte,ts}",
  	"./node_modules/@themesberg/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    fontFamily:{
    	'sans' : ['Inter','sans-serif'],
    }
  },
    plugins: [
        require('@themesberg/flowbite/plugin'),
        require('@tailwindcss/line-clamp'),
    ]
}
