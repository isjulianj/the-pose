import {ThreeLoadModelInterface} from "./ThreeLoadModelInterface";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader";
import {Group} from "three";

export class ZombieModel implements ThreeLoadModelInterface {
    loader: GLTFLoader;
    dracoLoader: DRACOLoader;
    modelPath: string;
    model?: Group

    constructor(url: URL) {
        this.loader = new GLTFLoader();
        this.dracoLoader = new DRACOLoader();
        // this.dracoLoader.setDecoderPath('three/examples/js/libs/draco/')
        // this.loader.setDRACOLoader(this.dracoLoader)
        this.modelPath = url.pathname
    }


    /**
     * return the model group
     */
    getModel(): Group {
        if (this.model) {
            return this.model
        }
        throw new Error('no model Loaded')
    }

    /**
     * Load the model
     */
    async loadModel(): Promise<void> {
        return new Promise((resolve, _)=> {
            this.loader.load(this.modelPath, (gltf) => {
                this.model = gltf.scene
                resolve()
            })
        })


    }
}
