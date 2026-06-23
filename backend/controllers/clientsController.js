let clients = [
  {
    id: 1,
    name: 'Mercado Central',
    city: 'Castanhal',
  },
  {
    id: 2,
    name: 'Comercial Oliveira',
    city: 'Paragominas',
  },
];

const getClients = (req, res) => {
  res.json(clients);
};

const getClientById = (req, res) => {
  const { id } = req.params;

  const client = clients.find(
    (client) => client.id === Number(id)
  );

  if (!client) {
    return res.status(404).json({
      message: 'Cliente não encontrado',
    });
  }

  return res.json(client);
};

const createClient = (req, res) => {
  const {name, city} = req.body;

  if (!name || !city) {
    return res.status(400).json({
      message: 'Nome e cidade são obrigatórios',
    });
  }

  const newClient = {
    id: clients.length + 1,
    name,
    city,
  };

  clients.push(newClient);

  return res.status(201).json({
    message: 'Cliente criado com sucesso',
    client: newClient,
  });
};

const updateClient = (req, res) => {
  const { id } = req.params;
  const { name, city } = req.body;

  const client = clients.find(
    (client) => client.id === Number(id)
  );

  if (!client) {
    return res.status(404).json({
      message: 'Cliente não encontrado',
    });
  }

  if (name) {
    client.name = name;
  }

  if (city) {
    client.city = city;
  }

  return res.json({
    message: 'Cliente atualizado com sucesso',
    client,
  });
};

const deleteClient = (req, res) => {
  const {id} = req.params;

  const client = clients.find(
    (client) => client.id === Number(id)
  );

  if (!client) {
    return res.status(404).json({
      message: 'Cliente não encontrado',
    });
  }

  clients = clients.filter(
    (client) => client.id !== Number(id)
  );

  return res.json({
    messasge: 'Cliente removido com sucesso',
  });
};

module.exports = {
  getClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
};