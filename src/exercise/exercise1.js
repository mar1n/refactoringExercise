function sortedData(filteredData) {
  return filteredData.sort((a, b) => a.value - b.value);
}

function total(sortedData) {
  return sortedData.reduce((sum, item) => sum + item.value, 0);
}

function average(filteredData) {
  return sortedData(filteredData).length !== 0 ? total(sortedData(filteredData)) / sortedData(filteredData).length : 0;
}

function filteredData(data, greaterThanValue, itemCategory) {
  return data.filter(item => item.value > greaterThanValue && item.category === itemCategory);
}

function processData(data, greaterThanValue, itemCategory) {
  return {
    total: total(sortedData(filteredData(data, greaterThanValue, itemCategory))),
    count: sortedData(filteredData(data, greaterThanValue, itemCategory)).length,
    average: average(filteredData(data, greaterThanValue, itemCategory)),
    sortedData: sortedData(filteredData(data, greaterThanValue, itemCategory)),
  };
}

export { processData };
