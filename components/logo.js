import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'

import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 20px;
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    height: 35px;
    line-height: 30px;
    padding: 10px;

    &:hover img {
        transform: rotate(20deg);
    }
`

const Logo = () => {
    return (
        <Link href="/">
            <LogoBox>
                <Text
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily="M PLUS Rounded 1c"
                    fontWeight="bold"
                    ml={3}
                >
                    akhercha.sh
                </Text>
            </LogoBox>
        </Link>
    )
}

export default Logo
