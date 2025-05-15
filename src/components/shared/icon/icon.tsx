import { Image, ImageProps } from '@/components';

export interface IconProps extends Omit<ImageProps, 'width' | 'src' | 'alt'> {
    name: string
}

export function Icon(props: IconProps) {
    return (
        <Image
            src={`/iconography/${props.name}.svg`}
            alt="Icon"
            {...props}
        />
    )
}