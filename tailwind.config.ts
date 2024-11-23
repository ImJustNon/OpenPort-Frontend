import tailwindcssTypography from "@tailwindcss/typography";
import tailwindcssForms from "@tailwindcss/forms";
import { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			aspectRatio: {
				"350/494": "350 / 494"
			}
		},
		// fontSize: {
		// 	sm: ['14px', '20px'],
		// 	base: ['30px', '24px'],
		// 	md: ['30px', '24px'],
		// 	lg: ['26px', '28px'],
		// 	xl: ['30px', '1.5rem'],
		// }
	},
	plugins: [
		// tailwindcssTypography,
		// tailwindcssForms
	],
}

export default config;
