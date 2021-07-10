import React from 'react';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from 'react-router-dom';
const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;

function routeToPdf () {
    // const history = useHistory();
    console.log("Redirecting");
    // <Redirect to="/pdfOperations" />
    // history.push(`/pdfOperations`);
  }

const useStyles = makeStyles({
    root: {
        minWidth: 275
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)"
    },
    title: {
        fontSize: 14
    },
    pos: {
        marginBottom: 12
    }
});

export default function LandingPage() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;


    // constructor(props) {
    //     this.routeToPdf = this.routeToPdf.bind(this);
    // }

    // routeToPdf() {
    //     console.log("........................");
    // }
  
    
    return (
        <Styles>
            <Container fixed>Select the file type to perform operations</Container>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Card className={classes.root} variant="outlined" onClick={() => routeToPdf()}>
                                    <a href='./pdfOperations'>Link</a>
                                    <CardContent>
                                        <Typography
                                            className={classes.title}
                                            color="textSecondary"
                                            gutterBottom>
                                            PDF
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                         Click on the Link above to do Pdf Operations
                                        </Typography>
                                        
                                    </CardContent>
                                </Card>
                            </TableCell>
                            <TableCell>
                                <Card className={classes.root} variant="outlined">
                                    <CardContent>
                                        <Typography
                                            className={classes.title}
                                            color="textSecondary"
                                            gutterBottom>
                                            Word Document
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                        Click on the Link above to do Word Operations
                                        </Typography>                                      
                                    </CardContent>
                                </Card>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    </TableBody>
                </Table>
            </TableContainer>
        </Styles>
    )
}