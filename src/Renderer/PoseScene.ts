import {ThreeRendererInterface} from "./ThreeRendererInterface";
import {
    Color, DirectionalLight,
    Object3D,
    PerspectiveCamera,
    Renderer,
    Scene,
    Skeleton,
    WebGLRenderer
} from "three";
import {CCDIKSolver} from "three/examples/jsm/animation/CCDIKSolver";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

export class PoseScene implements ThreeRendererInterface {

    scene: Scene;
    camera: PerspectiveCamera;
    renderer: Renderer;
    directLight: DirectionalLight;
    orbitControls?: OrbitControls;
    ikSolver?: CCDIKSolver;
    skeleton?: Skeleton;
    canvasParentWidth!: number;
    canvasParentHeight!: number;

    constructor(domElement?: HTMLElement | undefined) {
        if (!domElement) {
            this.renderer = new WebGLRenderer({antialias: true});
            this.width =  this.renderer.domElement?.parentElement?.offsetWidth || 0;
            this.height = this.renderer.domElement?.parentElement?.offsetHeight || 0;
        } else {
            this.renderer = new WebGLRenderer({canvas: domElement, antialias: true});
            this.width =  domElement?.parentElement?.offsetWidth || 0;
            this.height = domElement?.parentElement?.offsetHeight || 0;

        }

        this.renderer.setSize(this.canvasParentWidth, this.canvasParentHeight);
        // this.renderer.setClearColor(0xffffff, 0);


        // scene
        this.scene = new Scene();
        this.scene.background = new Color(0xdddddd);

        // camera
        this.camera = new PerspectiveCamera(45, this.getAspectRatio(), 1, 100);
        this.camera.position.set(0, 0, 5);
        this.scene.add(this.camera)

        // directional light
        this.directLight = new DirectionalLight(0xffffff, 15);
        this.directLight.castShadow = true;
        this.scene.add(this.directLight);

        this.setUpOrbitalControls()

        this.setLightPositionToCamera();
    }


    onWindowResize(): void {
        this.camera.aspect = this.getAspectRatio();
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.canvasParentWidth, this.canvasParentHeight);

    }

    addToScene(object: Object3D): void {
        if (!object) return
        this.scene.add(object)
    }

    setUpOrbitalControls() {
        this.orbitControls = new OrbitControls(this.camera, this.renderer.domElement);
        this.orbitControls.minDistance = .2;
        this.orbitControls.maxDistance = 5;
        this.orbitControls.enableDamping = true;
    }

    toggleOrbitControls() {
        if (!this.orbitControls) return
        this.orbitControls.enabled = !this.orbitControls.enabled;
    }

    setLightPositionToCamera() {
        const {x, y, z} = this.camera.position;
        this.directLight.position.set(x, y, z);
    }


    getAspectRatio(): number {
        return this.canvasParentWidth / this.canvasParentHeight
    }

    get height(): number {
        return this.canvasParentHeight
    }

    set height(value) {
        this.canvasParentHeight = value;
    }

    get width(): number {
        return this.canvasParentWidth
    }

    set width(value) {
        this.canvasParentWidth = value;
    }

    run() {
        this.renderer.render(this.scene, this.camera)
    }

}




