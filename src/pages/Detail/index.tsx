import Header from "../../components/Header";
import {IStyle} from "../../interface/IStyle";

export default function Detail(props: IStyle){
    return(
        <>
            <Header
                darkMode={props.darkMode}
                setDarkMode={props.setDarkMode}
            />
        </>
    )
}