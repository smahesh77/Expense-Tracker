import { Badge, Flex, Text } from "@chakra-ui/layout";
import { IoPizzaOutline, IoBulbOutline } from "react-icons/io5";
import { AiOutlineMedicineBox } from "react-icons/ai";
import {BiBuildingHouse} from "react-icons/bi"
import { RiMovie2Line } from "react-icons/ri"
const Itembox = (props) => {
    let categoryIcon = null;
  
    if (props.category === "Food") {
      categoryIcon = <IoPizzaOutline size={34} />;
    } else if (props.category === "Entertainment") {
      categoryIcon = <RiMovie2Line size={34} />;
    } else if (props.category === "Health") {
      categoryIcon = <AiOutlineMedicineBox size={34} />;
    } else if (props.category === "Rent") {
      categoryIcon = <BiBuildingHouse size={34} />;
    }
    else if (props.category === "Electricity") {
        categoryIcon = <IoBulbOutline size={34} />;
      }
  
    return (
      <Flex bgColor={'purple.50'} h={'70px'} w={250} mb={2} borderRadius={10} flexDirection={'row'} alignItems={'center'} p={5}>
        {categoryIcon}
        <Flex direction={'column'} ml={7}>
          <Text mb={1} w={'max-content'} >{props.title}</Text>
          <Flex direction={'row'} >
            <Badge mr={2} bgColor={'purple.100'}>{props.category}</Badge>
            <Text>${props.price}</Text>
          </Flex>
        </Flex>
      </Flex>
    );
  }
  
  export default Itembox;
  