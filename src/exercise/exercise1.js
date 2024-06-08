function sortedData(filteredData) {
  return filteredData.sort((a, b) => a.value - b.value);
}

function total(sortedData) {
  return sortedData.reduce((sum, item) => sum + item.value, 0);
}

function average(filteredData) {
  return sortedData(filteredData).length !== 0 ? total(sortedData(filteredData)) / sortedData(filteredData).length : 0;
}

//const count = 
function processData(data) {
  let filteredData = [];
  for (let item of data) {
    if (item.value > 10) {
      filteredData.push(item);
    }
  }

  let report = {
    total: total(sortedData(filteredData)),
    count: sortedData(filteredData).length,
    average: average(filteredData),
    sortedData: sortedData(filteredData),
  };

  return report;
}

export { processData };
