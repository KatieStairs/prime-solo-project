import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function EditRecipe() {
    
    return (
        <div>
         <Box
            mx={6}
            my={3}
            border={4}
            px={2}
            py={3}
            borderColor="black"
            height={300}
            width={800}
            display="flex"
            justifyContent="left"
            alignItems="left"
            bgcolor="white"
            color="black"
            fontSize={20}
            >
            <TextField
                id="outlined-multiline-static"
                label="Edit Recipe Ingredients:"
                multiline
                minRows={15.5}
                defaultValue=""
                fullWidth
            />
        {/* <Button variant="contained">Save</Button> */}
        </Box>
        <Button variant="contained">Save</Button>
        <Box
            mx={6}
            my={3}
            border={4}
            px={2}
            py={3}
            borderColor="black"
            height={300}
            width={800}
            display="flex"
            justifyContent="left"
            alignItems="left"
            bgcolor="white"
            color="black"
            fontSize={20}
            >
        <TextField
            id="outlined-multiline-static"
            label="Edit Recipe Directions:"
            multiline
            minRows={15.5}
            defaultValue=""
            fullWidth
        />
        </Box>
        <Button variant="contained">Save</Button>
        <Box
            mx={6}
            my={3}
            border={4}
            px={2}
            py={3}
            borderColor="black"
            height={300}
            width={800}
            display="flex"
            justifyContent="left"
            alignItems="left"
            bgcolor="white"
            color="black"
            fontSize={20}
        >
        <TextField
            id="outlined-multiline-static"
            label="Edit Recipe Notes:"
            multiline
            minRows={15.5}
            defaultValue=""
            fullWidth
        />
        </Box>
        <Button variant="contained">Save</Button>
    </div>
    )
}
export default EditRecipe;