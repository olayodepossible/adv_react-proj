class DataApi {
  constructor(rawData) {
    this.rawData = rawData;
  }

  mapArrayToObj(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }
  getArticles() {
    return this.mapArrayToObj(this.rawData.articles);
  }
  getAuthors() {
    return this.mapArrayToObj(this.rawData.authors);
  }
}

export default DataApi;
