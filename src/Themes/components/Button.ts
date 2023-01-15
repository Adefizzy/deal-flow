import { StyleFunctionProps } from '@chakra-ui/styled-system';

export const ButtonStyle = {
  size: {
    md: {
      padding: { base: 8, lg: 4 },

    },
  },
  variants: {
    normal: (props: StyleFunctionProps) => ({
        bg: props.theme.colors.transparent,
        color: 'purple',
        borderColor: 'purple',
        borderWidth: '1px',
        borderStyle:'solid',
        width: '100%',
        fontSize:{base: '16px', lg: '1.1vw'},
        ':hover': {
            bg: props.theme.colors.transparent,
        },
        ':focus': {
          bg: props.theme.colors.transparent,
        },
        ':disabled': {
          bg: props.theme.colors.muted,
        },
    }),
   

  },
  defaultProps: {
    size: 'md',
    variant: 'normal',
  },
};
