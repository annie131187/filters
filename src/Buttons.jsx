import Data from './Data'

const Buttons = ({currentFilter, setItem, filterItems}) => {
    return (
        <div className="buttons-list">
            <button onClick={() => setItem(Data)}>
                All
            </button>
        
            {filterItems.map((Val, id) => {
                return (
                    <button 
                        className="button-id"
                        onClick={() => currentFilter(Val)}
                        key={id}
                        >
                            {Val}
                    </button>
                    );
                }
            )}
        </div>   
    )
}

export default Buttons;
