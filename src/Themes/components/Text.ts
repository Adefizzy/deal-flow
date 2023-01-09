import { StyleFunctionProps } from '@chakra-ui/styled-system';

export const TextStyle = {
  baseStyle: () => ({
    fontSize: { base: '16px', lg: '1.2vw' },
  }),

  size: {},
  variants: {
    title: (props: StyleFunctionProps) => ({
        fontWeight: '300',
        fontSize: {base: '18px', lg: '2vw'},
        
    }),
    smallLight: {
        fontWeight: '300',
        fontSize: {base: '8px', lg: '1vw'},
    },
    smallBold: {
        fontWeight: '600',
        fontSize: {base: '8px', lg: '0.9vw'},
    },
    small: {
        fontWeight: 'normal',
        fontSize: {base: '8px', lg: '0.9vw'},
    },
    largeBold: {
        fontWeight: '600',
        fontSize: {base: '18px', lg: '1.8vw'},
    }
  },
  defaultProps: {},
};
