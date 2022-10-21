export class WebCam {
    webcam: HTMLVideoElement;
    constraints: MediaStreamConstraints;

    constructor(videoElement: HTMLElement) {
        this.webcam = videoElement as HTMLVideoElement
        this.constraints = {audio: false, video: true}
    }

    initFeed = (): Promise<HTMLVideoElement | string>  =>  {
       return new Promise((resolve, reject): void | string => {
            if (navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices
                    .getUserMedia(this.constraints)
                    .then( (mediaStream) => {
                        this.webcam.srcObject = mediaStream
                        this.webcam.onloadedmetadata =  (_) => {
                            this.webcam.width = this.webcam.videoWidth;
                            this.webcam.height = this.webcam.videoHeight;
                            this.webcam.play()
                        }
                        resolve(this.webcam as HTMLVideoElement)
                    })
                    .catch(function (err) {
                        reject(err.name + ': ' + err.message)
                    })
            }
        })

    }


}
