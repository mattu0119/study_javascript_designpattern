import { injectable, inject, Container } from 'inversify';
import 'reflect-metadata';

const USER_REPOS_KEY = Symbol('userRepository');
const GREETER_KEY = Symbol('greeter')

interface User { name: string; }
interface UserRepository {
    getById(id: string): User;
}

@injectable()
class UserRepositoryImpl implements UserRepository {
    getById(id: string): User {
        // 外部に依存した実装
        return { name: '花子' };
    }
}

@injectable()
class Greeter {
    constructor(
        @inject(USER_REPOS_KEY)
        private userRepos: UserRepository,
    ) {}
    greet(id: string) {
        const user = this.userRepos.getById(id);
        console.log(`hello ${user.name}`);
    }
}

// コンテナにDI対象のクラスたちを追加していく
const container = new Container();
container.bind(USER_REPOS_KEY).to(UserRepositoryImpl);
container.bind(GREETER_KEY).to(Greeter);

const greeter = container.get<Greeter>(GREETER_KEY);
greeter.greet('sample id');
// → hello 花子
