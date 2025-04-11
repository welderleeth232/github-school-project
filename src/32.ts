class ExampleClass {
  constructor(private data: any) {}

  async fetchData() {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error(`HTTP error! status ${response.status}`);
    }
    return response.json();
  }

  getData(): any {
    this.fetchData();
    return this.data;
  }
}
