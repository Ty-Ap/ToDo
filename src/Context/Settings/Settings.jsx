// ****** THIS COMPONENT IS DEPRECATED; USE ONLY FOR REFERENCE *******//


//import React, { useContext } from 'react';
// import { SettingsContext } from '.';

// const Settings = () => {
//   const { pageItems, showCompleted, sort, setSort, setPageItems, setShowCompleted } = useContext(SettingsContext);

//   const toggleShowCompleted = () => {
//     setShowCompleted(!showCompleted);
//   };

//   const handleSortChange = (e) => {
//     setSort(e.target.value);
//   };

//   const handlePageItemsChange = (e) => {
//     setPageItems(parseInt(e.target.value, 10));
//   };

//   return (
//     <div>
//       <h2>Settings</h2>
//       <div>
//         <button onClick={toggleShowCompleted}>
//           {showCompleted ? 'Hide' : 'Show'} Completed Tasks
//         </button>
//       </div>
//       <div>
//         <label htmlFor="sort">Sort by:</label>
//         <select name="sort" id="sort" value={sort} onChange={handleSortChange}>
//           <option value="difficulty">Difficulty</option>
//           <option value="title">Title</option>
//           <option value="duedate">Due Date</option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="pageItems">Items per page:</label>
//         <select
//           name="pageItems"
//           id="pageItems"
//           value={pageItems}
//           onChange={handlePageItemsChange}
//         >
//           <option value="3">3</option>
//           <option value="5">5</option>
//           <option value="10">10</option>
//           <option value="20">20</option>
//         </select>
//       </div>
//     </div>
//   );
// };

// export default Settings;
