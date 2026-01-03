import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import styles from "./FilterSidebar.module.css";
import { CiFilter } from "react-icons/ci";

const FilterSidebar = ({ category, subcategory }) => {
  const [expandedSections, setExpandedSections] = useState({
    discount: true,
    size: true,
    categories: true,
    price: true,
    material: false,
    pattern: false,
    sleeves: false,
    occassion: false,
  });

  const [priceRange, setPriceRange] = useState([599, 3999]);
  const [selectedFilters, setSelectedFilters] = useState({
    discount: [],
    size: [],
    categories: [],
    pattern: [],
    material: [],
    sleeves: [],
    occassion: [],
  });

  const sliderTrackRef = useRef(null);
  const minPrice = 599;
  const maxPrice = 3999;

  // Update slider track background dynamically
  useEffect(() => {
    if (sliderTrackRef.current) {
      const percentMin = ((priceRange[0] - minPrice) / (maxPrice - minPrice)) * 100;
      const percentMax = ((priceRange[1] - minPrice) / (maxPrice - minPrice)) * 100;
      
      sliderTrackRef.current.style.background = `linear-gradient(to right, 
        #ddd ${percentMin}%, 
        #b41935 ${percentMin}%, 
        #b41935 ${percentMax}%, 
        #ddd ${percentMax}%)`;
    }
  }, [priceRange]);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter((item) => item !== value)
        : [...prev[filterType], value],
    }));
  };

  const handlePriceChange = (e, index) => {
    const newValue = parseInt(e.target.value);
    const newRange = [...priceRange];
    
    if (index === 0) {
      newRange[0] = Math.min(newValue, priceRange[1]);
    } else {
      newRange[1] = Math.max(newValue, priceRange[0]);
    }
    
    setPriceRange(newRange);
  };

  const discounts = [
    { label: "80% +", count: 1, value: "80+" },
    { label: "51-80%", count: 106, value: "51-80" },
    { label: "31-50%", count: 40, value: "31-50" },
    { label: "10-30%", count: 12, value: "10-30" },
  ];

  const sizes = [
    { label: "L", count: 173 },
    { label: "M", count: 170 },
    { label: "S", count: 184 },
    { label: "XL", count: 158 },
    { label: "XS", count: 183 },
    { label: "XXL", count: 138 },
  ];

  const categories = [
    { label: "NEW ARRIVALS", count: 1 },
    { label: "KURTIS", count: 225 },
    { label: "KURTA SETS", count: 225 },
    { label: "KURTA & SUITS SETS", count: 225 },
    { label: "CO-ORD SETS", count: 225 },
    { label: "DRESSES", count: 225 },
  ];

  const pattern = [
    { label: "A-LINE", count: 1 },
    { label: "STRAIGHT", count: 225 },
    { label: "UMBRELLA", count: 225 },
    { label: "CO-ORD", count: 225 },
    { label: "ANARKALI", count: 225 },
    { label: "SHARARA", count: 225 },
    { label: "PRINTTED", count: 225 },
    { label: "EMBROIDERED", count: 225 },
  ];

  const material = [
    { label: "CHIFFON", count: 1 },
    { label: "COTTON", count: 225 },
    { label: "MUSLIN", count: 225 },
    { label: "COTTON 60-60", count: 225 },
    { label: "BERLIN", count: 225 },
    { label: "MILANO", count: 225 },
    { label: "VATICAN", count: 225 },
    { label: "RAYON", count: 225 },
  ];

  const sleeves = [
    { label: "3/4th SLEEEVES", count: 1 },
    { label: "FULL SLEEVES", count: 225 },
    { label: "SLEEVELESS", count: 225 },
    { label: "ELBOW SLEEVES", count: 225 },
    { label: "CHUDIDAR SLEEVES", count: 225 },
  ];

  const occassion = [
    { label: "PARTY WEAR", count: 1 },
    { label: "WEDDING WEAR", count: 225 },
    { label: "OFFICE WEAR", count: 225 },
    { label: "CASUAL WEAR", count: 225 },
    { label: "FESTIVE WEAR", count: 225 },
  ];

  return (
    <div className={styles.filterSidebar}>
      <div className={styles.filter}>
        <span className={styles.filterhead}> <CiFilter size={20} /> Filters</span>
      </div>
      
      {/* Discount Filter */}
      <div className={styles.filterSection}>
        <div className={styles.filterHeader} onClick={() => toggleSection("discount")}>
          <h6 className={styles.filterTitle}>DISCOUNT</h6>
          {expandedSections.discount ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
        {expandedSections.discount && (
          <div className={styles.filterContent}>
            {discounts.map((discount, idx) => (
              <label key={idx} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  onChange={() => handleFilterChange("discount", discount.value)}
                  checked={selectedFilters.discount.includes(discount.value)}
                />
                <span className={styles.checkboxText}>
                  {discount.label} ({discount.count})
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Size Filter */}
      <div className={styles.filterSection}>
        <div className={styles.filterHeader} onClick={() => toggleSection("size")}>
          <h6 className={styles.filterTitle}>SIZE</h6>
          {expandedSections.size ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
        {expandedSections.size && (
          <div className={styles.filterContent}>
            {sizes.map((size, idx) => (
              <label key={idx} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  onChange={() => handleFilterChange("size", size.label)}
                  checked={selectedFilters.size.includes(size.label)}
                />
                <span className={styles.checkboxText}>
                  {size.label} ({size.count})
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Range Filter */}
      <div className={styles.filterSection}>
        <div className={styles.filterHeader} onClick={() => toggleSection("price")}>
          <h6 className={styles.filterTitle}>PRICE</h6>
          {expandedSections.price ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
        {expandedSections.price && (
          <div className={styles.filterContent}>
            <div className={styles.priceInputs}>
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) => handlePriceChange(e, 0)}
                className={styles.priceInput}
                min={minPrice}
                max={maxPrice}
              />
              <span className={styles.priceSeparator}>-</span>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) => handlePriceChange(e, 1)}
                className={styles.priceInput}
                min={minPrice}
                max={maxPrice}
              />
            </div>
            <div className={styles.priceRangeSlider}>
              <div ref={sliderTrackRef} className={styles.sliderTrack}></div>
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={priceRange[0]}
                onChange={(e) => handlePriceChange(e, 0)}
                className={styles.rangeInput}
              />
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={priceRange[1]}
                onChange={(e) => handlePriceChange(e, 1)}
                className={styles.rangeInput}
              />
            </div>
            <div className={styles.priceLabels}>
              <span>₹ {priceRange[0].toFixed(2)}</span>
              <span>₹ {priceRange[1].toFixed(2)}</span>
            </div>
          </div>
        )}
      </div>

      {/* Categories Filter */}
      <div className={styles.filterSection}>
        <div className={styles.filterHeader} onClick={() => toggleSection("categories")}>
          <h6 className={styles.filterTitle}>CATEGORIES</h6>
          {expandedSections.categories ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
        {expandedSections.categories && (
          <div className={styles.filterContent}>
            {categories.map((cat, idx) => (
              <label key={idx} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  onChange={() => handleFilterChange("categories", cat.label)}
                  checked={selectedFilters.categories.includes(cat.label)}
                />
                <span className={styles.checkboxText}>
                  {cat.label} ({cat.count})
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Pattern Filter */}
      <div className={styles.filterSection}>
        <div className={styles.filterHeader} onClick={() => toggleSection("pattern")}>
          <h6 className={styles.filterTitle}>PATTERN</h6>
          {expandedSections.pattern ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
        {expandedSections.pattern && (
          <div className={styles.filterContent}>
            {pattern.map((pat, idx) => (
              <label key={idx} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  onChange={() => handleFilterChange("pattern", pat.label)}
                  checked={selectedFilters.pattern.includes(pat.label)}
                />
                <span className={styles.checkboxText}>
                  {pat.label} ({pat.count})
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Material Filter */}
      <div className={styles.filterSection}>
        <div className={styles.filterHeader} onClick={() => toggleSection("material")}>
          <h6 className={styles.filterTitle}>MATERIAL</h6>
          {expandedSections.material ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
        {expandedSections.material && (
          <div className={styles.filterContent}>
            {material.map((mat, idx) => (
              <label key={idx} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  onChange={() => handleFilterChange("material", mat.label)}
                  checked={selectedFilters.material.includes(mat.label)}
                />
                <span className={styles.checkboxText}>
                  {mat.label} ({mat.count})
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Sleeves Filter */}
      <div className={styles.filterSection}>
        <div className={styles.filterHeader} onClick={() => toggleSection("sleeves")}>
          <h6 className={styles.filterTitle}>SLEEVES</h6>
          {expandedSections.sleeves ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
        {expandedSections.sleeves && (
          <div className={styles.filterContent}>
            {sleeves.map((sl, idx) => (
              <label key={idx} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  onChange={() => handleFilterChange("sleeves", sl.label)}
                  checked={selectedFilters.sleeves.includes(sl.label)}
                />
                <span className={styles.checkboxText}>
                  {sl.label} ({sl.count})
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Occasion Filter */}
      <div className={styles.filterSection}>
        <div className={styles.filterHeader} onClick={() => toggleSection("occassion")}>
          <h6 className={styles.filterTitle}>OCCASSION</h6>
          {expandedSections.occassion ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
        {expandedSections.occassion && (
          <div className={styles.filterContent}>
            {occassion.map((oc, idx) => (
              <label key={idx} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  onChange={() => handleFilterChange("occassion", oc.label)}
                  checked={selectedFilters.occassion.includes(oc.label)}
                />
                <span className={styles.checkboxText}>
                  {oc.label} ({oc.count})
                </span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;