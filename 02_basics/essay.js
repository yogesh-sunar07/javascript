const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter your name: ", (name) => {
  r1.question("Enter your age: ", (age) => {
    r1.question("Enter your gender: ", (gender) => {
      r1.question("Enter your address: ", (address) => {
        r1.question("Enter your education: ", (education) => {
          r1.question("Enter your occupation: ", (occupation) => {
            r1.question("Enter your hobbies (comma separated): ", (hobbies) => {
              r1.question("Enter your skills: ", (skills) => {
                r1.question("Enter your email: ", (email) => {
                  r1.question("Enter your phone: ", (phone) => {
                    r1.question("Enter your goals: ", (goals) => {

                        const user = {
                        name,
                        age,
                        gender,
                        address,
                        education,
                        occupation,
                        hobbies: hobbies.split(",").map(h => h.trim()),
                        skills,
                        email,
                        phone,
                        goals
                        };

                        console.log("\n----- User Essay -----\n");

                        const essay =
                        `${user.name} is a ${user.age}-year-old ${user.gender} living in ${user.address}. 
                        ${user.name} is pursuing ${user.education} and works as a ${user.occupation}. 
                        In free time, ${user.name} enjoys ${user.hobbies.join(", ")}. 
                        Some important skills possessed by ${user.name} include ${user.skills}. 
                        For communication, ${user.name} can be reached via email at ${user.email} or by phone at ${user.phone}. 
                        Looking ahead, ${user.name}'s goals are ${user.goals}. 
                        With dedication and continuous learning, ${user.name} hopes to achieve success and make a positive impact in life.`;

                        console.log(essay);

                        r1.close();
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});


//++++++chatgpt using async/await+++++++++


/*const readline = require("readline/promises");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  const user = {
    name: await rl.question("Enter your name: "),
    age: await rl.question("Enter your age: "),
    gender: await rl.question("Enter your gender: "),
    address: await rl.question("Enter your address: "),
    education: await rl.question("Enter your education: "),
    occupation: await rl.question("Enter your occupation: "),
    hobbies: (await rl.question("Enter your hobbies (comma separated): "))
      .split(",")
      .map(h => h.trim()),
    skills: await rl.question("Enter your skills: "),
    email: await rl.question("Enter your email: "),
    phone: await rl.question("Enter your phone: "),
    goals: await rl.question("Enter your goals: "),
  };

  console.log(user);
  rl.close();
}

main(); */