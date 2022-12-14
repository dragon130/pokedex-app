import {
    Box,
    Heading,
    Input,
    InputLeftElement,
    InputGroup,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { useRouter } from "next/router";

import PokeballLogo from "../assets/images/pokeball.png";

const Header = () => {
    const router = useRouter();

    const handleRedirectHome = () => {
        router.push("/");
    };

    return (
        <Box display="flex" p={2} gap={6} alignItems="center">
            <Box
                display="flex"
                alignItems="center"
                onClick={handleRedirectHome}
                cursor="pointer"
            >
                <Image src={PokeballLogo} alt="logo" width={55} height={32} />
                <Heading as="h1">Pokédex</Heading>
            </Box>

            <Box flexBasis="50%">
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<SearchIcon color="gray.300" />}
                    />
                    <Input placeholder="Name of pokemon" />
                </InputGroup>
            </Box>
        </Box>
    );
};

export default Header;
