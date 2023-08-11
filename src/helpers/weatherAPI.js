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
//= ======================================================================
export async function getWeatherByCity(cityURL) {
  const apiKey = import.meta.env.VITE_TOKEN; // Obtém a chave de API do arquivo .env
  const url = `http://api.weatherapi.com/v1/current.json?lang=pt&key=${apiKey}&q=${cityURL}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const weatherData = {
      temp: data.current.temp_c,
      condition: data.current.condition.text,
      icon: data.current.condition.icon,
    };

    return weatherData;
  } catch (error) {
    console.error('Erro ao buscar o tempo atual:', error);
    return null;
  }
}
