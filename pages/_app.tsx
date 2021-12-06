import '../styles/globals.css'
import {green, red} from "@material-ui/core/colors";
import {createTheme, CssBaseline, ThemeProvider} from "@material-ui/core";
import {AppProps} from "next/app";

const theme = createTheme({
	palette: {
		primary: {
			main: red[600],
		},
		secondary: {
			main: green[500],
		},
	},
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default MyApp
