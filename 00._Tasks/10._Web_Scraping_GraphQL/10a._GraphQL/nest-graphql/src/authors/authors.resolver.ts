// authors.resolver.ts
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { mockAuthers } from '__mocks__/mockAuthers';
import { mockBooks } from '__mocks__/mockBooks';
import { Author } from 'src/graphql';

@Resolver('Author')
export class AuthorsResolver {
  @Query(() => [Author])
  authors() {
    return mockAuthers;
  }

  @Query(() => Author)
  author(@Args('id') id: string) {
    return mockAuthers.find((author) => author.id === id);
  }

  @ResolveField()
  books(@Parent() author) {
    return mockBooks.filter((book) => book.authorId === author.id);
  }
}
