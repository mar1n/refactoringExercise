function sortedData(filteredData) {
  return filteredData.sort((a, b) => a.value - b.value);
}

function total(sortedData) {
  return sortedData.reduce((sum, item) => sum + item.value, 0);
}

function average(filteredData) {
  return sortedData(filteredData).length !== 0 ? total(sortedData(filteredData)) / sortedData(filteredData).length : 0;
}

function filteredData(data) {
  let filteredData = [];
  for (let item of data) {
    if (item.value > 10) {
      filteredData.push(item);
    }
  }

  return filteredData;
}

function processData(data) {
  return {
    total: total(sortedData(filteredData(data))),
    count: sortedData(filteredData(data)).length,
    average: average(filteredData(data)),
    sortedData: sortedData(filteredData(data)),
  };
}

export { processData };
