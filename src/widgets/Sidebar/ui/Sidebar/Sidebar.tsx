import { classNames } from 'shared/lib/classNames/classNames';
import LangSwitcher from 'widgets/LangSwitcher/ui/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Button } from 'shared';

import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

const Sidebar = ({ className = '' }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation(['translation']);

    const onToggle = (): void => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
            >
                {t('Сайдбар')}

            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};

export default Sidebar;
