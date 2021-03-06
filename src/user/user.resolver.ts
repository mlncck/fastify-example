import { Query, Resolver } from '@nestjs/graphql';

@Resolver('User')
export class UserResolver {
  @Query(() => String)
  getUser() {
    return 'User';
    console.log('User-test');
  }
}
