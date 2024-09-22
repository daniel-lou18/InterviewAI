class AudioRecorder {
  private chunks: Blob[] = [];
  private recorder: MediaRecorder;

  constructor(streamOrRecorder: MediaStream | MediaRecorder) {
    if (streamOrRecorder instanceof MediaStream) {
      this.recorder = new MediaRecorder(streamOrRecorder);
    } else {
      this.recorder = streamOrRecorder;
    }
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
