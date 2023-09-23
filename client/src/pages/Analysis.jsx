import { Container, Flex } from "@chakra-ui/react";
import Pichartt from "../Components/Pichartt";
const Analysis = () => {
    return ( 
        <Flex h={450} w={1000} bgColor={"purple.50"} mt={4} ml={5} p={4}>
            <Flex direction={'row'}>
                <Container h={350} w={400}>
                <Pichartt/>
                </Container>
            </Flex>
        </Flex>
     );
}
 
export default Analysis;