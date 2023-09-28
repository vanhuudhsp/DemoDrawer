import { useState } from "react";
import { Switch } from "react-native-paper";


const DemoSwitch2 = ()=>{
    const [value, setValue] = useState(false);
    
    return (
        <Switch value={value} onChange={()=> setValue(!value)}/>
    )
}

export default DemoSwitch2;