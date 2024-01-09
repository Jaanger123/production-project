import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared';

interface LangSwitcherProps {
    className?: string
    short?: boolean
}

function LangSwitcher({ className = '', short }: LangSwitcherProps) {
    const { t, i18n } = useTranslation();

    const toggle = (): void => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
        >
            {t(short ? 'short-lng' : 'Язык')}
        </Button>
    );
}

export default LangSwitcher;
