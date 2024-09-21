class AudioRecorder {
  private chunks: Blob[] = [];
  private recorder: MediaRecorder;

  constructor(private stream: MediaStream, recorder?: MediaRecorder) {
    this.recorder = recorder || new MediaRecorder(stream);
    this.initRecorder();
  }

  private initRecorder() {
    this.recorder.ondataavailable = (event: BlobEvent) =>
      this.chunks.push(event.data);
  }

  public startRecording() {
    this.chunks = [];
    this.recorder.start();
  }

  public stopRecording() {
    return new Promise<Blob>((resolve) => {
      this.recorder.onstop = () => {
        const blob = new Blob(this.chunks);
        resolve(blob);
      };
      this.recorder.stop();
    });
  }
}

export default AudioRecorder;
