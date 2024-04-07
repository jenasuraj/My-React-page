export default function TabButton(props) {
    const { onSelect } = props;
    return (
        <li>
            <button className ="active " onClick={onSelect}>{props.children}</button>
        </li>
    );
}

{/*here children refres to the value that passed
 i  mean that has written on the 
tabbutton call */}





{/*

or you can just do object destructuring by putting the property value
children along with curly braces i.e 



export default function TabButton({children})
{
    return <li><button>{children}</button></li>;

*/}