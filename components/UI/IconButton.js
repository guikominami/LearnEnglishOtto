import { Entypo } from "@expo/vector-icons";

const IconButton = ({type, action, color}) => {
  return(
    <Entypo 
      android_ripple={{color: '#cccccc'}}                    
      name={type} 
      size={32} 
      color={color}
      onPress={action} 
    />
  );
}

export default IconButton;