class Employee {
    constructor(image ,firstName, lastName, position, location, bio){
        this.image = image;
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
        this.location = location;
        this.bio = bio;
    }
}

const user1 = new Employee('/michelle-profile-pic.png','Michelle','Cedeno','Co-Founder','Georgetown, TX')
const user2 = new Employee('/laura-pic.png','Laura','Gonzales','Co-Founder','Georgetown, TX')
const user3 = new Employee('/laura-pic.png','Timmy','Turner','Co-Founder','Georgetown, TX')


export const userList = [user1, user2,user3 ]



export default userList;
