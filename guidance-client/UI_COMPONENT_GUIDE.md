# UI Component Guide - Risk Rating Features

## New UI Components Overview

This guide shows the new risk rating UI components and how they integrate with the existing dashboard.

---

## 🎨 Component Gallery

### 1. Risk Count Cards (Grid of 3)

```
┌─────────────────────────┐  ┌─────────────────────────┐  ┌─────────────────────────┐
│ Low Risk            ✓   │  │ Medium Risk         ⚠   │  │ High Risk           🔴  │
│                         │  │                         │  │                         │
│     85                  │  │     12                  │  │     3                   │
│     students            │  │     students            │  │     students            │
│                         │  │                         │  │                         │
│ 85.0% of total          │  │ 12.0% of total          │  │ 3.0% of total           │
└─────────────────────────┘  └─────────────────────────┘  └─────────────────────────┘
   [Green background]          [Yellow background]          [Red background]
```

**Features:**
- Large, easy-to-read numbers
- Percentage breakdown
- Risk-appropriate icons
- Color-coded backgrounds
- Hover shadow effects

---

### 2. Risk Rating Doughnut Chart

```
┌─────────────────────────────────────┐
│                                     │
│          ●●●●●●●                    │
│        ●        ●                   │
│       ●          ●                  │
│      ●            ●     Risk Ratings│
│      ●            ●                 │
│       ●          ●      • Low: 85   │
│        ●        ●         (85.0%)   │
│          ●●●●●●●                    │
│                         • Medium: 12│
│   [Green/Yellow/Red]      (12.0%)   │
│                                     │
│                         • High: 3   │
│                           (3.0%)    │
│                                     │
│   Total Students: 100               │
└─────────────────────────────────────┘
```

**Features:**
- Color-coded slices (Green/Yellow/Red)
- Percentage display in legend
- Student count for each level
- Total student count
- Interactive tooltips on hover

---

### 3. Risk Rating Bar Chart with Statistics

```
┌──────────────────────────────────────────────────────────┐
│ Risk Rating Analysis                                      │
│ Neural Network (Pre-trained)                              │
├──────────────────────────────────────────────────────────┤
│                                                           │
│  Statistics Cards:                                        │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐            │
│  │ Low Risk  │  │Medium Risk│  │ High Risk │            │
│  │    85     │  │    12     │  │     3     │            │
│  │  85.0%    │  │  12.0%    │  │   3.0%    │            │
│  └───────────┘  └───────────┘  └───────────┘            │
│                                                           │
│  Bar Chart:                                               │
│  Low    ████████████████████████████ 85                  │
│  Medium ████ 12                                          │
│  High   █ 3                                              │
│         0    20    40    60    80   100                  │
│                                                           │
│  Legend: ■ Low  ■ Medium  ■ High                         │
└──────────────────────────────────────────────────────────┘
```

**Features:**
- Detailed statistics in cards
- Horizontal bar chart
- Color-coded bars
- Interactive tooltips showing count + percentage
- Clear axis labels

---

### 4. Enhanced Student Summary

```
┌──────────────────────────────────────────────────────────┐
│ Student Summary                                           │
│                                                           │
│ Search: [John Doe________________] 🔍                    │
├──────────────────────────────────────────────────────────┤
│                                                           │
│ ┌─────────────────┐  ┌────────────────────────────────┐ │
│ │ Student Info    │  │ Student Responses              │ │
│ │                 │  │                                │ │
│ │ Name: John Doe  │  │ [< Question 1 of 28 >]        │ │
│ │ Grade: 10       │  │                                │ │
│ │ Gender: Male    │  │ Question text goes here...     │ │
│ │ Cluster: 1      │  │                                │ │
│ │ ─────────────── │  │ Answer: Student's response...  │ │
│ │ Risk Level:     │  │                                │ │
│ │   [Low Risk]    │  └────────────────────────────────┘ │
│ │   [Green badge] │                                     │
│ │                 │                                     │
│ │ Confidence:     │                                     │
│ │ ████████░░ 98%  │                                     │
│ │ [Progress bar]  │                                     │
│ │ ─────────────── │                                     │
│ │ Change Cluster: │                                     │
│ │ [Dropdown] [OK] │                                     │
│ └─────────────────┘                                     │
└──────────────────────────────────────────────────────────┘
```

**Features:**
- Risk level badge (color-coded)
- Confidence score as progress bar
- Percentage display
- Visual separator between sections
- Existing cluster functionality maintained

---

## 🎨 Color Palette

### Risk Level Colors

**Low Risk (Safe)**
- Primary: `#10B981` (Emerald green)
- Background: `green-50`
- Border: `green-200`
- Text: `green-700/800`

**Medium Risk (Caution)**
- Primary: `#F59E0B` (Amber)
- Background: `yellow-50`
- Border: `yellow-200`
- Text: `yellow-700/800`

**High Risk (Alert)**
- Primary: `#EF4444` (Red)
- Background: `red-50`
- Border: `red-200`
- Text: `red-700/800`

### Additional Colors
- Cluster colors: Random generation
- Chart backgrounds: White with shadows
- Text: Gray scale (600-800)
- Borders: Gray-200/300

---

## 📱 Responsive Behavior

### Desktop (≥1024px)
```
┌────────────────────────────────────────────────────────┐
│  [Cluster Cards: 3 columns]                            │
│  [Cluster Chart] [Answer Summary Chart]                │
│  [Risk Cards: 3 columns]                               │
│  [Risk Chart] [Risk Summary]                           │
│  [Student Info (1/3)] [Responses (2/3)]                │
└────────────────────────────────────────────────────────┘
```

### Tablet (768px - 1023px)
```
┌────────────────────────────┐
│  [Cluster Cards: 2 columns]│
│  [Cluster Chart]           │
│  [Answer Summary Chart]    │
│  [Risk Cards: 3 columns]   │
│  [Risk Chart]              │
│  [Risk Summary]            │
│  [Student Info]            │
│  [Responses]               │
└────────────────────────────┘
```

### Mobile (<768px)
```
┌──────────────────┐
│ [Cluster Card 1] │
│ [Cluster Card 2] │
│ [Cluster Card 3] │
│ [Cluster Chart]  │
│ [Answer Summary] │
│ [Risk Card: Low] │
│ [Risk Card: Med] │
│ [Risk Card: High]│
│ [Risk Chart]     │
│ [Risk Summary]   │
│ [Student Info]   │
│ [Responses]      │
└──────────────────┘
```

---

## 🔧 Component Props

### RiskRatingSummary
```typescript
interface Props {
  riskData: {
    model_name: string;
    risk_distribution: Record<string, number>;
    classes: string[];
  }
}
```

### RiskRatingChart
```typescript
interface Props {
  riskData: {
    model_name: string;
    risk_distribution: Record<string, number>;
    classes: string[];
  }
}
```

### RiskCountCard
```typescript
interface Props {
  level: string;        // "Low" | "Medium" | "High"
  count: number;        // Number of students
  percentage: number;   // Percentage (0-100)
}
```

### StudentSummary (Updated)
```typescript
interface Student {
  Name: string;
  Grade: string;
  Gender: string;
  Cluster: number;
  RiskRating?: string;       // NEW
  RiskConfidence?: number;   // NEW (0.0 - 1.0)
  Questions: Record<string, string>;
}
```

---

## 📊 Data Visualization Strategy

### Hierarchy of Information

**Level 1: Overview Cards**
- Quick glance at totals
- Color-coded for instant recognition
- Percentage context

**Level 2: Charts**
- Doughnut for proportions
- Bar for comparisons
- Interactive tooltips

**Level 3: Detailed Statistics**
- Full breakdown tables
- Precision metrics
- Confidence scores

**Level 4: Individual Records**
- Student-specific data
- Question-by-question review
- Editable cluster assignments

---

## 🎯 User Interaction Flow

### Viewing Risk Analysis

1. **Upload Data** → Processing screen (5-10 seconds)
2. **Dashboard Loads** → See cluster section first
3. **Scroll Down** → See risk analysis section
4. **View Cards** → Quick overview of risk distribution
5. **Check Charts** → Detailed visualization
6. **Search Student** → Individual risk + confidence
7. **Review Responses** → Navigate through questions

### Understanding a Student's Risk

1. **Search Student** by name
2. **View Risk Badge** (color indicates level)
3. **Check Confidence** (higher = more certain)
4. **Review Cluster** (group context)
5. **Read Responses** (understand reasoning)

---

## 🖼️ Visual Hierarchy

```
DASHBOARD
│
├─ ACTION BUTTONS (Upload, Colors, Download)
│
├─ CLUSTERS
│  ├─ Count Cards (Grid)
│  └─ Visualizations (Charts)
│
├─ RISK ANALYSIS
│  ├─ Count Cards (Grid)          ← NEW
│  └─ Visualizations (Charts)     ← NEW
│
├─ STUDENT SUMMARY
│  ├─ Search
│  ├─ Info (with risk)            ← UPDATED
│  └─ Responses
│
└─ CLASSIFICATION (if available)
   └─ Confusion Matrix
```

---

## 🎪 Interactive Elements

### Hover Effects
- Cards: Shadow lift
- Buttons: Color darken
- Chart elements: Tooltips appear

### Click Actions
- Search button: Fetch student data
- Update cluster: Save changes
- Chart elements: Display detailed info
- Navigation arrows: Switch questions

### Animations
- Card shadows: Smooth transition
- Progress bars: Animated width
- Charts: Fade-in on load
- Loading spinner: Rotation

---

## 💡 Best Practices Implemented

### UX Design
✅ Clear visual hierarchy  
✅ Consistent color coding  
✅ Intuitive navigation  
✅ Immediate feedback  
✅ Loading states  

### Accessibility
✅ High contrast ratios  
✅ Clear labels  
✅ Keyboard navigation  
✅ Semantic HTML  
✅ ARIA labels where needed  

### Performance
✅ Component memoization  
✅ Lazy chart rendering  
✅ Efficient re-renders  
✅ Optimized data structures  
✅ Cached calculations  

### Code Quality
✅ TypeScript type safety  
✅ Reusable components  
✅ Clear prop interfaces  
✅ Consistent naming  
✅ Clean component structure  

---

## 🚀 Ready to Use!

Your frontend is now fully equipped to display:
- ✅ Cluster analysis
- ✅ Risk rating predictions
- ✅ Confidence scores
- ✅ Visual dashboards
- ✅ Individual student details

All with a beautiful, intuitive, and responsive user interface!

---

**Next Steps**: 
1. Start the backend: `python app.py`
2. Start the frontend: `npm run dev`
3. Upload a CSV file
4. See your new risk analysis dashboard! 🎉

