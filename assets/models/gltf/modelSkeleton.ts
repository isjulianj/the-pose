const bonesList = [
  {
    "index": 0,
    "name": "mixamorigHips",
    "parent": "Armature"
  },
  {
    "index": 1,
    "name": "mixamorigSpine",
    "parent": "mixamorigHips"
  },
  {
    "index": 2,
    "name": "mixamorigSpine1",
    "parent": "mixamorigSpine"
  },
  {
    "index": 3,
    "name": "mixamorigSpine2",
    "parent": "mixamorigSpine1"
  },
  {
    "index": 4,
    "name": "mixamorigNeck",
    "parent": "mixamorigSpine2"
  },
  {
    "index": 5,
    "name": "mixamorigHead",
    "parent": "mixamorigNeck"
  },
  {
    "index": 6,
    "name": "mixamorigHeadTop_End",
    "parent": "mixamorigHead"
  },
  {
    "index": 7,
    "name": "mixamorigLeftEye",
    "parent": "mixamorigHead"
  },
  {
    "index": 8,
    "name": "mixamorigRightEye",
    "parent": "mixamorigHead"
  },
  {
    "index": 9,
    "name": "mixamorigLeftShoulder",
    "parent": "mixamorigSpine2"
  },
  {
    "index": 10,
    "name": "mixamorigLeftArm",
    "parent": "mixamorigLeftShoulder"
  },
  {
    "index": 11,
    "name": "mixamorigLeftForeArm",
    "parent": "mixamorigLeftArm"
  },
  {
    "index": 12,
    "name": "mixamorigLeftHand",
    "parent": "mixamorigLeftForeArm"
  },
  {
    "index": 13,
    "name": "mixamorigLeftHandThumb1",
    "parent": "mixamorigLeftHand"
  },
  {
    "index": 14,
    "name": "mixamorigLeftHandThumb2",
    "parent": "mixamorigLeftHandThumb1"
  },
  {
    "index": 15,
    "name": "mixamorigLeftHandThumb3",
    "parent": "mixamorigLeftHandThumb2"
  },
  {
    "index": 16,
    "name": "mixamorigLeftHandThumb4",
    "parent": "mixamorigLeftHandThumb3"
  },
  {
    "index": 17,
    "name": "mixamorigLeftHandIndex1",
    "parent": "mixamorigLeftHand"
  },
  {
    "index": 18,
    "name": "mixamorigLeftHandIndex2",
    "parent": "mixamorigLeftHandIndex1"
  },
  {
    "index": 19,
    "name": "mixamorigLeftHandIndex3",
    "parent": "mixamorigLeftHandIndex2"
  },
  {
    "index": 20,
    "name": "mixamorigLeftHandMiddle1",
    "parent": "mixamorigLeftHand"
  },
  {
    "index": 21,
    "name": "mixamorigLeftHandMiddle2",
    "parent": "mixamorigLeftHandMiddle1"
  },
  {
    "index": 22,
    "name": "mixamorigLeftHandMiddle3",
    "parent": "mixamorigLeftHandMiddle2"
  },
  {
    "index": 23,
    "name": "mixamorigLeftHandRing1",
    "parent": "mixamorigLeftHand"
  },
  {
    "index": 24,
    "name": "mixamorigLeftHandRing2",
    "parent": "mixamorigLeftHandRing1"
  },
  {
    "index": 25,
    "name": "mixamorigLeftHandRing3",
    "parent": "mixamorigLeftHandRing2"
  },
  {
    "index": 26,
    "name": "mixamorigLeftHandPinky1",
    "parent": "mixamorigLeftHand"
  },
  {
    "index": 27,
    "name": "mixamorigLeftHandPinky2",
    "parent": "mixamorigLeftHandPinky1"
  },
  {
    "index": 28,
    "name": "mixamorigLeftHandPinky3",
    "parent": "mixamorigLeftHandPinky2"
  },
  {
    "index": 29,
    "name": "mixamorigRightShoulder",
    "parent": "mixamorigSpine2"
  },
  {
    "index": 30,
    "name": "mixamorigRightArm",
    "parent": "mixamorigRightShoulder"
  },
  {
    "index": 31,
    "name": "mixamorigRightForeArm",
    "parent": "mixamorigRightArm"
  },
  {
    "index": 32,
    "name": "mixamorigRightHand",
    "parent": "mixamorigRightForeArm"
  },
  {
    "index": 33,
    "name": "mixamorigRightHandThumb1",
    "parent": "mixamorigRightHand"
  },
  {
    "index": 34,
    "name": "mixamorigRightHandThumb2",
    "parent": "mixamorigRightHandThumb1"
  },
  {
    "index": 35,
    "name": "mixamorigRightHandThumb3",
    "parent": "mixamorigRightHandThumb2"
  },
  {
    "index": 36,
    "name": "mixamorigRightHandThumb4",
    "parent": "mixamorigRightHandThumb3"
  },
  {
    "index": 37,
    "name": "mixamorigRightHandIndex1",
    "parent": "mixamorigRightHand"
  },
  {
    "index": 38,
    "name": "mixamorigRightHandIndex2",
    "parent": "mixamorigRightHandIndex1"
  },
  {
    "index": 39,
    "name": "mixamorigRightHandIndex3",
    "parent": "mixamorigRightHandIndex2"
  },
  {
    "index": 40,
    "name": "mixamorigRightHandMiddle1",
    "parent": "mixamorigRightHand"
  },
  {
    "index": 41,
    "name": "mixamorigRightHandMiddle2",
    "parent": "mixamorigRightHandMiddle1"
  },
  {
    "index": 42,
    "name": "mixamorigRightHandMiddle3",
    "parent": "mixamorigRightHandMiddle2"
  },
  {
    "index": 43,
    "name": "mixamorigRightHandRing1",
    "parent": "mixamorigRightHand"
  },
  {
    "index": 44,
    "name": "mixamorigRightHandRing2",
    "parent": "mixamorigRightHandRing1"
  },
  {
    "index": 45,
    "name": "mixamorigRightHandRing3",
    "parent": "mixamorigRightHandRing2"
  },
  {
    "index": 46,
    "name": "mixamorigRightHandPinky1",
    "parent": "mixamorigRightHand"
  },
  {
    "index": 47,
    "name": "mixamorigRightHandPinky2",
    "parent": "mixamorigRightHandPinky1"
  },
  {
    "index": 48,
    "name": "mixamorigRightHandPinky3",
    "parent": "mixamorigRightHandPinky2"
  },
  {
    "index": 49,
    "name": "mixamorigLeftUpLeg",
    "parent": "mixamorigHips"
  },
  {
    "index": 50,
    "name": "mixamorigLeftLeg",
    "parent": "mixamorigLeftUpLeg"
  },
  {
    "index": 51,
    "name": "mixamorigLeftFoot",
    "parent": "mixamorigLeftLeg"
  },
  {
    "index": 52,
    "name": "mixamorigLeftToeBase",
    "parent": "mixamorigLeftFoot"
  },
  {
    "index": 53,
    "name": "mixamorigLeftToe_End",
    "parent": "mixamorigLeftToeBase"
  },
  {
    "index": 54,
    "name": "mixamorigRightUpLeg",
    "parent": "mixamorigHips"
  },
  {
    "index": 55,
    "name": "mixamorigRightLeg",
    "parent": "mixamorigRightUpLeg"
  },
  {
    "index": 56,
    "name": "mixamorigRightFoot",
    "parent": "mixamorigRightLeg"
  },
  {
    "index": 57,
    "name": "mixamorigRightToeBase",
    "parent": "mixamorigRightFoot"
  },
  {
    "index": 58,
    "name": "mixamorigRightToe_End",
    "parent": "mixamorigRightToeBase"
  }
]
