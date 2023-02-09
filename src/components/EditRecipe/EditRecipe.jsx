import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

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
            Edit Recipe Ingredients:
            {/* <Button variant="contained">Edit</Button> */}
        </Box>
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
            Edit Recipe Directions:
            {/* <Button variant="contained">Edit</Button> */}
        </Box>
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
            Edit Recipe Notes:
            {/* <Button variant="contained">Edit</Button> */}
        </Box>
    </div>
    )
}
export default EditRecipe;