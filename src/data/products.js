const products = [
  {
    "category": "INFUS",
    "items": [
      { "id": 1, "name": "Hydravit", "description": "Dextrose 5%, NaCl 0.9%", "image": "/images/products/Hydravit.png" },
      { "id": 2, "name": "ReplenIQ", "description": "Ringer Laktat", "image": "/images/products/ReplenitQ.png" },
      { "id": 3, "name": "VitaFlow", "description": "Multivitamin B-Kompleks + Vitamin C", "image": "/images/products/Vitaflow.png" },
      { "id": 4, "name": "IsoLyt", "description": "NaCl 0.9%", "image": "/images/products/IsoLyt.png" },
      { "id": 5, "name": "RehydraMax", "description": "Dextrose 10%", "image": "/images/products/Rehydramax.png" },
      { "id": 6, "name": "NutriLine", "description": "Amino Acid Mix + Lipid Emulsion", "image": "/images/products/NutriLine.png" },
      { "id": 7, "name": "PlasmaOne", "description": "Gelatin Polygeline", "image": "/images/products/PlasmaOne.png" },
      { "id": 8, "name": "Oxyline", "description": "Dextrose 5% + Sodium Lactate", "image": "/images/products/Oxyline.png" },
      { "id": 9, "name": "LyteCare", "description": "NaCl 0.45% + Dextrose 2.5%", "image": "/images/products/Lytecare.png" },
      { "id": 10, "name": "Hydroten", "description": "Dextrose 20%", "image": "/images/products/Hydroten.png" }
    ]
  },
  {
    "category": "TETES MATA",
    "items": [
      { "id": 11, "name": "Oftarex", "description": "Ciprofloxacin HCl 0.3%", "image": "/images/products/Oftarex.png" },
      { "id": 12, "name": "Visilube", "description": "Hydroxypropyl Methylcellulose 0.3%", "image": "/images/products/Visilube.png" },
      { "id": 13, "name": "Optarix", "description": "Tobramycin 0.3%", "image": "/images/products/Optarix.png" },
      { "id": 14, "name": "TearNova", "description": "Carboxymethylcellulose Sodium 0.5%", "image": "/images/products/TearNova.png" },
      { "id": 15, "name": "Claryzol", "description": "Ketorolac Tromethamine 0.5%", "image": "/images/products/Claryzol.png" },
      { "id": 16, "name": "Lumivis", "description": "Sodium Hyaluronate 0.1%", "image": "/images/products/Lumivis.png" },
      { "id": 17, "name": "Opharil", "description": "Olopatadine HCl 0.1%", "image": "/images/products/Opharil.png" },
      { "id": 18, "name": "Zyntear", "description": "Chloramphenicol 0.5%", "image": "/images/products/Zyntear.png" },
      { "id": 19, "name": "Blinkose", "description": "Artificial Tears Solution", "image": "/images/products/Blinkose.png" },
      { "id": 20, "name": "PureOpta", "description": "Euphrasia Extract", "image": "/images/products/PureOpta.png" }
    ]
  },
  {
    "category": "SIRUP",
    "items": [
      { "id": 21, "name": "Sweetrel", "description": "Paracetamol 120 mg/5 mL", "image": "/images/products/Sweetrel.png" },
      { "id": 22, "name": "CoughyBear", "description": "Dextromethorphan HBr + Guaifenesin", "image": "/images/products/CoughyBear.png" },
      { "id": 23, "name": "NutraSip", "description": "Multivitamin & Mineral Complex", "image": "/images/products/NutraSip.png" },
      { "id": 24, "name": "Vitazee", "description": "Vitamin C 100 mg/5 mL", "image": "/images/products/Vitazee.png" },
      { "id": 25, "name": "Panadrix", "description": "Paracetamol 250 mg/5 mL", "image": "/images/products/Panadrix.png" },
      { "id": 26, "name": "Zyncolin", "description": "Amoxicillin 125 mg/5 mL", "image": "/images/products/Zyncolin.png" },
      { "id": 27, "name": "Flumin", "description": "Chlorpheniramine Maleate + Pseudoephedrine", "image": "/images/products/Flumin.png" },
      { "id": 28, "name": "Aldexin", "description": "Dexchlorpheniramine Maleate 2 mg/5 mL", "image": "/images/products/Aldexin.png" },
      { "id": 29, "name": "Gastrolyx", "description": "Simethicone 40 mg/5 mL", "image": "/images/products/Gastrolyx.png" },
      { "id": 30, "name": "Honeymed", "description": "Madu + Ekstrak Jahe + Lemon", "image": "/images/products/Honeymed.png" }
    ]
  },
  {
    "category": "TABLET",
    "items": [
      { "id": 31, "name": "Carenza", "description": "Ibuprofen 200 mg", "image": "/images/products/Carenza.png" },
      { "id": 32, "name": "Vironex", "description": "Acyclovir 200 mg", "image": "/images/products/Vinorex.png" },
      { "id": 33, "name": "Gastrozen", "description": "Omeprazole 20 mg", "image": "/images/products/Gastrozen.png" },
      { "id": 34, "name": "Neurozil", "description": "Vitamin B1, B6, B12", "image": "/images/products/Neurozyl.png" },
      { "id": 35, "name": "Cardiolin", "description": "Bisoprolol Fumarate 5 mg", "image": "/images/products/Cardiolin.png" },
      { "id": 36, "name": "Relaxyn", "description": "Cyclobenzaprine 10 mg", "image": "/images/products/Relaxyn.png" },
      { "id": 37, "name": "Mycotrax", "description": "Fluconazole 150 mg", "image": "/images/products/Mycotrax.png" },
      { "id": 38, "name": "Dermatab", "description": "Cetirizine HCl 10 mg", "image": "/images/products/Dermatab.png" },
      { "id": 39, "name": "Menovex", "description": "Isoflavone + Vitamin E", "image": "/images/products/Menovex.png" },
      { "id": 40, "name": "Zincorid", "description": "Zinc Sulfate 20 mg", "image": "/images/products/Zincorid.png" }
    ]
  },
  {
    "category": "INJEKSI AMPUL",
    "items": [
      { "id": 41, "name": "Intravex", "description": "Vitamin B-Complex Injection", "image": "/images/products/Intravex.png" },
      { "id": 42, "name": "Nerovial", "description": "Cyanocobalamin 1000 µg/mL", "image": "/images/products/Nerovial.png" },
      { "id": 43, "name": "Cortisolin", "description": "Dexamethasone Sodium Phosphate 4 mg/mL", "image": "/images/products/Cortisolin.png" },
      { "id": 44, "name": "Amivex", "description": "Amikacin Sulfate 250 mg/mL", "image": "/images/products/Amivex.png" },
      { "id": 45, "name": "Tramadion", "description": "Tramadol HCl 50 mg/mL", "image": "/images/products/Tramadion.png" },
      { "id": 46, "name": "Vitaglone", "description": "Vitamin C 500 mg/5 mL", "image": "/images/products/Vitaglone.png" },
      { "id": 47, "name": "Dexatrin", "description": "Dexamethasone + Lidocaine", "image": "/images/products/Dexatrin.png" },
      { "id": 48, "name": "Myorelax", "description": "Methocarbamol 100 mg/mL", "image": "/images/products/Myorelax.png" },
      { "id": 49, "name": "Hypervene", "description": "Mannitol 20%", "image": "/images/products/Hypervene.png" },
      { "id": 50, "name": "Osmovex", "description": "Dextrose 25%", "image": "/images/products/Osmovex.png" }
    ]
  },
  {
    "category": "VIAL",
    "items": [
      { "id": 51, "name": "Bactevial", "description": "Ceftriaxone Sodium 1 g", "image": "/images/products/Bactevial.png" },
      { "id": 52, "name": "Solumix", "description": "Electrolyte Mix (NaCl, KCl, CaCl₂)", "image": "/images/products/Solumix.png" },
      { "id": 53, "name": "Cefrion", "description": "Cefotaxime Sodium 1 g", "image": "/images/products/Cefrion.png" },
      { "id": 54, "name": "Dexavial", "description": "Dexamethasone Sodium Phosphate 4 mg/mL", "image": "/images/products/Dexavial.png" },
      { "id": 55, "name": "Immuniv", "description": "Immunoglobulin 5 g/100 mL", "image": "/images/products/Immuniv.png" },
      { "id": 56, "name": "Glucorin", "description": "Glucose 10%", "image": "/images/products/Glucorin.png" },
      { "id": 57, "name": "Tranvex", "description": "Tranexamic Acid 500 mg/5 mL", "image": "/images/products/Tranvex.png" },
      { "id": 58, "name": "Rhetonix", "description": "Sodium Chloride 3%", "image": "/images/products/Rhetonix.png" },
      { "id": 59, "name": "Osmoline", "description": "Dextrose 30%", "image": "/images/products/Osmoline.png" },
      { "id": 60, "name": "Vascorin", "description": "Dopamine HCl 200 mg/5 mL", "image": "/images/products/Vascorin.png" }
    ]
  }
];

export default products;
