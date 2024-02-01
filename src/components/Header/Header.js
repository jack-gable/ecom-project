"use client";
import React from "react";
import styled from "styled-components";
import { QUERIES } from "@/constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import NavLink from "../NavLink";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import UnstyledButton from "../UnstyledButton";
import MobileMenu from "../MobileMenu";
import * as Dialog from "@radix-ui/react-dialog";

function Header() {
	const [showMobileMenu, setShowMobileMenu] = React.useState(false);

	return (
		<header>
			<SuperHeader />
			<MainHeader>
				<div>
					<Logo />
				</div>
				<DesktopNav>
					<NavLink href="/sale">Sale</NavLink>
					<NavLink href="/new">New&nbsp;Releases</NavLink>
					<NavLink href="/men">Men</NavLink>
					<NavLink href="/women">Women</NavLink>
					<NavLink href="/kids">Kids</NavLink>
				</DesktopNav>
				<DesktopShoppingBagButton>
					<Icon id="shopping-bag" />
					<VisuallyHidden>Open cart</VisuallyHidden>
				</DesktopShoppingBagButton>
				<MobileActions>
					<ShoppingBagButton>
						<Icon id="shopping-bag" />
						<VisuallyHidden>Open cart</VisuallyHidden>
					</ShoppingBagButton>
					<UnstyledButton>
						<Icon id="search" />
						<VisuallyHidden>Search</VisuallyHidden>
					</UnstyledButton>

					<Dialog.Root
						open={showMobileMenu}
						onOpenChange={() => setShowMobileMenu(!showMobileMenu)}
					>
						<Dialog.Trigger asChild>
							<UnstyledButton>
								<Icon id="menu" />
								<VisuallyHidden>Open menu</VisuallyHidden>
							</UnstyledButton>
						</Dialog.Trigger>
						<MobileMenu />
					</Dialog.Root>
				</MobileActions>
			</MainHeader>
		</header>
	);
}

const MainHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	padding: 18px 32px;
	border-bottom: 1px solid var(--color-gray-300);
	overflow: auto;

	@media ${QUERIES.tabletAndSmaller} {
		justify-content: space-between;
		align-items: center;
		border-top: 4px solid var(--color-gray-900);
	}

	@media ${QUERIES.phoneAndSmaller} {
		padding-left: 16px;
		padding-right: 16px;
	}
`;

const DesktopNav = styled.nav`
	display: flex;
	gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
	margin: 0px 48px;

	@media ${QUERIES.tabletAndSmaller} {
		display: none;
	}
`;

const DesktopShoppingBagButton = styled(UnstyledButton)`
	transform: translateX(-2px);

	@media ${QUERIES.tabletAndSmaller} {
		display: none;
	}
`;

const ShoppingBagButton = styled(UnstyledButton)`
	transform: translateX(-2px);
`;

const MobileActions = styled.div`
	display: none;

	@media ${QUERIES.tabletAndSmaller} {
		gap: 32px;
		display: flex;
	}

	@media ${QUERIES.phoneAndSmaller} {
		gap: 16px;
	}
`;

export default Header;
