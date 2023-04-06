// 1
// //создайте класс user с конструктором
// class User {
//     constructor() {
        
//     }
// }

// //инициализируйте параметры из конструкторе
// class User {
//     constructor(name, id) {
//         return name + id
//     }
// }

// 3
// //создайте 2 обьекта user1, user2 используя ранее созданный класс User
// class User {
//     constructor(name, id) {
//         return name + id
//     }
// }

// let user1 = new User()
// let user2 = new User("Ugur", 2012)
// 4
//добавьте в класс user из второго теста метод talk
//метод talk должен выводить в консоли 'I can talk' сообщение при вызове
//создайте обьект user3 используя класс User
//запустите метод talk ранее добавленный в класс User для обьекта user3

class User3 {
    talk(a){
        console.log(a);
    }
}
let user3 = new User3()

console.log(user3.talk("I can talk"));