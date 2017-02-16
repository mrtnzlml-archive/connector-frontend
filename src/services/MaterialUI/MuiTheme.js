import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {lightBlue100, lightBlue500, lightBlue700} from 'material-ui/styles/colors';

export default getMuiTheme({
	palette: {
		primary1Color: lightBlue500,
		primary2Color: lightBlue700,
		primary3Color: lightBlue100,
	},
}, {
	avatar: {
		borderColor: null,
	},
});
