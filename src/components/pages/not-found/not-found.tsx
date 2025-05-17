import { Button, Flex, Text } from '@radix-ui/themes';
import { useRouter } from 'next/router';

import { Image, NavBar } from '@/components';

import spyglassImg from './assets/spyglass.svg';
import styles from './not-found.module.css';

export function NotFoundPage() {
  const router = useRouter();

  const goBackHome = (event: Event) => {
    event.preventDefault();
    router.push('/');
  };

  return (
    <>
      <NavBar />

      <main className={styles.root}>
        <Flex
          align='center'
          justify='center'
          direction='column'
          gap='9'
          style={{ marginLeft: '15vw', marginRight: '15vw' }}
        >
          <div className={styles.container}>
            <div className={styles.leftComponent}>
              <Text weight='medium' size='8'>
                Page not found
              </Text>

              <Text as='div' weight='medium' size='3' color='gray' style={{ marginTop: '3vh' }}>
                The content you were looking for is unavailable or has been removed.
              </Text>

              <Button
                color='blue'
                className={styles.goBackHomeButton}
                onClick={goBackHome as any}
                style={{ cursor: 'pointer', marginTop: '5vh' }}
              >
                GO TO HOMEPAGE
              </Button>
            </div>

            <div className={styles.rightComponent}>
              <Image alt={'glass'} src={spyglassImg} className={styles.spyglassImage} />
            </div>
          </div>
        </Flex>
      </main>
    </>
  );
}
