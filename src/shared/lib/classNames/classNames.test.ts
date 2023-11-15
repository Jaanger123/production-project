import { classNames } from './classNames';

describe('classNames', () => {
    test('With first parameter only', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('With parameter "additional"', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2']))
            .toBe(expected);
    });

    test('With parameter "mods"', () => {
        const expected = 'someClass class1 class2 hovered scrollable';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: true },
            ['class1', 'class2'],
        ))
            .toBe(expected);
    });

    test('With parameter "mods" containing "false" properties', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: false },
            ['class1', 'class2'],
        ))
            .toBe(expected);
    });

    test('With parameter "mods" containing empty string as value', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: '' },
            ['class1', 'class2'],
        ))
            .toBe(expected);
    });
});
