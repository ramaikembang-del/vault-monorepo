# Performance Optimization Guide - Power BI Template
**Asset Type:** PDF Document  
**Purpose:** Guide for optimizing Power BI Template performance with large datasets

---

## Document Outline

**Filename:** `performance-guide.pdf`  
**Pages:** ~10-12 pages  
**Audience:** Power users, multi-outlet operators with 6+ months data  
**Language:** Bahasa Indonesia + English

---

## Table of Contents

1. **Understanding Performance Issues** (p1-2)
2. **Data Reduction Techniques** (p3-5)
3. **Power BI Optimizations** (p6-8)
4. **Hardware Recommendations** (p9)
5. **When to Upgrade to SaaS** (p10)

---

## Content Specifications

### Section 1: Understanding Performance Issues

**Common Symptoms:**
- Dashboard takes >30 seconds to load
- Filters are slow to respond
- Visuals don't update when clicking
- "Out of Memory" errors
- Power BI crashes on refresh

**Root Causes:**
1. **Too much data** (>500K rows)
2. **Inefficient relationships** (many-to-many without proper indexing)
3. **Complex calculated columns** (row-by-row calculations)
4. **Too many visuals** on one page (>20 visuals)
5. **Large images** in tooltips/backgrounds

**Quick Diagnosis:**
- Check file size: Template should be <50MB
- Check row count: Data view → Count rows
- Check RAM usage: Task Manager during refresh

**Performance Benchmarks:**

| Data Volume | Refresh Time | RAM Usage | User Experience |
|-------------|--------------|-----------|-----------------|
| <10K rows | <5 seconds | <500MB | ✅ Excellent |
| 10K-100K rows | 5-15 seconds | 500MB-2GB | ✅ Good |
| 100K-500K rows | 15-45 seconds | 2-4GB | ⚠️ Acceptable |
| >500K rows | >60 seconds | >4GB | ❌ Poor - Upgrade SaaS |

---

### Section 2: Data Reduction Techniques

#### Technique 1: Date Range Filtering

**Problem:** Loading 2+ years of historical data daily  
**Solution:** Only load last 12 months

**Power Query Steps:**
```
1. Select Date column
2. Right-click → Date Filters → In the Last → 365 days
3. Close & Apply
```

**Impact:** Reduces data by 50-75%

---

#### Technique 2: Remove Unnecessary Columns

**Common Unnecessary Columns:**
- Transaction ID (not needed for reporting)
- Customer Name (use Customer ID)
- Detailed notes/memos
- Internal SKU codes
- Duplicate timestamp columns

**Power Query Steps:**
```
1. Click column header
2. Right-click → Remove
3. Repeat for all unnecessary columns
```

**Impact:** Reduces file size by 20-30%

---

#### Technique 3: Aggregate Daily Data

**For businesses with >1 year data:**
Keep detailed data for last 3 months only  
Aggregate older data to daily summaries

**Example:**
```
OLD (detailed):
2024-01-01 09:15 | Item A | 1 | 25000
2024-01-01 09:20 | Item B | 2 | 15000
2024-01-01 09:25 | Item A | 1 | 25000

NEW (aggregated):
2024-01-01 | Total Sales | 345 | 8500000
```

**Impact:** Reduces rows by 90% for historical data

---

### Section 3: Power BI Optimizations

#### Optimization 1: Use Measures Instead of Calculated Columns

**Bad (Slow):**
```DAX
Profit = [Total Sales] - [Total Cost]  // Calculated Column
```

**Good (Fast):**
```DAX
Total Profit = SUM([Total Sales]) - SUM([Total Cost])  // Measure
```

**Why:** Calculated columns compute per row (100K calculations)  
Measures compute on aggregated data (1 calculation)

---

#### Optimization 2: Optimize Relationships

**Best Practices:**
- Use single-directional filters (not bi-directional)
- Create proper star schema (fact → dimension)
- Index lookup columns (Power Query → choose data type)

**Diagram Needed:** Show star schema example

---

#### Optimization 3: Reduce Visual Count

**Per Page Limits:**
- Maximum 15 visuals per page (optimal: 8-10)
- Use drill-through pages for details
- Combine similar charts into one (use filters)

**Before:**
```
Page 1: 25 visuals (Sales by Item, by Staff, by Day, by Hour, by Location...)
Result: Slow, cluttered
```

**After:**
```
Page 1: 8 visuals (Key metrics, filters on right)
Page 2: Drill-through for Item details
Page 3: Drill-through for Staff details
Result: Fast, clean
```

---

#### Optimization 4: Reduce Image Sizes

**Background Images:**
- Max size: 500KB per image
- Format: PNG or JPEG (not BMP)
- Resolution: Screen resolution only (1920x1080 max)

**Compression Tools:**
- TinyPNG.com
- Squoosh.app
- Photoshop → Export for Web

---

### Section 4: Hardware Recommendations

**Minimum Specs (Template usage):**
- CPU: Intel i3 or AMD Ryzen 3
- RAM: 4GB
- Storage: 5GB free

**Recommended Specs (smooth experience):**
- CPU: Intel i5 or AMD Ryzen 5
- RAM: 8GB
- SSD: 10GB free (faster data refresh)

**Not Recommended:**
- Laptops with <4GB RAM
- Very old CPUs (pre-2015)
- Network drives for data storage (slow)

**For Multi-Outlet Businesses (>3 outlets):**
- RAM: 16GB minimum
- CPU: i7 or Ryzen 7
- Or upgrade to SaaS (cloud-based, no local RAM needed)

---

### Section 5: When to Upgrade to SaaS

**Signs You Need SaaS:**
1. Template file >100MB even after optimization
2. Data >500K rows (1+ years, multi-outlet)
3. Multiple users need access (Power BI can't share)
4. Need real-time data (not daily manual refresh)
5. Team of 5+ people analyzing data

**SaaS Benefits vs Template:**

| Feature | Template | SaaS Basic | SaaS Pro |
|---------|----------|------------|----------|
| Data Limit | Manual | Unlimited | Unlimited |
| Users | 1 (you only) | 3 | 10 |
| Performance | Depends on PC | Always fast | Always fast |
| Auto-refresh | No | Yes (daily) | Yes (hourly) |
| Mobile access | No | Yes | Yes |

**Migration Path:**
- Export your data from Template
- Import to SaaS (one-click)
- Free 30-day trial
- Keep Template as backup

---

## Troubleshooting Quick Reference

| Issue | Quick Fix | Full Solution (Page) |
|-------|-----------|---------------------|
| Slow refresh | Remove old data | p3 (Date Filtering) |
| Out of memory | Close other apps | p9 (Hardware) |
| Visuals don't load | Reduce visual count | p7 (Visual Optimization) |
| File too large | Remove columns + compress images | p4-5 (Data Reduction) |

---

## How to Create This PDF

**Tools:**
- Google Docs (easy, collaborative)
- Canva (visual design)
- Microsoft Word (professional formatting)

**Include:**
1. Screenshots of Power Query interface
2. Before/after performance comparisons
3. DAX code examples (syntax-highlighted)
4. Hardware comparison table
5. Migration flow diagram (Template → SaaS)

**Design:**
- Clario brand colors
- Bilingual (Bahasa Indonesia + English side-by-side)
- Monospace font for code examples
- Icons for quick tips (💡 = tip, ⚠️ = warning, ✅ = best practice)

---

**Last Updated:** January 9, 2026  
**Owner:** Product Team  
**Status:** Specification ready - PDF creation pending
