const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()

  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()

  },
  {
    text: "Feels great to be PFA player three times",
    user: "Mohammed Salah",
    added: new Date()

  },
   {
    text: "You can't spell millions without Ls",
    user: "Leslie",
    added: new Date()

  }
];

messages.sort((a, b) => b.added - a.added);

module.exports = messages; 