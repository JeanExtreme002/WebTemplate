import { Flex, Link } from '@radix-ui/themes';

import { BusinessLogo } from '@/components';

import styles from './navbar.module.css';

export function WebsiteLogo() {
  return (
    <>
      <Flex>
        <Link underline='none' href='/' style={{ cursor: 'pointer' }}>
          <BusinessLogo className={styles.logoImg} />
        </Link>
      </Flex>
    </>
  );
}
