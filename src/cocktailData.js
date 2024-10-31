
const cocktailData = [

      {
        name: 'Cin Tonik',
        ingredients: [
          { name: 'Cin', amount: '50 ml' },
          { name: 'Tonik', amount: '150 ml' },
          { name: 'Limon', amount: '1 dilim' },
          { name: 'Şeker', amount: 'isteğe bağlı' },
        ],
        description: 'Bir bardak içine 50 ml cin ve 150 ml tonik dökün. İsteğe bağlı olarak şeker ekleyin ve bir dilim limonla süsleyin.'
      },
      {
        name: 'Mojito',
        ingredients: [
          { name: 'Rom', amount: '50 ml' },
          { name: 'Şeker', amount: '2 çay kaşığı' },
          { name: 'Limon', amount: '1/2' },
          { name: 'Nane', amount: '10 yaprak' },
          { name: 'Soda', amount: '150 ml' },
        ],
        description: 'Bir bardağın içine nane yaprakları, şeker ve limon suyu ekleyin. Karıştırın, ardından rom ve soda ekleyin. Buz ile servis edin.'
      },
      {
        name: 'Daiquiri',
        ingredients: [
          { name: 'Rom', amount: '50 ml' },
          { name: 'Limon', amount: '1' },
          { name: 'Şeker', amount: '2 çay kaşığı' },
        ],
        description: 'Bir shaker’da rom, limon suyu ve şeker ekleyin. Buz ile çalkalayın ve süzerek bir bardakta servis edin.'
      },
      {
        name: 'Margarita',
        ingredients: [
          { name: 'Tekila', amount: '50 ml' },
          { name: 'Limon', amount: '30 ml' },
          { name: 'Triple Sec', amount: '20 ml' },
          { name: 'Tuz', amount: 'kenar için' },
        ],
        description: 'Bir shaker’da tekila, limon suyu ve triple sec ekleyin. Buz ile çalkalayın ve tuzlu kenarları olan bir bardakta servis edin.'
      },
      {
        name: 'Cosmopolitan',
        ingredients: [
          { name: 'Vodka', amount: '40 ml' },
          { name: 'Triple Sec', amount: '15 ml' },
          { name: 'Limon', amount: '15 ml' },
          { name: 'Kızılcık Suyu', amount: '30 ml' },
        ],
        description: 'Shaker’a vodka, triple sec, limon suyu ve kızılcık suyunu ekleyin. Buz ile çalkalayın ve bir kokteyl bardağında servis edin.'
      },
      {
        name: 'Old Fashioned',
        ingredients: [
          { name: 'Bourbon', amount: '50 ml' },
          { name: 'Şeker', amount: '1 küp' },
          { name: 'Aromatik Bitter', amount: '2 damla' },
          { name: 'Portakal Kabuğu', amount: '1 dilim' },
        ],
        description: 'Bir bardağa şeker ve bitter ekleyin. Bourbon’u ekleyin, karıştırın ve portakal kabuğu ile süsleyin.'
      },
      {
        name: 'Pina Colada',
        ingredients: [
          { name: 'Rom', amount: '50 ml' },
          { name: 'Hindistan Cevizi Sütü', amount: '30 ml' },
          { name: 'Ananas Suyu', amount: '90 ml' },
          { name: 'Ananas Dilimi', amount: 'süslemek için' },
        ],
        description: 'Bir blender’da rom, hindistan cevizi sütü ve ananas suyunu karıştırın. Buz ekleyip karıştırdıktan sonra bir bardakta ananas dilimi ile süsleyin.'
      },
      {
        name: 'Bellini',
        ingredients: [
          { name: 'Şampanya', amount: '100 ml' },
          { name: 'Şeftali Püresi', amount: '50 ml' },
        ],
        description: 'Bir kadehe şeftali püresini ekleyin ve üzerine şampanyayı dökün. Karıştırmadan servis edin.'
      },
      {
        name: 'Mai Tai',
        ingredients: [
          { name: 'Rom', amount: '30 ml' },
          { name: 'Kahverengi Rom', amount: '30 ml' },
          { name: 'Portakal Likörü', amount: '15 ml' },
          { name: 'Limon Suyu', amount: '15 ml' },
          { name: 'Orgeat Şurubu', amount: '10 ml' },
        ],
        description: 'Bir shaker’da rom, kahverengi rom, portakal likörü, limon suyu ve orgeat şurubunu karıştırın. Buz ile servis edin.'
      },
      {
        name: 'Caipirinha',
        ingredients: [
          { name: 'Cachaça', amount: '50 ml' },
          { name: 'Şeker', amount: '2 çay kaşığı' },
          { name: 'Limon', amount: '1' },
        ],
        description: 'Bir bardağın içine limonu dilimleyin, üzerine şeker ekleyin ve ezerek karıştırın. Cachaça’yı ekleyin, buz ile doldurun.'
      },
      {
        name: 'Tequila Sunrise',
        ingredients: [
          { name: 'Tekila', amount: '50 ml' },
          { name: 'Portakal Suyu', amount: '100 ml' },
          { name: 'Grenadin', amount: '10 ml' },
        ],
        description: 'Bir bardağa önce tekila ve portakal suyunu ekleyin. Son olarak grenadini dökün ve servis edin.'
      },
      {
        name: 'Bloody Mary',
        ingredients: [
          { name: 'Vodka', amount: '50 ml' },
          { name: 'Domates Suyu', amount: '100 ml' },
          { name: 'Limon Suyu', amount: '10 ml' },
          { name: 'Worcestershire Sos', amount: 'isteğe bağlı' },
          { name: 'Tuz ve Karabiber', amount: 'isteğe bağlı' },
        ],
        description: 'Bir bardağa vodka, domates suyu ve limon suyunu ekleyin. İsteğe bağlı olarak sos, tuz ve karabiber ekleyin.'
      },
      {
        name: 'Whiskey Sour',
        ingredients: [
          { name: 'Bourbon', amount: '50 ml' },
          { name: 'Limon Suyu', amount: '25 ml' },
          { name: 'Şeker', amount: '10 ml' },
          { name: 'Yumurta Beyazı', amount: 'isteğe bağlı' },
        ],
        description: 'Bir shaker’da bourbon, limon suyu, şeker ve isteğe bağlı yumurta beyazını karıştırın. Buz ile çalkalayın ve süzerek servis edin.'
      },
      {
        name: 'Grasshopper',
        ingredients: [
          { name: 'Yeşil Krema de Menthe', amount: '30 ml' },
          { name: 'Beyaz Krema de Kakao', amount: '30 ml' },
          { name: 'Krem Şanti', amount: '30 ml' },
        ],
        description: 'Bir shaker’da yeşil krema de menthe, beyaz krema de kakao ve krem şantiyi karıştırın. Buz ile çalkalayın ve bir bardakta servis edin.'
      },
      {
        name: 'Paloma',
        ingredients: [
          { name: 'Tekila', amount: '50 ml' },
          { name: 'Grapefruit Suyu', amount: '100 ml' },
          { name: 'Soda', amount: 'isteğe bağlı' },
        ],
        description: 'Bir bardağa tekila ve grapefruit suyunu ekleyin. İsteğe bağlı olarak soda ekleyin ve buzla doldurun.'
      },
      {
        name: 'Rum Punch',
        ingredients: [
          { name: 'Rom', amount: '60 ml' },
          { name: 'Meyve Suyu (örneğin, ananas ve portakal)', amount: '120 ml' },
          { name: 'Grenadin', amount: '10 ml' },
        ],
        description: 'Bir bardakta rom, meyve suyu ve grenadini karıştırın. Buz ile doldurun ve karıştırın.'
      },

      {
        name: 'Singapore Sling',
        ingredients: [
          { name: 'Cin', amount: '30 ml' },
          { name: 'Kirsch', amount: '10 ml' },
          { name: 'Portakal Likörü', amount: '10 ml' },
          { name: 'Limon Suyu', amount: '10 ml' },
          { name: 'Domates Suyu', amount: '60 ml' },
        ],
        description: 'Bir shaker’da cin, kirsch, portakal likörü, limon suyu ve domates suyunu karıştırın. Buz ile çalkalayıp bir bardakta servis edin.'
      },
      {
        name: 'Dark n Stormy',
        ingredients: [
          { name: 'Koyu Rom', amount: '50 ml' },
          { name: 'Zencefilli Soda', amount: '100 ml' },
          { name: 'Limon', amount: '1 dilim' },
        ],
        description: 'Bir bardağa koyu rom ve zencefilli soda ekleyin. Üzerine limon dilimi ile süsleyin.'
      },
      {
        name: 'Virgin Mojito',
        ingredients: [
          { name: 'Nane', amount: '10 yaprak' },
          { name: 'Şeker', amount: '2 çay kaşığı' },
          { name: 'Limon Suyu', amount: '30 ml' },
          { name: 'Soda', amount: '150 ml' },
        ],
        description: 'Bir bardağa nane yaprakları ve şekeri ekleyin. Limon suyunu ekleyip karıştırın, ardından soda ve buz ekleyin.'
      },
      {
        name: 'Tropical Punch',
        ingredients: [
          { name: 'Ananas Suyu', amount: '200 ml' },
          { name: 'Mango Suyu', amount: '100 ml' },
          { name: 'Limon Suyu', amount: '30 ml' },
          { name: 'Şeker', amount: 'isteğe bağlı' },
        ],
        description: 'Bir karıştırıcıda ananas suyu, mango suyu ve limon suyunu karıştırın. İsteğe bağlı olarak şeker ekleyin ve buz ile servis edin.'
      },
      {
        name: 'Strawberry Lemonade',
        ingredients: [
          { name: 'Çilek', amount: '100 g' },
          { name: 'Limon Suyu', amount: '50 ml' },
          { name: 'Su', amount: '200 ml' },
          { name: 'Şeker', amount: 'isteğe bağlı' },
        ],
        description: 'Çilekleri ezip bir bardağa alın. Limon suyu ve suyu ekleyin. İsteğe bağlı olarak şeker ekleyin ve karıştırın.'
      },
      {
        name: 'Cucumber Cooler',
        ingredients: [
          { name: 'Salatalık', amount: '1/2' },
          { name: 'Limon Suyu', amount: '30 ml' },
          { name: 'Soda', amount: '150 ml' },
          { name: 'Nane', amount: 'isteğe bağlı' },
        ],
        description: 'Salatalığı dilimleyin ve bir bardağa alın. Limon suyu ve soda ekleyin. İsteğe bağlı nane ile süsleyin.'
      },
      {
        name: 'Peach Iced Tea',
        ingredients: [
          { name: 'Şeftali Şurubu', amount: '30 ml' },
          { name: 'Buzlu Çay', amount: '200 ml' },
          { name: 'Limon', amount: '1 dilim' },
        ],
        description: 'Bir bardağa şeftali şurubu ekleyin ve üzerine buzlu çayı dökün. Limon dilimi ile süsleyin.'
      },
      {
        name: 'Blueberry Spritzer',
        ingredients: [
          { name: 'Mavi Ahududu', amount: '100 g' },
          { name: 'Soda', amount: '200 ml' },
          { name: 'Limon Suyu', amount: '30 ml' },
        ],
        description: 'Bir bardağa mavi ahududu ve limon suyunu ekleyin. Üzerine soda dökün ve karıştırın.'
      },
      {
        name: 'Apple Fizz',
        ingredients: [
          { name: 'Elma Suyu', amount: '200 ml' },
          { name: 'Soda', amount: '100 ml' },
          { name: 'Limon', amount: '1 dilim' },
        ],
        description: 'Bir bardağa elma suyunu ve sodayı ekleyin. Limon dilimi ile süsleyerek servis edin.'
      },
      {
        name: 'Ginger Ale',
        ingredients: [
          { name: 'Zencefil', amount: '20 g' },
          { name: 'Limon Suyu', amount: '30 ml' },
          { name: 'Soda', amount: '200 ml' },
        ],
        description: 'Zencefili ezip bir bardağa alın. Limon suyu ve soda ekleyin, karıştırın ve servis edin.'
      },
      {
        name: 'Cherry Limeade',
        ingredients: [
          { name: 'Kiraz', amount: '100 g' },
          { name: 'Limon Suyu', amount: '30 ml' },
          { name: 'Soda', amount: '150 ml' },
        ],
        description: 'Kirazları ezip bir bardağa alın. Limon suyu ve soda ekleyin, karıştırın ve servis edin.'
      },
      {
        name: 'Fuzzy Navel',
        ingredients: [
          { name: 'Şeftali Likörü', amount: '50 ml' },
          { name: 'Portakal Suyu', amount: '100 ml' },
        ],
        description: 'Bir bardağa şeftali likörünü ekleyin, ardından portakal suyunu dökün ve karıştırın.'
      },
      {
        name: 'Sea Breeze',
        ingredients: [
          { name: 'Vodka', amount: '50 ml' },
          { name: 'Greyfurt Suyu', amount: '100 ml' },
          { name: 'Elma Suyu', amount: '30 ml' },
        ],
        description: 'Bir shaker’da vodka, greyfurt suyu ve elma suyunu karıştırın. Buz ile çalkalayın ve bir bardakta servis edin.'
      },

    
        {
            name: 'Banana Daiquiri',
            ingredients: [
                { name: 'Rom', amount: '50 ml' },
                { name: 'Muz', amount: '1' },
                { name: 'Limon Suyu', amount: '30 ml' },
                { name: 'Şeker', amount: 'isteğe bağlı' },
            ],
            description: 'Bir karıştırıcıda rom, muz, limon suyu ve isteğe bağlı şeker ekleyin. Buz ile karıştırıp bir bardakta servis edin.'
        },
        {
            name: 'Sangria',
            ingredients: [
                { name: 'Kırmızı Şarap', amount: '750 ml' },
                { name: 'Portakal', amount: '1' },
                { name: 'Limon', amount: '1' },
                { name: 'Şeker', amount: '50 g' },
                { name: 'Meyve Suyu', amount: '200 ml' },
            ],
            description: 'Kırmızı şarap, dilimlenmiş portakal, limon, şeker ve meyve suyunu bir kapta karıştırın. Buz ile servis edin.'
        },
        {
            name: 'Shirley Temple',
            ingredients: [
                { name: 'Zencefilli Soda', amount: '150 ml' },
                { name: 'Grenadin', amount: '10 ml' },
                { name: 'Limon Dilimi', amount: 'süslemek için' },
            ],
            description: 'Bir bardağa zencefilli soda ve grenadini ekleyin. Limon dilimi ile süsleyin ve karıştırın.'
        },
        {
            name: 'Malibu Bay Breeze',
            ingredients: [
                { name: 'Malibu Rom', amount: '50 ml' },
                { name: 'Ananas Suyu', amount: '100 ml' },
                { name: 'Greyfurt Suyu', amount: '50 ml' },
            ],
            description: 'Bir bardağa Malibu romunu, ananas suyunu ve greyfurt suyunu ekleyin. Karıştırıp servis edin.'
        },
        {
            name: 'Chocolate Martini',
            ingredients: [
                { name: 'Vodka', amount: '50 ml' },
                { name: 'Çikolata Likörü', amount: '25 ml' },
                { name: 'Krem Şanti', amount: '30 ml' },
            ],
            description: 'Bir shaker’da vodka, çikolata likörü ve krem şantiyi karıştırın. Buz ile çalkalayıp bir martini bardağında servis edin.'
        },
        {
            name: 'Pomegranate Spritz',
            ingredients: [
                { name: 'Nar Suyu', amount: '100 ml' },
                { name: 'Soda', amount: '150 ml' },
                { name: 'Limon Dilimi', amount: 'süslemek için' },
            ],
            description: 'Bir bardağa nar suyu ve soda ekleyin. Limon dilimi ile süsleyerek servis edin.'
        },
        {
            name: 'Coconut Water Cooler',
            ingredients: [
                { name: 'Hindistan Cevizi Suyu', amount: '200 ml' },
                { name: 'Limon Suyu', amount: '30 ml' },
                { name: 'Nane', amount: 'isteğe bağlı' },
            ],
            description: 'Bir bardağa hindistan cevizi suyu ve limon suyu ekleyin. İsteğe bağlı nane ile süsleyin.'
        },
        {
            name: 'Raspberry Lemonade',
            ingredients: [
                { name: 'Ahududu', amount: '100 g' },
                { name: 'Limon Suyu', amount: '50 ml' },
                { name: 'Su', amount: '200 ml' },
                { name: 'Şeker', amount: 'isteğe bağlı' },
            ],
            description: 'Ahududuları ezip bir bardağa alın. Limon suyu, su ve isteğe bağlı şeker ekleyin. Karıştırıp servis edin.'
        },
 
  ];
  
  export default cocktailData;
  