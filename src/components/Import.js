import React from 'react'
import { Button, Table, TableHead, TableBody, TableRow, TableCell } from "@material-ui/core"
import Container from '@material-ui/core/Container'
import { MoreVert } from '@material-ui/icons'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const Import = (props) => {
    // fill out this component

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [clickedIndex, setClickedIndex] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event, index) => {
        setAnchorEl(event.currentTarget);
        setClickedIndex(index);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Container>
            <Button variant="contained" color="primary" onClick={props.fetchMakes}>Import</Button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.makes.map((value, index) => {
                        return (<TableRow key={index}>
                            <TableCell>{value.MakeId}</TableCell>
                            <TableCell>{value.MakeName}</TableCell>
                            <TableCell><MoreVert onClick={(event) => handleClick(event, index)} /></TableCell>
                        </TableRow>)
                    })}
                </TableBody>
            </Table>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={() => props.deleteMake(clickedIndex)}>Delete</MenuItem>
            </Menu>
        </Container>
    )
}

export default Import
