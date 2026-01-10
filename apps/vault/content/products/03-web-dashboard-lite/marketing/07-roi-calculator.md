# ROI Calculator - E1 Web Dashboard Lite

**Product:** E1 - Web Dashboard Lite
**Last Updated:** 2025-12-28
**Version:** 1.0
**Purpose:** Help prospects calculate ROI and justify E1 subscription

---

## 1. Calculator Overview

### 1.1 Purpose

**The E1 ROI Calculator helps F&B business owners:**
- Quantify time savings from automated reporting
- Calculate cost reductions from data-driven decisions
- Estimate revenue gains from business insights
- Compare ROI across subscription tiers (Starter vs Pro)
- Justify E1 investment to stakeholders/partners

**Use Cases:**
- Sales conversations (demo stage)
- Free-to-paid upgrade decisions
- Starter-to-Pro upgrade justification
- Annual renewal discussions

---

## 2. ROI Formula

### 2.1 Total ROI Calculation

```
Total Annual ROI = (Total Annual Benefit - Annual Subscription Cost) / Annual Subscription Cost Ã— 100%

Where:
Total Annual Benefit = Time Savings + Food Cost Savings + Staff Productivity + Sales Growth
```

**Example:**
- Total Annual Benefit: Rp 36,000,000
- Annual Subscription Cost: Rp 2,400,000 (Starter tier)
- ROI: (36M - 2.4M) / 2.4M Ã— 100% = **1,400%** (14Ã— return)

### 2.2 Payback Period

```
Payback Period (months) = Annual Subscription Cost / (Total Annual Benefit / 12)
```

**Example:**
- Annual Cost: Rp 2,400,000
- Monthly Benefit: Rp 3,000,000
- Payback: 2.4M / 3M = **0.8 months** (~24 days)

---

## 3. Benefit Categories

### 3.1 Time Savings (Category 1)

**Baseline (Without E1):**
- Manual Excel reporting: 10-15 hours/month
- End-of-day cash reconciliation: 30 minutes/day Ã— 30 days = 15 hours/month
- Monthly sales analysis: 5 hours/month
- **Total:** 30-35 hours/month

**With E1:**
- Automated dashboard: 0 hours
- Instant reports: 2 hours/month (review only)
- **Total:** 2 hours/month

**Time Saved:** 28-33 hours/month

**Monetary Value:**
```
Time Savings Value = Hours Saved Ã— Owner Hourly Rate

Where:
Owner Hourly Rate = Rp 50,000 - 200,000/hour (depends on business)

Conservative Estimate (Rp 75,000/hour):
Monthly: 30 hours Ã— Rp 75,000 = Rp 2,250,000
Annually: Rp 2,250,000 Ã— 12 = Rp 27,000,000
```

**Calculator Inputs:**
```javascript
// User inputs
const hoursCurrentlySpent = 30; // hours/month
const ownerHourlyRate = 75000; // Rp/hour

// Calculation
const hoursSaved = hoursCurrentlySpent - 2; // E1 requires 2 hours/month
const monthlySavings = hoursSaved * ownerHourlyRate;
const annualTimeSavings = monthlySavings * 12;

console.log(`Annual Time Savings: Rp ${annualTimeSavings.toLocaleString()}`);
// Output: Rp 25,200,000
```

---

### 3.2 Food Cost Savings (Category 2)

**Problem:** Many F&B businesses have 10-20% food waste due to poor tracking.

**E1 Impact:** Product performance reports identify:
- Low-margin items (e.g., selling at cost)
- Overproduction (high waste products)
- Portion control issues

**Realistic Food Cost Reduction:** 3-5%

**Monetary Value:**
```
Food Cost Savings = Monthly Revenue Ã— Food Cost % Ã— Reduction %

Example (Warung with Rp 50M/month revenue):
- Revenue: Rp 50,000,000/month
- Food cost: 35% (Rp 17,500,000)
- Reduction: 4%
- Savings: Rp 17,500,000 Ã— 4% = Rp 700,000/month
- Annually: Rp 700,000 Ã— 12 = Rp 8,400,000
```

**Calculator Inputs:**
```javascript
// User inputs
const monthlyRevenue = 50000000; // Rp
const foodCostPercentage = 35; // %
const reductionPercentage = 4; // % (conservative: 3-5%)

// Calculation
const monthlyFoodCost = monthlyRevenue * (foodCostPercentage / 100);
const monthlySavings = monthlyFoodCost * (reductionPercentage / 100);
const annualFoodCostSavings = monthlySavings * 12;

console.log(`Annual Food Cost Savings: Rp ${annualFoodCostSavings.toLocaleString()}`);
// Output: Rp 8,400,000
```

**Supporting Data (Case Studies):**
- Bu Siti (Warung): Reduced food waste by 5% using E1 product reports
- Mas Budi (Cafe): Discontinued 3 low-margin items, saved Rp 500K/month

---

### 3.3 Staff Productivity Gains (Category 3)

**Problem:** Without data, owners can't optimize staffing levels.

**E1 Impact:** Hourly sales reports reveal:
- Peak hours (need more staff)
- Slow hours (overstaffing)
- Staff performance by cashier (Pro tier only)

**Realistic Staffing Optimization:** 5-10% labor cost reduction

**Monetary Value:**
```
Staff Productivity Savings = Monthly Labor Cost Ã— Reduction %

Example (Cafe with 3 employees):
- Labor cost: Rp 15,000,000/month (3 staff Ã— Rp 5M each)
- Reduction: 7% (cut 1 slow shift, optimize peak coverage)
- Savings: Rp 15,000,000 Ã— 7% = Rp 1,050,000/month
- Annually: Rp 1,050,000 Ã— 12 = Rp 12,600,000
```

**Calculator Inputs:**
```javascript
// User inputs
const monthlyLaborCost = 15000000; // Rp
const laborReductionPercentage = 7; // % (conservative: 5-10%)

// Calculation
const monthlySavings = monthlyLaborCost * (laborReductionPercentage / 100);
const annualStaffSavings = monthlySavings * 12;

console.log(`Annual Staff Productivity Savings: Rp ${annualStaffSavings.toLocaleString()}`);
// Output: Rp 12,600,000
```

---

### 3.4 Sales Growth (Category 4)

**Problem:** Businesses miss revenue opportunities without data.

**E1 Impact:** Growth insights identify:
- Underperforming days (can run promotions)
- Peak hours (can upsell more)
- High-demand products (can raise prices)

**Realistic Revenue Growth:** 2-5% from data-driven decisions

**Monetary Value:**
```
Sales Growth Value = Monthly Revenue Ã— Growth % Ã— Profit Margin %

Example (Restaurant with Rp 100M/month revenue):
- Revenue: Rp 100,000,000/month
- Growth: 3%
- New Revenue: Rp 3,000,000/month
- Profit Margin: 20% (after COGS, labor)
- Profit Gain: Rp 3,000,000 Ã— 20% = Rp 600,000/month
- Annually: Rp 600,000 Ã— 12 = Rp 7,200,000
```

**Calculator Inputs:**
```javascript
// User inputs
const monthlyRevenue = 100000000; // Rp
const revenueGrowthPercentage = 3; // % (conservative: 2-5%)
const profitMarginPercentage = 20; // %

// Calculation
const monthlyRevenueIncrease = monthlyRevenue * (revenueGrowthPercentage / 100);
const monthlyProfitIncrease = monthlyRevenueIncrease * (profitMarginPercentage / 100);
const annualSalesGrowth = monthlyProfitIncrease * 12;

console.log(`Annual Sales Growth Profit: Rp ${annualSalesGrowth.toLocaleString()}`);
// Output: Rp 7,200,000
```

---

## 4. Interactive Calculator (Web Implementation)

### 4.1 HTML Structure

```html
<!DOCTYPE html>
<html lang="id">
<head>
 <meta charset="UTF-8">
 <title>E1 ROI Calculator - Hitung Nilai Investasi Anda</title>
 <style>
 body { font-family: 'Inter', sans-serif; max-width: 800px; margin: 50px auto; }
 .input-group { margin: 20px 0; }
 label { display: block; font-weight: 600; margin-bottom: 5px; }
 input[type="number"] { width: 100%; padding: 10px; font-size: 16px; }
 .result { background: #f0f9ff; padding: 20px; border-radius: 8px; margin-top: 30px; }
 .result h2 { color: #0369a1; }
 .benefit-breakdown { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
 .benefit-card { background: white; padding: 15px; border-radius: 6px; border: 1px solid #e5e7eb; }
 </style>
</head>
<body>
 <h1> E1 ROI Calculator</h1>
 <p>Hitung potensi penghematan dan ROI dari E1 Web Dashboard Lite</p>

 <!-- Time Savings -->
 <div class="input-group">
 <label>Berapa jam/bulan Anda habiskan untuk laporan manual?</label>
 <input type="number" id="hoursSpent" value="30" min="0" max="200">
 <small>Rata-rata: 30 jam/bulan (Excel, rekap harian, analisis)</small>
 </div>

 <div class="input-group">
 <label>Berapa nilai waktu Anda per jam? (Rp)</label>
 <input type="number" id="hourlyRate" value="75000" min="10000" max="500000" step="5000">
 <small>Rata-rata pemilik usaha: Rp 50,000 - 100,000/jam</small>
 </div>

 <!-- Food Cost Savings -->
 <div class="input-group">
 <label>Omzet bulanan usaha Anda? (Rp)</label>
 <input type="number" id="monthlyRevenue" value="50000000" min="1000000" max="1000000000" step="1000000">
 </div>

 <div class="input-group">
 <label>Berapa % omzet untuk biaya bahan baku?</label>
 <input type="number" id="foodCostPercent" value="35" min="0" max="100">
 <small>Rata-rata F&B: 30-40%</small>
 </div>

 <!-- Labor Cost -->
 <div class="input-group">
 <label>Biaya gaji karyawan per bulan? (Rp)</label>
 <input type="number" id="laborCost" value="15000000" min="0" max="100000000" step="500000">
 </div>

 <!-- Profit Margin -->
 <div class="input-group">
 <label>Margin keuntungan bersih? (%)</label>
 <input type="number" id="profitMargin" value="20" min="0" max="100">
 <small>Rata-rata F&B: 15-25%</small>
 </div>

 <!-- Tier Selection -->
 <div class="input-group">
 <label>Pilih paket E1:</label>
 <select id="tier">
 <option value="2400000">Starter - Rp 200,000/bulan (Rp 2,400,000/tahun)</option>
 <option value="3600000">Pro - Rp 300,000/bulan (Rp 3,600,000/tahun)</option>
 </select>
 </div>

 <button onclick="calculateROI()" style="background: #0369a1; color: white; padding: 15px 30px; border: none; border-radius: 6px; font-size: 18px; cursor: pointer;">
 Hitung ROI
 </button>

 <!-- Results -->
 <div id="results" class="result" style="display: none;">
 <h2> Hasil Perhitungan ROI</h2>

 <div class="benefit-breakdown">
 <div class="benefit-card">
 <h4>(Time) Penghematan Waktu</h4>
 <p id="timeSavings" style="font-size: 24px; color: #059669; font-weight: bold;"></p>
 </div>

 <div class="benefit-card">
 <h4> Efisiensi Bahan Baku</h4>
 <p id="foodSavings" style="font-size: 24px; color: #059669; font-weight: bold;"></p>
 </div>

 <div class="benefit-card">
 <h4> Produktivitas Karyawan</h4>
 <p id="staffSavings" style="font-size: 24px; color: #059669; font-weight: bold;"></p>
 </div>

 <div class="benefit-card">
 <h4> Pertumbuhan Penjualan</h4>
 <p id="salesGrowth" style="font-size: 24px; color: #059669; font-weight: bold;"></p>
 </div>
 </div>

 <div style="background: white; padding: 20px; border-radius: 8px; margin-top: 20px; border: 2px solid #0369a1;">
 <h3 style="color: #0369a1;"> Total ROI Tahunan</h3>
 <p style="font-size: 36px; font-weight: bold; color: #059669; margin: 10px 0;" id="totalROI"></p>
 <p style="font-size: 18px; color: #64748b;">
 Total Benefit: <span id="totalBenefit" style="font-weight: 600;"></span><br>
 Biaya E1: <span id="subscriptionCost" style="font-weight: 600;"></span><br>
 <strong>Payback Period: <span id="payback" style="color: #0369a1;"></span></strong>
 </p>
 </div>

 <div style="margin-top: 20px; padding: 15px; background: #fef3c7; border-radius: 6px;">
 <p><strong> Catatan:</strong> Perhitungan ini menggunakan asumsi konservatif berdasarkan data pengguna E1. Hasil aktual dapat bervariasi tergantung kondisi bisnis Anda.</p>
 </div>
 </div>

 <script src="roi-calculator.js"></script>
</body>
</html>
```

### 4.2 JavaScript Logic

```javascript
// roi-calculator.js

function calculateROI() {
 // Get inputs
 const hoursSpent = parseFloat(document.getElementById('hoursSpent').value);
 const hourlyRate = parseFloat(document.getElementById('hourlyRate').value);
 const monthlyRevenue = parseFloat(document.getElementById('monthlyRevenue').value);
 const foodCostPercent = parseFloat(document.getElementById('foodCostPercent').value);
 const laborCost = parseFloat(document.getElementById('laborCost').value);
 const profitMargin = parseFloat(document.getElementById('profitMargin').value);
 const annualSubscriptionCost = parseFloat(document.getElementById('tier').value);

 // Validate inputs
 if (isNaN(hoursSpent) || isNaN(hourlyRate) || isNaN(monthlyRevenue)) {
 alert('Mohon isi semua kolom dengan benar');
 return;
 }

 // 1. TIME SAVINGS
 const hoursSaved = Math.max(0, hoursSpent - 2); // E1 requires 2 hours/month
 const monthlyTimeSavings = hoursSaved * hourlyRate;
 const annualTimeSavings = monthlyTimeSavings * 12;

 // 2. FOOD COST SAVINGS (Conservative: 4% reduction)
 const monthlyFoodCost = monthlyRevenue * (foodCostPercent / 100);
 const foodCostReduction = 4; // 4% reduction
 const monthlyFoodSavings = monthlyFoodCost * (foodCostReduction / 100);
 const annualFoodSavings = monthlyFoodSavings * 12;

 // 3. STAFF PRODUCTIVITY (Conservative: 7% labor cost reduction)
 const laborReduction = 7; // 7% reduction
 const monthlyStaffSavings = laborCost * (laborReduction / 100);
 const annualStaffSavings = monthlyStaffSavings * 12;

 // 4. SALES GROWTH (Conservative: 3% revenue growth, profit only)
 const revenueGrowth = 3; // 3% growth
 const monthlyRevenueIncrease = monthlyRevenue * (revenueGrowth / 100);
 const monthlyProfitIncrease = monthlyRevenueIncrease * (profitMargin / 100);
 const annualSalesGrowth = monthlyProfitIncrease * 12;

 // TOTAL BENEFIT
 const totalAnnualBenefit = annualTimeSavings + annualFoodSavings + annualStaffSavings + annualSalesGrowth;

 // ROI CALCULATION
 const netBenefit = totalAnnualBenefit - annualSubscriptionCost;
 const roiPercentage = (netBenefit / annualSubscriptionCost) * 100;

 // PAYBACK PERIOD (months)
 const monthlyBenefit = totalAnnualBenefit / 12;
 const paybackMonths = annualSubscriptionCost / monthlyBenefit;

 // Display results
 document.getElementById('results').style.display = 'block';
 document.getElementById('timeSavings').textContent = formatRupiah(annualTimeSavings);
 document.getElementById('foodSavings').textContent = formatRupiah(annualFoodSavings);
 document.getElementById('staffSavings').textContent = formatRupiah(annualStaffSavings);
 document.getElementById('salesGrowth').textContent = formatRupiah(annualSalesGrowth);
 document.getElementById('totalBenefit').textContent = formatRupiah(totalAnnualBenefit);
 document.getElementById('subscriptionCost').textContent = formatRupiah(annualSubscriptionCost);
 document.getElementById('totalROI').textContent = roiPercentage.toFixed(0) + '%';
 document.getElementById('payback').textContent = paybackMonths.toFixed(1) + ' bulan';

 // Scroll to results
 document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}

function formatRupiah(amount) {
 return 'Rp ' + amount.toLocaleString('id-ID', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}
```

---

## 5. Pre-Calculated ROI Examples

### 5.1 Small Warung (Monthly Revenue: Rp 20M)

**Business Profile:**
- Monthly Revenue: Rp 20,000,000
- Food Cost: 35% (Rp 7,000,000)
- Labor Cost: Rp 5,000,000 (1 part-time helper)
- Owner hourly value: Rp 50,000
- Current manual reporting: 20 hours/month

**Annual Benefits (Starter Tier):**
1. Time Savings: (20-2) Ã— Rp 50K Ã— 12 = **Rp 10,800,000**
2. Food Cost Savings: Rp 7M Ã— 4% Ã— 12 = **Rp 3,360,000**
3. Staff Savings: Rp 5M Ã— 7% Ã— 12 = **Rp 4,200,000**
4. Sales Growth: (Rp 20M Ã— 3% Ã— 20%) Ã— 12 = **Rp 1,440,000**
5. **Total Benefit: Rp 19,800,000**

**ROI Calculation:**
- Annual E1 Cost: Rp 2,400,000 (Starter)
- Net Benefit: Rp 19.8M - Rp 2.4M = **Rp 17,400,000**
- **ROI: 725%** (7.25Ã— return)
- **Payback: 1.5 months**

---

### 5.2 Medium Cafe (Monthly Revenue: Rp 80M)

**Business Profile:**
- Monthly Revenue: Rp 80,000,000
- Food Cost: 40% (Rp 32,000,000)
- Labor Cost: Rp 20,000,000 (4 staff)
- Owner hourly value: Rp 100,000
- Current manual reporting: 35 hours/month

**Annual Benefits (Pro Tier):**
1. Time Savings: (35-2) Ã— Rp 100K Ã— 12 = **Rp 39,600,000**
2. Food Cost Savings: Rp 32M Ã— 4% Ã— 12 = **Rp 15,360,000**
3. Staff Savings: Rp 20M Ã— 7% Ã— 12 = **Rp 16,800,000**
4. Sales Growth: (Rp 80M Ã— 3% Ã— 22%) Ã— 12 = **Rp 6,336,000**
5. **Total Benefit: Rp 78,096,000**

**ROI Calculation:**
- Annual E1 Cost: Rp 3,600,000 (Pro)
- Net Benefit: Rp 78M - Rp 3.6M = **Rp 74,496,000**
- **ROI: 2,069%** (20.7Ã— return)
- **Payback: 0.6 months** (~18 days)

---

### 5.3 Large Restaurant (Monthly Revenue: Rp 200M)

**Business Profile:**
- Monthly Revenue: Rp 200,000,000
- Food Cost: 38% (Rp 76,000,000)
- Labor Cost: Rp 50,000,000 (10 staff)
- Owner hourly value: Rp 150,000
- Current manual reporting: 40 hours/month

**Annual Benefits (Pro Tier):**
1. Time Savings: (40-2) Ã— Rp 150K Ã— 12 = **Rp 68,400,000**
2. Food Cost Savings: Rp 76M Ã— 4% Ã— 12 = **Rp 36,480,000**
3. Staff Savings: Rp 50M Ã— 7% Ã— 12 = **Rp 42,000,000**
4. Sales Growth: (Rp 200M Ã— 3% Ã— 25%) Ã— 12 = **Rp 18,000,000**
5. **Total Benefit: Rp 164,880,000**

**ROI Calculation:**
- Annual E1 Cost: Rp 3,600,000 (Pro)
- Net Benefit: Rp 164.8M - Rp 3.6M = **Rp 161,280,000**
- **ROI: 4,480%** (44.8Ã— return)
- **Payback: 0.3 months** (~9 days)

---

## 6. Sales Conversation Scripts

### 6.1 Discovery Questions (Before Calculator)

**Script:**
> "Sebelum kita hitung ROI, boleh saya tanya beberapa hal tentang bisnis Bapak/Ibu?"

**Questions:**
1. "Berapa omzet bulanan rata-rata bisnis Bapak/Ibu sekarang?"
2. "Berapa jam per minggu Bapak/Ibu habiskan untuk buat laporan penjualan?"
3. "Apakah Bapak/Ibu pernah merasa biaya bahan baku terlalu tinggi atau ada waste?"
4. "Berapa karyawan yang Bapak/Ibu punya sekarang?"
5. "Berapa margin keuntungan bersih bisnis Bapak/Ibu? (Kalau tidak pasti, kira-kira 10%, 20%, atau 30%?)"

### 6.2 Presenting ROI Results

**Script (After Calculator):**
> "Pak/Bu, berdasarkan data yang Bapak/Ibu berikan, saya sudah hitung ROI-nya. E1 bisa memberikan benefit sekitar **Rp XX juta per tahun**, sedangkan biaya langganan hanya **Rp 2.4 juta** (Starter) atau **Rp 3.6 juta** (Pro) per tahun.
>
> Artinya, **setiap Rp 1 yang Bapak/Ibu investasi untuk E1, bisa balik Rp X** dalam setahun. Bahkan, biaya E1 bisa balik modal dalam **X bulan** saja.
>
> Ini belum termasuk benefit lain seperti peace of mind, lebih mudah ambil keputusan, dan tidak perlu pusing dengan Excel lagi."

### 6.3 Handling Objections

**Objection 1: "Terlalu mahal"**
> "Saya paham Pak/Bu. Tapi coba lihat dari sisi ini: E1 biayanya Rp 200 ribu per bulan. Itu setara dengan 10 nasi goreng saja. Tapi benefitnya bisa hemat Rp 1-2 juta per bulan dari efisiensi bahan baku dan waktu. Jadi sebenarnya E1 ini **bukan biaya, tapi investasi** yang ROI-nya 10-20 kali lipat."

**Objection 2: "Nanti saja kalau bisnis sudah lebih besar"**
> "Justru sekarang waktu yang tepat, Pak/Bu. Karena **semakin cepat pakai E1, semakin banyak yang dihemat**. Kalau tunggu 6 bulan lagi, artinya Pak/Bu kehilangan potential savings Rp 5-10 juta selama 6 bulan itu. Lagipula, ada paket Free untuk coba dulu tanpa risiko."

**Objection 3: "Saya tidak yakin bisa hemat segitu"**
> "Saya paham kekhawatirannya. Makanya E1 punya **garansi 30 hari uang kembali**. Bapak/Ibu bisa coba 1 bulan dulu, lihat sendiri hasilnya. Kalau memang tidak sesuai ekspektasi, bisa refund penuh. Tapi berdasarkan data pengguna kami, rata-rata mereka hemat 3-5% dari food cost dan 20-30 jam per bulan. Itu angka konservatif, bukan janji berlebihan."

---

## 7. Email Template (Post-Demo)

### 7.1 Subject Line

**Option 1:** "ROI E1 untuk [Business Name]: Hemat Rp XX Juta/Tahun
**Option 2:** "Hasil Perhitungan: E1 Balik Modal dalam X Bulan

### 7.2 Email Body

```
Halo [Name],

Terima kasih sudah meluangkan waktu untuk demo E1 tadi. Seperti yang sudah saya janjikan, ini hasil perhitungan ROI berdasarkan data bisnis Bapak/Ibu:

 RINGKASAN ROI E1 UNTUK [BUSINESS NAME]
\�”\�”\�”\�”\�”\�”\�”\�”\�”\�”\�”\�”\�”\�”\�”\�”\�”\�”\�”

Paket: [Starter/Pro] - Rp [200,000/300,000]/bulan

BENEFIT TAHUNAN:
[x] Penghematan Waktu: Rp XX,XXX,XXX
 ([X] jam/bulan Ã— Rp [hourly rate])

[x] Efisiensi Bahan Baku: Rp XX,XXX,XXX
 (Pengurangan food waste 4%)

[x] Produktivitas Karyawan: Rp XX,XXX,XXX
 (Optimasi jadwal shift 7%)

[x] Pertumbuhan Penjualan: Rp XX,XXX,XXX
 (Revenue growth 3% dari insights)

\�”\�”\�”\�”\�”\�”\�”\�”\�”\�”\�”\�”\�”\�”\�”\�”\�”\�”\�”
 TOTAL BENEFIT: Rp XX,XXX,XXX/tahun
 BIAYA E1: Rp X,XXX,XXX/tahun
 ROI: XXX% (XXÃ— return on investment)
(Time) PAYBACK PERIOD: X bulan

\�”\�”\�”\�”\�”\�”\�”\�”\�”\�”\�”\�”\�”\�”\�”\�”\�”\�”\�”

Artinya: Setiap Rp 1 yang Bapak/Ibu investasi untuk E1, bisa balik Rp XX dalam setahun.

 PENAWARAN KHUSUS (Limited Time):
- Diskon 20% untuk 3 bulan pertama (hemat Rp 120,000 - 180,000)
- Free onboarding & training (senilai Rp 500,000)
- Garansi 30 hari uang kembali (no questions asked)

Mau langsung mulai? Klik link ini: [Sign Up Link]
Ada pertanyaan? Reply email ini atau WA saya: [Phone Number]

Salam,
[Your Name]
[Title]
E1 - Web Dashboard Lite
```

---

## 8. Assumptions and Disclaimers

### 8.1 Conservative Assumptions

**All calculations use conservative estimates:**
- **Time Savings:** Assumes 28 hours/month saved (industry average: 30-35)
- **Food Cost Reduction:** 4% (industry range: 3-7%)
- **Labor Efficiency:** 7% (industry range: 5-12%)
- **Revenue Growth:** 3% profit contribution (industry range: 2-8%)

**Why Conservative?**
- Builds trust (underpromise, overdeliver)
- Reduces churn risk (realistic expectations)
- Protects brand reputation

### 8.2 Legal Disclaimer

**Include on calculator page:**

> "[!] **Disclaimer:** Perhitungan ROI ini adalah estimasi berdasarkan data agregat dari pengguna E1 dan asumsi industri F&B. Hasil aktual dapat bervariasi tergantung:
> - Kondisi bisnis spesifik (lokasi, jenis menu, kompetisi)
> - Konsistensi penggunaan E1 (data quality)
> - Faktor eksternal (ekonomi, musim, tren)
>
> E1 tidak menjamin hasil finansial tertentu. ROI calculator ini hanya sebagai panduan untuk membantu pengambilan keputusan investasi."

---

## 9. A/B Testing Recommendations

### 9.1 Test Variants

**Variant A: Conservative ROI (Current)**
- Use 4% food cost reduction, 7% labor efficiency, 3% revenue growth
- Target: Risk-averse customers

**Variant B: Aggressive ROI**
- Use 6% food cost reduction, 10% labor efficiency, 5% revenue growth
- Target: Growth-focused customers

**Variant C: Case Study-Based**
- Instead of percentages, show actual case study results
- "Bu Siti hemat Rp 8 juta/tahun, Mas Budi hemat Rp 12 juta/tahun"
- Target: Story-driven customers

### 9.2 Metrics to Track

**Conversion Metrics:**
- Calculator completion rate (% who finish vs abandon)
- Free-to-Starter conversion (7 days after calculator use)
- Demo booking rate (calculator  ->  demo request)

**Engagement Metrics:**
- Time spent on calculator page
- Number of recalculations (users trying different scenarios)
- Email open rate (post-calculator follow-up)

**Accuracy Metrics:**
- Compare predicted ROI vs actual ROI (6-month post-signup survey)
- Customer satisfaction with ROI accuracy (NPS question)

---

## 10. Implementation Checklist

### 10.1 Technical Implementation

- [ ] Build HTML/CSS/JS calculator (2-3 days)
- [ ] Deploy to e1-dashboard.com/roi-calculator
- [ ] Add Google Analytics tracking (events: calculator_start, calculator_complete, tier_selected)
- [ ] Implement lead capture form (email after ROI results shown)
- [ ] Set up automated email sequence (ROI results  ->  case study  ->  demo offer)

### 10.2 Sales Enablement

- [ ] Train sales team on ROI calculator usage (1-hour workshop)
- [ ] Create sales playbook with objection handling scripts
- [ ] Prepare pre-calculated ROI examples for 5 business archetypes
- [ ] Develop email templates for post-demo follow-up
- [ ] Create video tutorial: "How to use E1 ROI Calculator" (3 minutes)

### 10.3 Marketing Collateral

- [ ] Design one-page ROI infographic (PDF download)
- [ ] Create social media posts: "Calculate your E1 ROI in 2 minutes"
- [ ] Write blog post: "Berapa ROI E1 untuk Bisnis Anda?"
- [ ] Produce customer testimonial videos featuring ROI results
- [ ] Add ROI calculator CTA to pricing page, homepage, blog

---

**Document ID:** E1-ROI-CALC-v1.0
**Last Updated:** 2025-12-28
**Owner:** Marketing Team
**Next Review:** Q2 2025 (update assumptions based on real user data)

**Related Documents:**
- [[products/03-web-dashboard-lite/business-intelligence/freemium-unit-economics|Freemium Unit Economics]] - LTV/CAC baseline
- [[products/03-web-dashboard-lite/marketing/04-customer-faq|Customer FAQ]] - Common ROI questions
- [[products/03-web-dashboard-lite/marketing/09-case-studies|Case Studies]] - Real customer ROI examples

