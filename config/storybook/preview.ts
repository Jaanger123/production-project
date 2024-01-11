import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import {
    LanguageDecorator,
} from '../../src/shared/config/storybook/LanguageDecorator/LanguageDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import i18n from './i18next';

const preview: Preview = {
    // globalTypes: {
    //     locale: {
    //         name: 'Locale',
    //         description: 'Internationalization locale',
    //         toolbar: {
    //             icon: 'globe',
    //             items: [
    //                 { value: 'en', title: 'English' },
    //                 { value: 'ru', title: 'Русский' },
    //             ],
    //             showName: true,
    //         },
    //     },
    // },
    parameters: {
        // i18n,
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator],
};

export default preview;
