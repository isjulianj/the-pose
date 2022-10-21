// import {PosePredictions} from "./predictions/PosePredictions";
import {ZombieModel} from "./model/ZombieModel";
import {PoseScene} from "./Renderer/PoseScene";
import {WebCam} from "../camera/Webcam";

// variables
const threeCanvas = document.getElementById('canvas');
const webcamElement = document.getElementById('videoElement');
let threeRender: PoseScene;
// let poseDetector: PosePredictions;
let webcamFeed: WebCam;
let zombie: ZombieModel;

// webcam


// Pose detector



async function init() {
    if (!threeCanvas || !webcamElement) {
        return
    }

    // Webcam
    webcamFeed = new WebCam(webcamElement);
    // await webcamFeed.initFeed();

    // pose detection
    // poseDetector = new PosePredictions(webcamFeed);
    threeRender = new PoseScene(threeCanvas)

    // load Zombie Model
    const zombieGLBPath = new URL('../assets/models/gltf/zombie.glb', import.meta.url);
    zombie = new ZombieModel(zombieGLBPath);
    await zombie.loadModel().then(_ => {
        threeRender = new PoseScene(threeCanvas);
        // add the model to the scene
        threeRender.addToScene(zombie.getModel())
        zombie.model?.position?.setY(-1)
    })


    // await poseDetector.initDetector()
    threeRender.run()


}

function animate() {
    threeRender.run()
    threeRender.setLightPositionToCamera()
    // poseDetector.getPredictions()
    requestAnimationFrame(animate)
}

init().then(_ => {
    animate()
})










