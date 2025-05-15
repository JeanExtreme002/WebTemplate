import {
	HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import { Button, DropdownMenu, Flex, Link, Separator, TabNav } from "@radix-ui/themes";

import styles from "./navbar.module.css"
import { WebsiteLogo } from "./website-logo";

export function NavBar() {
  const getLoginButton = () => {
    return (
      <Button className={styles.loginButton} variant="surface">SIGN IN</Button>
    )
  }

  return <>
    <Flex className={styles.root}>
      <div className={styles.mobileContainer}>
        <div className={styles.logo}>
          <WebsiteLogo/>
        </div>
        {getLoginButton()}
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="outline" color="sky">
              <HamburgerMenuIcon />
            </Button>
          </DropdownMenu.Trigger>
            <DropdownMenu.Content className={styles.dropDownMenu} sideOffset={5}>
              <DropdownMenu.Item>
                <Link href="#home">HOME</Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Link href="/">CONTACT</Link>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>

      <div className={styles.desktopContainer}>
        <TabNav.Root className={styles.container}>
          <div className={styles.logo}>
            <WebsiteLogo/>
          </div>
          
          <TabNav.Link className={styles.tabNavLink} href="#home">HOME</TabNav.Link>
          <TabNav.Link className={styles.tabNavLink} href="/">CONTACT</TabNav.Link>
          <TabNav.Link href="/">{getLoginButton()}</TabNav.Link>
        </TabNav.Root>
      </div>
      <Separator size="4" orientation={"horizontal"}/>
    </Flex>
  </>
}
