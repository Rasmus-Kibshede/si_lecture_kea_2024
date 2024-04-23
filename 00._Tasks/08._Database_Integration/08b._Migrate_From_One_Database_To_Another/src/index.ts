import 'reflect-metadata';
import { exit } from 'process';
import { AppDataSource } from './data-source.js';
import { Post } from './entity/post.js';
import { User } from './entity/user.js';

AppDataSource.initialize()
  .then(async () => {
    const user1 = new User();
    user1.firstname = 'John';
    user1.lastname = 'Doe';
    user1.email = 'johnDoe@testmail.com';
    user1.password = '4321@1234';

    await AppDataSource.manager.save(user1);

    const post1 = new Post();
    post1.title = 'Post 1';
    post1.text = 'Text 1';
    post1.user = user1;

    await AppDataSource.manager.save(post1);

    const users = await AppDataSource.manager.find(User);
    const posts = await AppDataSource.manager.find(Post);

    console.log('Loaded users: ', users);
    console.log('Loaded posts: ', posts);

    exit();
  })
  .catch((error) => console.log(error));
