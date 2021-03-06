import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    UserModule,
    PostModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'user.gql',
      debug: true,
      path: 'graphql/user',
      playground: false,
      include: [UserModule],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'Post.gql',
      debug: true,
      path: 'graphql/post',
      playground: false,
      include: [PostModule],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
