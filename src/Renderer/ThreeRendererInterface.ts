import {Object3D} from "three";

export interface ThreeRendererInterface {
    init: () => Promise<void>
    onWindowResize: () => void
    addToScene: (...object: Object3D[]) => void
}
