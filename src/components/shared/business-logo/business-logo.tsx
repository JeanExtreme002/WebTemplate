import { Image, ImageProps } from '@/components';

export function BusinessLogo(props: Omit<ImageProps, 'width' | 'src' | 'alt'>) {
  return <Image src='/logo.png' alt='Logo' {...props} />;
}
