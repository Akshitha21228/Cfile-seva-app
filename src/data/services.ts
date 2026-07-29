// export interface Service {
//   id: string;
//   title: string;
//   category: string;
//   price: number;
//   description: string;
//   benefits: string[];
//   documentsRequired: string[];
//   tags: ("hot" | "trending" | "premium" | "top-selling" | "new" | "popular" | "fast-moving")[];
//   icon: string;
// }

// export const SERVICES: Service[] = [
//   // BUSINESS REGISTRATION
//   {
//     id: "pvt-ltd-reg",
//     title: "Private Limited Company Registration",
//     category: "Business Registration",
//     price: 6999,
//     description: "Register your business as a Private Limited Company for better credibility and limited liability.",
//     benefits: ["Limited Liability", "Perpetual Succession", "Easy Transferability", "Better Credibility"],
//     documentsRequired: ["PAN Card", "Aadhaar Card", "Passport Size Photo", "Address Proof", "NOC from Owner"],
//     tags: ["hot", "top-selling"],
//     icon: "Building2"
//   },
//   {
//     id: "llp-reg",
//     title: "LLP Registration",
//     category: "Business Registration",
//     price: 4999,
//     description: "Limited Liability Partnership is a hybrid of company and partnership.",
//     benefits: ["Limited Liability", "No Minimum Capital", "Lower Compliance", "Tax Benefits"],
//     documentsRequired: ["PAN Card", "Aadhaar Card", "Passport Size Photo", "Address Proof"],
//     tags: ["top-selling"],
//     icon: "Users2"
//   },
//   {
//     id: "opc-reg",
//     title: "OPC Registration",
//     category: "Business Registration",
//     price: 5999,
//     description: "One Person Company allows a single entrepreneur to operate a corporate entity.",
//     benefits: ["Single Ownership", "Limited Liability", "Separate Legal Entity", "Easy Funding"],
//     documentsRequired: ["PAN Card", "Aadhaar Card", "Passport Size Photo", "Address Proof"],
//     tags: ["new"],
//     icon: "UserCheck"
//   },
//   {
//     id: "partnership-reg",
//     title: "Partnership Firm Registration",
//     category: "Business Registration",
//     price: 2999,
//     description: "Register a partnership firm for collaborative business operations.",
//     benefits: ["Easy to Start", "Shared Responsibility", "Flexibility", "Simple Dissolution"],
//     documentsRequired: ["Partnership Deed", "PAN Card of Partners", "Address Proof"],
//     tags: ["fast-moving"],
//     icon: "Handshake"
//   },
//   {
//     id: "sole-prop-reg",
//     title: "Sole Proprietorship Registration",
//     category: "Business Registration",
//     price: 1999,
//     description: "The simplest form of business registration for individual entrepreneurs.",
//     benefits: ["Full Control", "Minimal Compliance", "Easy Setup", "Direct Tax Benefits"],
//     documentsRequired: ["PAN Card", "Aadhaar Card", "Bank Statement", "Address Proof"],
//     tags: ["hot"],
//     icon: "User"
//   },
//   {
//     id: "startup-india-reg",
//     title: "Startup India Registration",
//     category: "Business Registration",
//     price: 3999,
//     description: "Get recognized by DPIIT and enjoy tax benefits and easier compliance.",
//     benefits: ["Tax Exemptions", "Self-Certification", "Easy Exit", "Fast-Track Patent"],
//     documentsRequired: ["Certificate of Incorporation", "Pitch Deck", "Write-up on Innovation"],
//     tags: ["trending"],
//     icon: "Rocket"
//   },
//   {
//     id: "section-8-reg",
//     title: "Section 8 Company Registration",
//     category: "Business Registration",
//     price: 14999,
//     description: "Register a non-profit organization for charitable or social causes.",
//     benefits: ["No Minimum Capital", "Tax Exemptions", "Separate Legal Entity", "Credibility"],
//     documentsRequired: ["PAN Card", "Aadhaar Card", "Passport Size Photo", "Address Proof"],
//     tags: ["premium"],
//     icon: "Heart"
//   },
//   {
//     id: "nidhi-reg",
//     title: "Nidhi Company Registration",
//     category: "Business Registration",
//     price: 19999,
//     description: "A type of NBFC that deals with lending and borrowing among its members.",
//     benefits: ["Easy Lending", "No RBI Approval Required", "Low Capital Requirement", "Mutual Benefit"],
//     documentsRequired: ["PAN Card", "Aadhaar Card", "Passport Size Photo", "Address Proof"],
//     tags: ["premium"],
//     icon: "Banknote"
//   },
//   {
//     id: "producer-reg",
//     title: "Producer Company Registration",
//     category: "Business Registration",
//     price: 17999,
//     description: "For farmers and producers to collectively manage their produce.",
//     benefits: ["Better Market Access", "Financial Support", "Limited Liability", "Tax Benefits"],
//     documentsRequired: ["PAN Card", "Aadhaar Card", "Passport Size Photo", "Address Proof"],
//     tags: ["premium"],
//     icon: "Sprout"
//   },
//   {
//     id: "indian-subsidiary-reg",
//     title: "Indian Subsidiary Registration",
//     category: "Business Registration",
//     price: 24999,
//     description: "For foreign companies to establish a legal presence in India.",
//     benefits: ["100% FDI Allowed", "Separate Legal Entity", "Access to Indian Market", "Limited Liability"],
//     documentsRequired: ["Certificate of Incorporation", "Board Resolution", "PAN Card of Directors"],
//     tags: ["premium", "hot"],
//     icon: "Globe"
//   },

//   // GST SERVICES
//   {
//     id: "gst-reg",
//     title: "GST Registration",
//     category: "GST Services",
//     price: 999,
//     description: "Mandatory registration for businesses with turnover exceeding threshold limits.",
//     benefits: ["Legal Recognition", "Input Tax Credit", "Interstate Sales", "E-commerce Access"],
//     documentsRequired: ["PAN Card", "Aadhaar Card", "Electricity Bill", "Bank Statement"],
//     tags: ["hot", "top-selling"],
//     icon: "FileText"
//   },
//   {
//     id: "gst-return-monthly",
//     title: "GST Return Filing (Monthly)",
//     category: "GST Services",
//     price: 499,
//     description: "Regular monthly filing of GSTR-1 and GSTR-3B.",
//     benefits: ["Compliance", "Avoid Penalties", "Smooth ITC Flow", "Good Credit Score"],
//     documentsRequired: ["Sales Invoices", "Purchase Invoices", "Bank Statement"],
//     tags: ["top-selling"],
//     icon: "Calendar"
//   },
//   {
//     id: "gst-return-quarterly",
//     title: "GST Return Filing (Quarterly)",
//     category: "GST Services",
//     price: 1200,
//     description: "Quarterly filing under QRMP scheme for small taxpayers.",
//     benefits: ["Less Compliance", "Better Cash Flow", "Simplified Filing", "Peace of Mind"],
//     documentsRequired: ["Sales Invoices", "Purchase Invoices", "Bank Statement"],
//     tags: ["fast-moving"],
//     icon: "CalendarRange"
//   },
//   {
//     id: "gst-return-annual",
//     title: "GST Return Filing (Annual)",
//     category: "GST Services",
//     price: 2999,
//     description: "Filing of GSTR-9 annual return summarizing all transactions.",
//     benefits: ["Final Reconciliation", "Correction of Errors", "Compliance", "Audit Readiness"],
//     documentsRequired: ["Annual Sales Data", "Annual Purchase Data", "Audited Financials"],
//     tags: ["popular"],
//     icon: "FileCheck"
//   },
//   {
//     id: "gst-amendment",
//     title: "GST Amendment",
//     category: "GST Services",
//     price: 799,
//     description: "Update details in your existing GST registration.",
//     benefits: ["Correct Records", "Avoid Notices", "Updated Address/Name", "Compliance"],
//     documentsRequired: ["GST Certificate", "Proof of Change", "Aadhaar Card"],
//     tags: ["fast-moving"],
//     icon: "Edit"
//   },
//   {
//     id: "gst-cancellation",
//     title: "GST Cancellation",
//     category: "GST Services",
//     price: 999,
//     description: "Surrender your GST registration if business is closed or below threshold.",
//     benefits: ["Stop Compliance", "Avoid Future Penalties", "Legal Closure", "Clean Records"],
//     documentsRequired: ["GST Certificate", "Final Sales Data", "Reason for Cancellation"],
//     tags: ["fast-moving"],
//     icon: "XCircle"
//   },
//   {
//     id: "gst-lut",
//     title: "GST LUT Filing",
//     category: "GST Services",
//     price: 499,
//     description: "Letter of Undertaking for zero-rated supply of goods or services without tax.",
//     benefits: ["Export without Tax", "Better Working Capital", "Simplified Export", "Compliance"],
//     documentsRequired: ["GST Certificate", "Witness Details", "Authorized Signatory Details"],
//     tags: ["new"],
//     icon: "FileUp"
//   },
//   {
//     id: "gst-notice-reply",
//     title: "GST Notice Reply",
//     category: "GST Services",
//     price: 1999,
//     description: "Professional drafting and filing of replies to GST notices.",
//     benefits: ["Legal Protection", "Avoid Penalties", "Expert Guidance", "Timely Resolution"],
//     documentsRequired: ["GST Notice", "Supporting Documents", "Previous Filings"],
//     tags: ["premium"],
//     icon: "ShieldAlert"
//   },
//   {
//     id: "gst-audit",
//     title: "GST Audit",
//     category: "GST Services",
//     price: 4999,
//     description: "Mandatory audit for businesses exceeding turnover limits.",
//     benefits: ["Compliance", "Identify Gaps", "Risk Mitigation", "Financial Accuracy"],
//     documentsRequired: ["Audited Financials", "GST Filings", "Purchase/Sales Registers"],
//     tags: ["premium"],
//     icon: "Search"
//   },
//   {
//     id: "gst-reconciliation",
//     title: "GST Reconciliation",
//     category: "GST Services",
//     price: 1499,
//     description: "Reconcile GSTR-2A/2B with purchase register for maximum ITC.",
//     benefits: ["Maximize ITC", "Avoid Notices", "Identify Missing Invoices", "Financial Control"],
//     documentsRequired: ["Purchase Register", "GSTR-2A/2B Data"],
//     tags: ["premium"],
//     icon: "RefreshCw"
//   },

//   // TRADEMARK & IPR
//   {
//     id: "tm-reg",
//     title: "Trademark Registration",
//     category: "Trademark & IPR",
//     price: 2499,
//     description: "Protect your brand name, logo, or slogan from unauthorized use.",
//     benefits: ["Legal Protection", "Brand Identity", "Exclusive Rights", "Intangible Asset"],
//     documentsRequired: ["Logo Image", "PAN Card", "Aadhaar Card", "User Affidavit"],
//     tags: ["hot", "top-selling"],
//     icon: "Trademark"
//   },
//   {
//     id: "tm-objection",
//     title: "Trademark Objection Reply",
//     category: "Trademark & IPR",
//     price: 1999,
//     description: "Drafting and filing a reply to an examination report issued by the Registry.",
//     benefits: ["Save Brand Name", "Expert Drafting", "Higher Success Rate", "Timely Filing"],
//     documentsRequired: ["Examination Report", "Evidence of Use", "Power of Attorney"],
//     tags: ["fast-moving"],
//     icon: "MessageSquare"
//   },
//   {
//     id: "tm-renewal",
//     title: "Trademark Renewal",
//     category: "Trademark & IPR",
//     price: 3999,
//     description: "Renew your trademark every 10 years to maintain protection.",
//     benefits: ["Continuous Protection", "Asset Preservation", "Avoid Expiry", "Legal Rights"],
//     documentsRequired: ["TM Certificate", "Power of Attorney"],
//     tags: ["popular"],
//     icon: "RotateCw"
//   },
//   {
//     id: "tm-opposition",
//     title: "Trademark Opposition",
//     category: "Trademark & IPR",
//     price: 5999,
//     description: "Oppose a similar trademark filed by another party.",
//     benefits: ["Protect Brand Value", "Prevent Confusion", "Legal Recourse", "Market Dominance"],
//     documentsRequired: ["Evidence of Prior Use", "Grounds of Opposition"],
//     tags: ["premium"],
//     icon: "Gavel"
//   },
//   {
//     id: "copyright-reg",
//     title: "Copyright Registration",
//     category: "Trademark & IPR",
//     price: 2999,
//     description: "Protect your creative works like music, books, and software.",
//     benefits: ["Legal Ownership", "Prevent Piracy", "Economic Rights", "Public Record"],
//     documentsRequired: ["Work Sample", "PAN Card", "Aadhaar Card", "NOC from Creator"],
//     tags: ["popular"],
//     icon: "Copyright"
//   },
//   {
//     id: "patent-filing",
//     title: "Patent Filing",
//     category: "Trademark & IPR",
//     price: 14999,
//     description: "Protect your unique inventions and innovations.",
//     benefits: ["Exclusive Rights", "Market Monopoly", "Monetization", "Legal Protection"],
//     documentsRequired: ["Invention Disclosure", "Drawings", "Abstract", "Claims"],
//     tags: ["premium", "hot"],
//     icon: "Lightbulb"
//   },
//   {
//     id: "design-reg",
//     title: "Design Registration",
//     category: "Trademark & IPR",
//     price: 4999,
//     description: "Protect the unique visual design of your product.",
//     benefits: ["Visual Protection", "Market Edge", "Prevent Imitation", "Legal Rights"],
//     documentsRequired: ["Product Photos", "PAN Card", "Aadhaar Card"],
//     tags: ["new"],
//     icon: "Palette"
//   },
//   {
//     id: "tm-search",
//     title: "Trademark Search Report",
//     category: "Trademark & IPR",
//     price: 499,
//     description: "Comprehensive search to check availability of a brand name.",
//     benefits: ["Avoid Rejection", "Legal Certainty", "Risk Assessment", "Expert Analysis"],
//     documentsRequired: ["Brand Name", "Class Details"],
//     tags: ["fast-moving"],
//     icon: "SearchCode"
//   },
//   {
//     id: "brand-protection",
//     title: "Brand Name Protection",
//     category: "Trademark & IPR",
//     price: 1999,
//     description: "Strategic consulting for long-term brand protection.",
//     benefits: ["Holistic Strategy", "Risk Mitigation", "Global Protection", "Asset Value"],
//     documentsRequired: ["Brand History", "Future Plans"],
//     tags: ["hot"],
//     icon: "ShieldCheck"
//   },
//   {
//     id: "ipr-consultation",
//     title: "IPR Consultation",
//     category: "Trademark & IPR",
//     price: 999,
//     description: "Expert advice on all intellectual property matters.",
//     benefits: ["Expert Guidance", "Clarify Doubts", "Strategic Planning", "Legal Advice"],
//     documentsRequired: ["Query Details"],
//     tags: ["popular"],
//     icon: "Headphones"
//   },

//   // FSSAI
//   {
//     id: "fssai-reg",
//     title: "FSSAI Registration",
//     category: "FSSAI",
//     price: 999,
//     description: "Basic registration for small food businesses.",
//     benefits: ["Legal Compliance", "Consumer Trust", "Brand Value", "Avoid Penalties"],
//     documentsRequired: ["Photo", "ID Proof", "Address Proof", "Food Category List"],
//     tags: ["hot", "top-selling"],
//     icon: "Utensils"
//   },
//   {
//     id: "fssai-state",
//     title: "FSSAI State License",
//     category: "FSSAI",
//     price: 4999,
//     description: "License for medium-sized food businesses.",
//     benefits: ["Expansion Ready", "Higher Credibility", "Legal Safety", "Market Access"],
//     documentsRequired: ["Layout Plan", "List of Equipment", "NOC from Municipality"],
//     tags: ["popular"],
//     icon: "Map"
//   },
//   {
//     id: "fssai-central",
//     title: "FSSAI Central License",
//     category: "FSSAI",
//     price: 9999,
//     description: "License for large food businesses and importers.",
//     benefits: ["Pan-India Operations", "Import/Export Rights", "Premium Trust", "Compliance"],
//     documentsRequired: ["IEC Code", "Water Test Report", "Source of Raw Material"],
//     tags: ["premium"],
//     icon: "Building"
//   },
//   {
//     id: "fssai-renewal",
//     title: "FSSAI Renewal",
//     category: "FSSAI",
//     price: 999,
//     description: "Renew your food license before it expires.",
//     benefits: ["Continuous Operation", "Avoid Late Fees", "Legal Safety", "Trust"],
//     documentsRequired: ["Existing License", "Declaration"],
//     tags: ["fast-moving"],
//     icon: "RefreshCw"
//   },
//   {
//     id: "fssai-mod",
//     title: "FSSAI Modification",
//     category: "FSSAI",
//     price: 1499,
//     description: "Update details in your existing FSSAI license.",
//     benefits: ["Correct Records", "Updated Address/Name", "Compliance", "Avoid Notices"],
//     documentsRequired: ["Existing License", "Proof of Change"],
//     tags: ["fast-moving"],
//     icon: "Edit3"
//   },
//   {
//     id: "food-safety-audit",
//     title: "Food Safety Audit",
//     category: "FSSAI",
//     price: 3999,
//     description: "Professional audit to ensure food safety standards.",
//     benefits: ["Quality Assurance", "Compliance", "Risk Mitigation", "Consumer Safety"],
//     documentsRequired: ["Process Flow", "Cleaning Records", "Staff Health Records"],
//     tags: ["premium"],
//     icon: "ClipboardCheck"
//   },
//   {
//     id: "fssai-return",
//     title: "FSSAI Return Filing",
//     category: "FSSAI",
//     price: 999,
//     description: "Annual return filing for food businesses.",
//     benefits: ["Compliance", "Avoid Penalties", "Clean Records", "Audit Ready"],
//     documentsRequired: ["Annual Sales Data", "Product List"],
//     tags: ["fast-moving"],
//     icon: "FileBarChart"
//   },
//   {
//     id: "fssai-compliance",
//     title: "FSSAI Compliance",
//     category: "FSSAI",
//     price: 1999,
//     description: "Ongoing compliance support for food safety.",
//     benefits: ["Expert Guidance", "Peace of Mind", "Continuous Compliance", "Risk Reduction"],
//     documentsRequired: ["License Details"],
//     tags: ["popular"],
//     icon: "CheckCircle2"
//   },
//   {
//     id: "restaurant-setup",
//     title: "Restaurant License Setup",
//     category: "FSSAI",
//     price: 7999,
//     description: "Complete package for all licenses needed for a restaurant.",
//     benefits: ["One-Stop Solution", "Fast Processing", "Expert Guidance", "Hassle-Free"],
//     documentsRequired: ["Premises Proof", "ID Proof", "Menu Details"],
//     tags: ["hot"],
//     icon: "ChefHat"
//   },
//   {
//     id: "cloud-kitchen-license",
//     title: "Cloud Kitchen License",
//     category: "FSSAI",
//     price: 4999,
//     description: "Specific license package for cloud kitchen startups.",
//     benefits: ["Startup Friendly", "Compliance", "Fast Setup", "Low Cost"],
//     documentsRequired: ["Premises Proof", "ID Proof"],
//     tags: ["trending"],
//     icon: "Cloud"
//   },

//   // IMPORT EXPORT
//   {
//     id: "iec-reg",
//     title: "IEC Code Registration",
//     category: "Import Export",
//     price: 1499,
//     description: "Mandatory code for importing or exporting goods/services.",
//     benefits: ["Global Market Access", "Lifetime Validity", "No Returns", "Export Incentives"],
//     documentsRequired: ["PAN Card", "Aadhaar Card", "Cancelled Cheque", "Address Proof"],
//     tags: ["hot", "top-selling"],
//     icon: "Ship"
//   },
//   {
//     id: "ie-license",
//     title: "Import Export License",
//     category: "Import Export",
//     price: 2999,
//     description: "Complete setup for import-export business operations.",
//     benefits: ["Legal Compliance", "Smooth Customs", "International Trade", "Growth"],
//     documentsRequired: ["IEC Code", "Business Proof", "ID Proof"],
//     tags: ["popular"],
//     icon: "Container"
//   },
//   {
//     id: "dgft-reg",
//     title: "DGFT Registration",
//     category: "Import Export",
//     price: 1999,
//     description: "Registration with Directorate General of Foreign Trade.",
//     benefits: ["Access to Schemes", "Policy Updates", "Legal Compliance", "Export Benefits"],
//     documentsRequired: ["IEC Code", "Digital Signature"],
//     tags: ["fast-moving"],
//     icon: "Anchor"
//   },
//   {
//     id: "rcmc-reg",
//     title: "RCMC Registration",
//     category: "Import Export",
//     price: 4999,
//     description: "Registration Cum Membership Certificate from EPCs.",
//     benefits: ["Export Incentives", "Market Info", "Trade Fair Access", "Subsidies"],
//     documentsRequired: ["IEC Code", "Business Profile", "Product List"],
//     tags: ["premium"],
//     icon: "Award"
//   },
//   {
//     id: "export-doc-setup",
//     title: "Export Documentation Setup",
//     category: "Import Export",
//     price: 3999,
//     description: "Standardize your export invoices, packing lists, etc.",
//     benefits: ["Professionalism", "Smooth Customs", "Error-Free Trade", "Compliance"],
//     documentsRequired: ["Business Details", "Product Details"],
//     tags: ["premium"],
//     icon: "FileStack"
//   },
//   {
//     id: "import-compliance",
//     title: "Import Compliance Setup",
//     category: "Import Export",
//     price: 4999,
//     description: "Ensure all imports meet Indian standards and regulations.",
//     benefits: ["Avoid Seizures", "Risk Mitigation", "Legal Compliance", "Smooth Clearance"],
//     documentsRequired: ["Product Specs", "Country of Origin"],
//     tags: ["premium"],
//     icon: "Shield"
//   },
//   {
//     id: "customs-reg",
//     title: "Customs Registration",
//     category: "Import Export",
//     price: 2499,
//     description: "Registration with customs for EDI and other facilities.",
//     benefits: ["Faster Clearance", "Online Tracking", "Legal Compliance", "Efficiency"],
//     documentsRequired: ["IEC Code", "PAN Card", "Authorized Signatory"],
//     tags: ["popular"],
//     icon: "Truck"
//   },
//   {
//     id: "export-business-setup",
//     title: "Export Business Setup",
//     category: "Import Export",
//     price: 9999,
//     description: "End-to-end consulting for starting an export house.",
//     benefits: ["Expert Strategy", "Complete Setup", "Market Research", "Risk Management"],
//     documentsRequired: ["Founder Details", "Capital Info"],
//     tags: ["hot", "premium"],
//     icon: "Plane"
//   },
//   {
//     id: "intl-trade-advisory",
//     title: "International Trade Advisory",
//     category: "Import Export",
//     price: 4999,
//     description: "Expert advice on global trade policies and markets.",
//     benefits: ["Expert Insights", "Market Entry Strategy", "Policy Analysis", "Growth"],
//     documentsRequired: ["Query Details"],
//     tags: ["premium"],
//     icon: "BarChart3"
//   },
//   {
//     id: "export-incentive",
//     title: "Export Incentive Claim",
//     category: "Import Export",
//     price: 2999,
//     description: "Assistance in claiming RoDTEP, MEIS, and other benefits.",
//     benefits: ["Recover Costs", "Better Margins", "Expert Filing", "Max Benefits"],
//     documentsRequired: ["Shipping Bills", "BRC", "Invoices"],
//     tags: ["popular"],
//     icon: "Coins"
//   },

//   // TAX & COMPLIANCE (continued)
//   {
//     id: "tds-return",
//     title: "TDS Return Filing",
//     category: "Tax & Compliance",
//     price: 999,
//     description: "Quarterly filing of TDS returns for salaries and other payments.",
//     benefits: ["Avoid Penalties", "Compliance", "Correct Credit"],
//     documentsRequired: ["TDS Challans", "Deductee Details"],
//     tags: ["popular"],
//     icon: "FileText"
//   },
//   {
//     id: "tax-audit",
//     title: "Tax Audit",
//     category: "Tax & Compliance",
//     price: 9999,
//     description: "Mandatory audit for businesses with turnover exceeding 1 Crore.",
//     benefits: ["Legal Compliance", "Risk Mitigation", "Financial Accuracy"],
//     documentsRequired: ["Audited Financials", "Bank Statements"],
//     tags: ["premium"],
//     icon: "Search"
//   },

//   // LEGAL SERVICES (continued)
//   {
//     id: "employment-agreement",
//     title: "Employment Agreement",
//     category: "Legal Services",
//     price: 1499,
//     description: "Legal contract between employer and employee.",
//     benefits: ["Clarity", "Legal Protection", "Defined Roles"],
//     documentsRequired: ["Offer Details", "Company Policy"],
//     tags: ["fast-moving"],
//     icon: "UserPlus"
//   },
//   {
//     id: "vendor-contract",
//     title: "Vendor Contract",
//     category: "Legal Services",
//     price: 1999,
//     description: "Legal agreement for suppliers and vendors.",
//     benefits: ["Defined Deliverables", "Payment Terms", "Legal Protection"],
//     documentsRequired: ["Service Scope", "Payment Terms"],
//     tags: ["fast-moving"],
//     icon: "Truck"
//   },

//   // DIGITAL SERVICES (continued)
//   {
//     id: "seo-monthly",
//     title: "Monthly SEO Services",
//     category: "Digital Services",
//     price: 9999,
//     description: "Ongoing SEO management for your website.",
//     benefits: ["Organic Growth", "Higher Rankings", "Better Visibility"],
//     documentsRequired: ["Website URL", "Keywords"],
//     tags: ["popular"],
//     icon: "TrendingUp"
//   },
//   {
//     id: "social-media-ads",
//     title: "Social Media Ads Setup",
//     category: "Digital Services",
//     price: 4999,
//     description: "Setup and management of FB/IG/LinkedIn ads.",
//     benefits: ["Targeted Leads", "Brand Awareness", "High ROI"],
//     documentsRequired: ["Ad Budget", "Target Audience"],
//     tags: ["popular"],
//     icon: "Share2"
//   },

//   // LICENSES & REGISTRATIONS
//   {
//     id: "trade-license",
//     title: "Trade License",
//     category: "Licenses & Registrations",
//     price: 2499,
//     description: "Permission from local municipality to carry out trade.",
//     benefits: ["Legal Compliance", "Avoid Penalties", "Business Validity"],
//     documentsRequired: ["Premises Proof", "ID Proof"],
//     tags: ["popular"],
//     icon: "Building"
//   },
//   {
//     id: "professional-tax",
//     title: "Professional Tax Registration",
//     category: "Licenses & Registrations",
//     price: 1499,
//     description: "Registration for tax on professions and trades.",
//     benefits: ["Compliance", "Legal Safety", "Avoid Notices"],
//     documentsRequired: ["PAN Card", "Aadhaar Card"],
//     tags: ["fast-moving"],
//     icon: "Briefcase"
//   },
//   {
//     id: "pf-reg",
//     title: "PF Registration",
//     category: "Licenses & Registrations",
//     price: 2999,
//     description: "Provident Fund registration for your employees.",
//     benefits: ["Employee Welfare", "Compliance", "Social Security"],
//     documentsRequired: ["Company PAN", "Employee Details"],
//     tags: ["popular"],
//     icon: "Users"
//   },
//   {
//     id: "esic-reg",
//     title: "ESIC Registration",
//     category: "Licenses & Registrations",
//     price: 2999,
//     description: "Employee State Insurance registration.",
//     benefits: ["Medical Benefits", "Compliance", "Employee Safety"],
//     documentsRequired: ["Company PAN", "Employee Details"],
//     tags: ["popular"],
//     icon: "Shield"
//   },
//   {
//     id: "iso-cert",
//     title: "ISO Certification",
//     category: "Licenses & Registrations",
//     price: 4999,
//     description: "Get ISO 9001:2015 certification for your business.",
//     benefits: ["Quality Assurance", "Global Trust", "Tender Eligibility"],
//     documentsRequired: ["Business Profile", "Process Flow"],
//     tags: ["premium"],
//     icon: "Award"
//   },
//   {
//     id: "bis-cert",
//     title: "BIS Certification",
//     category: "Licenses & Registrations",
//     price: 9999,
//     description: "Bureau of Indian Standards certification for products.",
//     benefits: ["Product Quality", "Legal Compliance", "Consumer Trust"],
//     documentsRequired: ["Product Samples", "Factory Details"],
//     tags: ["premium"],
//     icon: "CheckCircle"
//   },
//   {
//     id: "pollution-cert",
//     title: "Pollution Certificate",
//     category: "Licenses & Registrations",
//     price: 3999,
//     description: "NOC from State Pollution Control Board.",
//     benefits: ["Environmental Compliance", "Avoid Penalties", "Legal Safety"],
//     documentsRequired: ["Project Report", "Land Details"],
//     tags: ["fast-moving"],
//     icon: "Wind"
//   },
//   {
//     id: "fire-license",
//     title: "Fire License",
//     category: "Licenses & Registrations",
//     price: 5999,
//     description: "No Objection Certificate from Fire Department.",
//     benefits: ["Safety Compliance", "Avoid Penalties", "Insurance Ready"],
//     documentsRequired: ["Building Plan", "Fire Safety Measures"],
//     tags: ["premium"],
//     icon: "Flame"
//   },
//   {
//     id: "drug-license",
//     title: "Drug License",
//     category: "Licenses & Registrations",
//     price: 14999,
//     description: "License for wholesale or retail sale of drugs.",
//     benefits: ["Legal Compliance", "Pharma Business", "Trust"],
//     documentsRequired: ["Pharmacist Details", "Premises Proof"],
//     tags: ["premium"],
//     icon: "Pill"
//   },
//   {
//     id: "telecom-license",
//     title: "Telecom License",
//     category: "Licenses & Registrations",
//     price: 19999,
//     description: "OSP registration for call centers and ITES.",
//     benefits: ["Legal Compliance", "IT/BPO Operations", "Growth"],
//     documentsRequired: ["Company Documents", "Network Diagram"],
//     tags: ["premium"],
//     icon: "Phone"
//   },

//   // LEGAL SERVICES
//   {
//     id: "legal-notice",
//     title: "Legal Notice Drafting",
//     category: "Legal Services",
//     price: 1499,
//     description: "Professional drafting of legal notices for recovery, breach, etc.",
//     benefits: ["Legal Pressure", "Formal Record", "Expert Drafting", "Fast Resolution"],
//     documentsRequired: ["Fact Sheet", "Supporting Evidence"],
//     tags: ["hot"],
//     icon: "Mail"
//   },
//   {
//     id: "agreement-drafting",
//     title: "Agreement Drafting",
//     category: "Legal Services",
//     price: 1999,
//     description: "Drafting of various commercial and personal agreements.",
//     benefits: ["Legal Protection", "Clarity", "Enforceability", "Expert Drafting"],
//     documentsRequired: ["Terms of Agreement", "Party Details"],
//     tags: ["popular"],
//     icon: "FileSignature"
//   },
//   {
//     id: "nda-drafting",
//     title: "NDA Drafting",
//     category: "Legal Services",
//     price: 999,
//     description: "Non-Disclosure Agreement to protect your trade secrets.",
//     benefits: ["Confidentiality", "Legal Recourse", "Trust", "IP Protection"],
//     documentsRequired: ["Scope of Data", "Party Details"],
//     tags: ["fast-moving"],
//     icon: "Lock"
//   },
//   {
//     id: "employment-contract",
//     title: "Employment Contract",
//     category: "Legal Services",
//     price: 1499,
//     description: "Standard employment agreements for your team.",
//     benefits: ["Clarity", "Legal Safety", "Defined Roles", "Conflict Resolution"],
//     documentsRequired: ["Offer Details", "Company Policy"],
//     tags: ["fast-moving"],
//     icon: "UserPlus"
//   },
//   {
//     id: "vendor-agreement",
//     title: "Vendor Agreement",
//     category: "Legal Services",
//     price: 1999,
//     description: "Legal contracts for suppliers and service providers.",
//     benefits: ["Defined Deliverables", "Payment Terms", "Legal Protection", "Smooth Ops"],
//     documentsRequired: ["Service Scope", "Payment Terms"],
//     tags: ["fast-moving"],
//     icon: "Truck"
//   },
//   {
//     id: "legal-consultation",
//     title: "Legal Consultation",
//     category: "Legal Services",
//     price: 999,
//     description: "Expert legal advice on any matter.",
//     benefits: ["Expert Guidance", "Clarify Doubts", "Legal Strategy", "Peace of Mind"],
//     documentsRequired: ["Case Details"],
//     tags: ["top-selling"],
//     icon: "Scale"
//   },
//   {
//     id: "property-agreement",
//     title: "Property Agreement",
//     category: "Legal Services",
//     price: 2999,
//     description: "Drafting of sale deeds, gift deeds, etc.",
//     benefits: ["Legal Ownership", "Clear Title", "Expert Drafting", "Safety"],
//     documentsRequired: ["Property Details", "Party Details"],
//     tags: ["popular"],
//     icon: "Home"
//   },
//   {
//     id: "rental-agreement",
//     title: "Rental Agreement",
//     category: "Legal Services",
//     price: 499,
//     description: "Quick drafting of residential or commercial rent agreements.",
//     benefits: ["Legal Record", "Clarity", "Fast Service", "Affordable"],
//     documentsRequired: ["Tenant Details", "Owner Details", "Rent Terms"],
//     tags: ["hot"],
//     icon: "Key"
//   },
//   {
//     id: "online-legal-advice",
//     title: "Online Legal Advice",
//     category: "Legal Services",
//     price: 499,
//     description: "Quick 15-minute call with a legal expert.",
//     benefits: ["Fast", "Affordable", "Expert Advice", "Convenient"],
//     documentsRequired: ["Query Summary"],
//     tags: ["top-selling"],
//     icon: "PhoneCall"
//   },
//   {
//     id: "court-doc",
//     title: "Court Documentation",
//     category: "Legal Services",
//     price: 4999,
//     description: "Drafting of petitions, affidavits, and appeals.",
//     benefits: ["Expert Drafting", "Legal Compliance", "Strong Case", "Professional"],
//     documentsRequired: ["Case History", "Evidence"],
//     tags: ["premium"],
//     icon: "Gavel"
//   },

//   // DIGITAL SERVICES
//   {
//     id: "web-dev",
//     title: "Website Development",
//     category: "Digital Services",
//     price: 9999,
//     description: "Professional business website with modern design.",
//     benefits: ["Online Presence", "Brand Value", "Lead Generation", "24/7 Availability"],
//     documentsRequired: ["Logo", "Content", "Business Profile"],
//     tags: ["hot", "premium"],
//     icon: "Code"
//   },
//   {
//     id: "ecom-web",
//     title: "E-commerce Website",
//     category: "Digital Services",
//     price: 19999,
//     description: "Full-featured online store with payment gateway.",
//     benefits: ["Sell Online", "Global Reach", "Automated Sales", "Scalability"],
//     documentsRequired: ["Product List", "Payment Gateway Details"],
//     tags: ["hot", "top-selling"],
//     icon: "ShoppingBag"
//   },
//   {
//     id: "app-dev",
//     title: "Mobile App Development",
//     category: "Digital Services",
//     price: 49999,
//     description: "Custom Android and iOS apps for your business.",
//     benefits: ["User Engagement", "Brand Loyalty", "Direct Marketing", "Innovation"],
//     documentsRequired: ["App Idea", "Feature List"],
//     tags: ["premium", "hot"],
//     icon: "Smartphone"
//   },
//   {
//     id: "seo-services",
//     title: "SEO Services",
//     category: "Digital Services",
//     price: 4999,
//     description: "Rank higher on Google and get organic traffic.",
//     benefits: ["Free Traffic", "Long-term ROI", "Brand Authority", "Growth"],
//     documentsRequired: ["Website URL", "Keywords"],
//     tags: ["popular"],
//     icon: "Search"
//   },
//   {
//     id: "google-ads",
//     title: "Google Ads Setup",
//     category: "Digital Services",
//     price: 2999,
//     description: "Professional setup of search and display ads.",
//     benefits: ["Instant Traffic", "Targeted Leads", "High ROI", "Measurable Results"],
//     documentsRequired: ["Ad Budget", "Target Audience"],
//     tags: ["top-selling"],
//     icon: "MousePointer2"
//   },
//   {
//     id: "fb-ads",
//     title: "Facebook Ads Setup",
//     category: "Digital Services",
//     price: 2499,
//     description: "Targeted social media advertising for leads.",
//     benefits: ["Precise Targeting", "Visual Appeal", "Brand Awareness", "Engagement"],
//     documentsRequired: ["Ad Creative", "Target Audience"],
//     tags: ["popular"],
//     icon: "Facebook"
//   },
//   {
//     id: "smm",
//     title: "Social Media Management",
//     category: "Digital Services",
//     price: 4999,
//     description: "Monthly management of your social media handles.",
//     benefits: ["Consistent Presence", "Engagement", "Brand Building", "Save Time"],
//     documentsRequired: ["Brand Guidelines", "Access"],
//     tags: ["popular"],
//     icon: "Share2"
//   },
//   {
//     id: "branding-pkg",
//     title: "Branding Package",
//     category: "Digital Services",
//     price: 7999,
//     description: "Complete brand identity including logo, cards, etc.",
//     benefits: ["Professional Look", "Consistency", "Brand Recall", "Premium Feel"],
//     documentsRequired: ["Brand Vision", "Preferences"],
//     tags: ["premium"],
//     icon: "Sparkles"
//   },
//   {
//     id: "logo-design",
//     title: "Logo Design",
//     category: "Digital Services",
//     price: 1499,
//     description: "Unique and creative logo for your brand.",
//     benefits: ["Brand Identity", "Professionalism", "Memorable", "Unique"],
//     documentsRequired: ["Brand Name", "Color Preferences"],
//     tags: ["top-selling"],
//     icon: "PenTool"
//   },
//   {
//     id: "landing-page",
//     title: "Landing Page",
//     category: "Digital Services",
//     price: 3999,
//     description: "High-conversion landing page for your campaigns.",
//     benefits: ["Lead Generation", "High Conversion", "Fast Loading", "Focused"],
//     documentsRequired: ["Offer Details", "Copy"],
//     tags: ["fast-moving"],
//     icon: "Layout"
//   },

//   // DOCUMENT SERVICES
//   {
//     id: "pan-card",
//     title: "PAN Card",
//     category: "Document Services",
//     price: 199,
//     description: "Apply for new or correction in PAN card.",
//     benefits: ["Tax Compliance", "Identity Proof", "Bank Account Opening", "Financial Transactions"],
//     documentsRequired: ["Aadhaar Card", "Photo"],
//     tags: ["hot", "top-selling"],
//     icon: "CreditCard"
//   },
//   {
//     id: "tan-reg",
//     title: "TAN Registration",
//     category: "Document Services",
//     price: 499,
//     description: "Mandatory for businesses deducting TDS.",
//     benefits: ["TDS Compliance", "Avoid Penalties", "Legal Requirement"],
//     documentsRequired: ["PAN Card", "ID Proof"],
//     tags: ["fast-moving"],
//     icon: "Hash"
//   },
//   {
//     id: "dsc",
//     title: "DSC",
//     category: "Document Services",
//     price: 999,
//     description: "Digital Signature Certificate for online filings.",
//     benefits: ["Secure Filing", "Legal Validity", "Paperless", "Convenient"],
//     documentsRequired: ["PAN Card", "Aadhaar Card", "Photo", "Video Verification"],
//     tags: ["top-selling"],
//     icon: "Key"
//   },
//   {
//     id: "din-reg",
//     title: "DIN Registration",
//     category: "Document Services",
//     price: 999,
//     description: "Director Identification Number for company directors.",
//     benefits: ["Legal Requirement", "Lifetime Validity", "Director Eligibility"],
//     documentsRequired: ["PAN Card", "Aadhaar Card", "Photo"],
//     tags: ["fast-moving"],
//     icon: "UserCircle"
//   },
//   {
//     id: "moa-aoa",
//     title: "MOA & AOA Drafting",
//     category: "Document Services",
//     price: 1999,
//     description: "Professional drafting of company constitution.",
//     benefits: ["Legal Compliance", "Clarity in Ops", "Expert Drafting"],
//     documentsRequired: ["Business Objects", "Capital Details"],
//     tags: ["popular"],
//     icon: "FileText"
//   },
//   {
//     id: "shop-act",
//     title: "Shop Act License",
//     category: "Document Services",
//     price: 1499,
//     description: "Mandatory for all shops and commercial establishments.",
//     benefits: ["Legal Recognition", "Bank Account Opening", "Avoid Penalties"],
//     documentsRequired: ["Photo of Shop", "ID Proof", "Address Proof"],
//     tags: ["hot"],
//     icon: "Store"
//   },

//   // EXPERT SERVICES
//   {
//     id: "ca-consult",
//     title: "CA Consultation",
//     category: "Expert Services",
//     price: 999,
//     description: "Expert advice from a Chartered Accountant.",
//     benefits: ["Expert Guidance", "Tax Optimization", "Financial Strategy"],
//     documentsRequired: ["Query Details"],
//     tags: ["top-selling"],
//     icon: "UserCheck"
//   },
//   {
//     id: "cs-consult",
//     title: "CS Consultation",
//     category: "Expert Services",
//     price: 999,
//     description: "Expert advice from a Company Secretary.",
//     benefits: ["Compliance Strategy", "Legal Safety", "Corporate Governance"],
//     documentsRequired: ["Query Details"],
//     tags: ["popular"],
//     icon: "ShieldCheck"
//   },
//   {
//     id: "lawyer-consult",
//     title: "Lawyer Consultation",
//     category: "Expert Services",
//     price: 999,
//     description: "Expert advice from a professional lawyer.",
//     benefits: ["Legal Strategy", "Case Analysis", "Rights Protection"],
//     documentsRequired: ["Case Details"],
//     tags: ["top-selling"],
//     icon: "Scale"
//   },

//   // LICENSES
//   {
//     id: "msme-reg",
//     title: "MSME Registration",
//     category: "Licenses",
//     price: 499,
//     description: "Udyam registration for small businesses.",
//     benefits: ["Collateral Free Loans", "Subsidy on TM", "Priority Sector Lending", "Electricity Subsidies"],
//     documentsRequired: ["PAN Card", "Aadhaar Card", "Bank Details"],
//     tags: ["hot", "top-selling"],
//     icon: "Building"
//   },
//   {
//     id: "iso-reg",
//     title: "ISO Registration",
//     category: "Licenses",
//     price: 2999,
//     description: "Get ISO certified for quality management.",
//     benefits: ["Global Recognition", "Quality Assurance", "Tender Eligibility", "Trust"],
//     documentsRequired: ["Business Profile", "Process Flow"],
//     tags: ["hot"],
//     icon: "CheckCircle"
//   },

//   // MARKETING
//   {
//     id: "lead-gen",
//     title: "Lead Generation",
//     category: "Marketing",
//     price: 4999,
//     description: "Get high-quality leads for your business.",
//     benefits: ["Increased Sales", "Targeted Audience", "Growth", "ROI"],
//     documentsRequired: ["Target Audience", "Offer"],
//     tags: ["top-selling"],
//     icon: "Users"
//   },
//   {
//     id: "whatsapp-marketing",
//     title: "WhatsApp Marketing",
//     category: "Marketing",
//     price: 1999,
//     description: "Reach customers directly on their phones.",
//     benefits: ["High Open Rate", "Direct Engagement", "Fast Results"],
//     documentsRequired: ["Customer List", "Message Content"],
//     tags: ["hot"],
//     icon: "MessageCircle"
//   },

//   // INTELLECTUAL PROPERTY (continued)
//   {
//     id: "patent-search",
//     title: "Patent Search",
//     category: "Intellectual Property",
//     price: 4999,
//     description: "Check if your invention is unique before filing.",
//     benefits: ["Avoid Rejection", "Legal Safety", "Expert Analysis"],
//     documentsRequired: ["Invention Details"],
//     tags: ["popular"],
//     icon: "Search"
//   },
//   {
//     id: "patent-filing-ip",
//     title: "Patent Filing",
//     category: "Intellectual Property",
//     price: 19999,
//     description: "Provisional or complete patent application filing.",
//     benefits: ["Legal Protection", "Monopoly Rights", "Asset Creation"],
//     documentsRequired: ["Technical Specs", "Drawings"],
//     tags: ["premium"],
//     icon: "FileCheck"
//   },
//   {
//     id: "copyright-music",
//     title: "Copyright for Music",
//     category: "Intellectual Property",
//     price: 3999,
//     description: "Protect your songs and musical compositions.",
//     benefits: ["Legal Ownership", "Royalty Protection", "Enforceability"],
//     documentsRequired: ["Audio File", "Lyrics"],
//     tags: ["popular"],
//     icon: "Music"
//   },
//   {
//     id: "copyright-software",
//     title: "Copyright for Software",
//     category: "Intellectual Property",
//     price: 4999,
//     description: "Protect your source code and software architecture.",
//     benefits: ["IP Protection", "Legal Safety", "Asset Value"],
//     documentsRequired: ["Source Code", "Manual"],
//     tags: ["premium"],
//     icon: "Code"
//   },

//   // BUSINESS REGISTRATION (continued)
//   {
//     id: "one-person-co",
//     title: "One Person Company",
//     category: "Business Registration",
//     price: 5999,
//     description: "Register a company with a single director and shareholder.",
//     benefits: ["Limited Liability", "Separate Entity", "Full Control"],
//     documentsRequired: ["PAN Card", "Aadhaar Card", "Address Proof"],
//     tags: ["hot"],
//     icon: "User"
//   },
//   {
//     id: "section-8-co",
//     title: "Section 8 Company",
//     category: "Business Registration",
//     price: 14999,
//     description: "Register a non-profit organization as a company.",
//     benefits: ["Tax Exemptions", "Credibility", "Legal Status"],
//     documentsRequired: ["Objects of Company", "Director Details"],
//     tags: ["premium"],
//     icon: "Heart"
//   },
//   {
//     id: "nidhi-co",
//     title: "Nidhi Company",
//     category: "Business Registration",
//     price: 19999,
//     description: "Register a company for mutual benefit of members.",
//     benefits: ["Lending Rights", "Member Savings", "Legal Status"],
//     documentsRequired: ["Member Details", "Director Details"],
//     tags: ["premium"],
//     icon: "Users"
//   },

//   // FINANCIAL SERVICES
//   {
//     id: "business-loan-assist",
//     title: "Business Loan Assistance",
//     category: "Financial Services",
//     price: 2499,
//     description: "Expert help in preparing documents for business loans.",
//     benefits: ["Higher Approval", "Expert Guidance", "Fast Processing"],
//     documentsRequired: ["Financials", "KYC"],
//     tags: ["popular"],
//     icon: "DollarSign"
//   },
//   {
//     id: "project-report",
//     title: "Project Report for Loan",
//     category: "Financial Services",
//     price: 4999,
//     description: "Detailed project report for bank loan applications.",
//     benefits: ["Professional Report", "Bank Ready", "Accuracy"],
//     documentsRequired: ["Business Plan", "Cost Estimates"],
//     tags: ["premium"],
//     icon: "BarChart"
//   },
//   {
//     id: "credit-score-repair",
//     title: "Credit Score Repair",
//     category: "Financial Services",
//     price: 1999,
//     description: "Assistance in improving your CIBIL score.",
//     benefits: ["Better Loan Terms", "Financial Health", "Expert Advice"],
//     documentsRequired: ["Credit Report"],
//     tags: ["popular"],
//     icon: "TrendingUp"
//   },

//   // MISC SERVICES
//   {
//     id: "import-export-code",
//     title: "Import Export Code (IEC)",
//     category: "Licenses & Registrations",
//     price: 999,
//     description: "Mandatory for importing or exporting goods from India.",
//     benefits: ["Global Trade", "Lifetime Validity", "Easy Process"],
//     documentsRequired: ["PAN Card", "Cancelled Cheque"],
//     tags: ["hot"],
//     icon: "Globe"
//   },
//   {
//     id: "fssai-state-lic",
//     title: "FSSAI State License",
//     category: "Licenses & Registrations",
//     price: 4999,
//     description: "Food license for medium-sized food businesses.",
//     benefits: ["Legal Compliance", "Consumer Trust", "Expansion"],
//     documentsRequired: ["Premises Proof", "Product List"],
//     tags: ["popular"],
//     icon: "Utensils"
//   },
//   {
//     id: "fssai-central-lic",
//     title: "FSSAI Central License",
//     category: "Licenses & Registrations",
//     price: 9999,
//     description: "Food license for large-scale food businesses or importers.",
//     benefits: ["National Operations", "Legal Safety", "High Trust"],
//     documentsRequired: ["Import Details", "Factory Layout"],
//     tags: ["premium"],
//     icon: "Shield"
//   }
// ];

// export const BUNDLES = [
//   {
//     id: "startup-pack",
//     title: "STARTUP PACK",
//     price: 12999,
//     services: ["pvt-ltd-reg", "gst-reg", "sole-prop-reg", "tm-reg"],
//     tags: ["hot", "best-seller"],
//     icon: "Rocket"
//   },
//   {
//     id: "growth-pack",
//     title: "GROWTH PACK",
//     price: 19999,
//     services: ["seo-monthly", "social-media-ads"],
//     tags: ["trending"],
//     icon: "TrendingUp"
//   },
//   {
//     id: "compliance-pack",
//     title: "COMPLIANCE PACK",
//     price: 9999,
//     services: ["gst-return-monthly", "tax-audit"],
//     tags: ["popular"],
//     icon: "ShieldCheck"
//   },
//   {
//     id: "food-biz-pack",
//     title: "FOOD BUSINESS PACK",
//     price: 6999,
//     services: ["fssai-reg", "gst-reg", "trade-license"],
//     tags: ["trending"],
//     icon: "Utensils"
//   }
// ];
export interface Service {
  id: string;
  title: string;
  category: string;
  price: number;
  description: string;
  benefits: string[];
  documentsRequired: string[];
  tags: ("hot" | "trending" | "premium" | "top-selling" | "new" | "popular" | "fast-moving")[];
  icon: string;
}

export const SERVICES: Service[] = [
  // ========== BUSINESS REGISTRATION ==========
  {
    id: "private-limited-company-registration",
    title: "Private Limited Company Registration",
    category: "Business Registration",
    price: 6999,
    description: "Register your business as a Private Limited Company for better credibility and limited liability.",
    benefits: ["Limited Liability", "Perpetual Succession", "Easy Transferability", "Better Credibility"],
    documentsRequired: ["PAN Card", "Aadhaar Card", "Passport Size Photo", "Address Proof", "NOC from Owner"],
    tags: ["hot", "top-selling"],
    icon: "Building2"
  },
  {
    id: "one-person-company-opc-registration",
    title: "One Person Company (OPC) Registration",
    category: "Business Registration",
    price: 5999,
    description: "One Person Company allows a single entrepreneur to operate a corporate entity.",
    benefits: ["Single Ownership", "Limited Liability", "Separate Legal Entity", "Easy Funding"],
    documentsRequired: ["PAN Card", "Aadhaar Card", "Passport Size Photo", "Address Proof"],
    tags: ["new"],
    icon: "UserCheck"
  },
  {
    id: "llp-registration",
    title: "LLP Registration",
    category: "Business Registration",
    price: 4999,
    description: "Limited Liability Partnership is a hybrid of company and partnership.",
    benefits: ["Limited Liability", "No Minimum Capital", "Lower Compliance", "Tax Benefits"],
    documentsRequired: ["PAN Card", "Aadhaar Card", "Passport Size Photo", "Address Proof"],
    tags: ["top-selling"],
    icon: "Users2"
  },
  {
    id: "public-limited-company-registration",
    title: "Public Limited Company Registration",
    category: "Business Registration",
    price: 15000,
    description: "Register a Public Limited Company to raise capital from the public.",
    benefits: ["Raise capital from public", "Limited liability", "Credibility"],
    documentsRequired: ["PAN Card", "Aadhar Card", "Address Proof", "DIN", "DSC"],
    tags: ["premium"],
    icon: "Building"
  },
  {
    id: "section-8-company-registration",
    title: "Section 8 Company Registration",
    category: "Business Registration",
    price: 14999,
    description: "Register a non-profit organization for charitable or social causes.",
    benefits: ["No Minimum Capital", "Tax Exemptions", "Separate Legal Entity", "Credibility"],
    documentsRequired: ["PAN Card", "Aadhaar Card", "Passport Size Photo", "Address Proof"],
    tags: ["premium"],
    icon: "Heart"
  },
  {
    id: "producer-company-registration",
    title: "Producer Company Registration",
    category: "Business Registration",
    price: 17999,
    description: "For farmers and producers to collectively manage their produce.",
    benefits: ["Better Market Access", "Financial Support", "Limited Liability", "Tax Benefits"],
    documentsRequired: ["PAN Card", "Aadhaar Card", "Passport Size Photo", "Address Proof"],
    tags: ["premium"],
    icon: "Sprout"
  },
  {
    id: "nidhi-company-registration",
    title: "Nidhi Company Registration",
    category: "Business Registration",
    price: 19999,
    description: "A type of NBFC that deals with lending and borrowing among its members.",
    benefits: ["Easy Lending", "No RBI Approval Required", "Low Capital Requirement", "Mutual Benefit"],
    documentsRequired: ["PAN Card", "Aadhaar Card", "Passport Size Photo", "Address Proof"],
    tags: ["premium"],
    icon: "Banknote"
  },
  {
    id: "indian-subsidiary-registration",
    title: "Indian Subsidiary Registration",
    category: "Business Registration",
    price: 24999,
    description: "For foreign companies to establish a legal presence in India.",
    benefits: ["100% FDI Allowed", "Separate Legal Entity", "Access to Indian Market", "Limited Liability"],
    documentsRequired: ["Certificate of Incorporation", "Board Resolution", "PAN Card of Directors"],
    tags: ["premium", "hot"],
    icon: "Globe"
  },
  {
    id: "partnership-firm-registration",
    title: "Partnership Firm Registration",
    category: "Business Registration",
    price: 2999,
    description: "Register a partnership firm for collaborative business operations.",
    benefits: ["Easy to Start", "Shared Responsibility", "Flexibility", "Simple Dissolution"],
    documentsRequired: ["Partnership Deed", "PAN Card of Partners", "Address Proof"],
    tags: ["fast-moving"],
    icon: "Handshake"
  },
  {
    id: "sole-proprietorship-registration",
    title: "Sole Proprietorship Registration",
    category: "Business Registration",
    price: 1999,
    description: "The simplest form of business registration for individual entrepreneurs.",
    benefits: ["Full Control", "Minimal Compliance", "Easy Setup", "Direct Tax Benefits"],
    documentsRequired: ["PAN Card", "Aadhaar Card", "Bank Statement", "Address Proof"],
    tags: ["hot"],
    icon: "User"
  },
  {
    id: "startup-india-registration",
    title: "Startup India Registration",
    category: "Business Registration",
    price: 3999,
    description: "Get recognized by DPIIT and enjoy tax benefits and easier compliance.",
    benefits: ["Tax Exemptions", "Self-Certification", "Easy Exit", "Fast-Track Patent"],
    documentsRequired: ["Certificate of Incorporation", "Pitch Deck", "Write-up on Innovation"],
    tags: ["trending"],
    icon: "Rocket"
  },

  // ========== GST SERVICES ==========
  {
    id: "new-gst-registration",
    title: "New GST Registration",
    category: "GST Services",
    price: 999,
    description: "Mandatory registration for businesses with turnover exceeding threshold limits.",
    benefits: ["Legal Recognition", "Input Tax Credit", "Interstate Sales", "E-commerce Access"],
    documentsRequired: ["PAN Card", "Aadhaar Card", "Electricity Bill", "Bank Statement"],
    tags: ["hot", "top-selling"],
    icon: "FileText"
  },
  {
    id: "gst-amendment",
    title: "GST Amendment",
    category: "GST Services",
    price: 799,
    description: "Update details in your existing GST registration.",
    benefits: ["Correct Records", "Avoid Notices", "Updated Address/Name", "Compliance"],
    documentsRequired: ["GST Certificate", "Proof of Change", "Aadhaar Card"],
    tags: ["fast-moving"],
    icon: "Edit"
  },
  {
    id: "gst-cancellation",
    title: "GST Cancellation",
    category: "GST Services",
    price: 999,
    description: "Surrender your GST registration if business is closed or below threshold.",
    benefits: ["Stop Compliance", "Avoid Future Penalties", "Legal Closure", "Clean Records"],
    documentsRequired: ["GST Certificate", "Final Sales Data", "Reason for Cancellation"],
    tags: ["fast-moving"],
    icon: "XCircle"
  },
  {
    id: "gst-revocation",
    title: "GST Revocation",
    category: "GST Services",
    price: 2999,
    description: "Revoke your cancelled GST registration with expert help.",
    benefits: ["Restore GST registration", "Continue business operations"],
    documentsRequired: ["GST Cancellation Order", "Application for Revocation"],
    tags: ["trending"],
    icon: "RefreshCw"
  },
  {
    id: "monthly-gst-return-filing",
    title: "Monthly GST Return Filing",
    category: "GST Services",
    price: 499,
    description: "Regular monthly filing of GSTR-1 and GSTR-3B.",
    benefits: ["Compliance", "Avoid Penalties", "Smooth ITC Flow", "Good Credit Score"],
    documentsRequired: ["Sales Invoices", "Purchase Invoices", "Bank Statement"],
    tags: ["top-selling"],
    icon: "Calendar"
  },
  {
    id: "quarterly-gst-return-filing",
    title: "Quarterly GST Return Filing",
    category: "GST Services",
    price: 1200,
    description: "Quarterly filing under QRMP scheme for small taxpayers.",
    benefits: ["Less Compliance", "Better Cash Flow", "Simplified Filing", "Peace of Mind"],
    documentsRequired: ["Sales Invoices", "Purchase Invoices", "Bank Statement"],
    tags: ["fast-moving"],
    icon: "CalendarRange"
  },
  {
    id: "annual-gst-return-filing",
    title: "Annual GST Return Filing",
    category: "GST Services",
    price: 2999,
    description: "Filing of GSTR-9 annual return summarizing all transactions.",
    benefits: ["Final Reconciliation", "Correction of Errors", "Compliance", "Audit Readiness"],
    documentsRequired: ["Annual Sales Data", "Annual Purchase Data", "Audited Financials"],
    tags: ["popular"],
    icon: "FileCheck"
  },
  {
    id: "gst-lut-filing",
    title: "GST LUT Filing",
    category: "GST Services",
    price: 499,
    description: "Letter of Undertaking for zero-rated supply of goods or services without tax.",
    benefits: ["Export without Tax", "Better Working Capital", "Simplified Export", "Compliance"],
    documentsRequired: ["GST Certificate", "Witness Details", "Authorized Signatory Details"],
    tags: ["new"],
    icon: "FileUp"
  },
  {
    id: "gst-notice-reply",
    title: "GST Notice Reply",
    category: "GST Services",
    price: 1999,
    description: "Professional drafting and filing of replies to GST notices.",
    benefits: ["Legal Protection", "Avoid Penalties", "Expert Guidance", "Timely Resolution"],
    documentsRequired: ["GST Notice", "Supporting Documents", "Previous Filings"],
    tags: ["premium"],
    icon: "ShieldAlert"
  },
  {
    id: "gst-audit",
    title: "GST Audit",
    category: "GST Services",
    price: 4999,
    description: "Mandatory audit for businesses exceeding turnover limits.",
    benefits: ["Compliance", "Identify Gaps", "Risk Mitigation", "Financial Accuracy"],
    documentsRequired: ["Audited Financials", "GST Filings", "Purchase/Sales Registers"],
    tags: ["premium"],
    icon: "Search"
  },
  {
    id: "gst-reconciliation",
    title: "GST Reconciliation",
    category: "GST Services",
    price: 1499,
    description: "Reconcile GSTR-2A/2B with purchase register for maximum ITC.",
    benefits: ["Maximize ITC", "Avoid Notices", "Identify Missing Invoices", "Financial Control"],
    documentsRequired: ["Purchase Register", "GSTR-2A/2B Data"],
    tags: ["premium"],
    icon: "RefreshCw"
  },

  // ========== TRADEMARK & IPR ==========
  {
    id: "trademark-search",
    title: "Trademark Search",
    category: "Trademark & IPR",
    price: 499,
    description: "Comprehensive search to check availability of a brand name.",
    benefits: ["Avoid Rejection", "Legal Certainty", "Risk Assessment", "Expert Analysis"],
    documentsRequired: ["Brand Name", "Class Details"],
    tags: ["fast-moving"],
    icon: "SearchCode"
  },
  {
    id: "trademark-registration",
    title: "Trademark Registration",
    category: "Trademark & IPR",
    price: 2499,
    description: "Protect your brand name, logo, or slogan from unauthorized use.",
    benefits: ["Legal Protection", "Brand Identity", "Exclusive Rights", "Intangible Asset"],
    documentsRequired: ["Logo Image", "PAN Card", "Aadhaar Card", "User Affidavit"],
    tags: ["hot", "top-selling"],
    icon: "Trademark"
  },
  {
    id: "trademark-objection-reply",
    title: "Trademark Objection Reply",
    category: "Trademark & IPR",
    price: 1999,
    description: "Drafting and filing a reply to an examination report issued by the Registry.",
    benefits: ["Save Brand Name", "Expert Drafting", "Higher Success Rate", "Timely Filing"],
    documentsRequired: ["Examination Report", "Evidence of Use", "Power of Attorney"],
    tags: ["fast-moving"],
    icon: "MessageSquare"
  },
  {
    id: "trademark-renewal",
    title: "Trademark Renewal",
    category: "Trademark & IPR",
    price: 3999,
    description: "Renew your trademark every 10 years to maintain protection.",
    benefits: ["Continuous Protection", "Asset Preservation", "Avoid Expiry", "Legal Rights"],
    documentsRequired: ["TM Certificate", "Power of Attorney"],
    tags: ["popular"],
    icon: "RotateCw"
  },
  {
    id: "trademark-assignment",
    title: "Trademark Assignment",
    category: "Trademark & IPR",
    price: 4999,
    description: "Transfer your trademark ownership to another entity.",
    benefits: ["Legal transfer", "Property rights protection"],
    documentsRequired: ["Trademark Certificate", "Assignment Deed"],
    tags: [],
    icon: "FileSignature"
  },
  {
    id: "copyright-registration",
    title: "Copyright Registration",
    category: "Trademark & IPR",
    price: 2999,
    description: "Protect your creative works like music, books, and software.",
    benefits: ["Legal Ownership", "Prevent Piracy", "Economic Rights", "Public Record"],
    documentsRequired: ["Work Sample", "PAN Card", "Aadhaar Card", "NOC from Creator"],
    tags: ["popular"],
    icon: "Copyright"
  },
  {
    id: "copyright-objection-handling",
    title: "Copyright Objection Handling",
    category: "Trademark & IPR",
    price: 3999,
    description: "Handle copyright objections and get your copyright registration approved.",
    benefits: ["Protect your work", "Legal ownership"],
    documentsRequired: ["Copyright Application", "Objection Notice"],
    tags: [],
    icon: "Shield"
  },
  {
    id: "patent-filing",
    title: "Patent Filing",
    category: "Trademark & IPR",
    price: 14999,
    description: "Protect your unique inventions and innovations.",
    benefits: ["Exclusive Rights", "Market Monopoly", "Monetization", "Legal Protection"],
    documentsRequired: ["Invention Disclosure", "Drawings", "Abstract", "Claims"],
    tags: ["premium", "hot"],
    icon: "Lightbulb"
  },
  {
    id: "patent-search",
    title: "Patent Search",
    category: "Trademark & IPR",
    price: 4999,
    description: "Check if your invention is unique before filing.",
    benefits: ["Avoid Rejection", "Legal Safety", "Expert Analysis"],
    documentsRequired: ["Invention Details"],
    tags: ["popular"],
    icon: "Search"
  },
  {
    id: "patent-consultation",
    title: "Patent Consultation",
    category: "Trademark & IPR",
    price: 999,
    description: "Expert advice on patent filing and strategy.",
    benefits: ["Expert Guidance", "Clarify Doubts", "Strategic Planning", "Legal Advice"],
    documentsRequired: ["Invention Details"],
    tags: ["popular"],
    icon: "Headphones"
  },

  // ========== FSSAI ==========
  {
    id: "basic-fssai-registration",
    title: "Basic FSSAI Registration",
    category: "FSSAI",
    price: 999,
    description: "Basic registration for small food businesses.",
    benefits: ["Legal Compliance", "Consumer Trust", "Brand Value", "Avoid Penalties"],
    documentsRequired: ["Photo", "ID Proof", "Address Proof", "Food Category List"],
    tags: ["hot", "top-selling"],
    icon: "Utensils"
  },
  {
    id: "state-fssai-license",
    title: "State FSSAI License",
    category: "FSSAI",
    price: 4999,
    description: "License for medium-sized food businesses.",
    benefits: ["Expansion Ready", "Higher Credibility", "Legal Safety", "Market Access"],
    documentsRequired: ["Layout Plan", "List of Equipment", "NOC from Municipality"],
    tags: ["popular"],
    icon: "Map"
  },
  {
    id: "central-fssai-license",
    title: "Central FSSAI License",
    category: "FSSAI",
    price: 9999,
    description: "License for large food businesses and importers.",
    benefits: ["Pan-India Operations", "Import/Export Rights", "Premium Trust", "Compliance"],
    documentsRequired: ["IEC Code", "Water Test Report", "Source of Raw Material"],
    tags: ["premium"],
    icon: "Building"
  },
  {
    id: "fssai-renewal",
    title: "FSSAI Renewal",
    category: "FSSAI",
    price: 999,
    description: "Renew your food license before it expires.",
    benefits: ["Continuous Operation", "Avoid Late Fees", "Legal Safety", "Trust"],
    documentsRequired: ["Existing License", "Declaration"],
    tags: ["fast-moving"],
    icon: "RefreshCw"
  },
  {
    id: "fssai-modification",
    title: "FSSAI Modification",
    category: "FSSAI",
    price: 1499,
    description: "Update details in your existing FSSAI license.",
    benefits: ["Correct Records", "Updated Address/Name", "Compliance", "Avoid Notices"],
    documentsRequired: ["Existing License", "Proof of Change"],
    tags: ["fast-moving"],
    icon: "Edit3"
  },
  {
    id: "fssai-annual-return-filing",
    title: "FSSAI Annual Return Filing",
    category: "FSSAI",
    price: 999,
    description: "Annual return filing for food businesses.",
    benefits: ["Compliance", "Avoid Penalties", "Clean Records", "Audit Ready"],
    documentsRequired: ["Annual Sales Data", "Product List"],
    tags: ["fast-moving"],
    icon: "FileBarChart"
  },

  // ========== IMPORT EXPORT ==========
  {
    id: "iec-registration",
    title: "IEC Registration",
    category: "Import Export",
    price: 1499,
    description: "Mandatory code for importing or exporting goods/services.",
    benefits: ["Global Market Access", "Lifetime Validity", "No Returns", "Export Incentives"],
    documentsRequired: ["PAN Card", "Aadhaar Card", "Cancelled Cheque", "Address Proof"],
    tags: ["hot", "top-selling"],
    icon: "Ship"
  },
  {
    id: "iec-modification",
    title: "IEC Modification",
    category: "Import Export",
    price: 1499,
    description: "Modify your existing Import Export Code details.",
    benefits: ["Keep IEC updated", "Avoid rejection"],
    documentsRequired: ["IEC Certificate", "New Details"],
    tags: [],
    icon: "Edit"
  },
  {
    id: "iec-renewal",
    title: "IEC Renewal",
    category: "Import Export",
    price: 1499,
    description: "Renew your Import Export Code to continue import/export operations.",
    benefits: ["Continue operations", "Avoid penalties"],
    documentsRequired: ["IEC Certificate", "Business Details"],
    tags: [],
    icon: "RotateCw"
  },
  {
    id: "rcmc-registration",
    title: "RCMC Registration",
    category: "Import Export",
    price: 4999,
    description: "Registration Cum Membership Certificate from EPCs.",
    benefits: ["Export Incentives", "Market Info", "Trade Fair Access", "Subsidies"],
    documentsRequired: ["IEC Code", "Business Profile", "Product List"],
    tags: ["premium"],
    icon: "Award"
  },
  {
    id: "export-documentation",
    title: "Export Documentation Services",
    category: "Import Export",
    price: 2499,
    description: "Complete export documentation support for hassle-free exports.",
    benefits: ["Hassle-free exports", "Legal compliance"],
    documentsRequired: ["Invoice", "Packing List", "Shipping Bill"],
    tags: [],
    icon: "FileStack"
  },
  {
    id: "dgft-services",
    title: "DGFT Services",
    category: "Import Export",
    price: 2999,
    description: "Complete DGFT services including RCMC, import/export licenses, and more.",
    benefits: ["Government recognition", "Export benefits", "Legal compliance"],
    documentsRequired: ["IEC Certificate", "Business Details", "Export Details"],
    tags: [],
    icon: "Anchor"
  },

  // ========== LEGAL SERVICES ==========
  {
    id: "nda-drafting",
    title: "NDA Drafting",
    category: "Legal Services",
    price: 999,
    description: "Non-Disclosure Agreement to protect your trade secrets.",
    benefits: ["Confidentiality", "Legal Recourse", "Trust", "IP Protection"],
    documentsRequired: ["Scope of Data", "Party Details"],
    tags: ["fast-moving"],
    icon: "Lock"
  },
  {
    id: "partnership-agreement",
    title: "Partnership Agreement",
    category: "Legal Services",
    price: 2999,
    description: "Draft a legally sound partnership agreement for your business.",
    benefits: ["Clear terms", "Legal protection", "Dispute resolution"],
    documentsRequired: ["Partner Details", "Business Details"],
    tags: [],
    icon: "Handshake"
  },
  {
    id: "employment-agreement",
    title: "Employment Agreement",
    category: "Legal Services",
    price: 1499,
    description: "Legal contract between employer and employee.",
    benefits: ["Clarity", "Legal Protection", "Defined Roles"],
    documentsRequired: ["Offer Details", "Company Policy"],
    tags: ["fast-moving"],
    icon: "UserPlus"
  },
  {
    id: "vendor-agreement",
    title: "Vendor Agreement",
    category: "Legal Services",
    price: 1999,
    description: "Legal agreement for suppliers and vendors.",
    benefits: ["Defined Deliverables", "Payment Terms", "Legal Protection"],
    documentsRequired: ["Service Scope", "Payment Terms"],
    tags: ["fast-moving"],
    icon: "Truck"
  },
  {
    id: "service-agreement",
    title: "Service Agreement",
    category: "Legal Services",
    price: 2999,
    description: "Professional service agreement drafted by legal experts.",
    benefits: ["Clear scope of work", "Payment terms", "Legal protection"],
    documentsRequired: ["Service Details", "Client Details"],
    tags: [],
    icon: "FileSignature"
  },
  {
    id: "legal-consultation",
    title: "Legal Consultation",
    category: "Legal Services",
    price: 999,
    description: "Expert advice on any legal matter.",
    benefits: ["Expert Guidance", "Clarify Doubts", "Legal Strategy", "Peace of Mind"],
    documentsRequired: ["Case Details"],
    tags: ["top-selling"],
    icon: "Scale"
  },
  {
    id: "notice-drafting",
    title: "Notice Drafting",
    category: "Legal Services",
    price: 1499,
    description: "Professional drafting of legal notices for recovery, breach, etc.",
    benefits: ["Legal Pressure", "Formal Record", "Expert Drafting", "Fast Resolution"],
    documentsRequired: ["Fact Sheet", "Supporting Evidence"],
    tags: ["hot"],
    icon: "Mail"
  },
  {
    id: "legal-notice-reply",
    title: "Legal Notice Reply",
    category: "Legal Services",
    price: 1999,
    description: "Drafting replies to legal notices received.",
    benefits: ["Legal Protection", "Timely Response", "Expert Guidance", "Avoid Litigation"],
    documentsRequired: ["Received Notice", "Supporting Documents"],
    tags: ["popular"],
    icon: "MessageSquare"
  },
  {
    id: "contract-review",
    title: "Contract Review",
    category: "Legal Services",
    price: 1999,
    description: "Expert review of contracts to identify risks and ensure compliance.",
    benefits: ["Risk Mitigation", "Legal Safety", "Clarity", "Protection"],
    documentsRequired: ["Contract Document"],
    tags: ["popular"],
    icon: "Search"
  },

  // ========== LICENSES & REGISTRATIONS ==========
  {
    id: "trade-license",
    title: "Trade License",
    category: "Licenses & Registrations",
    price: 2499,
    description: "Permission from local municipality to carry out trade.",
    benefits: ["Legal Compliance", "Avoid Penalties", "Business Validity"],
    documentsRequired: ["Premises Proof", "ID Proof"],
    tags: ["popular"],
    icon: "Building"
  },
  {
    id: "shop-establishment-registration",
    title: "Shop & Establishment Registration",
    category: "Licenses & Registrations",
    price: 1999,
    description: "Register your shop or establishment under the Shops and Establishments Act.",
    benefits: ["Legal compliance", "Business legitimacy"],
    documentsRequired: ["Address Proof", "Identity Proof", "Business Details"],
    tags: ["popular"],
    icon: "Store"
  },
  {
    id: "professional-tax-registration",
    title: "Professional Tax Registration",
    category: "Licenses & Registrations",
    price: 1499,
    description: "Registration for tax on professions and trades.",
    benefits: ["Compliance", "Legal Safety", "Avoid Notices"],
    documentsRequired: ["PAN Card", "Aadhaar Card"],
    tags: ["fast-moving"],
    icon: "Briefcase"
  },
  {
    id: "msme-udyam-registration",
    title: "MSME/Udyam Registration",
    category: "Licenses & Registrations",
    price: 1499,
    description: "Register your business as an MSME under Udyam.",
    benefits: ["Government subsidies", "Priority lending", "Tax benefits"],
    documentsRequired: ["Aadhar", "Business Address", "Investment Details"],
    tags: ["hot", "popular"],
    icon: "Building"
  },
  {
    id: "labour-license",
    title: "Labour License",
    category: "Licenses & Registrations",
    price: 3999,
    description: "Get labour license for your business to employ workers legally.",
    benefits: ["Legal compliance", "Avoid penalties"],
    documentsRequired: ["Establishment Details", "Address Proof", "Identity Proof"],
    tags: [],
    icon: "Users"
  },
  {
    id: "factory-license",
    title: "Factory License",
    category: "Licenses & Registrations",
    price: 5999,
    description: "Get factory license under the Factories Act.",
    benefits: ["Legal compliance", "Worker safety", "Business legitimacy"],
    documentsRequired: ["Factory Details", "Owner Details", "Plan of Factory"],
    tags: ["premium"],
    icon: "Building2"
  },
  {
    id: "pollution-certificate",
    title: "Pollution Certificate",
    category: "Licenses & Registrations",
    price: 3999,
    description: "NOC from State Pollution Control Board.",
    benefits: ["Environmental Compliance", "Avoid Penalties", "Legal Safety"],
    documentsRequired: ["Project Report", "Land Details"],
    tags: ["fast-moving"],
    icon: "Wind"
  },

  // ========== FINANCIAL SERVICES ==========
  {
    id: "bookkeeping",
    title: "Bookkeeping Services",
    category: "Financial Services",
    price: 2499,
    description: "Professional bookkeeping services to keep your accounts accurate.",
    benefits: ["Accurate records", "Tax compliance", "Business insights"],
    documentsRequired: ["Financial Documents", "Bank Statements", "Invoices"],
    tags: ["popular"],
    icon: "BookOpen"
  },
  {
    id: "accounting-setup",
    title: "Accounting Setup",
    category: "Financial Services",
    price: 3999,
    description: "Complete accounting setup for your business using modern software.",
    benefits: ["Organized accounting", "Real-time insights", "Scalability"],
    documentsRequired: ["Business Details", "Financial Documents"],
    tags: [],
    icon: "PieChart"
  },
  {
    id: "ledger-maintenance",
    title: "Ledger Maintenance",
    category: "Financial Services",
    price: 1999,
    description: "Maintain accurate ledgers for your business accounting.",
    benefits: ["Accurate records", "Audit readiness", "Financial clarity"],
    documentsRequired: ["Financial Documents", "Transactions"],
    tags: [],
    icon: "FileText"
  },
  {
    id: "payroll-processing",
    title: "Payroll Processing",
    category: "Financial Services",
    price: 1499,
    description: "Complete payroll processing with tax calculations and compliance.",
    benefits: ["Employee satisfaction", "Tax compliance", "Accuracy"],
    documentsRequired: ["Employee Details", "Salary Structure", "Attendance"],
    tags: [],
    icon: "Users"
  },
  {
    id: "salary-management",
    title: "Salary Management",
    category: "Financial Services",
    price: 999,
    description: "Manage salary structures, increments, and bonuses professionally.",
    benefits: ["Transparent salary", "Employee satisfaction", "Efficient management"],
    documentsRequired: ["Employee Details", "Salary History"],
    tags: [],
    icon: "Coins"
  },
  {
    id: "pf-esi-compliance",
    title: "PF & ESI Compliance",
    category: "Financial Services",
    price: 2499,
    description: "Complete PF and ESI compliance for your business.",
    benefits: ["Legal compliance", "Employee benefits", "Avoid penalties"],
    documentsRequired: ["Employee Details", "Business Details", "Salary Records"],
    tags: [],
    icon: "Shield"
  },
  {
    id: "financial-planning",
    title: "Financial Planning",
    category: "Financial Services",
    price: 4999,
    description: "Professional financial planning for your business growth.",
    benefits: ["Business growth", "Financial clarity", "Investment guidance"],
    documentsRequired: ["Financial Goals", "Business Details", "Financial Statements"],
    tags: ["premium"],
    icon: "TrendingUp"
  },
  {
    id: "cfo-services",
    title: "CFO Services",
    category: "Financial Services",
    price: 9999,
    description: "Fractional CFO services for strategic financial management.",
    benefits: ["Expert financial management", "Strategic planning", "Business growth"],
    documentsRequired: ["Financial Statements", "Business Plan", "Goals"],
    tags: ["premium"],
    icon: "User"
  },

  // ========== TAX & COMPLIANCE ==========
  {
    id: "individual-itr-filing",
    title: "Individual ITR Filing",
    category: "Tax & Compliance",
    price: 999,
    description: "Expert assistance for filing your individual income tax returns.",
    benefits: ["Accurate Filing", "Maximize Refunds", "Avoid Penalties", "Peace of Mind"],
    documentsRequired: ["Form 16", "Bank Statements", "Investment Proofs"],
    tags: ["hot", "top-selling"],
    icon: "User"
  },
  {
    id: "business-itr-filing",
    title: "Business ITR Filing",
    category: "Tax & Compliance",
    price: 2999,
    description: "Professional income tax filing for businesses of all sizes.",
    benefits: ["Compliance", "Tax Optimization", "Audit Ready", "Expert Guidance"],
    documentsRequired: ["Audited Financials", "GST Filings", "Bank Statements"],
    tags: ["popular"],
    icon: "Building"
  },
  {
    id: "tds-filing",
    title: "TDS Filing",
    category: "Tax & Compliance",
    price: 999,
    description: "Quarterly filing of TDS returns for salaries and other payments.",
    benefits: ["Avoid Penalties", "Compliance", "Correct Credit"],
    documentsRequired: ["TDS Challans", "Deductee Details"],
    tags: ["popular"],
    icon: "FileText"
  },
  {
    id: "roc-compliance",
    title: "ROC Compliance",
    category: "Tax & Compliance",
    price: 4999,
    description: "Complete compliance for companies under the Companies Act.",
    benefits: ["Legal Compliance", "Avoid Penalties", "Good Standing", "Corporate Governance"],
    documentsRequired: ["Financial Statements", "Board Minutes", "Annual Returns"],
    tags: ["premium"],
    icon: "Shield"
  },
  {
    id: "annual-compliance",
    title: "Annual Compliance",
    category: "Tax & Compliance",
    price: 3999,
    description: "Complete annual compliance package for businesses.",
    benefits: ["Legal Compliance", "Avoid Penalties", "Clean Records", "Audit Ready"],
    documentsRequired: ["Business Documents", "Financial Statements"],
    tags: ["popular"],
    icon: "Calendar"
  },
  {
    id: "tax-planning",
    title: "Tax Planning",
    category: "Tax & Compliance",
    price: 2999,
    description: "Strategic tax planning to minimize your tax liability.",
    benefits: ["Save Money", "Legal Compliance", "Future Ready", "Expert Guidance"],
    documentsRequired: ["Income Details", "Investment Details", "Financial Goals"],
    tags: ["premium"],
    icon: "TrendingDown"
  },

  // ========== DIGITAL SERVICES ==========
  {
    id: "business-website",
    title: "Business Website",
    category: "Digital Services",
    price: 9999,
    description: "Professional business website with modern design and features.",
    benefits: ["Online Presence", "Brand Value", "Lead Generation", "24/7 Availability"],
    documentsRequired: ["Logo", "Content", "Business Profile"],
    tags: ["hot", "premium"],
    icon: "Code"
  },
  {
    id: "e-commerce-website",
    title: "E-commerce Website",
    category: "Digital Services",
    price: 19999,
    description: "Full-featured online store with payment gateway integration.",
    benefits: ["Sell Online", "Global Reach", "Automated Sales", "Scalability"],
    documentsRequired: ["Product List", "Payment Gateway Details"],
    tags: ["hot", "top-selling"],
    icon: "ShoppingBag"
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    category: "Digital Services",
    price: 4999,
    description: "Professional portfolio website showcasing your work and skills.",
    benefits: ["Showcase Work", "Brand Building", "Client Attraction", "Online Presence"],
    documentsRequired: ["Portfolio Items", "About Content"],
    tags: ["popular"],
    icon: "Palette"
  },
  {
    id: "landing-page-design",
    title: "Landing Page Design",
    category: "Digital Services",
    price: 3999,
    description: "High-conversion landing page for your campaigns.",
    benefits: ["Lead Generation", "High Conversion", "Fast Loading", "Focused"],
    documentsRequired: ["Offer Details", "Copy"],
    tags: ["fast-moving"],
    icon: "Layout"
  },
  {
    id: "android-app-development",
    title: "Android App Development",
    category: "Digital Services",
    price: 49999,
    description: "Custom Android app for your business.",
    benefits: ["Mobile Presence", "User Engagement", "Direct Marketing", "Innovation"],
    documentsRequired: ["App Idea", "Feature List"],
    tags: ["premium", "hot"],
    icon: "Smartphone"
  },
  {
    id: "ios-app-development",
    title: "iOS App Development",
    category: "Digital Services",
    price: 59999,
    description: "Custom iOS app for iPhone and iPad users.",
    benefits: ["Mobile Presence", "User Engagement", "Direct Marketing", "Innovation"],
    documentsRequired: ["App Idea", "Feature List"],
    tags: ["premium"],
    icon: "Apple"
  },
  {
    id: "flutter-app-development",
    title: "Flutter App Development",
    category: "Digital Services",
    price: 69999,
    description: "Cross-platform app development using Flutter for iOS and Android.",
    benefits: ["Single Codebase", "Cost Effective", "Fast Development", "Cross-Platform"],
    documentsRequired: ["App Idea", "Feature List"],
    tags: ["premium"],
    icon: "Rocket"
  },
  {
    id: "logo-design",
    title: "Logo Design",
    category: "Digital Services",
    price: 1499,
    description: "Unique and creative logo for your brand.",
    benefits: ["Brand Identity", "Professionalism", "Memorable", "Unique"],
    documentsRequired: ["Brand Name", "Color Preferences"],
    tags: ["top-selling"],
    icon: "PenTool"
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    category: "Digital Services",
    price: 7999,
    description: "Complete brand identity including logo, cards, and more.",
    benefits: ["Professional Look", "Consistency", "Brand Recall", "Premium Feel"],
    documentsRequired: ["Brand Vision", "Preferences"],
    tags: ["premium"],
    icon: "Sparkles"
  },
  {
    id: "business-profile-design",
    title: "Business Profile Design",
    category: "Digital Services",
    price: 2999,
    description: "Professional business profile and brochure design.",
    benefits: ["Professional Image", "Trust Building", "Brand Consistency"],
    documentsRequired: ["Business Details", "Images"],
    tags: ["popular"],
    icon: "FileText"
  },
  {
    id: "social-media-creatives",
    title: "Social Media Creatives",
    category: "Digital Services",
    price: 1999,
    description: "Engaging social media graphics and creatives.",
    benefits: ["Brand Awareness", "Engagement", "Consistency", "Professional Look"],
    documentsRequired: ["Brand Guidelines", "Content"],
    tags: ["popular"],
    icon: "Share2"
  },
  {
    id: "posters-flyers",
    title: "Posters & Flyers Design",
    category: "Digital Services",
    price: 999,
    description: "Professional posters and flyers for promotions.",
    benefits: ["Promotional Impact", "Brand Visibility", "Cost Effective"],
    documentsRequired: ["Content", "Images"],
    tags: ["fast-moving"],
    icon: "Image"
  },
  {
    id: "brochures",
    title: "Brochures Design",
    category: "Digital Services",
    price: 1499,
    description: "Professional brochure design for your business.",
    benefits: ["Professional Image", "Information Delivery", "Brand Consistency"],
    documentsRequired: ["Content", "Images"],
    tags: ["popular"],
    icon: "BookOpen"
  },
  {
    id: "banner-design",
    title: "Banner Design",
    category: "Digital Services",
    price: 999,
    description: "Professional banners for events, promotions, and advertising.",
    benefits: ["Visual Impact", "Brand Visibility", "Cost Effective"],
    documentsRequired: ["Content", "Images"],
    tags: ["fast-moving"],
    icon: "Image"
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    category: "Digital Services",
    price: 24999,
    description: "Complete digital transformation consulting for your business.",
    benefits: ["Innovation", "Efficiency", "Growth", "Competitive Edge"],
    documentsRequired: ["Business Goals", "Current Process"],
    tags: ["premium"],
    icon: "RefreshCw"
  },
  {
    id: "online-presence-setup",
    title: "Online Presence Setup",
    category: "Digital Services",
    price: 9999,
    description: "Complete online presence setup including website, social media, and more.",
    benefits: ["Visibility", "Brand Building", "Lead Generation", "Credibility"],
    documentsRequired: ["Business Details", "Brand Guidelines"],
    tags: ["hot"],
    icon: "Globe"
  },
  {
    id: "business-automation",
    title: "Business Automation",
    category: "Digital Services",
    price: 14999,
    description: "Automate your business processes with modern tools.",
    benefits: ["Efficiency", "Cost Savings", "Scalability", "Accuracy"],
    documentsRequired: ["Business Processes", "Goals"],
    tags: ["premium"],
    icon: "Bot"
  },
  

  {
    id: "pan-card-application",
    title: "PAN Card Application",
    category: "Document Services",
    price: 199,
    description: "Apply for new or correction in PAN card.",
    benefits: ["Tax Compliance", "Identity Proof", "Bank Account Opening"],
    documentsRequired: ["Aadhaar Card", "Photo"],
    tags: ["hot", "top-selling"],
    icon: "CreditCard"
  },
  {
    id: "tan-registration",
    title: "TAN Registration",
    category: "Document Services",
    price: 499,
    description: "Mandatory for businesses deducting TDS.",
    benefits: ["TDS Compliance", "Avoid Penalties", "Legal Requirement"],
    documentsRequired: ["PAN Card", "ID Proof"],
    tags: ["fast-moving"],
    icon: "Hash"
  },
  {
    id: "digital-signature-certificate",
    title: "Digital Signature Certificate",
    category: "Document Services",
    price: 999,
    description: "Digital Signature Certificate for online filings.",
    benefits: ["Secure Filing", "Legal Validity", "Paperless", "Convenient"],
    documentsRequired: ["PAN Card", "Aadhaar Card", "Photo", "Video Verification"],
    tags: ["top-selling"],
    icon: "Key"
  },
  {
    id: "din-registration",
    title: "DIN Registration",
    category: "Document Services",
    price: 999,
    description: "Director Identification Number for company directors.",
    benefits: ["Legal Requirement", "Lifetime Validity", "Director Eligibility"],
    documentsRequired: ["PAN Card", "Aadhaar Card", "Photo"],
    tags: ["fast-moving"],
    icon: "UserCircle"
  }
];

export const BUNDLES = [
  {
    id: "startup-pack",
    title: "STARTUP PACK",
    price: 12999,
    services: ["private-limited-company-registration", "new-gst-registration", "sole-proprietorship-registration", "trademark-registration"],
    tags: ["hot", "best-seller"],
    icon: "Rocket"
  },
  {
    id: "growth-pack",
    title: "GROWTH PACK",
    price: 19999,
    services: ["business-website", "social-media-creatives", "logo-design"],
    tags: ["trending"],
    icon: "TrendingUp"
  },
  {
    id: "compliance-pack",
    title: "COMPLIANCE PACK",
    price: 9999,
    services: ["monthly-gst-return-filing", "individual-itr-filing", "annual-compliance"],
    tags: ["popular"],
    icon: "ShieldCheck"
  },
  {
    id: "food-biz-pack",
    title: "FOOD BUSINESS PACK",
    price: 6999,
    services: ["basic-fssai-registration", "new-gst-registration", "trade-license"],
    tags: ["trending"],
    icon: "Utensils"
  }
];
