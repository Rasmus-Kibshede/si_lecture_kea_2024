import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { mockAuthers } from '__mocks__/mockAuthers';
import { mockBooks } from '__mocks__/mockBooks';
import { Book } from 'src/graphql';

@Resolver('Book')
export class BooksResolver {
  @Query(() => [Book])
  books() {
    return mockBooks;
  }

  @Query(() => Book)
  book(@Args('id') id: string) {
    return mockBooks.find((book) => book.id === id);
  }

  @ResolveField()
  author(@Parent() book) {
    return mockAuthers.find((author) => author.id === book.authorId);
  }

  @Mutation(() => Book)
  createBook(
    @Args('title') title: string,
    @Args('releaseYear') releaseYear: number,
    @Args('authorId') authorId: string,
  ) {
    const book: Book = {
      id: String(mockBooks.length + 1),
      title,
      releaseYear,
      authorId,
    };

    mockBooks.push(book);
    return book;
  }

  @Mutation(() => Book)
  updateBook(
    @Args('id') id: string,
    @Args('title') title: string,
    @Args('releaseYear') releaseYear: number,
    @Args('authorId') authorId: string,
  ) {
    const book = mockBooks.find((book) => book.id === id);
    book.title = title;
    book.releaseYear = releaseYear;
    book.authorId = authorId;
    return book;
  }

  @Mutation(() => Book)
  deleteBook(@Args('id') id: string) {
    const bookIndex = mockBooks.findIndex((book) => book.id === id);
    const book = mockBooks[bookIndex];
    mockBooks.splice(bookIndex, 1);
    return book;
  }
}
