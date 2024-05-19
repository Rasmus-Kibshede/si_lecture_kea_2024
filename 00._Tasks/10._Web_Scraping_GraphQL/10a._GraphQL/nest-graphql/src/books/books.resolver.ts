import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
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
}
