import React, { useState, useEffect, useRef } from 'react';
// Icons as simple SVG components
const Play = () => React.createElement('svg', { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'currentColor' }, 
  React.createElement('polygon', { points: '5,3 19,12 5,21' }));

const Pause = () => React.createElement('svg', { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'currentColor' }, 
  React.createElement('rect', { x: 6, y: 4, width: 4, height: 16 }),
  React.createElement('rect', { x: 14, y: 4, width: 4, height: 16 }));

const RotateCcw = () => React.createElement('svg', { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2 }, 
  React.createElement('path', { d: 'M1 4v6h6' }),
  React.createElement('path', { d: 'M3.51 15a9 9 0 1 0 2.13-9.36L1 10' }));

const Plus = () => React.createElement('svg', { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2 }, 
  React.createElement('path', { d: 'M12 5v14M5 12h14' }));

const X = (props) => React.createElement('svg', { width: props?.size || 14, height: props?.size || 14, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2 }, 
  React.createElement('path', { d: 'M18 6 6 18M6 6l12 12' }));

const ChevronDown = (props) => React.createElement('svg', { width: props?.size || 14, height: props?.size || 14, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2 }, 
  React.createElement('path', { d: 'M6 9l6 6 6-6' }));

const ChevronRight = (props) => React.createElement('svg', { width: props?.size || 14, height: props?.size || 14, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2 }, 
  React.createElement('path', { d: 'M9 18l6-6-6-6' }));

const Moon = (props) => React.createElement('svg', { width: props?.size || 16, height: props?.size || 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2 }, 
  React.createElement('path', { d: 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' }));

const Sun = (props) => React.createElement('svg', { width: props?.size || 16, height: props?.size || 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2 }, 
  React.createElement('circle', { cx: 12, cy: 12, r: 5 }),
  React.createElement('path', { d: 'M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42' }));

const Zap = (props) => React.createElement('svg', { width: props?.size || 18, height: props?.size || 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2 }, 
  React.createElement('polygon', { points: '13,2 3,14 12,14 11,22 21,10 12,10' }));

const Target = (props) => React.createElement('svg', { width: props?.size || 18, height: props?.size || 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2 }, 
  React.createElement('circle', { cx: 12, cy: 12, r: 10 }),
  React.createElement('circle', { cx: 12, cy: 12, r: 6 }),
  React.createElement('circle', { cx: 12, cy: 12, r: 2 }));

const Clock = (props) => React.createElement('svg', { width: props?.size || 12, height: props?.size || 12, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2 }, 
  React.createElement('circle', { cx: 12, cy: 12, r: 10 }),
  React.createElement('polyline', { points: '12,6 12,12 16,14' }));

const Users = (props) => React.createElement('svg', { width: props?.size || 18, height: props?.size || 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2 }, 
  React.createElement('path', { d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' }),
  React.createElement('circle', { cx: 9, cy: 7, r: 4 }),
  React.createElement('path', { d: 'M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' }));

const Printer = (props) => React.createElement('svg', { width: props?.size || 20, height: props?.size || 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2 }, 
  React.createElement('polyline', { points: '6,9 6,2 18,2 18,9' }),
  React.createElement('path', { d: 'M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2' }),
  React.createElement('rect', { x: 6, y: 14, width: 12, height: 8 }));

const ProductivityDashboard = () => {
  // ... (rest of the component code)
};

// Add this at the very end:
const { createRoot } = ReactDOM;
const root = createRoot(document.getElementById('root'));
root.render(React.createElement(ProductivityDashboard));
