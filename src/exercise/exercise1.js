function processData(data) {
  let filteredData = [];
  for (let item of data) {
    if (item.value > 10) {
      filteredData.push(item);
    }
  }

  let sortedData = filteredData.sort((a, b) => a.value - b.value);

  let total = sortedData.reduce((sum, item) => sum + item.value, 0);
  let count = sortedData.length;
  let average = count !== 0 ? total / count : 0;

  let report = {
    total: total,
    count: count,
    average: average,
    sortedData: sortedData,
  };

  return report;
}

export { processData };
