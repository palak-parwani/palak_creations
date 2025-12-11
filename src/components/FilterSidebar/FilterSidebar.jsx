// ============================================
// FilterSidebar.js
// ============================================
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import styles from "./FilterSidebar.module.css";

const FilterSidebar = ({ category, subcategory }) => {
  const [expandedSections, setExpandedSections] = useState({
    discount: true,
    size: true,
    categories: true,
    price: true,
    material: false,
  });

  const [priceRange, setPriceRange] = useState([599, 3999]);
  const [selectedFilters, setSelectedFilters] = useState({
    discount: [],
    size: [],
    categories: [],
  });

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
    const newRange = [...priceRange];
    newRange[index] = parseInt(e.target.value);
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
    { label: "KURTIS", count: 225 },
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
      <h4 className="ps-3 heading text-start">FILTERS</h4>
      {/* Discount Filter */}
      <div className={styles.filterSection}>
        <div
          className={styles.filterHeader}
          onClick={() => toggleSection("discount")}
        >
          <h6 className={styles.filterTitle}>DISCOUNT</h6>
          {expandedSections.discount ? (
            <ChevronUp size={16} />
          ) : (
            <ChevronDown size={16} />
          )}
        </div>
        {expandedSections.discount && (
          <div className={styles.filterContent}>
            {discounts.map((discount, idx) => (
              <label key={idx} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  onChange={() =>
                    handleFilterChange("discount", discount.value)
                  }
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
        <div
          className={styles.filterHeader}
          onClick={() => toggleSection("size")}
        >
          <h6 className={styles.filterTitle}>SIZE</h6>
          {expandedSections.size ? (
            <ChevronUp size={16} />
          ) : (
            <ChevronDown size={16} />
          )}
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
        <div
          className={styles.filterHeader}
          onClick={() => toggleSection("price")}
        >
          <h6 className={styles.filterTitle}>PRICE</h6>
          {expandedSections.price ? (
            <ChevronUp size={16} />
          ) : (
            <ChevronDown size={16} />
          )}
        </div>
        {expandedSections.price && (
          <div className={styles.filterContent}>
            <div className={styles.priceInputs}>
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) => handlePriceChange(e, 0)}
                className={styles.priceInput}
              />
              <span className={styles.priceSeparator}>-</span>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) => handlePriceChange(e, 1)}
                className={styles.priceInput}
              />
            </div>
            <div className={styles.priceRangeSlider}>
              <input
                type="range"
                min="599"
                max="3999"
                value={priceRange[0]}
                onChange={(e) => handlePriceChange(e, 0)}
                className={styles.rangeInput}
              />
              <input
                type="range"
                min="599"
                max="3999"
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
        <div
          className={styles.filterHeader}
          onClick={() => toggleSection("categories")}
        >
          <h6 className={styles.filterTitle}>CATEGORIES</h6>
          {expandedSections.categories ? (
            <ChevronUp size={16} />
          ) : (
            <ChevronDown size={16} />
          )}
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

      {/* pattern Filter */}
      <div className={styles.filterSection}>
        <div
          className={styles.filterHeader}
          onClick={() => toggleSection("pattern")}
        >
          <h6 className={styles.filterTitle}>PATTERN</h6>
          {expandedSections.pattern ? (
            <ChevronUp size={16} />
          ) : (
            <ChevronDown size={16} />
          )}
        </div>
        {expandedSections.pattern && (
          <div className={styles.filterContent}>
            {pattern.map((pat, idx) => (
              <label key={idx} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  onChange={() => handleFilterChange("pattern", pat.label)}
                  checked={selectedFilters.categories.includes(pat.label)}
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
        <div
          className={styles.filterHeader}
          onClick={() => toggleSection("material")}
        >
          <h6 className={styles.filterTitle}>MATERIAL</h6>
          {expandedSections.material ? (
            <ChevronUp size={16} />
          ) : (
            <ChevronDown size={16} />
          )}
        </div>
        {expandedSections.material && (
          <div className={styles.filterContent}>
            {material.map((mat, idx) => (
              <label key={idx} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  onChange={() => handleFilterChange("material", mat.label)}
                  checked={selectedFilters.categories.includes(mat.label)}
                />
                <span className={styles.checkboxText}>
                  {mat.label} ({mat.count})
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* SLEEVES Filter */}
      <div className={styles.filterSection}>
        <div
          className={styles.filterHeader}
          onClick={() => toggleSection("sleeves")}
        >
          <h6 className={styles.filterTitle}>SLEEVES</h6>
          {expandedSections.sleeves ? (
            <ChevronUp size={16} />
          ) : (
            <ChevronDown size={16} />
          )}
        </div>
        {expandedSections.sleeves && (
          <div className={styles.filterContent}>
            {sleeves.map((sl, idx) => (
              <label key={idx} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  onChange={() => handleFilterChange("sleeves", sl.label)}
                  checked={selectedFilters.categories.includes(sl.label)}
                />
                <span className={styles.checkboxText}>
                  {sl.label} ({sl.count})
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* occasion Filter */}
      <div className={styles.filterSection}>
        <div
          className={styles.filterHeader}
          onClick={() => toggleSection("occassion")}
        >
          <h6 className={styles.filterTitle}>OCCASSION</h6>
          {expandedSections.occassion ? (
            <ChevronUp size={16} />
          ) : (
            <ChevronDown size={16} />
          )}
        </div>
        {expandedSections.occassion && (
          <div className={styles.filterContent}>
            {occassion.map((oc, idx) => (
              <label key={idx} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  onChange={() => handleFilterChange("occassion", oc.label)}
                  checked={selectedFilters.categories.includes(oc.label)}
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
