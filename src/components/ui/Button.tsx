import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    className?: string;
    onClick?: () => void;
}

export const Button = ({ children, variant = 'primary', className = '', onClick }: ButtonProps) => {
    const baseStyles = "px-6 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 active:scale-95";

    const variants = {
        primary: "bg-primary text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:bg-primary/90",
        secondary: "bg-secondary text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:bg-secondary/90",
        outline: "border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm",
        ghost: "bg-transparent hover:bg-white/5"
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
};
