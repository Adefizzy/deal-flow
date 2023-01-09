import { Icon, Box } from '@chakra-ui/react';
import Clickable from '../Clickable';

export const Settings = (props: React.PropsWithChildren) => (
  <Clickable>
    <Box borderBottom='4px solid transparent' my={4} ml={4}>
    <Icon width={{base: 4, '2xl': '1.3vw'}} height={{base: 4, '2xl': '1.3vw'}} viewBox='0 0 27 28' color='gray3'>
      <path
        d='M24.5335 14.88C24.3198 14.6367 24.2019 14.3239 24.2019 14C24.2019 13.6761 24.3198 13.3633 24.5335 13.12L26.2402 11.2C26.4282 10.9902 26.545 10.7263 26.5738 10.446C26.6025 10.1658 26.5417 9.88358 26.4002 9.64L23.7335 5.02667C23.5934 4.78336 23.38 4.5905 23.1239 4.47558C22.8677 4.36066 22.5818 4.32955 22.3069 4.38667L19.8002 4.89334C19.4812 4.95924 19.1492 4.90612 18.8667 4.744C18.5842 4.58188 18.3709 4.32198 18.2669 4.01334L17.4535 1.57334C17.3641 1.30851 17.1937 1.07849 16.9664 0.915792C16.7391 0.753094 16.4664 0.665948 16.1869 0.666669H10.8535C10.5628 0.651493 10.275 0.731904 10.0343 0.895621C9.79351 1.05934 9.61296 1.29736 9.52019 1.57334L8.77352 4.01334C8.66952 4.32198 8.45615 4.58188 8.17367 4.744C7.89119 4.90612 7.55914 4.95924 7.24019 4.89334L4.66685 4.38667C4.40625 4.34984 4.14059 4.39097 3.90332 4.50486C3.66605 4.61875 3.46779 4.80031 3.33352 5.02667L0.666854 9.64C0.521734 9.88087 0.456483 10.1615 0.480431 10.4416C0.504378 10.7218 0.616297 10.9873 0.800187 11.2L2.49352 13.12C2.70728 13.3633 2.82517 13.6761 2.82517 14C2.82517 14.3239 2.70728 14.6367 2.49352 14.88L0.800187 16.8C0.616297 17.0127 0.504378 17.2782 0.480431 17.5584C0.456483 17.8386 0.521734 18.1191 0.666854 18.36L3.33352 22.9733C3.47365 23.2166 3.68701 23.4095 3.94319 23.5244C4.19937 23.6393 4.48529 23.6705 4.76019 23.6133L7.26685 23.1067C7.58581 23.0408 7.91786 23.0939 8.20034 23.256C8.48282 23.4181 8.69619 23.678 8.80019 23.9867L9.61352 26.4267C9.70629 26.7026 9.88685 26.9407 10.1276 27.1044C10.3684 27.2681 10.6561 27.3485 10.9469 27.3333H16.2802C16.5597 27.3341 16.8324 27.2469 17.0597 27.0842C17.287 26.9215 17.4574 26.6915 17.5469 26.4267L18.3602 23.9867C18.4642 23.678 18.6776 23.4181 18.96 23.256C19.2425 23.0939 19.5746 23.0408 19.8935 23.1067L22.4002 23.6133C22.6751 23.6705 22.961 23.6393 23.2172 23.5244C23.4734 23.4095 23.6867 23.2166 23.8269 22.9733L26.4935 18.36C26.6351 18.1164 26.6959 17.8343 26.6671 17.554C26.6384 17.2737 26.5216 17.0098 26.3335 16.8L24.5335 14.88ZM22.5469 16.6667L23.6135 17.8667L21.9069 20.8267L20.3335 20.5067C19.3732 20.3104 18.3743 20.4735 17.5263 20.9651C16.6783 21.4566 16.0404 22.2425 15.7335 23.1733L15.2269 24.6667H11.8135L11.3335 23.1467C11.0267 22.2158 10.3887 21.43 9.54073 20.9384C8.69276 20.4468 7.69381 20.2837 6.73352 20.48L5.16019 20.8L3.42685 17.8533L4.49352 16.6533C5.14946 15.92 5.5121 14.9706 5.5121 13.9867C5.5121 13.0028 5.14946 12.0534 4.49352 11.32L3.42685 10.12L5.13352 7.18667L6.70685 7.50667C7.66715 7.70297 8.66609 7.53984 9.51406 7.04827C10.362 6.55669 11 5.77088 11.3069 4.84L11.8135 3.33334H15.2269L15.7335 4.85334C16.0404 5.78421 16.6783 6.57002 17.5263 7.0616C18.3743 7.55318 19.3732 7.7163 20.3335 7.52L21.9069 7.2L23.6135 10.16L22.5469 11.36C21.8983 12.0917 21.5401 13.0356 21.5401 14.0133C21.5401 14.9911 21.8983 15.935 22.5469 16.6667ZM13.5202 8.66667C12.4654 8.66667 11.4342 8.97946 10.5571 9.5655C9.68008 10.1515 8.9965 10.9845 8.59283 11.959C8.18916 12.9336 8.08354 14.0059 8.28933 15.0405C8.49512 16.0751 9.00307 17.0254 9.74895 17.7712C10.4948 18.5171 11.4451 19.0251 12.4797 19.2309C13.5143 19.4366 14.5866 19.331 15.5612 18.9274C16.5357 18.5237 17.3687 17.8401 17.9547 16.963C18.5407 16.086 18.8535 15.0548 18.8535 14C18.8535 12.5855 18.2916 11.229 17.2914 10.2288C16.2912 9.22857 14.9347 8.66667 13.5202 8.66667ZM13.5202 16.6667C12.9928 16.6667 12.4772 16.5103 12.0387 16.2173C11.6001 15.9242 11.2583 15.5078 11.0565 15.0205C10.8547 14.5332 10.8019 13.997 10.9048 13.4798C11.0077 12.9625 11.2616 12.4873 11.6346 12.1144C12.0075 11.7414 12.4827 11.4875 12.9999 11.3846C13.5172 11.2817 14.0534 11.3345 14.5407 11.5363C15.0279 11.7382 15.4444 12.08 15.7374 12.5185C16.0305 12.957 16.1869 13.4726 16.1869 14C16.1869 14.7072 15.9059 15.3855 15.4058 15.8856C14.9057 16.3857 14.2274 16.6667 13.5202 16.6667Z'
        fill='currentColor'
      />
    </Icon>
    </Box>
  </Clickable>
);