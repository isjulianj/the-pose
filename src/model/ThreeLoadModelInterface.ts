import {Group} from "three";

export interface ThreeLoadModelInterface {
    loadModel: (url: URL) => void
    getModel: () => Group | undefined

}
