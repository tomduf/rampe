/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/


import {Clone, Text, useGLTF} from "@react-three/drei"
import {useControls} from "leva";

export default function Rampe() {
    const {v1, v2, texte} = useControls('Versions de la rampe',{
        v1:true,
        v2:false,
        texte:true
    })
    const rampe1 = useGLTF("./Rampe/rampe1.gltf")
    const escaliers = useGLTF("./Rampe/escaliers.glb")

    return <>
        <Clone object={escaliers.scene} scale={6} rotation={[0,0, 0]}  />
        <Clone object={rampe1.scene} scale={6} rotation={[-Math.PI/2, 0, 0]} position={[6.5, 11, 14]} visible={v1}  />
        <Text visible={v1 && texte} color={"red"} position={[ -0.4 , 1.2, -2]}  >
            V1
        </Text>
        <Text visible={v2 && texte} color={"blue"} position={[ -0.40 , 0, -2]} >
            V2
        </Text>
    </>


}

useGLTF.preload("./Rampe/rampe1.gltf");
useGLTF.preload("./Rampe/escaliers.glb");
