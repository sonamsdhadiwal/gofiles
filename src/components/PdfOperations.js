import React from 'react';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styled from 'styled-components';
import FilesDragDrop from './FilesDragDrop';
import SplitFilesDragDrop from './splitFiles/SplitFilesDragDrop';
import PdfToWord from './wordConversionFiles/PdfToWord';
const { PDFDocument } = require('pdf-lib');
var fs = require('fs');

// const PDFMerger = require('pdf-merger-js');


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

// var merger = new PDFMerger();
var files;
var file2;

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

function pdfToPowerpoint() {
    console.log('merge');
}

function rotateClockwisePdf() {
    console.log('split');
}

function rotateAnticlockwisePdf() {
    console.log('merge');
}

function htmlToPdf() {
    console.log('split');
}

function PdfToText() {
    console.log('merge');
}

function protectPdf() {
    console.log('split');
}

function organizePdf() {
    console.log('split');
}

function repairPdf() {
    console.log('merge');
}

function signPdf() {
    console.log('split');
}

function onChange(e) {
    files = e.target.files;
    console.warn("data files", files);
}

export default function PdfOperations() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <Styles>
            <Container fixed>Select the file type to perform operations</Container>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Card className={classes.root} variant="outlined" >

                                    <CardContent>
                                        <Typography
                                            className={classes.title}
                                            color="textSecondary"
                                            gutterBottom>
                                            Merge PDF
                                        </Typography>
                                        <Typography variant="body2" component="p">
                                            Please enter pdf files sequentially to merge them.
                                            <br />
                                            <div>
                                                <FilesDragDrop>
                                                </FilesDragDrop>
                                            </div>
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
                                            Split PDF
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                            <SplitFilesDragDrop></SplitFilesDragDrop>
                                        </Typography>

                                    </CardContent>
                                </Card>
                            </TableCell>
                            <TableCell>
                                <Card className={classes.root} variant="outlined" onClick={() => pdfToPowerpoint()} >
                                    <a href='./Trial'>Link</a>
                                    <CardContent>
                                        <Typography
                                            className={classes.title}
                                            color="textSecondary"
                                            gutterBottom>
                                            PDF to Powerpoint
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                            pdf to powerpoint
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </TableCell>
                            <TableCell>
                                <Card className={classes.root} variant="outlined" onClick={() => rotateClockwisePdf()}>
                                    <CardContent>
                                        <Typography
                                            className={classes.title}
                                            color="textSecondary"
                                            gutterBottom>
                                            Rotate PDF Clockwise 90
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                            rotate pdf clockwise 90
                                        </Typography>
                                    </CardContent>

                                </Card>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <Card className={classes.root} variant="outlined" onClick={() => rotateAnticlockwisePdf()} >
                                    <CardContent>
                                        <Typography
                                            className={classes.title}
                                            color="textSecondary"
                                            gutterBottom>
                                            Rotate PDF Anticlockwise 90
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                            Rotate pdf anticlockwise 90
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </TableCell>
                            <TableCell>
                                <Card className={classes.root} variant="outlined" onClick={() => htmlToPdf()} >

                                    <CardContent>
                                        <Typography
                                            className={classes.title}
                                            color="textSecondary"
                                            gutterBottom>
                                            HTML to PDF
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                            html to pdf
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </TableCell>
                            <TableCell>
                                <Card className={classes.root} variant="outlined" onClick={() => PdfToText()}>

                                    <CardContent>
                                        <Typography
                                            className={classes.title}
                                            color="textSecondary"
                                            gutterBottom>
                                            PDF to Text
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                            unlock pdf
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </TableCell>
                            <TableCell>
                                <Card className={classes.root} variant="outlined" onClick={() => protectPdf()}>
                                    <CardContent>
                                        <Typography
                                            className={classes.title}
                                            color="textSecondary"
                                            gutterBottom>
                                            Pdf to Word
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                            Convert Pdf to word file
                                            <br/>
                                            <PdfToWord></PdfToWord>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <Card className={classes.root} variant="outlined" onClick={() => organizePdf()} >

                                    <CardContent>
                                        <Typography
                                            className={classes.title}
                                            color="textSecondary"
                                            gutterBottom>
                                            Organize PDF
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                            organize pdf
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </TableCell>
                            <TableCell>
                                <Card className={classes.root} variant="outlined" onClick={() => repairPdf()}>

                                    <CardContent>
                                        <Typography
                                            className={classes.title}
                                            color="textSecondary"
                                            gutterBottom>
                                            Repair PDF
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                            repair pdf
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </TableCell>
                            <TableCell>
                                <Card className={classes.root} variant="outlined" onClick={() => signPdf()}>

                                    <CardContent>
                                        <Typography
                                            className={classes.title}
                                            color="textSecondary"
                                            gutterBottom>
                                            Sign PDF
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                            sign pdf
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </TableCell>
                            <TableCell>
                                <Card className={classes.root} variant="outlined" onClick={() => protectPdf()}>

                                    <CardContent>
                                        <Typography
                                            className={classes.title}
                                            color="textSecondary"
                                            gutterBottom>
                                            Protect PDF
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                            protect pdf
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