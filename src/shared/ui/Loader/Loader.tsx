import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

const Loader = ({ className = '' }: LoaderProps) => (
    <div className={classNames(cls.loadingWrapper, {}, [className])}>
        <div className={cls.loading}>
            <div />
            <div>
                <div />
            </div>
        </div>

    </div>
);

export default Loader;
