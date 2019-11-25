import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AndroidIcon from '@material-ui/icons/Android';

const Header: React.FC<{}> = (): JSX.Element => {
  return (
    <AppBar position="static">
      <Toolbar>
        <AndroidIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
