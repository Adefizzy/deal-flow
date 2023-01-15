import { extendTheme } from "@chakra-ui/react";
import type { StyleFunctionProps } from '@chakra-ui/styled-system';
import { LinkStyle as Link } from './components/Link';
import { InputStyle as Input } from './components/Input';
import { TextStyle as Text } from './components/Text';

import { ButtonStyle as Button } from './components/Button';


const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
}


const theme = extendTheme({
    breakpoints,
    colors: {
        purple: '#8744E1',
        cyan: '#5CCFFE',
        yellow: '#FBBA6D',
        black: '#313131',
        green: '#1BD8BA',
        red: '#FE718E',
        gray1: '#FAFAFA',
        gray2: '#F5F5F5',
        gray3: '#BDBDBD'
    },
    components: {
        Link,
        Input,
        Text,
        Button
    },

    textStyles: {
        normal: {
            fontSize: { base: '16px', lg: '1.2vw' },
        },
    },


    styles: {
        global: (props: StyleFunctionProps) => ({
            "html, body": {
                fontSize: ["sm", "md"],
                color: 'black',
                lineHeight: "tall",
                fontFamily: `'Inter', sans-serif`,
                backgroundColor: 'gray2',
                boxSizing: 'border-box'
            },

        })
    }
});

export default theme;