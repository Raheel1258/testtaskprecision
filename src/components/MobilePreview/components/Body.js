import { Box, Flex, Text } from "@chakra-ui/react"
import CallToAction from "./CallToAction";
import Profile from "./Profile";
import Todo from "./Todo";

const Body = ({tasks}) => {
    return (
        <Box h="100%">
            {/* new messages section */}
            <Profile />
            <Text mb={5} fontSize="sm">NEW MESSAGES</Text>
            <Flex mb={8} alignItems="center" gap={4}>
                <Box bg="#ecedf0" w="39.09px" h="39.09px" borderRadius="50%"></Box>
                <Flex flexDir="column" gap={1}>
                    <Box bg="#ecedf0" borderRadius="4px" w="93.47px" h="15.3px"></Box>
                    <Box bg="#ecedf0" borderRadius="3px" w="169.95px" h="13.6px"></Box>
                </Flex>
            </Flex>
            {/* RSVPS section */}
            <Text fontSize="sm" mb={5}>GROUP RSPVPS</Text>
            <Flex mb={8} alignItems="center" justifyContent="space-between">
                <Flex flexDir="column" gap={2}>
                    <Box bg="#ecedf0" borderRadius="4px" w="176.75px" h="15.3px"></Box>
                    <Box bg="#ecedf0" borderRadius="3px" w="107.07px" h="13.6px"></Box>
                </Flex>
                <Box bg="#ecedf0" w="62.88px" h="33.99px" borderRadius="17px"></Box>
            </Flex>
            {tasks.map(task => (
                task.type === 'action' ? <CallToAction /> : <Todo />
            ))}
        </Box>
    )
}

export default Body;