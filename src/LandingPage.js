import React from 'react';
import { menuItems } from './data/menuItems';
import SearchBar from './components/SearchBar';
import CategoryButtons from './components/CategoryButtons';
import FilterSwitches from './components/FilterSwitches';
import MenuHeader from './components/MenuHeader';
import MenuItem from './components/MenuItem';
import BottomSection from './components/BottomSection';
import FoodDetailsModal from './components/FoodDetailsModal';
import IngredientsModal from './components/IngredientsModal';
import './LandingPage.css';

const LandingPage = ({ onEnter }) => {
  const [selectedCategory, setSelectedCategory] = React.useState('Starter');
  const [selectedItems, setSelectedItems] = React.useState(new Set());
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [ingredientsItem, setIngredientsItem] = React.useState(null);
  const [isIngredientsModalOpen, setIsIngredientsModalOpen] = React.useState(false);
  const [vegFilter, setVegFilter] = React.useState(false);
  const [nonVegFilter, setNonVegFilter] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  


  const categories = [
    { name: 'Starter', count: menuItems.filter(item => item.type === 'Starter').length },
    { name: 'Main Course', count: menuItems.filter(item => item.type === 'Main Course').length },
    { name: 'Desert', count: menuItems.filter(item => item.type === 'Desert').length },
    { name: 'Side', count: menuItems.filter(item => item.type === 'Side').length }
  ];

  const handleAddItem = (item) => {
    setSelectedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(item.id)) {
        newSet.delete(item.id);
      } else {
        newSet.add(item.id);
      }
      return newSet;
    });
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const handleRemoveItem = (item) => {
    setSelectedItems(prev => {
      const newSet = new Set(prev);
      newSet.delete(item.id);
      return newSet;
    });
    handleCloseModal();
  };

  const handleAddFromModal = (item) => {
    setSelectedItems(prev => {
      const newSet = new Set(prev);
      newSet.add(item.id);
      return newSet;
    });
    handleCloseModal();
  };

  const handleIngredientsClick = (item) => {
    setIngredientsItem(item);
    setIsIngredientsModalOpen(true);
  };

  const handleCloseIngredientsModal = () => {
    setIsIngredientsModalOpen(false);
    setIngredientsItem(null);
  };

  return (
    <div className="landing-page">
      <div className="menu-container">
        <SearchBar searchValue={searchQuery} onSearchChange={setSearchQuery} />
        
        <CategoryButtons 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
          selectedItems={selectedItems}
        />
        
        <FilterSwitches 
          selectedCategory={selectedCategory}
          vegFilter={vegFilter}
          nonVegFilter={nonVegFilter}
          selectedItemsCount={menuItems.filter(item => item.type === selectedCategory && selectedItems.has(item.id)).length}
          onVegToggle={() => {
            if (vegFilter) {
              setVegFilter(false);
            } else {
              setVegFilter(true);
              setNonVegFilter(false);
            }
          }}
          onNonVegToggle={() => {
            if (nonVegFilter) {
              setNonVegFilter(false);
            } else {
              setNonVegFilter(true);
              setVegFilter(false);
            }
          }}
        />
        
        <MenuHeader />
        
        <div className="menu-items">
          {menuItems
            .filter(item => item.type === selectedCategory)
            .filter(item => {
              if (!vegFilter && !nonVegFilter) return true;
              if (vegFilter) return item.isVeg;
              if (nonVegFilter) return !item.isVeg;
              return false;
            })
            .filter(item => 
              item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.description.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((item, index) => (
              <MenuItem 
                key={item.id} 
                item={item} 
                isSelected={selectedItems.has(item.id)}
                onAdd={handleAddItem}
                onClick={handleItemClick}
                onIngredientsClick={handleIngredientsClick}
              />
            ))}
        </div>
        
        <BottomSection totalSelected={selectedItems.size} onContinue={onEnter} />
      </div>
      
      <FoodDetailsModal 
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onRemove={handleRemoveItem}
        onAdd={handleAddFromModal}
        isSelected={selectedItem && selectedItems.has(selectedItem.id)}
      />
      
      <IngredientsModal 
        item={ingredientsItem}
        isOpen={isIngredientsModalOpen}
        onClose={handleCloseIngredientsModal}
      />
    </div>
  );
};

export default LandingPage;