let { people } = require("../data");

const getPeople = (req, res) => {
  res.status(200).json({ sucess: true, data: people });
};

const createPerson = (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res
      .status(404)
      .json({ success: false, msg: "please provide some credentials" });
  }

  people.push({ id: people.length + 1, name: name });
  res.status(201).json({ success: true, data: people });
};

const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(401)
      .json({ success: false, msg: `No person with id:${id}` });
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }

    return person;
  });

  res.status(201).json({ success: true, data: newPeople });
};

const deletePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(401)
      .json({ success: false, msg: `No person with id:${id}` });
  }

  const newPeople = people.filter((person) => person.id !== Number(id));

  res.status(200).json({ success: true, data: newPeople });
};

module.exports = { getPeople, createPerson, updatePerson, deletePerson};
