import { Query, Resolver } from '@nestjs/graphql';

@Resolver('Post')
export class PostResolver {
  @Query(() => String)
  getPost() {
    console.log('Post-test');
    return 'post';
  }
}
