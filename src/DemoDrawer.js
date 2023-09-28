import { useState } from "react";
import { Drawer } from "react-native-paper";



const DemoDrawer = ()=>{
    const [active, setActive] = useState("");
    return (
        <Drawer.Section>
            <Drawer.Item 
                label="Home" 
                icon="home"
                active={active==='home'}
                onPress={()=>
                    {
                        setActive('home');
                        alert("sfsfs");
                    } }
             />
            <Drawer.Item 
                label="Profile" 
                icon="camera"
                active={active==='profile'}
                onPress={()=>
                    {
                        setActive('profile');
                        alert("sfsfs");
                    } }
             />  
        </Drawer.Section>
    )
}


export default DemoDrawer;