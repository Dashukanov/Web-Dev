export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Apple iPhone 13 128Gb Midnight ',
    price: 294067,
    rating: "4.8/5",
    link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-large',
    description: "Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения"
  },
  {
    id: 2,
    name: 'Apple 20W USB-C Power Adapter',
    price: 3727,
    rating: "4.6/5",
    link: "https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000",
    image:'https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg?format=gallery-large',
    description: "Адаптер питания Apple USB‑C мощностью 20 Вт дает возможность быстро и эффективно заряжать гаджеты. Проверяется на основном сайте через QR на оригинальность. Этот адаптер совместим с любыми устройствами Apple, оснащенными портом USB-C: смартфон, планшет или смарт-часы"
  },
  {
    id: 3,
    name: 'Xiaomi Redmi 12 4G 8 ГБ/256 ГБ черный',
    price: 73069,
    rating: "4.9/5",
    link: "https://kaspi.kz/shop/p/xiaomi-redmi-12-4g-8-gb-256-gb-chernyi-110918152/?c=750000000",
    image:'https://resources.cdn-kaspi.kz/img/m/p/h75/hbc/81335343775774.png?format=gallery-large',
    description: "Смартфон построен на базе процессора MediaTek Helio G88. Он представлен в конфигурациях с 8 ГБ оперативной памяти, объём накопителя составляет 256 ГБ"
  },
  {
    id: 4,
    name: 'Смарт-часы Apple Watch SE 40 мм черный',
    price: 131110,
    rating: "4.5/5",
    link: "https://kaspi.kz/shop/p/apple-watch-se-40-mm-chernyi-100568123/?c=750000000",
    image:'https://resources.cdn-kaspi.kz/img/m/p/ha3/h60/63868199403550.jpg?format=gallery-large',
    description: "Большой дисплей Retina, на котором поместится всё, что нужно. Продвинутые датчики для отслеживания любой физической активности. Полезные функции, которые помогают следить за показателями здоровья и заботятся о Вашей безопасности. Apple Watch Series SE - часы, с которыми Вы оцените каждую секунду."
  },
  {
    id: 5,
    name: 'Внешний аккумулятор Xiaomi Mi Power Bank 3 30000 мАч белый',
    price: 7696,
    rating: "4.3/5",
    link: "https://kaspi.kz/shop/p/xiaomi-mi-power-bank-3-30000-mach-belyi-101968172/?c=750000000",
    image:'https://resources.cdn-kaspi.kz/img/m/p/h77/h9d/64234826956830.jpg?format=gallery-large',
    description: "Портативный аккумулятор Mi Power bank 3 30000mAh оснащен двумя выходными USB-портами, а также имеет два входных интерфейса micro-USB и USB Type-C, при этом максимальная входная мощность устройства может достигать значения в 18 Вт."
  },
  {
    id: 6,
    name: 'Держатель для телефона Borofone BH53',
    price: 1798 ,
    rating: "4.7/5",
    link: "https://kaspi.kz/shop/p/borofone-bh53-102120493/?c=750000000",
    image:'https://resources.cdn-kaspi.kz/img/m/p/h04/hca/63959645323294.jpg?format=gallery-large',
    description: 'Borofone BH53, автомобильный держатель на центральную консоль, для 4.5-6.7 дюймовых мобильных телефонов, ширина зажима: 55-90мм. Обработка поверхности: текстурирование + гальванизация.'
  },
  {
    id: 7,
    name: 'Чехол Kaizen 302022VCHDT универсальный прозрачный',
    price: 424,
    rating: "4.7/5",
    link: "https://kaspi.kz/shop/p/kaizen-302022vchdt-universal-nyi-prozrachnyi-104363812/?c=750000000",
    image:'https://resources.cdn-kaspi.kz/img/m/p/h47/hbc/64231356989470.jpg?format=gallery-large',
    description: "Универсальный водонепроницаемый чехол для телефона. Подходит для всех смартфонов диагональю до 7 дюймов. Чехол для телефона выполнен из прозрачного ПВХ, что обеспечивает плавную работу с сенсорным экраном, позволяя вам отправлять текстовые сообщения и просматривать сообщения, не вынимая телефон."
  },
  {
    id: 8,
    name: 'Зарядное устройство Xiaomi Mi Car Charger CC07ZM 100W черный',
    price: 6785,
    rating: "4.8/5",
    link: "https://kaspi.kz/shop/p/xiaomi-mi-car-charger-cc07zm-100w-chernyi-101786960/?c=750000000",
    image:'https://resources.cdn-kaspi.kz/img/m/p/h6b/h0a/64244047052830.jpg?format=gallery-large',
    description: "Оснащено USB автоматического согласования чипом, интеллектуальное совместимым электронное оборудование. В дополнение к мобильным телефонам и ноутбукам, можно также заряжать электронные устройства, обычно используемые на открытом воздухе, например, фонариками и мобильных источников питания."
  },
  {
    id: 9,
    name: 'Переходник Kakusiga USB 3.0 (F), USB TypeC (M) черный',
    price: 499,
    rating: "4.8/5",
    link: "https://kaspi.kz/shop/p/perehodnik-kakusiga-usb-3-0-f-usb-typec-m-chernyi-110480042/?c=750000000",
    image:'https://resources.cdn-kaspi.kz/img/m/p/h99/h7b/80873892970526.png?format=gallery-large',
    description: "разъемы: USB 3.0 (F), ,USB TypeC (M)"
  },
  {
    id: 10,
    name: 'Радиотелефон Panasonic KX-TG1611CAH',
    price: 14930,
    rating: "4.3/5",
    link: "https://kaspi.kz/shop/p/panasonic-kx-tg1611cah-11300005/?c=750000000",
    image:'https://resources.cdn-kaspi.kz/img/m/p/hc0/hb0/63767898488862.jpg?format=gallery-large',
    description: "Телефон Рanasonic KX-TG1611CAH – беспроводная трубка, важными достоинствами которой являются невысокая цена и многофункциональность. Модель имеет русифицированное меню и удобный интерфейс. Аппарат поддерживает определитель номеров АОН и Caller ID, записная книжка рассчитана на 50 контактов. На базовом блоке есть кнопка, с помощью которой можно быстро отыскать затерявшуюся трубку."
  }
];
