import { exit } from 'process';
import { AppDataSource } from './data-source.js';
import { Post } from './entity/post.js';

AppDataSource.initialize()
  .then(async () => {
    // console.log("Inserting a new user into the database...")
    // const user = new User()
    // user.firstName = "Timber"
    // user.lastName = "Saw"
    // user.age = 25
    // await AppDataSource.manager.save(user)
    // console.log("Saved a new user with id: " + user.id)

    // console.log("Loading users from the database...")
    // const users = await AppDataSource.manager.find(User)
    // console.log("Loaded users: ", users)

    // console.log("Here you can setup and run express / fastify / any other framework.")

    const post = new Post();
    post.title = 'Post 1';
    post.text = 'Text 1';
    await AppDataSource.manager.save(post);

    const posts = await AppDataSource.manager.find(Post);
    console.log('Loaded users: ', posts);

    exit();
  })
  .catch((error) => console.log(error));
