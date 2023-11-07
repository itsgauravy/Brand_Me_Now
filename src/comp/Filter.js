import {useState } from "react";
function Filter() {
    const [filters, setFilters] = useState({category: '', priceRange: '' });
        
    function handleCategoryChange(e) {
      setFilters({ ...filters, category: e.target.value });
    };
  
    function handlePriceRangeChange (e) {
      setFilters({ ...filters, priceRange: e.target.value });
    };


    return (
        
            <div className="filter col-md-8 filter-panel ms-2">
                    <h5>FILTER BY</h5>
                    <div>
                        <label htmlFor="category">CATOGERY</label>

                        <select
                            className="category "
                            value={filters.category}
                            onChange={(e)=>{handleCategoryChange(e)}}
                        >
                            <option value="">All</option>
                            <option value="mens">MENS</option>
                            <option value="womens">WOMENS</option>
                            <option value="unisex">UNISEX</option>
                        </select>
                    </div>
                   <hr/>
                    <div>
                        <label htmlFor="priceRange">PRICE RANGE</label>
                        <select
                            className="priceRange"
                            value={filters.priceRange}
                            onChange={(e)=>{handlePriceRangeChange(e)}}
                        >
                            <option value="">All</option>
                            <option value="$0-$50">$0-$50</option>
                            <option value="$50-$100">$50-$100</option>
                            <option value="$100+">$100+</option>
                        </select>
                    </div>
                    <hr/>
                    <div>
                        <label>BRAND</label>
                        <select
                            className="brand"
                           
                        >
                            <option value="">All</option>
                            <option value="$0-$50">opt1</option>
                            <option value="$50-$100">opt2</option>
                            <option value="$100+">op2</option>
                        </select>
                    </div>
                    <hr/>
                    <div>
                        <label >SLEEVE</label>
                        <select
                            className="sleeve"
                           
                        >
                            <option value="">All</option>
                            <option value="$0-$50">Full</option>
                            <option value="$50-$100">Half</option>
                            <option value="$100+">Without Sleeve</option>
                        </select>
                    </div>
                   

                </div>
           
       
    );
}

export default Filter;