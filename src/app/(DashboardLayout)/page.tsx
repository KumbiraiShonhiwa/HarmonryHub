"use client";
const productsData = [
  // Existing products

  // New products
  {
    name: "Epiphone J-200 EC Studio Acoustic-Electric Guitar (Ebony) | EEJ2BKGH1",
    description:
      "The Epiphone J-200 EC Studio Acoustic-Electric Guitar in Ebony offers a classic jumbo body shape with a cutaway for easy upper-fret access. Featuring a solid spruce top and a stunning ebony finish, it delivers a rich, full-bodied tone perfect for any performance.",
    price: 549.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2023/10/EEJ2BKGH1-3-330x330.jpg",
  },
  {
    name: "Epiphone Songmaker DR-100 Dreadnaught Acoustic Guitar (Vintage Natural) | EA10NACH1",
    description:
      "The Epiphone Songmaker DR-100 Dreadnaught Acoustic Guitar in Vintage Natural features a classic dreadnaught shape and a solid spruce top for a rich, resonant tone. It's an excellent choice for both beginner and seasoned players.",
    price: 199.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2023/10/EA10NACH1-2-330x330.jpg",
  },
  {
    name: "Yamaha FS830 Concert Acoustic Guitar – Natural",
    description:
      "The Yamaha FS830 Concert Acoustic Guitar in Natural offers a warm and balanced tone with its solid spruce top and solid rosewood back and sides. Its concert-sized body is perfect for fingerstyle players.",
    price: 399.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2023/09/FS830-DSR-2.jpg",
  },
  {
    name: "Yamaha A1M Dreadnought Cutaway – Tobacco Brown Sunburst",
    description:
      "The Yamaha A1M Dreadnought Cutaway in Tobacco Brown Sunburst features a solid spruce top and solid mahogany back and sides, providing a powerful and well-balanced sound. Its cutaway design allows for easy access to higher frets.",
    price: 499.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2023/09/A1M-TBS-2.jpg",
  },
  {
    name: "Takamine GN93CE-NAT NEX Body Acoustic-Electric Guitar with Cutaway (Natural)",
    description:
      "The Takamine GN93CE-NAT NEX Body Acoustic-Electric Guitar features a solid spruce top and solid rosewood back and sides, offering a well-rounded tone with excellent projection. The cutaway design and onboard electronics make it ideal for live performances.",
    price: 699.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2023/09/products-TAK-GN93CENAT3.jpg",
  },
  {
    name: "Tanglewood Roadster TW-R2SFCE Superolk Cutaway Electro-Acoustic Guitar",
    description:
      "The Tanglewood Roadster TW-R2SFCE Superolk Cutaway Electro-Acoustic Guitar features a solid spruce top and a cutaway design for enhanced playability. Its onboard electronics provide excellent amplification for live performances.",
    price: 449.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2023/09/products-TAG-TWR2SFCE2.jpg",
  },
  {
    name: "Martin GBPC Steel String Backpacker Acoustic Guitar",
    description:
      "The Martin GBPC Steel String Backpacker Acoustic Guitar is a compact and portable guitar with a solid spruce top and a unique body shape. It's perfect for traveling musicians who need a reliable and portable instrument.",
    price: 289.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2023/09/products-CFM-GBPC4.jpg",
  },
  {
    name: "Ibanez AW54JR Artwood Junior Acoustic Guitar – Open Pore Natural",
    description:
      "The Ibanez AW54JR Artwood Junior Acoustic Guitar features an open pore natural finish and a solid mahogany top. Its smaller body size makes it ideal for younger players or those who prefer a more compact instrument.",
    price: 229.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2023/09/products-AW54JR2.jpg",
  },
  {
    name: "Ibanez AEWC11 Acoustic Guitar (Dark Violin Sunburst High Gloss)",
    description:
      "The Ibanez AEWC11 Acoustic Guitar in Dark Violin Sunburst features a high gloss finish and a slim, comfortable neck. Its solid spruce top and figured ash back and sides provide a bright, resonant tone.",
    price: 499.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/04/AEWC11-DVS-2-330x330.jpg",
  },
  {
    name: "Ibanez AEG7MH Acoustic Guitar (Open Pore Natural)",
    description:
      "The Ibanez AEG7MH Acoustic Guitar in Open Pore Natural features a solid spruce top and mahogany back and sides. Its slim neck and lightweight design make it comfortable to play, while its warm tone is perfect for a variety of musical styles.",
    price: 349.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/04/AEG7MH-OPN-2-330x330.jpg",
  },
  {
    name: "Yamaha F310 Acoustic Guitar (Tobacco Brown Sunburst)",
    description:
      "The Yamaha F310 Acoustic Guitar in Tobacco Brown Sunburst offers a solid spruce top and a comfortable dreadnought body. It delivers a full, balanced tone suitable for a range of musical styles.",
    price: 179.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/01/F310-TBS-2-330x330.jpg",
  },
  {
    name: "Alvarez Delta00/TSB Artist Blues Acoustic-Electric Guitar (Tobacco Sunburst/Gloss)",
    description:
      "The Alvarez Delta00/TSB Artist Blues Acoustic-Electric Guitar features a tobacco sunburst gloss finish and a solid spruce top. Its smaller body size and onboard electronics make it ideal for blues and folk musicians.",
    price: 399.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/01/Delta00_TSB-2-330x330.jpg",
  },
  {
    name: "Alvarez AP66SHB Artist Parlor Acoustic Guitar (Shadowburst/Gloss)",
    description:
      "The Alvarez AP66SHB Artist Parlor Acoustic Guitar in Shadowburst Gloss has a small, parlor-sized body that provides a focused, intimate sound. Its solid spruce top and solid mahogany back offer a rich, balanced tone.",
    price: 299.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/01/AP66SHB-2-330x330.jpg",
  },
  {
    name: "Alvarez AP66ESHB Artist Parlor Acoustic-Electric Guitar (Shadowburst/Gloss)",
    description:
      "The Alvarez AP66ESHB Artist Parlor Acoustic-Electric Guitar in Shadowburst Gloss features a solid spruce top and solid mahogany back, with the added convenience of onboard electronics for amplified performances.",
    price: 399.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/01/AP66ESHB-2-330x330.jpg",
  },
  {
    name: "Alvarez AJ80CE Artist Jumbo Acoustic-Electric Guitar (Natural/Gloss)",
    description:
      "The Alvarez AJ80CE Artist Jumbo Acoustic-Electric Guitar in Natural Gloss offers a powerful, resonant sound with its jumbo body shape and solid spruce top. The built-in electronics make it perfect for stage performances.",
    price: 599.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/01/AJ80CE-2-330x330.jpg",
  },
  {
    name: "Alvarez AGW77CEAR Artist Elite Grand Auditorium Acoustic-Electric Guitar (Shadowburst/Gloss)",
    description:
      "The Alvarez AGW77CEAR Artist Elite Grand Auditorium Acoustic-Electric Guitar in Shadowburst Gloss features a grand auditorium body and a solid spruce top, delivering a dynamic range of tones with excellent projection.",
    price: 749.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/01/AGW77CEAR-2-330x330.jpg",
  },
  {
    name: "Alvarez AG75WCE Artist Grand Auditorium Acoustic-Electric Guitar (Natural/Gloss)",
    description:
      "The Alvarez AG75WCE Artist Grand Auditorium Acoustic-Electric Guitar in Natural Gloss offers a rich, full sound with its grand auditorium body and solid spruce top. The built-in electronics make it versatile for various performance settings.",
    price: 649.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/01/AG75WCE-2-330x330.jpg",
  },
  {
    name: "Alvarez AG60CEAR Artist Grand Auditorium Acoustic-Electric Guitar (Natural/Gloss)",
    description:
      "The Alvarez AG60CEAR Artist Grand Auditorium Acoustic-Electric Guitar in Natural Gloss features a solid spruce top and a grand auditorium body, providing a well-balanced tone with great projection. Its electronics make it performance-ready.",
    price: 599.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/01/AG60CEAR-2-330x330.jpg",
  },
  {
    name: "Alvarez AG60CE Artist Grand Auditorium Acoustic-Electric Guitar (Natural/Gloss)",
    description:
      "The Alvarez AG60CE Artist Grand Auditorium Acoustic-Electric Guitar in Natural Gloss features a solid spruce top and a grand auditorium body, delivering a bright and resonant tone. The built-in electronics are perfect for live performances.",
    price: 599.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/01/AG60CE-2-330x330.jpg",
  },
  {
    name: "Alvarez AG60AR Artist Grand Auditorium Acoustic Guitar (Natural/Gloss)",
    description:
      "The Alvarez AG60AR Artist Grand Auditorium Acoustic Guitar in Natural Gloss offers a well-rounded sound with its grand auditorium body and solid spruce top. It provides excellent tonal clarity and volume.",
    price: 549.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/01/AG60AR-2-330x330.jpg",
  },

  {
    name: "Yamaha DGB1K-ENST-PWH Disklavier ENSPIRE ST Baby Grand Piano – Polished White",
    description:
      "The Yamaha DGB1K-ENST-PWH Disklavier ENSPIRE ST Baby Grand Piano in Polished White offers a stunning visual and exceptional sound quality. The Disklavier technology allows for a unique digital experience with automatic playback and recording features.",
    price: 9999.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2023/09/products-GB1KPE3.jpg",
  },
  {
    name: "Alvarez RU22TCE Tenor Acoustic-Electric Ukulele (Natural/Satin)",
    description:
      "The Alvarez RU22TCE Tenor Acoustic-Electric Ukulele in Natural Satin features a solid mahogany top with onboard electronics, offering a warm, rich tone and versatility for live performances.",
    price: 219.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/01/RU22TCE-2-330x330.jpg",
  },
  {
    name: "Alvarez RU22T Tenor Acoustic Ukulele (Natural/Satin)",
    description:
      "The Alvarez RU22T Tenor Acoustic Ukulele in Natural Satin is crafted with a solid mahogany top, providing a resonant, mellow sound ideal for traditional ukulele playing.",
    price: 179.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/01/RU22T-2-330x330.jpg",
  },
  {
    name: "Alvarez RU22SCE Soprano Acoustic-Electric Ukulele (Natural/Satin)",
    description:
      "The Alvarez RU22SCE Soprano Acoustic-Electric Ukulele in Natural Satin features a solid mahogany top with built-in electronics. It offers a bright, lively tone with the added convenience of amplification.",
    price: 199.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/01/RU22SCE-2-330x330.jpg",
  },
  {
    name: "Alvarez RU22S Soprano Acoustic Ukulele (Natural/Satin)",
    description:
      "The Alvarez RU22S Soprano Acoustic Ukulele in Natural Satin provides a traditional soprano sound with a solid mahogany top, offering bright and cheerful tones for ukulele enthusiasts.",
    price: 159.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/01/RU22S-2-330x330.jpg",
  },
  {
    name: "Alvarez RU22CCE Concert Acoustic-Electric Ukulele (Natural/Satin)",
    description:
      "The Alvarez RU22CCE Concert Acoustic-Electric Ukulele in Natural Satin features a solid mahogany top with onboard electronics, delivering a rich, full tone with the flexibility of amplification.",
    price: 229.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/01/RU22CCE-1-330x330.jpg",
  },
  {
    name: "Alvarez RU22C Concert Ukulele (Natural/Satin)",
    description:
      "The Alvarez RU22C Concert Ukulele in Natural Satin offers a solid mahogany top with a warm, balanced tone. Its concert size provides a comfortable playing experience with a slightly deeper sound than soprano ukuleles.",
    price: 189.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/01/RU22C-2-330x330.jpg",
  },
  {
    name: "Alvarez Delta00/TSB Artist Blues Acoustic-Electric Guitar (Tobacco Sunburst/Gloss)",
    description:
      "The Alvarez Delta00/TSB Artist Blues Acoustic-Electric Guitar in Tobacco Sunburst Gloss features a solid spruce top and onboard electronics. Its compact body and rich tone make it ideal for blues and folk musicians.",
    price: 399.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/01/Delta00_TSB-2-330x330.jpg",
  },
  {
    name: "Alvarez AU90TCE Tenor Acoustic-Electric Ukulele (Natural/Satin)",
    description:
      "The Alvarez AU90TCE Tenor Acoustic-Electric Ukulele in Natural Satin features a solid mahogany top with built-in electronics, offering a full, resonant sound with the versatility for live performances.",
    price: 229.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/01/AU90TCE-2-1-330x330.jpg",
  },
  {
    name: "Alvarez AU90CCE Concert Acoustic-Electric Ukulele (Natural/Satin)",
    description:
      "The Alvarez AU90CCE Concert Acoustic-Electric Ukulele in Natural Satin features a solid mahogany top with onboard electronics. Its concert size provides a warm, balanced tone suitable for a range of musical styles.",
    price: 239.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/01/AU90CCE-2-330x330.jpg",
  },
  {
    name: "Alvarez AU70WTCE Tenor Acoustic-Electric Ukulele (Natural/Satin)",
    description:
      "The Alvarez AU70WTCE Tenor Acoustic-Electric Ukulele in Natural Satin features a solid spruce top with built-in electronics, delivering a bright, resonant tone perfect for live performances.",
    price: 219.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/01/AU70WTCE-2-330x330.jpg",
  },
  {
    name: "Alvarez AU70WT Tenor Acoustic Ukulele (Natural/Satin)",
    description:
      "The Alvarez AU70WT Tenor Acoustic Ukulele in Natural Satin features a solid spruce top, offering a bright and clear tone with excellent projection. Its tenor size provides a comfortable playing experience.",
    price: 189.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/01/AU70WT-2-330x330.jpg",
  },
  {
    name: "Alvarez AU70WSCE Soprano Acoustic-Electric Ukulele (Natural/Satin)",
    description:
      "The Alvarez AU70WSCE Soprano Acoustic-Electric Ukulele in Natural Satin features a solid spruce top and built-in electronics. It delivers a bright, lively tone with the added flexibility of amplification.",
    price: 199.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/01/AU70WSCE-2-330x330.jpg",
  },
  {
    name: "Alvarez AU70WCCE Concert Acoustic-Electric Ukulele (Natural/Satin)",
    description:
      "The Alvarez AU70WCCE Concert Acoustic-Electric Ukulele in Natural Satin features a solid spruce top with onboard electronics. Its concert size offers a well-balanced tone with the convenience of amplification.",
    price: 229.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/01/AU70WCCE-2-330x330.jpg",
  },
  {
    name: "Alvarez AU70WC Concert Acoustic Ukulele (Natural/Satin)",
    description:
      "The Alvarez AU70WC Concert Acoustic Ukulele in Natural Satin features a solid spruce top, providing a bright and resonant tone. Its concert size is perfect for players looking for a warm, balanced sound.",
    price: 199.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/01/AU70WC-2-330x330.jpg",
  },
  {
    name: "Alvarez AU70WB/6 Baritone 6-String Uke-Size Travel Guitar (Natural/Satin)",
    description:
      "The Alvarez AU70WB/6 Baritone 6-String Uke-Size Travel Guitar in Natural Satin combines the portability of a ukulele with the tuning of a guitar. It’s ideal for traveling musicians looking for versatility and compact size.",
    price: 229.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/01/AU70WB_6-2-330x330.jpg",
  },
  {
    name: "Alvarez AU66TCESHB Tenor Acoustic-Electric Ukulele (Shadowburst/Gloss)",
    description:
      "The Alvarez AU66TCESHB Tenor Acoustic-Electric Ukulele in Shadowburst Gloss features a solid spruce top and built-in electronics. It offers a powerful, resonant tone with the added convenience of amplification.",
    price: 249.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/01/AU66TCESHB-2-330x330.jpg",
  },
  {
    name: "Alvarez AU66CCESHB Concert Acoustic-Electric Ukulele (Shadowburst/Gloss)",
    description:
      "The Alvarez AU66CCESHB Concert Acoustic-Electric Ukulele in Shadowburst Gloss features a solid spruce top with onboard electronics. It delivers a warm, balanced tone with the flexibility of amplification.",
    price: 259.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/01/AU66CCESHB-2-330x330.jpg",
  },
  {
    name: "Alvarez AP66SHB Artist Parlor Acoustic Guitar (Shadowburst/Gloss)",
    description:
      "The Alvarez AP66SHB Artist Parlor Acoustic Guitar in Shadowburst Gloss features a solid spruce top and parlor body, providing a focused, articulate tone with a vintage aesthetic.",
    price: 439.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/01/AP66SHB-2-330x330.jpg",
  },
  {
    name: "Alvarez AP66ESHB Artist Parlor Acoustic-Electric Guitar (Shadowburst/Gloss)",
    description:
      "The Alvarez AP66ESHB Artist Parlor Acoustic-Electric Guitar in Shadowburst Gloss features a solid spruce top and built-in electronics, offering a rich, balanced tone with the convenience of amplification.",
    price: 469.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/01/AP66ESHB-2-330x330.jpg",
  },
  {
    name: "Alvarez AJ80CE Artist Jumbo Acoustic-Electric Guitar (Natural/Gloss)",
    description:
      "The Alvarez AJ80CE Artist Jumbo Acoustic-Electric Guitar in Natural Gloss features a solid spruce top and jumbo body, delivering a powerful, resonant sound with built-in electronics for performance versatility.",
    price: 579.99,
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/01/AJ80CE-2-330x330.jpg",
  },

  {
    name: "Peavey Milestone 5 Electric Bass Guitar (Black)",
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2023/09/products-MILESTONE52.jpg",
    price: 299.99,
  },
  {
    name: "Fender Squier Sonic Series Precision Bass (Maple Fretboard, California Blue)",
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/01/037-3902-526-3-330x330.jpg",
    price: 239.99,
  },
  {
    name: "Ibanez GSR180 Soundgear 4-String Bass Guitar",
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2023/09/products-GSR180BK.jpg",
    price: 189.99,
  },
  {
    name: "Ibanez BTB845 Standard Series 5 String Bass Guitar (Cerulean Blue Burst Low Gloss)",
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/01/BTB845-CBL-2-330x330.jpg",
    price: 699.99,
  },
  {
    name: "Ibanez BTB747 Standard Series 7-String Bass Guitar (Natural Low Gloss)",
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/01/BTB747-NTL-2-330x330.jpg",
    price: 749.99,
  },
  {
    name: "Fender Squier Sonic Series Precision Bass (Maple Fretboard, 2-Tone Sunburst)",
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2023/10/037-3902-503-1-330x330.jpg",
    price: 249.99,
  },
  {
    name: "Fender Squier Sonic Series Precision Bass (Laurel Fretboard, Black)",
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2023/10/037-3900-506-1-330x330.jpg",
    price: 249.99,
  },
  {
    name: "Epiphone SG EB-0 Electric Bass Bass Guitar (Cherry)",
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2023/10/EBG0CHCH1-2-330x330.jpg",
    price: 199.99,
  },
  {
    name: "Epiphone Jack Cassidy Signature Bass Guitar (Sparkling Burgundy)",
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2023/10/EBJCSBUNH1-2-330x330.jpg",
    price: 349.99,
  },
  {
    name: "Epiphone Jack Cassidy Signature Bass Guitar (Pelham Blue)",
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2023/10/EBJCFPENH1-2-330x330.jpg",
    price: 349.99,
  },
  {
    name: "Fender Player Series Jazz Bass 5-String (Polar White)",
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2023/09/014-9953-515-2-330x330.jpg",
    price: 599.99,
  },
  {
    name: "Fender Player Series Jazz Bass 5-String (3-Tone Sunburst)",
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2023/09/014-9953-500-2-330x330.jpg",
    price: 599.99,
  },
  {
    name: "Fender Player Series Jazz Bass 4-String (Buttercream)",
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2023/09/014-9902-534-2-330x330.jpg",
    price: 549.99,
  },
  {
    name: "Fender Player Series Jazz Bass 4-String (Black)",
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2023/09/014-9902-506-2-330x330.jpg",
    price: 549.99,
  },
  {
    name: "Fender Player Series Jazz Bass 4-String (3-Tone Sunburst)",
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2023/09/014-9902-500-2.jpg",
    price: 549.99,
  },
  {
    name: "Fender Player Series P-Bass 4-String PF (3-Tone Sunburst)",
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2023/09/014-9803-500-2.jpg",
    price: 549.99,
  },
  {
    name: "Fender Player Series P-Bass 4-String MN (Buttercream)",
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2023/09/014-9802-534-2.jpg",
    price: 549.99,
  },
  {
    name: "Fender Player Series P-Bass 4-String MN (Black)",
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2023/09/014-9802-506-2.jpg",
    price: 549.99,
  },
  {
    name: "Fender Squier Affinity Jazz Bass 5-String (Olympic White)",
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2023/09/037-8652-505-2.jpg",
    price: 329.99,
  },
  {
    name: "Fender Squier Affinity Jazz Bass 4-String (Charcoal Frost Metallic)",
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2023/09/037-8601-569-2.jpg",
    price: 299.99,
  },
  {
    name: "Ibanez PGMM31 Paul Gilbert Signature Mikro Series Electric Guitar in White",
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/01/PGMM31-WH-2-330x330.jpg",
    price: 229.99,
  },
  {
    name: "Ibanez KIKOSP3 Kiko Loureiro Signature Electric Guitar (Transparent Emerald Burst)",
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/01/KIKOSP3-TEB-2-330x330.jpg",
    price: 499.99,
  },
  {
    name: "Cort G100 Electric Guitar Bundle (With Guitar Amp, Stand & Bag)",
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2023/11/G100-1-330x330.jpg",
    price: 399.99,
  },
  {
    name: "Cort X100 Electric Guitar (Open Pore Black Cherry)",
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2023/11/X100-Red-2-330x330.jpg",
    price: 349.99,
  },
  {
    name: "Cort G100 Sterling Electric Guitar",
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2023/11/G100-2-330x330.jpg",
    price: 349.99,
  },
  {
    name: "Ibanez AZES40-MGR Essential Series Electric Guitar (Mint Green)",
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2023/09/AZES40-MGR-2-330x330.jpg",
    price: 379.99,
  },
  {
    name: "Fender Squier FSR Affinity Stratocaster HSS (Metallic Black)",
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2023/09/037-8108-565-2.jpg",
    price: 289.99,
  },
  {
    name: "Ibanez RG421EX Electric Guitar – Black Flat",
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2023/09/products-RG421EXBKF3.jpg",
    price: 269.99,
  },
  {
    name: "Ibanez AS73-TBC Artcore Hollow-Body Electric Guitar",
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2023/09/products-AS73TBC2.jpg",
    price: 429.99,
  },
  {
    name: "Ibanez GRG140-SB Electric Guitar (Sunburst)",
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/04/GRG140-SB-1-330x330.jpg",
    price: 259.99,
  },
  {
    name: "Ibanez GRG131DX Electric Guitar (Black Flat)",
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/04/GRG131DX-BKF-1-330x330.jpg",
    price: 239.99,
  },
  {
    name: "Ibanez GRG121SP Electric Guitar (Blue Metal Chameleon)",
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/04/GRG121SP-BMC-1-330x330.jpg",
    price: 249.99,
  },
  {
    name: "Ibanez GRX70QA Electric Guitar (Transparent Blue Burst)",
    imageUrl:
      "https://www.iconsshop.co.za/wp-content/uploads/2024/04/GRX70QA-TBB-1-330x330.jpg",
    price: 219.99,
  },
];
import { useState } from "react";
import {
  Box,
  List,
  ListItem,
  Typography,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  CardMedia,
  Pagination,
} from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import ProductDetail from "@/app/(DashboardLayout)/ProductDetail";

const MusicalInstruments = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("name");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filtering and sorting logic
  const filteredProducts = productsData
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortOption === "price") {
        if (a.price !== undefined && b.price !== undefined)
          return a.price - b.price;
      }
      return 0;
    });

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
  };

  const handleBack = () => {
    setSelectedProduct(null);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  return (
    <PageContainer
      title="Musical Instruments"
      description="Browse our selection of high-quality musical instruments."
    >
      <Box
        sx={{
          backgroundColor: "#e9d9c8",
          mb: 3,
          elevation: 6,
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          transition: "box-shadow 0.3s",
          "&:hover": {
            boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
          },
        }}
      >
        {selectedProduct ? (
          <ProductDetail product={selectedProduct} onBack={handleBack} />
        ) : (
          <Box sx={{ p: 3 }}>
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              color="text.secondary"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              Welcome to the Harmony Hub
            </Typography>
            <Typography
              variant="body1"
              paragraph
              color="text.secondary"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              Explore our wide range of musical instruments, including electric
              guitars, bass guitars, and more. We offer high-quality products at
              competitive prices. Browse our selection and find the perfect
              instrument for your musical needs.
            </Typography>
            <TextField
              label="Search Instruments"
              variant="outlined"
              fullWidth
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{
                mb: 2,
                borderRadius: "8px",
                ".MuiInputBase-input": {
                  color: "black",
                },
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "#412711",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#412711",
                },
                ".MuiInputLabel-root": {
                  color: "black",
                },
              }}
              InputProps={{
                sx: {
                  color: "black",
                },
              }}
            />

            <FormControl fullWidth variant="outlined" sx={{ mb: 3 }}>
              <InputLabel>Sort By</InputLabel>
              <Select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                label="Sort By"
                sx={{
                  backgroundColor: "",
                  color: "black",
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "#412711",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#412711",
                  },
                  ".MuiSvgIcon-root": {
                    color: "black",
                  },
                  borderRadius: "8px",
                }}
              >
                <MenuItem
                  value="name"
                  sx={{ backgroundColor: "#e9d9c8", color: "black" }}
                >
                  Name
                </MenuItem>
                <MenuItem
                  value="price"
                  sx={{ backgroundColor: "#e9d9c8", color: "black" }}
                >
                  Price
                </MenuItem>
              </Select>
            </FormControl>

            <List>
              {displayedProducts.map((product, index) => (
                <ListItem
                  key={index}
                  button
                  onClick={() => handleProductClick(product)}
                  sx={{
                    transition: "background-color 0.3s, box-shadow 0.3s",
                    borderRadius: "12px",
                    "&:hover": {
                      backgroundColor: "#f0e6db",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <Box display="flex" alignItems="center">
                    <CardMedia
                      component="img"
                      image={product.imageUrl}
                      alt={product.name}
                      sx={{
                        width: 100,
                        height: 100,
                        mr: 2,
                        borderRadius: "8px",
                      }}
                    />
                    <Box>
                      <Typography variant="h6" color="text.secondary">
                        {product.name}
                      </Typography>

                      <Typography variant="h6" color="text.secondary">
                        ${product.price.toFixed(2)}
                      </Typography>
                    </Box>
                  </Box>
                </ListItem>
              ))}
            </List>

            {/* Pagination Component */}
            <Box display="flex" justifyContent="center" mt={3}>
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                sx={{
                  "& .MuiPaginationItem-root": {
                    color: "black", // Set color for pagination items
                  },
                  "& .MuiPaginationItem-root.Mui-selected": {
                    backgroundColor: "#000", // Set selected background color
                    color: "#fff", // Set selected text color
                  },
                  "& .MuiPaginationItem-root:hover": {
                    backgroundColor: "#f0e6db", // Optional hover background color
                  },
                }}
              />
            </Box>
          </Box>
        )}
      </Box>
    </PageContainer>
  );
};

export default MusicalInstruments;
