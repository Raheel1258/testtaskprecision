import { Flex, Icon } from "@chakra-ui/react"
import { clipboardIcon, profileIcon } from "../../IconBox/Icons";

const Profile = () => {
    return (
        <Flex pt={8} pb={6} justifyContent="space-between" alignItems="center">
            <Icon boxSize={8} as={profileIcon} />
            <Icon boxSize={6} as={clipboardIcon} />
        </Flex>
    )
}

export default Profile;