"use strict";var langArr={"read-moreShirt1":{ru:"Читать дальше...",ua:"Читати далі..."},shirt1:{ru:"Мы осуществляем печать на футболках в Николаеве, предоставляем услуги по доступным ценам:",ua:"Ми здійснюємо друк на футболках в Миколаєві, надаємо послуги за доступними цінами:"},shirt2:{ru:"Все наши футболки только белого цвета;",ua:"Всі наші футболки тільки білого кольору;"},shirt3:{ru:"В наличие имеются все размеры, но все же при оформлении заказа лучше уточнить нужный Вам размер;",ua:"У наявність є всі розміри, але все ж при оформленні замовлення краще уточнити потрібний Вам розмір;"},shirt4:{ru:"Согласитесь если симпатичная девушка или парень идёт в оригинальной футболке, выполненной в единственном экземпляре и только для нее или него – такой человек будет выделяться из общей массы на улице в лучшую сторону;",ua:"Погодьтеся якщо симпатична дівчина або хлопець йде в оригінальній футболці, яка виконана в єдиному екземплярі і тільки для неї чи нього - така людина буде виділятися з загальної маси на вулиці з кращої сторони;"},"shirt4-1":{ru:"Футболки для сублимации - одежда, изготовлена из синтетической или полусинтетическое ткани с содержанием полиэстера от 50%, что позволяет переносить изображения методом термопичати с помощью сублимационной бумаги и сублимационных чернил;",ua:"Футболки для сублімації - одяг, виготовлений ​​із синтетичної або напівсинтетичної тканини з вмістом поліестеру від 50%, що дозволяє переносити зображення методом термодруку за допомогою сублімації паперу і сублімаційних чорнил;"},shirt5:{ru:"Вернуться на главную страницу",ua:"Повернутися на головну сторінку"},"shirt6-1":{ru:"Хочешь заказать- нажми на футболку)))",ua:"Хочеш замовити- натисни на футболку)))"},shirt6:{ru:"Цена указана за 1(одну) штуку, стоимость футболки включена.",ua:"Ціна вказана за 1 (одну) штуку, вартість футболки включено."},shirt7:{ru:"ЗАКАЗАТЬ",ua:"ЗАМОВИТИ"},shirt8:{ru:"А4 (полноцвет(21см x 29.7см))",ua:"А4 (повноколір(21см x 29.7см))"},shirt9:{ru:"Детская футболка",ua:"Дитяча футболка"},shirt10:{ru:"Одна сторона - 165 грн, две стороны - 195 грн",ua:"Одна сторона - 165 грн, дві сторони - 195 грн"},shirt11:{ru:'<span>"Цветная вставка"</span>&nbsp;одна сторона - 165 грн, две стороны - 195 грн',ua:'<span> "Кольорова вставка"</span>&nbsp;одна сторона - 175 грн, дві сторони - 205 грн'},shirt12:{ru:"Взрослая футболка",ua:"Доросла футболка"},shirt13:{ru:"Одна сторона - 200 грн, две стороны - 230 грн",ua:"Одна сторона - 200 грн, дві сторони - 230 грн"},shirt14:{ru:'<span>"Цветная вставка"</span>&nbsp;одна сторона - 165 грн, две стороны - 195 грн',ua:'<span> "Кольорова вставка"</span>&nbsp;одна сторона - 230 грн, дві сторони - 260 грн'},shirt15:{ru:"С одной надписью",ua:"З одним написом"},shirt16:{ru:"Одна сторона - 190 грн, две стороны - 210 грн",ua:"Одна сторона - 190 грн, дві сторони - 210 грн"},shirt17:{ru:"ЗАКАЗАТЬ",ua:"ЗАМОВИТИ"},shirt18:{ru:"А5 (полноцвет(14.8см x 21см))",ua:"А5 (повноколір(14.8см x 21см))"},shirt19:{ru:"Детская футболка",ua:"Дитяча футболка"},shirt20:{ru:"Одна сторона - 140 грн, две стороны - 169 грн",ua:"Одна сторона - 140 грн, дві сторони - 169 грн"},shirt21:{ru:'<span>"Цветная вставка"</span>&nbsp;Одна сторона - 155 грн, две стороны - 185 грн',ua:'<span> "Кольорова вставка"</span>&nbsp;одна сторона - 155 грн, дві сторони - 185 грн'},shirt22:{ru:"Взрослая футболка",ua:"Доросла футболка"},shirt23:{ru:"Одна сторона - 180 грн, две стороны - 210 грн",ua:"Одна сторона - 180 грн, дві сторони - 210 грн"},shirt24:{ru:'<span>"Цветная вставка"</span>&nbsp;Одна сторона - 210 грн, две стороны - 240 грн',ua:'<span> "Кольорова вставка"</span>&nbsp;одна сторона - 210 грн, дві сторони - 240 грн'},shirt25:{ru:"С одной надписью",ua:"З одним написом"},shirt26:{ru:"Одна сторона - 175 грн, две стороны - 195 грн",ua:"Одна сторона - 175 грн, дві сторони - 195 грн"},shirt27:{ru:"ЗАКАЗАТЬ",ua:"ЗАМОВИТИ"},shirt28:{ru:"А6 (полноцвет(10.5см x 14.8см))",ua:"А6 (повноколір(10.5см x 14.8см))"},shirt29:{ru:"Детская футболка",ua:"Дитяча футболка"},shirt30:{ru:"Одна сторона - 125 грн, две стороны - 140 грн",ua:"Одна сторона - 125 грн, дві сторони - 140 грн"},shirt31:{ru:'<span>"Цветная вставка"</span>&nbsp;Одна сторона - 135 грн, две стороны - 150 грн',ua:'<span>"Кольорова вставка"</span>&nbsp;одна сторона - 135 грн, дві сторони - 150 грн'},shirt32:{ru:"Взрослая футболка",ua:"Доросла футболка"},shirt33:{ru:"Одна сторона - 170 грн, две стороны - 185 грн",ua:"Одна сторона - 170 грн, дві сторони - 185 грн"},shirt34:{ru:' <span>"Цветная вставка"</span>&nbsp;Одна сторона - 190 грн, две стороны - 205 грн',ua:'<span> "Кольорова вставка"</span>&nbsp;одна сторона - 190 грн, дві сторони - 205 грн'},shirt35:{ru:"С одной надписью",ua:"З одним написом"},shirt36:{ru:"Одна сторона - 170 грн, две стороны - 185 грн",ua:"Одна сторона - 170 грн, дві сторони - 185 грн"},"color-shirt1":{ru:'Футболка с "Цветной вставкой"',ua:'Футболка з "Кольоровою вставкою"'},"color-shirt2":{ru:'Рады так-же Вам предложить футболку с "цветной вставкой". Данная продукция сугубо индивидуальна и делается для Вас на заказ. При этом на футболку после её изготовления Вы можете подобрать изображение или фотографию, которую мы в дальнейшем перенесём на неё.  Изображение проникает в структуру ткани и при этом не тускнеет. Чем не отличный подарок для себя или своих любимых, родных и друзей.',ua:'З радістю готові запропонувати Вам футболку з "кольоровою вставкою". Дана продукція суто індивідуальна і робиться для Вас на замовлення. При цьому на футболку після її виготовлення Ви можете підібрати зображення або фотографію, яку ми надалі перенесемо на неї. Зображення проникає в структуру тканини і при цьому не тьмяніє. Чим не чудовий подарунок для себе або своїх коханих, рідних і друзів.'},"color-shirt3":{ru:"Дання футболка прекрасно переносит стирку с моющими средствами.",ua:"Запропонована футболка гарно переносить прання з миючими засобами."},"color-shirt4":{ru:"Время изготовления уточняйте у продавца.",ua:"Час виготовлення уточнюйте у продавця."},"color-shirt5":{ru:"Предлагаем следующие цвета футболок(уточняйте при заказе)",ua:"Пропонуємо наступні кольори футболок (уточнюйте при замовленні)"},"shirt-ukr1":{ru:'<img src="./img/catalog/t-shirt/shirt-size.png" alt="child-shirt" class="size-item__img">',ua:'<img src="./img/catalog/t-shirt/shirt-men-ukr.png" alt="child-shirt" class="size-item__img">'},"shirt-size1":{ru:"Размеры футболок",ua:"Розміри футболок"},"shirt-size2":{ru:"Детские футболки",ua:"Дитячі футболки"},"shirt-size3":{ru:'24 размер(80-90см):<br> <span class="list-item__width">ширина- 31см</span>, <span class="list-item__height">высота- 41см</span>;',ua:'24 розмір(80-90см):<br><span class="list-item__width">ширина- 31см</span>,<span class="list-item__height">висота- 41см</span>;'},"shirt-size4":{ru:'26 размер(90-100см):<br> <span class="list-item__width">ширина- 32см</span>, <span class="list-item__height">высота- 45см</span>;',ua:'26 розмір(90-100см):<br><span class="list-item__width">ширина- 32см</span>,<span class="list-item__height">висота- 45см</span>;'},"shirt-size5":{ru:'28 размер(100-110см):<br> <span class="list-item__width">ширина- 35см</span>, <span class="list-item__height">высота- 45см</span>;',ua:'28 розмір(100-110см):<br><span class="list-item__width">ширина- 35см</span>,<span class="list-item__height">висота- 45см</span>;'},"shirt-size6":{ru:'30 размер(110-120см):<br> <span class="list-item__width">ширина- 37см</span>, <span class="list-item__height">высота- 49см</span>;',ua:'30 розмір(110-120см):<br><span class="list-item__width">ширина- 37см</span>,<span class="list-item__height">висота- 49см</span>;'},"shirt-size7":{ru:'32 размер(120-130см):<br> <span class="list-item__width">ширина- 38см</span>, <span class="list-item__height">высота- 53см</span>;',ua:'32 розмір(120-130см):<br><span class="list-item__width">ширина- 38см</span>,<span class="list-item__height">висота- 53см</span>;'},"shirt-size8":{ru:'34 размер(130-140см):<br> <span class="list-item__width">ширина- 40см</span>, <span class="list-item__height">высота- 56см</span>;',ua:'34 розмір(130-140см):<br><span class="list-item__width">ширина- 40см</span>,<span class="list-item__height">висота- 56см</span>;'},"shirt-size9":{ru:'36 размер(140-150см):<br> <span class="list-item__width">ширина- 45см</span>, <span class="list-item__height">высота- 58см</span>;',ua:'36 розмір(140-150см):<br><span class="list-item__width">ширина- 45см</span>,<span class="list-item__height">висота- 58см</span>;'},"shirt-ukr2":{ru:'<img src="./img/catalog/t-shirt/shirt-size.png" alt="child-shirt" class="size-item__img">',ua:'<img src="./img/catalog/t-shirt/shirt-men-ukr.png" alt="child-shirt" class="size-item__img">'},"for-men1":{ru:"Мужские футболки",ua:"Чоловічі футболки"},"for-men2":{ru:'42 размер(XS):<br><span class="list-item__width">ширина- 45см</span>, <span class="list-item__height">высота- 66см</span>;',ua:'42 розмір(XS):<br><span class="list-item__width">ширина- 45см</span>,<span class="list-item__height">висота- 66см</span>;'},"for-men3":{ru:'44 размер(S):<br> <span class="list-item__width">ширина- 47см</span>, <span class="list-item__height">высота- 68см</span>;',ua:'44 розмір(S):<br><span class="list-item__width">ширина- 47см</span>,<span class="list-item__height">висота- 68см</span>;'},"for-men4":{ru:'46 размер(M):<br> <span class="list-item__width">ширина- 49см</span>, <span class="list-item__height">высота- 70см</span>;',ua:'46 розмір(M):<br><span class="list-item__width">ширина- 49см</span>,<span class="list-item__height">висота- 70см</span>;'},"for-men5":{ru:'48 размер(L):<br> <span class="list-item__width">ширина- 51см</span>, <span class="list-item__height">высота- 73см</span>;',ua:'48 розмір(L):<br><span class="list-item__width">ширина- 51см</span>,<span class="list-item__height">висота- 73см</span>;'},"for-men6":{ru:'50 размер(XL):<br><span class="list-item__width">ширина- 53см</span>, <span class="list-item__height">высота- 76см</span>;',ua:'50 розмір(XL):<br><span class="list-item__width">ширина- 53см</span>,<span class="list-item__height">висота- 76см</span>;'},"for-men7":{ru:'52 размер(XXL):<br> <span class="list-item__width">ширина- 55см</span>, <span class="list-item__height">высота- 76см</span>;',ua:'52 розмір(XXL):<br><span class="list-item__width">ширина- 55см</span>,<span class="list-item__height">висота- 76см</span>;'},"for-men8":{ru:'54 размер(XXXL):<br> <span class="list-item__width">ширина- 59см</span>, <span class="list-item__height">высота- 76см</span>;',ua:'54 розмір(XXXL):<br><span class="list-item__width">ширина- 59см</span>,<span class="list-item__height">висота- 76см</span>;'},"shirt-ukr3":{ru:'<picture><source srcset="./img/catalog/t-shirt/shirt-women-size1.webp" type="image/webp" class="size-item__img"><img loading="lazy" src="./img/catalog/t-shirt/shirt-women-size.png" alt="child-shirt" class="size-item__img"></picture>',ua:'<picture><source srcset="./img/catalog/t-shirt/shirt-women-ukr.webp" type="image/webp" class="size-item__img"><img loading="lazy" src="./img/catalog/t-shirt/shirt-women-size-ukr.png" alt="child-shirt" class="size-item__img"></picture>'},"for-women1":{ru:"Женские футболки",ua:"Жіночі футболки"},"for-women2":{ru:'42 размер(XS):<br> <span class="list-item__width">ширина- 39см</span>, <span class="list-item__height">высота- 56см</span>;',ua:'42 розмір(XS):<br><span class="list-item__width">ширина- 39см</span>,<span class="list-item__height">висота- 56см</span>;'},"for-women3":{ru:'44 размер(S):<br> <span class="list-item__width">ширина- 41см</span>, <span class="list-item__height">высота- 57см</span>;',ua:'44 розмір(S):<br><span class="list-item__width">ширина- 41см</span>,<span class="list-item__height">висота- 57см</span>;'},"for-women4":{ru:'46 размер(M):<br> <span class="list-item__width">ширина- 43см</span>, <span class="list-item__height">высота- 59см</span>;',ua:'46 розмір(M):<br><span class="list-item__width">ширина- 43см</span>,<span class="list-item__height">висота- 59см</span>;'},"for-women5":{ru:'48 размер(L):<br> <span class="list-item__width">ширина- 45см</span>, <span class="list-item__height">высота- 62см</span>;',ua:'48 розмір(L):<br><span class="list-item__width">ширина- 45см</span>,<span class="list-item__height">висота- 62см</span>;'},"for-women6":{ru:'50 размер(XL):<br> <span class="list-item__width">ширина- 47см</span>, <span class="list-item__height">высота- 63см</span>;',ua:'50 розмір(XL):<br><span class="list-item__width">ширина- 47см</span>,<span class="list-item__height">висота- 63см</span>;'},"for-women7":{ru:'52 размер(XXL):<br> <span class="list-item__width">ширина- 49см</span>, <span class="list-item__height">высота- 63см</span>;',ua:'52 розмір(XXL):<br><span class="list-item__width">ширина- 49см</span>,<span class="list-item__height">висота- 63см</span>;'},"for-women8":{ru:'54 размер(XXXL):<br> <span class="list-item__width">ширина- 54см</span>, <span class="list-item__height">высота- 64см</span>;',ua:'54 розмір(XXXL):<br><span class="list-item__width">ширина- 54см</span>,<span class="list-item__height">висота- 64см</span>;'},"shirt-size__footer":{ru:"Погрешность +1см, -1см допускается.",ua:"Похибка +1см, -1см допускається."},"shirt-order1":{ru:"ОФОРМИТЬ ЗАКАЗ",ua:"OФОРМИТИ ЗАМОВЛЕННЯ"},"shirt-order2":{ru:"КАК ОФОРМИТЬ ЗАКАЗ ?",ua:"ЯК OФОРМИТИ ЗАМОВЛЕННЯ ?"},"shirt-order3":{ru:"позвонив нам по моб.тел.",ua:"зателефонувавши до нас за моб.тел"},"shirt-order4":{ru:"прислать запрос по электронной почте в произвольной форме на e-mail:",ua:"надіслати запит на електронну адресу в довільній формі на e-mail:"},"shirt-order5":{ru:"подписывайтесь на наш профиь instagram, пишите в л/c, мы обязательно свяжемся с Вами",ua:"підписуйтесь на наш профіль instagram, пишіть в о/п, ми обов'язково зв'яжемося з Вами"},"shirt-order6":{ru:"Для ускорения обратной связи укажите Ваш контактный номер телефона, это значительно сократит время решения поставленной задачи.",ua:"Для прискорення зворотного зв'язку вкажіть Ваш контактний номер телефону, це значно скоротить час вирішення поставленого завдання."},"shirt-footer":{ru:'Главная страница&nbsp;<img src="./img/header/logo.png" alt="logo-main" class="link-main__logo">',ua:'Головна сторінка&nbsp;<img src="./img/header/logo.png" alt="logo-main" class="link-main__logo">'},"cups-page-link":{ru:"Каталог чашек",ua:"Каталог чашок"},technical1:{ru:"Технические требования для печати на чашках",ua:"Технічні вимоги для друку на чашках"},technical2:{ru:"Электронные носители:",ua:"Електронні носії:"},technical3:{ru:'<i class="fas fa-compact-disc"></i>&nbsp;<strong>USB</strong> накопители;',ua:'<i class="fas fa-compact-disc"></i>&nbsp;<strong>USB</strong> накопичувачі;'},technical4:{ru:'<i class="fas fa-compact-disc"></i>&nbsp;отправка по <strong>e-mail</strong>;',ua:'<i class="fas fa-compact-disc"></i>&nbsp;відправка по <strong>e-mail</strong>;'},technical5:{ru:'<i class="fas fa-compact-disc"></i>&nbsp;отправка на <strong>файлообменник</strong>;',ua:'<i class="fas fa-compact-disc"></i>&nbsp;відправка на <strong>файлообмінник</strong>;'},technical6:{ru:'<i class="fas fa-compact-disc"></i>&nbsp;<strong>телефоны</strong> (по возможности заранее самостоятельно уточняйте, в какой папке находится\n            изображение и берите с собой USB кабель);',ua:'<i class="fas fa-compact-disc"></i>&nbsp;<strong>телефони</strong> (по можливості заздалегідь самостійно уточнюйте, в якій папці знаходиться\n            зображення і беріть з собою USB кабель);'},technical7:{ru:"Требования к печати:",ua:"Вимоги до друку:"},technical8:{ru:'<i class="fas fa-hand-point-right"></i>&nbsp;\n        принимаемые форматы файлов: Adobe Illustrator (*.ai, *.eps), Adobe Photoshop (*.psd, *.tiff),\n        CorelDRAW Graphic (*.cdr), Adobe PDF (*.pdf), фотография или изображение (*.jpeg);',ua:'<i class="fas fa-hand-point-right"></i>&nbsp;\n        прийнятні формати файлів: Adobe Illustrator (*.ai, *.eps), Adobe Photoshop (*.psd, *.tiff),\n        CorelDRAW Graphic (*.cdr), Adobe PDF (*.pdf), фотографія чи зображення (*.jpeg);'},technical9:{ru:'<i class="fas fa-hand-point-right"></i>&nbsp;\n        растровые изображения должны быть в формате RGB (при этом стоит учитывать, некоторые цвета невозможно воспроизвести в печати, например, кислотные);',ua:'<i class="fas fa-hand-point-right"></i>&nbsp;\n        растрові зображення повинні бути в форматі RGB (при цьому варто враховувати, деякі кольори неможливо відтворити у пресі, наприклад, кислотні);'},technical10:{ru:'<i class="fas fa-hand-point-right"></i>&nbsp; все слои слиты в один для TIFF и PSD;',ua:'<i class="fas fa-hand-point-right"></i>&nbsp; всі шари злиті в один для TIFF та PSD;'},technical11:{ru:'<i class="fas fa-hand-point-right"></i>&nbsp; все шрифты нужно переводить в кривые для EPS, AI, CDR;',ua:'<i class="fas fa-hand-point-right"></i>&nbsp; всі шрифти потрібно переводити в криві для EPS, AI, CDR;'},technical12:{ru:'<i class="fas fa-hand-point-right"></i>&nbsp; растровые иллюстрации в необходимом размере должны иметь разрешение 300 dpi;',ua:'<i class="fas fa-hand-point-right"></i>&nbsp; растрові ілюстрації в необхідному розмірі повинні мати дозвіл 300 dpi;'},technical13:{ru:'<i class="fas fa-hand-point-right"></i>&nbsp;\n        для получения глубокого черного цвета заливка объекта должна быть RGB - 0/0/0;',ua:'<i class="fas fa-hand-point-right"></i>&nbsp;\n        для отримання глибокого чорного кольору заливка об\'єкта повинна бути RGB - 0/0/0;'},technical14:{ru:'<i class="fas fa-images"></i>&nbsp; размер печатного поля 200х95 мм;',ua:'<i class="fas fa-images"></i>&nbsp; розмір друкованого поля 200х95 мм;'},technical15:{ru:'<i class="fas fa-images"></i>&nbsp;\n        если изображение должно быть посередине половины чашки, его ширина не должна быть\n        больше 80 мм. (если держать правой рукой - чтобы изображение находилось перед лицом или со\n        стороны зрителя целиком, без поворота);',ua:'<i class="fas fa-images"></i>&nbsp;\n        якщо зображення має бути посередині половини чашки, його ширина не повинна бути\n        більше 80 мм. (Якщо тримати правою рукою - щоб зображення знаходилося перед обличчям або з\n        боку глядача цілком, без повороту);'},technical16:{ru:'<i class="fas fa-images"></i>&nbsp;\n        цветовая палитра RGB для всех объектов, в том числе для растровых объектов вставленных в\n        векторные файлы;',ua:"<i class=\"fas fa-images\"></i>&nbsp;\n        кольорова палітра RGB для всіх об'єктів, в тому числі для растрових об'єктів вставлених в\n        векторні файли;"},technical17:{ru:"Полутона ниже 9% и выше 91% при печати не видны!!!",ua:"Півтони нижче 9% і вище 91% при пресі не видно!!!"},technical18:{ru:"<strong>ВНИМАНИЕ!!!</strong> Цветопередача при сублимационной печати может отличатся от Вашего макета. К сожалению влиять на это без изготовления пробной чашки НЕ ВОЗМОЖНО! Если Вам нужен четкий цвет, это можно добится только путем подбора/изменения макета после изготовления первого образца. Чтобы получить удовлетворительный результат иногда необходимо сделать несколько проб. Все эти пробы будут считаться за счет Заказчика по цене чашек, которые в заказе.",ua:"<strong> УВАГА !!! </strong> Передача кольору при сублімації може відрізнятись від Вашого макета. На жаль впливати на це без виготовлення пробної чашки НЕ МОЖЛИВО! Якщо Вам потрібен чіткий колір, це можна добится тільки шляхом підбору/зміни макета після виготовлення першого зразка. Щоб отримати задовільний результат іноді необхідно зробити кілька проб. Всі ці проби будуть вважатися за рахунок Замовника за ціною чашок, які в замовленні."}};