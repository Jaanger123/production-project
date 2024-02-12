/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared';
import { useTranslation } from 'react-i18next';
import Modal from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar = ({ className = '' }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('sign-in')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laboriosam sint consequuntur adipisci laborum omnis ratione
                facere sequi aperiam cupiditate ducimus, animi quis eaque
                inventore tempora ullam. Omnis doloribus eos cum.
            </Modal>
        </div>
    );
};

export default Navbar;
