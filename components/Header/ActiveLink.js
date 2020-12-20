import { withRouter } from 'next/router';
import cx from 'classnames';
import Link from 'next/link';
import React, { Children } from 'react';
import styles from '../Header/Header.module.scss';
import { useEffect } from 'react';

const ActiveLink = ({
    router,
    children,
    href,
    activeClassName,
    ...otherProps
}) => {
    const child = Children.only(children);
    const className = cx(child.props.className, {
        [styles['navbarItem__selected']]: router.pathname === href,
    });

    return (
        <Link href={href} {...otherProps}>
            {React.cloneElement(child, { className })}
        </Link>
    );
};

export default withRouter(ActiveLink);
