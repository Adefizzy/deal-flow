import { StyleFunctionProps } from '@chakra-ui/styled-system';

export const InputStyle = {
  baseStyle: (props: StyleFunctionProps) => ({
    field: {
      borderWidth: 1,
      ':focus': {
        borderWidth: 1,
        borderColor: 'purple'
      },
     '::placeholder': {
        fontSize: '1vw',
        color: 'gray3'
     }
    },
  }),

  size: {
    md: {
      padding: { base: 12, lg: 6 },
    },
  },

  defaultProps: {
    size: 'md',
    variant: 'normal',
    colorScheme: 'purple',
  },
};
