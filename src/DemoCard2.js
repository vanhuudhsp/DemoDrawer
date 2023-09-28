import { Avatar, Button, Card, Text } from "react-native-paper";
const LeftIcon = props => <Avatar.Icon {...props}  color="blue" icon="home-account"/>
const  DemoCard2 =()=>{
    return (
        <Card>
            <Card.Title title="fsfsfs" subtitle="fsfsfs" left={LeftIcon}/>
            <Card.Content>
                <Text variant="headlineLarge">sfsfsfs</Text>
                <Text variant="headlineLarge">sfsfsfs</Text>
            </Card.Content>
            <Card.Cover source={require("../assets/home.png")}/>
            <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
            </Card.Actions>
        </Card>
    )
}

export default DemoCard2;