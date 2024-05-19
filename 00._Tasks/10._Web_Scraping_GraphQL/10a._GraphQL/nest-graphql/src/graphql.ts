
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class Book {
    id: string;
    title?: Nullable<string>;
    releaseYear?: Nullable<number>;
    authorId: string;
    author?: Nullable<Author>;
}

export class Author {
    id: string;
    name?: Nullable<string>;
    books?: Nullable<Nullable<Book>[]>;
}

export class ErrorMessage {
    message?: Nullable<string>;
    errorCode?: Nullable<number>;
}

export class SuccessMessage {
    message?: Nullable<string>;
}

export abstract class IQuery {
    abstract books(): Nullable<Nullable<Book>[]> | Promise<Nullable<Nullable<Book>[]>>;

    abstract book(id: string): Nullable<Book> | Promise<Nullable<Book>>;

    abstract authors(): Nullable<Nullable<Author>[]> | Promise<Nullable<Nullable<Author>[]>>;

    abstract author(id: string): Nullable<Author> | Promise<Nullable<Author>>;
}

export abstract class IMutation {
    abstract createBook(authorId: string, title: string, releaseYear?: Nullable<number>): Nullable<Book> | Promise<Nullable<Book>>;

    abstract updateBook(id: string, authorId?: Nullable<string>, title?: Nullable<string>, releaseYear?: Nullable<number>): Nullable<Book> | Promise<Nullable<Book>>;

    abstract deleteBook(id: string): Nullable<SuccessMessage> | Promise<Nullable<SuccessMessage>>;
}

export abstract class ISubscription {
    abstract bookAdded(): Nullable<Book> | Promise<Nullable<Book>>;
}

type Nullable<T> = T | null;
