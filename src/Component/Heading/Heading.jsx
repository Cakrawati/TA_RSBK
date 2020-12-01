import React, {} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'
import Modul3 from "../Modul3/Modul3";
import Modul4 from "../Modul4/Modul4";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cardinfo from '../Cardinfo/Cardinfo';

const ButtonLink = styled.button
`
    color: white;
     width: 90px;
     height: 30px;
     border:none;
     border:solid 2px white;
     border-radius: 6px;
     background: #B29843;
     font-size: 10px;
     margin: 10px 20px;
     &:hover {
        border:solid 2px black;
        cursor: pointer;
        
      }
`

const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
      
    },
    title: {
      flexGrow: 0.9,
      fontFamily:
          'roboto',
          fontWeight: 70,
    },
  }));


export default function Heading(){
    const classes = useStyles();
    return(
<Router>
    
        <div>
            <AppBar style={{ background: '#B29843' }}>
                <Toolbar >
                   <Typography  className={classes.title}>
                        Penjualan Alat Musik Kelompok 41
                    </Typography>
                    <Link to="/Cardinfo">
                    <ButtonLink>
                        Home
                    </ButtonLink>
                    </Link>
                    <Link to="/Tugasmod4">
                    <ButtonLink>
                        Katalog Gitar
                    </ButtonLink>
                    </Link>
                    <Link to="/Tugasmod3">
                    <ButtonLink >
                        Katalog Bass
                    </ButtonLink>
                    </Link> 
                </Toolbar>
            </AppBar>
            <Switch>
                <Route path="/Tugasmod4" exact component={Modul4} />
                <Route path="/Tugasmod3" exact component={Modul3} />
                <Route path="/Cardinfo" exact component={Cardinfo} />
            </Switch>
        </div>
     
</Router>
    )
}

