"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./FilterBar.css");
function FilterBar(props) {
    const [searchedTerm, setSearchedTerm] = react_1.useState('');
    function handleChange(e) {
        setSearchedTerm(e.target.value);
        const filteredList = props.myList.filter((book) => {
            if (searchedTerm === '') {
                return book;
            }
            else if (book.volumeInfo.title.toLowerCase().includes(searchedTerm.toLowerCase())) {
                return book;
            }
        });
        props.setFilteredResults((prevValue) => {
            return [...filteredList];
        });
    }
    return className = "filtered-bar-container" >
        type;
    "text";
    className = "filtered-term";
    placeholder = "Search...";
    onChange = { handleChange }
        /  >
        className;
    "button-icon-filter" >
        className;
    "fa fa-search";
    aria - hidden;
    "true" > /i>
        < /button>
        < /div>;
    ;
}
exports.default = FilterBar;
