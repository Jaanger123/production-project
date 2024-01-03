import { StoryFn, StoryContext } from '@storybook/react';
import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../../../config/storybook/i18next';

export const LanguageDecorator = (Story: StoryFn, context: StoryContext) => {
    const { globals } = context;

    useEffect(() => {
        i18n.changeLanguage(globals.locale);
    }, [globals.locale]);

    return (
        <I18nextProvider i18n={i18n}>
            <Story />
        </I18nextProvider>
    );
};
