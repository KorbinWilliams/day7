let users = [
  {
    namer: 'Korbin',
    role: 'student'
  },
  {
    name: 'D$',
    role: 'TA'
  },
  {
    name: 'Mark',
    role: 'Teacher'
  }
]

function greetAllUsers() {
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    console.log(`Hello ${user.name}`)
  }
}

greetAllUsers();