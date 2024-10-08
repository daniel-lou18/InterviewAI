export default class Reader {
  private reader: FileReader;

  constructor(private blob: Blob, reader?: FileReader) {
    this.reader = reader || new FileReader();
  }

  public readFile(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.reader.onload = () => {
        const audioData = this.reader.result;
        resolve(audioData as string);
      };

      this.reader.onerror = () => {
        reject(new Error("Could not read file"));
      };

      this.reader.readAsDataURL(this.blob);
    });
  }
}
