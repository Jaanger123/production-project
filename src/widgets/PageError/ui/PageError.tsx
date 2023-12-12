import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared';

import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

const PageError = ({ className = '' }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('something-went-wrong')}</p>
            <Button onClick={reloadPage}>
                {t('refresh-the-page')}
            </Button>
        </div>
    );
};

export default PageError;
