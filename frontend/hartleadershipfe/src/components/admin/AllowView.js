import React, {useState} from 'react';
const AllowView = (isChecked) => {
    const [allowview, setAllowView] = useState(isChecked.ischecked);
    const handleClick = () => {
        setAllowView(!allowview)
        pushChange();
    }
    const pushChange = async () => {
        console.log(!allowview);
    }
    return ( 
        <form>
            <input type="checkbox" checked={allowview} onClick={handleClick}/>
        </form>
     );
}
 
export default AllowView;
