import { StyleFunctionProps } from '@chakra-ui/styled-system';


export const LinkStyle = {
    baseStyle: () => ({
        py: {base: 4, '2xl': 10},
        px: 2,
        mx: {base: 3, '2xl': '1.2vw'},
    }),

    size: {

    },
    variants: {
        normal: (props: StyleFunctionProps) => ({
            fontWeight: 'normal',
            color: 'gray3',
            width:'fit-content',
            display: 'block',
            borderBottom: '4px solid transparent',
            '_activeLink': {
                color: 'purple',
                fontWeight: 'bold',
                borderColor: 'purple'
            },
            '_hover': {
                color: 'purple',
                textDecoration: 'none',
                borderColor: 'purple'
            }
        }),

    },
    defaultProps: {
        variant: 'normal'
    },
};
