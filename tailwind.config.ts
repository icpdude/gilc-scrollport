import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// GILC Extended Palette
				'scroll-violet': {
					DEFAULT: 'hsl(var(--scroll-violet))',
					foreground: 'hsl(var(--scroll-violet-foreground))'
				},
				golden: {
					DEFAULT: 'hsl(var(--golden))',
					foreground: 'hsl(var(--golden-foreground))'
				},
				ivory: {
					DEFAULT: 'hsl(var(--ivory))',
					foreground: 'hsl(var(--ivory-foreground))'
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))'
				},
				warning: {
					DEFAULT: 'hsl(var(--warning))',
					foreground: 'hsl(var(--warning-foreground))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'scroll-unfold': {
					'0%': { 
						opacity: '0', 
						transform: 'rotateX(-90deg) scale(0.8)' 
					},
					'100%': { 
						opacity: '1', 
						transform: 'rotateX(0deg) scale(1)' 
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						opacity: '1',
						filter: 'drop-shadow(0 0 5px hsl(var(--golden) / 0.3))'
					},
					'50%': { 
						opacity: '0.8',
						filter: 'drop-shadow(0 0 15px hsl(var(--golden) / 0.6))'
					}
				},
				'logic-grid': {
					'0%': { opacity: '0.1', transform: 'scale(1)' },
					'50%': { opacity: '0.3', transform: 'scale(1.05)' },
					'100%': { opacity: '0.1', transform: 'scale(1)' }
				},
				'quantum-fade': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'scroll-unfold': 'scroll-unfold 1s cubic-bezier(0.23, 1, 0.32, 1)',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'logic-grid': 'logic-grid 8s ease-in-out infinite',
				'quantum-fade': 'quantum-fade 0.8s cubic-bezier(0.23, 1, 0.32, 1)'
			},
			fontFamily: {
				inter: ['Inter', 'system-ui', 'sans-serif'],
				literata: ['Literata', 'Times New Roman', 'serif'],
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
