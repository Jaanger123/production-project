declare module '*.scss' {
    interface IClassName {
        [classname: string]: string;
    }

    const className: IClassName;
    export = className;
}
