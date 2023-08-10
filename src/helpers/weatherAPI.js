// clicar no botão de pesquisa/ função recebe um parametro do input,
// ela vai retornar uma lista de cidades que correspondam ao termo
// export const searchCities = (termoDeBusca) => {

// };

export async function searchCities(term) {
  const apiKey = import.meta.env.VITE_TOKEN;
  const url = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${apiKey}&q=${term}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log('Dados da API:', data); // Adicione este console.log para ver a resposta da API

    if (data.length === 0) {
      window.alert('Nenhuma cidade encontrada');
      console.error('Erro ao buscar cidades:', error);
      return [];
    }

    return data;
  } catch (error) {
    console.error('Erro ao buscar cidades:', error);
    return [];
  }
}

export const getWeatherByCity = (/* cityURL */) => {
//   seu código aqui
};

//
