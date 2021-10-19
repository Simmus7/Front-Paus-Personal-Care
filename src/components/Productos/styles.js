import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: '#c2c1bf',
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
}));