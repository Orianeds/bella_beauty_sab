'use client';

import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";


// interface CustomButtonProps extends ButtonProps {
//     variant?: 'solid' | 'primary' | 'outline' | 'ghost';
// }

type CustomButtonProps = Omit<ButtonProps, "variant"> & {
    variant?: 'solid' | 'primary' | 'outline' | 'ghost';
};

export const Button = ({ variant = 'solid', children, ...props}: CustomButtonProps) => {
    // Styles pour chaque variante
    const variantStyles = {
        solid: {
            bg: 'gold.400',
            color: 'white',
            _hover: {
                bg: 'gold.500',
                transform: 'translateY(-2px)',
                shadow: 'lg'
            },
            _active: {
                bg: 'gold.600',
                transform: 'translateY(0)',
            },
        },
        primary: {
            bg: 'primary.400',
            color: 'white',
            _hover: {
                bg: 'primary.500',
                transform: 'translateY(-2px)',
                shadow: 'lg',
            },
            _active: {
                bg: 'primary.600',
                transform: 'translateY(0)',
            },
        },
        outline: {
            borderColor: 'gold.400',
            color: 'gold.400',
            borderWidth: '2px',
            bg: 'transparent',
            _hover: {
                bg: 'gold.50',
                transform: 'translateY(-2px)',
            },
        },
        ghost: {
            color: 'gold.400',
            bg: 'transparent',
            _hover: {
                bg: 'gold.50',
            },
        },
    };

    return (
        <ChakraButton
            fontWeight="semibold"
            borderRadius="lg"
            fontFamily="heading"
            transition="all 0.2s"
            {...variantStyles[variant]}
            {...props}
        >
            {children}
        </ChakraButton>
    )
}