import React from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";

export const GltfModel = ({...props }) => {
  const gltf = useGLTF(props.path); 

  const [ref] = useBox(() => ({
    type: 'static',
    mass: 2,
    args: props.args,
    position: props.position,

    ...props,
  }));

  return (
        <primitive
          ref = {ref}
          object = {gltf.scene}
        />
  );
}
