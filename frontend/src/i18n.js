import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      brandName: "SHION GREEN",
      home: "Home",
      aboutUs: "About Us",
      contactUs: "Contact Us",
      productsnav: "Products",
      placeOrder: "Place Order",
      stayConnected: "Stay connected with us",
      questionsIssues: "HAVE SOME QUESTIONS, ISSUES OR COMMENTS?",
      welcomeM: "Savor the unique blend of rich Ceylon cinnamon and aromatic spices, sourced directly from Sri Lanka.",
      welcomeMessage: "Welcome! We are a leading provider of premium traditional spices, offering a range of products such as cinnamon and pepper for any inqueries, please fell free to reach out to us through the contact points listed below for your convenience.",
      generalEnquiries: "General Enquiries",
      
      footer: {
        copyright: "All rights reserved",
        terms: "Terms of Service",
        about: "About Us",
        help: "Help",
        products: "Products",
      },
      name: "Name",
      email: "Email",
      product: "Product",
      SelectOptions:"Select Options",
      quantity: "Quantity",
      phone: "Phone",
      address: "Address",
      customerType: "Customer Type",
      description: "Description",
      success: "Success",
      orderSuccess: "Your order has been successfully placed.",
      error: "Error",
      formError: "There was an error submitting your form. Please try again.",
      tryAgain: "Try Again",
      okButton: "OK",
      selectProduct: "Select Product",
      cinnamon: "Cinnamon",
      pepper: "Pepper",
      selectCustomerType: "Select Customer Type",
      individual: "Individual",
      company: "Company",
      submit: "Submit",
      enterName: "Enter your name",
      enterEmail: "Enter your email",
      enterQuantity: "Enter quantity",
      enterPhone: "Enter your phone number",
      enterAddress: "Enter your address",
      enterDescription: "Enter a description",
      NameRequired: "Name Required",
      Namecanonlycontainlettersandspaces:"Name can only contain letters and spaces",
      ValidEmailRequired: "Valid Email Required",
      ProductRequired: "Product Required",
      ValidQuantityRequired: "Valid Quantity Required",
      PhoneNumberRequired:"Phone Number Required",
      validPhoneRequired: "Valid Phone Required",
      AddressRequired: "Address Required",
      CustomerTypeRequired: "Customer Type Required",
      Pleaseselectatleastoneoption:"Please select at least one option",
      cinnamonDescription: " Experience the true essence of cinnamon with premium quality sourced from Sri Lanka. Renowned for its sweet flavor, warm aroma, and smooth texture, Ceylon cinnamon is a healthier choice with lower coumarin levels. Elevate your dishes and pantry with this superior spice!" ,
      pepperDescription: "Discover the bold flavor of Ceylon pepper, sourced from Sri Lanka's finest farms. Known for its rich aroma, robust taste, and premium quality, it adds depth and spice to any dish. Upgrade your culinary creations with the exceptional freshness of Ceylon pepper! ",
      readMore: "Read More",
      aboutUsDescription: "We are more than just an online spice store – we are a bridge to the rich, cultural heritage of Sri Lanka. Our mission is to bring the authentic flavors of Ceylon cinnamon and Ceylon pepper to kitchens around the world, connecting customers with nature's finest spices.Sourced from the lush, fertile lands of Sri Lanka, each batch is carefully cultivated, harvested, and processed using traditional methods to ensure the highest quality. We take pride in our dedication to sustainability and ethical sourcing, working closely with local farmers to promote fair trade practices and preserve the environment. Whether you are a professional chef or a home cook, our premium spices are designed to elevate your dishes with their unmatched freshness, aroma, and taste.      We believe in the power of these exceptional spices to transform meals and improve well-being. With their proven health benefits, including antioxidant properties and digestive support, our Ceylon cinnamon and pepper are perfect additions to any pantry. Let us bring the warmth, depth, and richness of Sri Lanka's finest spices into your home - one spice at a time. ",
      cinnamon1:"Why Choose Ceylon Cinnamon?",
      pepper1: "Why Choose Ceylon Pepper?",
      cinnamon:"CINNAMON",
      pepper: "PEPPER",
      previous: "Previous",
      next: "Next",
      cinnamonParagraph: "At Shion Green, we are proud to bring you the finest, most authentic Ceylon cinnamon and Ceylon pepper directly from the heart of Sri Lanka. Our company was founded with a simple yet powerful mission: to provide premium, high-quality spices that enhance your culinary creations. At Shion Green, we specialize in bringing the finest Ceylon cinnamon and Ceylon pepper directly from Sri Lanka to spice up your culinary creations. Ceylon cinnamon, often regarded as the “true cinnamon,” is renowned for its unique, sweet, and delicate flavor, paired with an aromatic fragrance that is incomparable to other varieties. Sourced from the lush, tropical forests of Sri Lanka, it is carefully harvested and processed using traditional methods to preserve its natural qualities. Known for its soft texture and lower coumarin content, Ceylon cinnamon offers a healthier alternative to the more common cassia cinnamon, making it ideal for everyday cooking, baking, and even health-related uses. At Shion Green, we take pride in ethically sourcing our products, ensuring sustainable farming practices that support Sri Lanka's local farming communities. By choosing our premium products, you are not only enhancing your dishes but also supporting fair trade, contributing to a more sustainable and equitable global spice industry. Our goal is to deliver the purest, highest quality cinnamon and pepper, bringing a true taste of Sri Lanka to your home with every purchase.",
      pepperParagraph: "  At Shion Green, we are proud to offer the finest Ceylon pepper sourced directly from the fertile and spice-rich lands of Sri Lanka.Renowned for its bold, intense heat and complex flavor profile, Ceylon pepper is a favorite among chefs and home cooks alike for its ability to elevate a wide range of dishes. From savory stews and curries to delicate desserts and fresh salads, Ceylon pepper adds a depth of flavor that is unmatched by other varieties. Its unique combination of heat, richness, and aromatic fragrance enhances the taste of your food while providing a satisfying kick that lingers on the palate. Our Ceylon pepper is carefully hand-selected and processed using traditional, sustainable methods to preserve its natural qualities.Grown in the lush, tropical climate of Sri Lanka, the pepper is harvested at peak ripeness, ensuring that each peppercorn retains its full flavor and vibrant color. The result is a premium product that delivers an authentic, fresh taste every time you use it. At Cinnamon and Pepper Imports, we are committed to ethically sourcing our products, supporting fair trade, and working directly with Sri Lankan farmers who practice environmentally conscious and sustainable farming techniques. By choosing our Ceylon pepper, you are not only enhancing your culinary creations but also contributing to a more sustainable and equitable global spice industry. We take pride in offering the purest, highest quality Ceylon pepper, bringing the true taste of Sri Lanka to your kitchen with every order.",
      ourBrands: " Our Brands" ,

        Cinnamon: "Cinnamon",
        Cinnamon_Sticks: "Cinnamon Sticks",
        Quills: "Quills (short, long sticks).",
        Ground_Cinnamon: "Ground Cinnamon",
        Powdered_Cinnamon:"Powdered Cinnamon.",
        Cinnamon_Chips: "Cinnamon Chips",
        Bark_Pieces:"Bark Pieces.",
        Pepper: "Pepper",
        Black_Pepper: "Black Pepper",
        Rich_and_flavorful:"Rich and flavorful spice.",
        White_Pepper: "White Pepper",
        Subtle_and_refined_flavor:"Subtle and refined flavor.",
        Product_Features: "Product Features",
        Organic_and_Natural: "100% Organic and Natural",
        Our_products:"Our products are carefully grown and processed without the use of harmful chemicals, ensuring you get the purest ingredients.",
        Handpicked_for_Quality: "Handpicked for Quality",
        We_select:"We select only the best items, ensuring consistency in flavor and quality with every product.",
        Ethically: "Ethically Sourced from Sustainable Farms",
        Our_sourcing:"Our sourcing practices support sustainable and ethical farming to protect the planet for future generations.",
        Available_in_Various_Forms: "Available in Various Forms",
        We_offer:"We offer our products in multiple forms—whole, ground, and powdered—to suit all your culinary needs.",
        Ideal_for_Cooking: "Ideal for Cooking, Baking, and Beverages",
        Perfect_for:"Perfect for adding flavor to dishes, beverages, or baked goods, our products are versatile and enhance any recipe.",
        How_to_Use_Our_Products: "How to Use Our Products",
        Cinnamon_Rolls: "Cinnamon Rolls",
        Soft_and_flavorful:"Soft and flavorful, perfect for breakfast or dessert.",
        Spicy_Pepper_Soup: "Spicy Pepper Soup",
        A_hearty_soup:"A rich, flavorful soup perfect for a warm, cozy meal",
        Cinnamon_Tea: "Cinnamon Tea",
        Warm_soothing:"A comforting drink for any time of the day.",
        Seasoned_Roasted_Vegetables: "Seasoned Roasted Vegetables",
        Perfectly_seasoned_veggies:"Add a sprinkle of pepper for a bold flavor.",
        Ready_to_Experience_Our_Products: "Ready to Experience Our Products?",
        Shop_Now: "Shop Now",
        Why_Choose_Us:"Why Choose Us?",
        Farm_Fresh:"Farm Fresh",
        Farm_Freshp:" Sourced directly from sustainable farms, preserving the natural essence.",
        Premium_Quality:"Premium Quality",
        Premium_Qualityp:" Handpicked and processed with care for the highest quality.",
        Eco_Friendly:"Eco-Friendly",
        Eco_Friendlyp:" Our practices ensure environmental sustainability for a greener planet.",


      
      


    },
  },
  jp: {
    translation: {
      brandName: "シオン グリーン",
      home: "ホーム",
      aboutUs: "私たちについて",
      contactUs: "お問い合わせ",
      productsnav: "製品",
      placeOrder: "注文する",
      stayConnected: "私たちとつながりましょう",
      questionsIssues: "質問、問題、コメントはありますか？",
      welcomeM:" スリランカから直接仕入れた、豊かなセイロンシナモンと芳醇なスパイスの独自のブレンドをお楽しみください。",
      welcomeMessage: "ようこそ！私たちは高品質な伝統的スパイスを提供するリーディングプロバイダーです。シナモンやペッパーなど、さまざまな商品を取り揃えております。お問い合わせがございましたら、以下に記載された連絡先までお気軽にご連絡ください。",
      generalEnquiries: "一般のお問い合わせ",
     
      footer: {
        copyright: "すべての権利を保有します",
        terms: "利用規約",
        about: "私たちについて",
        help: "ヘルプ",
        products: "製品",
      },
      name: "名前",
      email: "メール",
      product: "製品",
      SelectOptions:"オプションを選択",
      quantity: "数量",
      phone: "電話",
      address: "住所",
      customerType: "顧客タイプ",
      description: "説明",
      success: "成功",
      orderSuccess: "注文が正常に完了しました。",
      error: "エラー",
      formError: "フォームの送信中にエラーが発生しました。もう一度お試しください。",
      tryAgain: "もう一度試す",
      okButton: "OK",
      selectProduct: "製品を選択",
      cinnamon: "シナモン",
      pepper: "ペッパー",
      selectCustomerType: "顧客タイプを選択",
      individual: "個人",
      company: "会社",
      submit: "送信",
      enterName: "名前を入力",
      enterEmail: "メールを入力",
      enterQuantity: "数量を入力",
      enterPhone: "電話番号を入力",
      enterAddress: "住所を入力",
      enterDescription: "説明を入力",
      NameRequired: "名前が必要です",
      Namecanonlycontainlettersandspaces:"名前には文字とスペースのみ使用できます",
      ValidEmailRequired: "有効なメールアドレスが必要です",
      ProductRequired: " 製品が必要です",
      ValidQuantityRequired: "有効な数量が必要です",
      PhoneNumberRequired: "電話番号は必須です",
      ValidPhoneRequired: "有効な電話番号が必要です",
      AddressRequired: "住所が必要です",
      CustomerTypeRequired: "顧客タイプが必要です",
      Pleaseselectatleastoneoption:"少なくとも1つのオプションを選択してください",
      // New translations for cinnamon and pepper descriptions
      cinnamonDescription: "スリランカ産の高品質なセイロンシナモンで、真のシナモンの魅力を体験してください。甘美な風味、暖かみのある香り、そしてなめらかな質感で、他にはない健康的な選択肢です。この優れたスパイスで料理やキッチンをワンランク上に！",
      pepperDescription: "スリランカの最高品質の農場から採れたセイロンペッパーで、力強い風味をお楽しみください。豊かな香りと深みのある味わいが、どんな料理にもスパイスのアクセントを加えます。新鮮さ際立つセイロンペッパーで料理を格上げしましょう！",
      readMore: "続きを読む..",
      aboutUsDescription: "私たちは単なるオンラインスパイスストアではなく、スリランカの豊かな文化遺産への架け橋です。私たちの使命は、セイロンシナモンとセイロンペッパーの本物の風味を世界中のキッチンに届けることです。 私たちは、これらの優れたスパイスが食事を変え、健康を改善する力があると信じています。抗酸化作用や消化サポートなどの実証済みの健康効果を持つ私たちのセイロンシナモンとペッパーは、どんなパントリーにもぴったりのアイテムです。スリランカの最高級スパイスの温かさ、深み、リッチさをひとつずつご家庭にお届けさせてください。",
      cinnamon1:"セイロンシナモンを選ぶ理由",
      pepper1: "セイロンペッパーを選ぶ理由",
      cinnamon: "セイロン シナモン",
      pepper: "セイロン ペッパー",
      previous: "前",
      next: "次",
      cinnamonParagraph: "Shion Greenでは、スリランカの中心地から直接取り寄せた最高級で本物のセイロンシナモンとセイロンペッパーをお届けすることを誇りに思います。当社はシンプルでありながら強力な使命を持って設立されました。それは、あなたの料理を引き立てる高品質なスパイスを提供することです。 Shion Greenでは、スリランカから直接取り寄せた最高級のセイロンシナモンとセイロンペッパーを専門に取り扱っています。セイロンシナモンは、「本物のシナモン」として広く知られており、そのユニークで甘く繊細な風味と比類のない芳香で評価されています。スリランカの豊かな熱帯の森から収穫され、自然な品質を保つために伝統的な方法で丁寧に加工されています。セイロンシナモンは柔らかな食感と低クマリン含量で知られており、一般的なカシアシナモンよりも健康的な選択肢を提供します。これは日常的な料理、焼き菓子、さらには健康に関連する用途にも最適です。Shion Greenでは、製品の調達に誇りを持ち、スリランカの地元の農業コミュニティを支援する持続可能な農業慣行を確保しています。当社のプレミアム製品を選ぶことによって、あなたは単に料理を引き立てるだけでなく、公正貿易を支援し、より持続可能で公平なグローバルなスパイス業界に貢献していることになります。 私たちの目標は、最も純粋で最高品質のシナモンとペッパーをお届けし、スリランカの真の味をあなたの家庭に届けることです。",
      pepperParagraph: "シオン・グリーンでは、スリランカの肥沃で香辛料豊かな土地から直接仕入れた最高品質のセイロンペッパーをご提供しています。その力強く刺激的な辛みと複雑な風味で知られるセイロンペッパーは、シェフや家庭の料理人たちに愛され、幅広い料理を引き立てることで高く評価されています。セイロンペッパーは、風味豊かなシチューやカレーから繊細なデザート、新鮮なサラダまで、他の品種にはない深みを加えます。その独特な辛み、リッチさ、芳醇な香りの組み合わせが、料理の味を引き立てながら、満足感のある余韻を口の中に残します。  私たちのセイロンペッパーは、自然の品質を保つために、伝統的で持続可能な方法で厳選され加工されています。スリランカの豊かな熱帯気候で育ち、完熟したタイミングで収穫されるペッパーは、それぞれの粒が風味と鮮やかな色合いを最大限に保っています。その結果、毎回新鮮で本格的な味わいをお届けするプレミアム製品が生まれます。  シナモン＆ペッパー輸入社では、製品を倫理的に調達し、公正な取引を支援するとともに、環境に配慮した持続可能な農業を実践するスリランカの農家と直接協力しています。私たちのセイロンペッパーを選ぶことで、料理をより美味しくするだけでなく、より持続可能で公正な世界のスパイス業界に貢献することができます。  私たちは、スリランカの本当の味を皆様のキッチンにお届けするため、最も純粋で高品質なセイロンペッパーを誇りを持って提供しています。 ",
      ourBrands: "私たちのブランド",
   
        
          Cinnamon: "シナモン",
          Cinnamon_Sticks: "シナモンスティック",
          Quills: "クイル（短い棒、長い棒）",
          Ground_Cinnamon: "粉末シナモン",
          Powdered_Cinnamon: "粉末シナモン",
          Cinnamon_Chips: "シナモンチップ",
          Bark_Pieces: "樹皮片",
          Pepper: "ペッパー",
          Black_Pepper: "ブラックペッパー",
          Rich_and_flavorful: "豊かで風味豊かなスパイス",
          White_Pepper: "ホワイトペッパー",
          Subtle_and_refined_flavor: "繊細で洗練された風味",
          Product_Features: "製品の特徴",
          Organic_and_Natural: "100%オーガニックで自然",
          Our_products: "私たちの製品は、有害な化学物質を使わずに慎重に育て、加工されています。これにより、最も純粋な素材をお届けします。",
          Handpicked_for_Quality: "品質のために手摘み",
          We_select: "私たちは、常に一貫した風味と品質を保証するために、最良の製品を選びます。",
          Ethically: "持続可能な農場から倫理的に調達",
          Our_sourcing: "私たちの調達方法は、将来の世代のために地球を守る持続可能で倫理的な農業を支援しています。",
          Available_in_Various_Forms: "さまざまな形態で利用可能",
          We_offer: "私たちは、あなたの料理のニーズに合わせて、製品をホール、粉末、粉末状で提供しています。",
          Ideal_for_Cooking: "料理、ベーキング、飲み物に最適",
          Perfect_for: "料理、飲み物、または焼き菓子に風味を加えるのに最適で、私たちの製品は多用途で、どんなレシピにも役立ちます。",
          How_to_Use_Our_Products: "製品の使い方",
          Cinnamon_Rolls: "シナモンロール",
          Soft_and_flavorful: "柔らかくて風味豊か、朝食やデザートにぴったりです。",
          Spicy_Pepper_Soup: "スパイシーペッパースープ",
          A_hearty_soup: "温かくてリッチなスープで、心地よい食事に最適です。",
          Cinnamon_Tea: "シナモンティー",
          Warm_soothing: "いつでも飲める心地よい飲み物。",
          Seasoned_Roasted_Vegetables: "調味したロースト野菜",
          Perfectly_seasoned_veggies: "ペッパーをふりかけて、豊かな風味を加えます。",
          Ready_to_Experience_Our_Products: "私たちの製品を体験する準備はできましたか？",
          Shop_Now: "今すぐ購入",
          Why_Choose_Us: "なぜ私たちを選ぶのか？",
          Farm_Fresh: "農場直送",
          Farm_Freshp: "持続可能な農場から直接調達し、自然のエッセンスを守ります。",
          Premium_Quality: "プレミアム品質",
          Premium_Qualityp: "最高の品質のために手摘みと丁寧に加工されています。",
          Eco_Friendly: "エコフレンドリー",
          Eco_Friendlyp: "私たちの取り組みは、より緑豊かな地球のために環境の持続可能性を確保します。"
      
        
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || 'en', // Load language from localStorage
  fallbackLng: 'en', // Fallback language
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
