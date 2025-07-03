"use client";
import {useRouter} from 'next/navigation';
import {Button} from '@/components/ui/button';
import { ButtonHTMLAttributes } from 'react';

type Props = {
    title: string;
    className?: string;
    variant?: 'default' | 'outline' | 'ghost' | 
    'link' | 'destructive' | 'secondary' 
    | null | undefined;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const BackButton = ({title, className, variant, ...props}: Props) => {
    const router = useRouter();
    return (
        <Button
            variant={variant || 'outline'}
            className={className}
            onClick={() => router.back()}
            title={title}
   
        >
            {title}
        </Button>
    )
}