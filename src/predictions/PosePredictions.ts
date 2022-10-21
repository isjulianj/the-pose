import * as poseDetection from '@tensorflow-models/pose-detection';
// Uncomment the line below if you want to use TF.js runtime.
import '@tensorflow/tfjs-backend-webgl';
import {PoseDetector} from "@tensorflow-models/pose-detection/dist/pose_detector";
import {BlazePoseTfjsModelConfig} from "@tensorflow-models/pose-detection/dist/blazepose_tfjs/types";
// Uncomment the line below if you want to use MediaPipe runtime.
// import {PoseDetector} from "@tensorflow-models/pose-detection";
// import '@mediapipe/pose';

interface PosePrecisionInterface {
  initDetector: ()=> void;
  getPredictions: () => void;
  modelLoaded: () => void;

}

export class PosePredictions implements PosePrecisionInterface{
  videoFeed: HTMLVideoElement;
  detector?: PoseDetector;
  confidence: number;
  model: any;
  predictions: any;
  detectorConfig: BlazePoseTfjsModelConfig;
  poses: any[] = [];

  /**
   * Constructor
   * @param videoFeed
   */
  constructor(videoFeed: HTMLVideoElement) {
    this.model = poseDetection.SupportedModels.BlazePose;
    this.detectorConfig = {
      runtime: 'tfjs',
      modelType: 'full',

    };
    this.videoFeed = videoFeed;
    this.confidence = 0.8;
  }

  /**
   * @return Promise<void>
   */
  async initDetector(): Promise<void> {
    if(!this.videoFeed) {
      throw new Error('You need to provide a webcam feed')
    }
    this.detector = await poseDetection.createDetector(this.model, this.detectorConfig);
    console.log(this.detector)
    this.modelLoaded()
  }

  /**
   * @return Promise<void>
   */
  async getPredictions(): Promise<void> {
    if (this.detector) {
      this.poses = await this.detector.estimatePoses(this.videoFeed)
      console.log(this.poses)
    }
    // console.log(this.poses)
  }

  /**
   * @return Promise<void>
   */
  async modelLoaded():Promise<void>  {
    console.log('Model Loaded', this.detector)
  }

  setConfidence(value: number): void {
    this.confidence = value
  }

}
