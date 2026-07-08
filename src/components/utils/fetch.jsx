const fetchPlayers = async () => {
  const response = await fetch("/players.json");
  return response.json();
};

const playersPromise = fetchPlayers();

export { playersPromise };

// await fetch("/public/players.json")
