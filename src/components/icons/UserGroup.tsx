import { Icon } from '@chakra-ui/react';

export const UserGroup = (props: React.PropsWithChildren) => (
  <Icon width={{base: 4, '2xl': '1.3vw'}} height={{base: 4, '2xl': '1.3vw'}} viewBox='0 0 30 30' {...props}>
    <path
      d='M25.3063 21.2173C25.9662 20.4005 26.3283 19.3834 26.333 18.3333C26.333 17.0957 25.8413 15.9087 24.9662 15.0335C24.091 14.1583 22.904 13.6667 21.6663 13.6667C20.4287 13.6667 19.2417 14.1583 18.3665 15.0335C17.4913 15.9087 16.9997 17.0957 16.9997 18.3333C17.0044 19.3834 17.3665 20.4005 18.0263 21.2173C16.8033 21.8451 15.7613 22.7755 14.9997 23.92C14.238 22.7755 13.196 21.8451 11.973 21.2173C12.6328 20.4005 12.9949 19.3834 12.9997 18.3333C12.9997 17.0957 12.508 15.9087 11.6328 15.0335C10.7577 14.1583 9.57068 13.6667 8.33301 13.6667C7.09533 13.6667 5.90835 14.1583 5.03318 15.0335C4.15801 15.9087 3.66634 17.0957 3.66634 18.3333C3.67108 19.3834 4.03316 20.4005 4.69301 21.2173C3.38177 21.8873 2.28087 22.9062 1.51159 24.1618C0.742301 25.4173 0.334468 26.8608 0.333008 28.3333C0.333008 28.687 0.473484 29.0261 0.723532 29.2761C0.97358 29.5262 1.31272 29.6667 1.66634 29.6667H28.333C28.6866 29.6667 29.0258 29.5262 29.2758 29.2761C29.5259 29.0261 29.6663 28.687 29.6663 28.3333C29.6649 26.8608 29.257 25.4173 28.4878 24.1618C27.7185 22.9062 26.6176 21.8873 25.3063 21.2173ZM8.33301 16.3333C8.72857 16.3333 9.11525 16.4506 9.44415 16.6704C9.77305 16.8902 10.0294 17.2025 10.1808 17.568C10.3321 17.9334 10.3717 18.3356 10.2946 18.7235C10.2174 19.1115 10.0269 19.4678 9.74722 19.7475C9.46752 20.0273 9.11115 20.2177 8.72319 20.2949C8.33523 20.3721 7.93309 20.3325 7.56764 20.1811C7.20219 20.0297 6.88983 19.7734 6.67007 19.4445C6.45031 19.1156 6.33301 18.7289 6.33301 18.3333C6.33301 17.8029 6.54372 17.2942 6.91879 16.9191C7.29387 16.544 7.80257 16.3333 8.33301 16.3333ZM3.16767 27C3.46233 25.854 4.12976 24.8385 5.06487 24.1134C5.99999 23.3883 7.1497 22.9947 8.33301 22.9947C9.51632 22.9947 10.666 23.3883 11.6011 24.1134C12.5363 24.8385 13.2037 25.854 13.4983 27H3.16767ZM21.6663 16.3333C22.0619 16.3333 22.4486 16.4506 22.7775 16.6704C23.1064 16.8902 23.3627 17.2025 23.5141 17.568C23.6655 17.9334 23.7051 18.3356 23.6279 18.7235C23.5507 19.1115 23.3603 19.4678 23.0806 19.7475C22.8008 20.0273 22.4445 20.2177 22.0565 20.2949C21.6686 20.3721 21.2664 20.3325 20.901 20.1811C20.5355 20.0297 20.2232 19.7734 20.0034 19.4445C19.7836 19.1156 19.6663 18.7289 19.6663 18.3333C19.6663 17.8029 19.8771 17.2942 20.2521 16.9191C20.6272 16.544 21.1359 16.3333 21.6663 16.3333ZM16.5023 27C16.7979 25.8551 17.4656 24.841 18.4003 24.1169C19.3351 23.3928 20.4839 22.9999 21.6663 22.9999C22.8487 22.9999 23.9976 23.3928 24.9324 24.1169C25.8671 24.841 26.5348 25.8551 26.8303 27H16.5023ZM8.59967 10.2C8.3875 10.4829 8.2964 10.8385 8.34641 11.1886C8.39642 11.5386 8.58344 11.8545 8.86634 12.0667C9.14924 12.2788 9.50483 12.3699 9.8549 12.3199C10.205 12.2699 10.5208 12.0829 10.733 11.8C11.2298 11.1376 11.874 10.6 12.6145 10.2297C13.3551 9.85944 14.1717 9.66667 14.9997 9.66667C15.8276 9.66667 16.6443 9.85944 17.3848 10.2297C18.1254 10.6 18.7696 11.1376 19.2663 11.8C19.3714 11.9401 19.503 12.0581 19.6537 12.1473C19.8043 12.2365 19.9711 12.2952 20.1444 12.3199C20.3178 12.3447 20.4943 12.3351 20.6639 12.2916C20.8335 12.2482 20.9929 12.1717 21.133 12.0667C21.2731 11.9616 21.3911 11.83 21.4803 11.6793C21.5695 11.5287 21.6282 11.3619 21.6529 11.1886C21.6777 11.0152 21.6681 10.8387 21.6246 10.6691C21.5812 10.4995 21.5047 10.3401 21.3997 10.2C20.6704 9.22653 19.7288 8.43218 18.6463 7.87733C19.3026 7.06156 19.6623 6.047 19.6663 5C19.6663 3.76232 19.1747 2.57534 18.2995 1.70017C17.4243 0.824997 16.2374 0.333332 14.9997 0.333332C13.762 0.333332 12.575 0.824997 11.6998 1.70017C10.8247 2.57534 10.333 3.76232 10.333 5C10.3373 6.04654 10.697 7.06058 11.353 7.876C10.2703 8.43099 9.32859 9.22585 8.59967 10.2ZM14.9997 3C15.3952 3 15.7819 3.1173 16.1108 3.33706C16.4397 3.55682 16.6961 3.86918 16.8474 4.23463C16.9988 4.60008 17.0384 5.00222 16.9612 5.39018C16.8841 5.77814 16.6936 6.13451 16.4139 6.41421C16.1342 6.69392 15.7778 6.8844 15.3899 6.96157C15.0019 7.03874 14.5998 6.99913 14.2343 6.84776C13.8689 6.69638 13.5565 6.44004 13.3367 6.11114C13.117 5.78224 12.9997 5.39556 12.9997 5C12.9997 4.46957 13.2104 3.96086 13.5855 3.58578C13.9605 3.21071 14.4692 3 14.9997 3Z'
      fill='currentColor'
    />
  </Icon>
);

